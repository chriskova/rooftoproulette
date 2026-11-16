package com.rooftoproulette.app;

import android.os.CancellationSignal;
import androidx.core.content.ContextCompat;
import androidx.credentials.ClearCredentialStateRequest;
import androidx.credentials.Credential;
import androidx.credentials.CredentialManager;
import androidx.credentials.CredentialManagerCallback;
import androidx.credentials.CustomCredential;
import androidx.credentials.GetCredentialRequest;
import androidx.credentials.GetCredentialResponse;
import androidx.credentials.exceptions.ClearCredentialException;
import androidx.credentials.exceptions.GetCredentialException;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.libraries.identity.googleid.GetSignInWithGoogleOption;
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential;

/**
 * "Continue with Google" for the optional account. Google blocks its sign-in page inside app web views,
 * so the app asks Android's Credential Manager for a Google ID token and hands it to Firebase in the page.
 * webClientId is the Web client ID from the Firebase project (Authentication > Google).
 */
@CapacitorPlugin(name = "GoogleAuth")
public class GoogleAuthPlugin extends Plugin {

    @PluginMethod
    public void signIn(PluginCall call) {
        String clientId = call.getString("webClientId");
        if (clientId == null || clientId.isEmpty()) { call.reject("no webClientId"); return; }
        GetSignInWithGoogleOption opt = new GetSignInWithGoogleOption.Builder(clientId).build();
        GetCredentialRequest req = new GetCredentialRequest.Builder().addCredentialOption(opt).build();
        CredentialManager cm = CredentialManager.create(getContext());
        cm.getCredentialAsync(getActivity(), req, new CancellationSignal(), ContextCompat.getMainExecutor(getContext()),
            new CredentialManagerCallback<GetCredentialResponse, GetCredentialException>() {
                @Override
                public void onResult(GetCredentialResponse r) {
                    Credential c = r.getCredential();
                    if (c instanceof CustomCredential && GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL.equals(c.getType())) {
                        try {
                            GoogleIdTokenCredential g = GoogleIdTokenCredential.createFrom(c.getData());
                            JSObject o = new JSObject();
                            o.put("idToken", g.getIdToken());
                            o.put("name", g.getDisplayName());
                            o.put("photo", g.getProfilePictureUri() != null ? g.getProfilePictureUri().toString() : null);
                            call.resolve(o);
                        } catch (Exception e) { call.reject("bad credential", e); }
                    } else call.reject("unexpected credential");
                }
                @Override
                public void onError(GetCredentialException e) { call.reject(String.valueOf(e.getMessage()), e.getClass().getSimpleName()); }
            });
    }

    @PluginMethod
    public void signOut(PluginCall call) {
        CredentialManager cm = CredentialManager.create(getContext());
        cm.clearCredentialStateAsync(new ClearCredentialStateRequest(), new CancellationSignal(), ContextCompat.getMainExecutor(getContext()),
            new CredentialManagerCallback<Void, ClearCredentialException>() {
                @Override public void onResult(Void v) { call.resolve(); }
                @Override public void onError(ClearCredentialException e) { call.resolve(); }
            });
    }
}
