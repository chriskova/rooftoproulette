import UIKit
import Capacitor
import AuthenticationServices
import CryptoKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = RRBridgeViewController()
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}

// The app's own native plugins (iPhone). Android's live in android/.../com/rooftoproulette/app.
class RRBridgeViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(RRSignInPlugin())
    }
}

// Sign in with Apple and Google sign-in on iPhone, using only Apple's frameworks.
// Both hand back an ID token; the web app turns it into a Firebase sign-in.
@objc(RRSignInPlugin)
public class RRSignInPlugin: CAPPlugin, CAPBridgedPlugin, ASAuthorizationControllerDelegate,
    ASAuthorizationControllerPresentationContextProviding, ASWebAuthenticationPresentationContextProviding {
    public let identifier = "RRSignInPlugin"
    public let jsName = "RRSignIn"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "apple", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "google", returnType: CAPPluginReturnPromise)
    ]

    private var appleCall: CAPPluginCall?
    private var webSession: ASWebAuthenticationSession?

    private func sha256(_ s: String) -> String {
        SHA256.hash(data: Data(s.utf8)).map { String(format: "%02x", $0) }.joined()
    }

    private func randomString(_ n: Int = 32) -> String {
        let chars = Array("0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._")
        return String((0..<n).map { _ in chars[Int.random(in: 0..<chars.count)] })
    }

    private var anchor: ASPresentationAnchor {
        bridge?.viewController?.view.window ?? ASPresentationAnchor()
    }

    public func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor { anchor }
    public func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor { anchor }

    // MARK: Sign in with Apple. JS passes a raw nonce; Apple gets its SHA-256 and Firebase checks it against the raw one.
    @objc func apple(_ call: CAPPluginCall) {
        guard let nonce = call.getString("nonce") else { call.reject("missing nonce"); return }
        DispatchQueue.main.async {
            let req = ASAuthorizationAppleIDProvider().createRequest()
            req.requestedScopes = [.fullName, .email]
            req.nonce = self.sha256(nonce)
            self.appleCall = call
            let c = ASAuthorizationController(authorizationRequests: [req])
            c.delegate = self
            c.presentationContextProvider = self
            c.performRequests()
        }
    }

    public func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
        guard let call = appleCall else { return }
        appleCall = nil
        guard let cred = authorization.credential as? ASAuthorizationAppleIDCredential,
              let tokenData = cred.identityToken, let token = String(data: tokenData, encoding: .utf8) else {
            call.reject("no identity token"); return
        }
        var out: [String: Any] = ["idToken": token, "user": cred.user]
        if let code = cred.authorizationCode, let s = String(data: code, encoding: .utf8) { out["authorizationCode"] = s }
        if let n = cred.fullName {
            if let g = n.givenName { out["givenName"] = g }
            if let f = n.familyName { out["familyName"] = f }
        }
        if let e = cred.email { out["email"] = e }
        call.resolve(out)
    }

    public func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        guard let call = appleCall else { return }
        appleCall = nil
        if let e = error as? ASAuthorizationError, e.code == .canceled { call.reject("canceled", "cancel"); return }
        call.reject(error.localizedDescription)
    }

    // MARK: Google sign-in: the standard OAuth flow for iOS apps (authorization code + PKCE) in the system sign-in sheet.
    @objc func google(_ call: CAPPluginCall) {
        guard let clientId = call.getString("clientId") else { call.reject("missing clientId"); return }
        let rawClient = clientId.replacingOccurrences(of: ".apps.googleusercontent.com", with: "")
        let scheme = "com.googleusercontent.apps." + rawClient
        let redirect = scheme + ":/oauth2redirect"
        let verifier = randomString(64)
        let challenge = Data(SHA256.hash(data: Data(verifier.utf8))).base64EncodedString()
            .replacingOccurrences(of: "+", with: "-").replacingOccurrences(of: "/", with: "_").replacingOccurrences(of: "=", with: "")
        var comps = URLComponents(string: "https://accounts.google.com/o/oauth2/v2/auth")!
        comps.queryItems = [
            URLQueryItem(name: "client_id", value: clientId),
            URLQueryItem(name: "redirect_uri", value: redirect),
            URLQueryItem(name: "response_type", value: "code"),
            URLQueryItem(name: "scope", value: "openid email profile"),
            URLQueryItem(name: "code_challenge", value: challenge),
            URLQueryItem(name: "code_challenge_method", value: "S256"),
            URLQueryItem(name: "prompt", value: "select_account")
        ]
        DispatchQueue.main.async {
            let session = ASWebAuthenticationSession(url: comps.url!, callbackURLScheme: scheme) { url, error in
                self.webSession = nil
                if let e = error as? ASWebAuthenticationSessionError, e.code == .canceledLogin { call.reject("canceled", "cancel"); return }
                if let error = error { call.reject(error.localizedDescription); return }
                guard let url = url, let code = URLComponents(url: url, resolvingAgainstBaseURL: false)?
                        .queryItems?.first(where: { $0.name == "code" })?.value else { call.reject("no code"); return }
                var req = URLRequest(url: URL(string: "https://oauth2.googleapis.com/token")!)
                req.httpMethod = "POST"
                req.setValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")
                var body = URLComponents()
                body.queryItems = [
                    URLQueryItem(name: "code", value: code),
                    URLQueryItem(name: "client_id", value: clientId),
                    URLQueryItem(name: "redirect_uri", value: redirect),
                    URLQueryItem(name: "grant_type", value: "authorization_code"),
                    URLQueryItem(name: "code_verifier", value: verifier)
                ]
                req.httpBody = body.percentEncodedQuery?.data(using: .utf8)
                URLSession.shared.dataTask(with: req) { data, _, err in
                    if let err = err { call.reject(err.localizedDescription); return }
                    guard let data = data, let j = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                          let idToken = j["id_token"] as? String else {
                        call.reject("token exchange failed: " + (data.flatMap { String(data: $0, encoding: .utf8) } ?? "")); return
                    }
                    call.resolve(["idToken": idToken, "accessToken": j["access_token"] as? String ?? ""])
                }.resume()
            }
            session.presentationContextProvider = self
            session.prefersEphemeralWebBrowserSession = false
            self.webSession = session
            if !session.start() { self.webSession = nil; call.reject("couldn't open Google sign-in") }
        }
    }
}
