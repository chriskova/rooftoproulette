// iPhone side of the CrawlNotify plugin: the same calls Android uses for its ongoing notification,
// shown here as a Live Activity (lock screen and Dynamic Island).
import Foundation
import UIKit
import Capacitor
#if canImport(ActivityKit)
import ActivityKit
#endif

@objc(CrawlNotifyPlugin)
public class CrawlNotifyPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CrawlNotifyPlugin"
    public let jsName = "CrawlNotify"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "update", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "clear", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "status", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openSettings", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setTheme", returnType: CAPPluginReturnPromise)
    ]

    // ms since 1970 from JS -> Date
    private func date(_ call: CAPPluginCall, _ k: String) -> Date? {
        guard let v = call.getDouble(k), v > 0 else { return nil }
        return Date(timeIntervalSince1970: v / 1000)
    }

    @objc func update(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            let follower = call.getBool("follower") ?? false
            let st = RRLiveAttributes.ContentState(
                title: call.getString("title") ?? "Rooftop Roulette",
                text: call.getString("text") ?? "",
                startAt: date(call, "startAt"), endsAt: date(call, "endsAt"), since: date(call, "since"),
                follower: follower)
            let kind = follower ? "follower" : "host"
            let content = ActivityContent(state: st, staleDate: nil)
            Task {
                // one box at a time: keep the one for this kind of crawl, end any other
                var mine: Activity<RRLiveAttributes>? = nil
                for a in Activity<RRLiveAttributes>.activities {
                    if mine == nil && a.attributes.kind == kind && a.activityState == .active { mine = a }
                    else { await a.end(nil, dismissalPolicy: .immediate) }
                }
                if let a = mine {
                    await a.update(content)
                } else if ActivityAuthorizationInfo().areActivitiesEnabled {
                    // only works with the app on screen; the next update tries again if it's in the background
                    _ = try? Activity.request(attributes: RRLiveAttributes(kind: kind), content: content, pushType: nil)
                }
                call.resolve()
            }
            return
        }
        #endif
        call.resolve()
    }

    @objc func clear(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            Task {
                for a in Activity<RRLiveAttributes>.activities { await a.end(nil, dismissalPolicy: .immediate) }
                call.resolve()
            }
            return
        }
        #endif
        call.resolve()
    }

    @objc func status(_ call: CAPPluginCall) {
        var on = false
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) { on = ActivityAuthorizationInfo().areActivitiesEnabled }
        #endif
        call.resolve(["enabled": on, "app": on, "channel": true, "supported": ProcessInfo.processInfo.isOperatingSystemAtLeast(OperatingSystemVersion(majorVersion: 16, minorVersion: 2, patchVersion: 0))])
    }

    @objc func openSettings(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if let u = URL(string: UIApplication.openSettingsURLString) { UIApplication.shared.open(u) }
            call.resolve()
        }
    }

    @objc func setTheme(_ call: CAPPluginCall) { call.resolve() }
}
