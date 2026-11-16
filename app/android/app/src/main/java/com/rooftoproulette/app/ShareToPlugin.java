package com.rooftoproulette.app;

import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.provider.Telephony;
import androidx.core.content.FileProvider;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.File;

/**
 * The share row on the crawl card: sends the card straight to one app (Instagram Stories, WhatsApp, Messages)
 * instead of going through the phone's share sheet. available() says which of those apps are on the phone.
 */
@CapacitorPlugin(name = "ShareTo")
public class ShareToPlugin extends Plugin {

    static final String IG = "com.instagram.android";
    static final String IG_STORY = "com.instagram.share.handleractivity.StoryShareHandlerActivity";
    static final String[] WA = {"com.whatsapp", "com.whatsapp.w4b"};

    private boolean has(String pkg) {
        if (pkg == null) return false;
        try { getContext().getPackageManager().getPackageInfo(pkg, 0); return true; }
        catch (PackageManager.NameNotFoundException e) { return false; }
    }

    private String whatsapp() { for (String p : WA) if (has(p)) return p; return null; }

    private String sms() {
        try { return Telephony.Sms.getDefaultSmsPackage(getContext()); } catch (Exception e) { return null; }
    }

    @PluginMethod
    public void available(PluginCall call) {
        JSObject o = new JSObject();
        o.put("stories", has(IG));
        o.put("whatsapp", whatsapp() != null);
        o.put("messages", sms() != null);
        call.resolve(o);
    }

    /** to: "stories" | "whatsapp" | "messages"; path: a file:// uri in the app's cache (from Filesystem); text: optional */
    @PluginMethod
    public void share(PluginCall call) {
        String to = call.getString("to", ""), path = call.getString("path"), text = call.getString("text");
        String type = call.getString("type", "image/png");
        Context ctx = getContext();
        Uri uri = null;
        if (path != null) {
            try {
                File f = new File(Uri.parse(path).getPath());
                uri = FileProvider.getUriForFile(ctx, ctx.getPackageName() + ".fileprovider", f);
            } catch (Exception e) { call.reject("file", e); return; }
        }
        Intent i = new Intent(Intent.ACTION_SEND);
        i.setType(uri != null ? type : "text/plain");
        if (uri != null) { i.putExtra(Intent.EXTRA_STREAM, uri); i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION); }
        if (text != null && !to.equals("stories")) i.putExtra(Intent.EXTRA_TEXT, text);
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            if (to.equals("stories")) {
                if (uri != null) ctx.grantUriPermission(IG, uri, Intent.FLAG_GRANT_READ_URI_PERMISSION);
                i.setComponent(new ComponentName(IG, IG_STORY));
                try { ctx.startActivity(i); }
                catch (ActivityNotFoundException e) { i.setComponent(null); i.setPackage(IG); ctx.startActivity(i); }
            } else if (to.equals("whatsapp")) {
                String p = whatsapp(); if (p == null) { call.reject("not installed"); return; }
                i.setPackage(p); ctx.startActivity(i);
            } else if (to.equals("messages")) {
                String p = sms(); if (p == null) { call.reject("not installed"); return; }
                i.setPackage(p); ctx.startActivity(i);
            } else { call.reject("unknown target"); return; }
            call.resolve();
        } catch (Exception e) { call.reject("couldn't open", e); }
    }
}
