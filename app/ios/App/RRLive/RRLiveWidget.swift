// The crawl on the lock screen and in the Dynamic Island: where the crawl's at and the time left.
// The countdown and its bar run on their own; the app only sends a change when the bar or the text changes.
import WidgetKit
import SwiftUI
import ActivityKit

private let amber = Color(red: 0.961, green: 0.722, blue: 0.239)      // #F5B83D, brand amber
private let gold = Color(red: 0.659, green: 0.439, blue: 0.031)       // #A87008, amber for text on cream
private let cream = Color(red: 0.984, green: 0.969, blue: 0.941)      // #FBF7F0, the app's light background
private let ink = Color(red: 0.043, green: 0.051, blue: 0.071)        // #0B0D12, the app's dark background
private let textLight = Color(red: 0.114, green: 0.094, blue: 0.075)  // #1D1813
private let mutedLight = Color(red: 0.42, green: 0.384, blue: 0.341)  // #6B6257

@main
struct RRLiveBundle: WidgetBundle {
    var body: some Widget { RRLiveWidget() }
}

struct RRLiveWidget: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: RRLiveAttributes.self) { ctx in
            LockView(s: ctx.state)
        } dynamicIsland: { ctx in
            let s = ctx.state
            return DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Image("Logo").resizable().scaledToFit().frame(height: 26).padding(.leading, 4)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Clock(s: s, size: 22).padding(.trailing, 4)
                }
                DynamicIslandExpandedRegion(.center) {
                    Text(s.title).font(.headline).lineLimit(1).foregroundColor(.white)
                }
                DynamicIslandExpandedRegion(.bottom) {
                    VStack(alignment: .leading, spacing: 6) {
                        Text(s.text).font(.subheadline).foregroundColor(.white.opacity(0.7)).lineLimit(1)
                        Bar(s: s)
                    }
                }
            } compactLeading: {
                Image("Logo").resizable().scaledToFit().frame(height: 18)
            } compactTrailing: {
                Clock(s: s, size: 14).frame(maxWidth: 52)
            } minimal: {
                Image("Logo").resizable().scaledToFit().frame(height: 18)
            }
            .keylineTint(amber)
        }
    }
}

// Time left (Rush Hour), time at the bar (R&R), or nothing while the clock's held for the walk.
// A timer text takes all the width it's given, so it gets a fixed width: room for m:ss, or h:mm:ss when it can pass an hour.
struct Clock: View {
    let s: RRLiveAttributes.ContentState
    let size: CGFloat
    var color: Color = amber
    private func w(_ long: Bool) -> CGFloat { size * (long ? 3.7 : 2.6) }
    var body: some View {
        if let e = s.endsAt, e > Date() {
            Text(timerInterval: Date()...e, countsDown: true)
                .font(.system(size: size, weight: .heavy, design: .rounded)).monospacedDigit()
                .foregroundColor(color).multilineTextAlignment(.trailing).lineLimit(1)
                .frame(width: w(e.timeIntervalSinceNow >= 3600), alignment: .trailing)
        } else if let since = s.since {
            Text(since, style: .timer)
                .font(.system(size: size, weight: .heavy, design: .rounded)).monospacedDigit()
                .foregroundColor(color).multilineTextAlignment(.trailing).lineLimit(1)
                .frame(width: w(true), alignment: .trailing)
        } else {
            EmptyView()
        }
    }
}

struct Bar: View {
    let s: RRLiveAttributes.ContentState
    var body: some View {
        if let e = s.endsAt, let st = s.startAt, e > st, e > Date() {
            ProgressView(timerInterval: st...e, countsDown: true, label: { EmptyView() }, currentValueLabel: { EmptyView() })
                .tint(amber)
        }
    }
}

// Lock screen: matches the app, cream in light mode and dark in dark mode, with the logo on the left.
// Text sizes are capped so very large text settings don't crowd out the rooftop's name.
struct LockView: View {
    let s: RRLiveAttributes.ContentState
    @Environment(\.colorScheme) private var scheme
    var body: some View {
        let dark = scheme == .dark
        VStack(alignment: .leading, spacing: 10) {
            HStack(alignment: .center, spacing: 12) {
                Image("Logo").resizable().scaledToFit().frame(width: 30, height: 38)
                VStack(alignment: .leading, spacing: 2) {
                    Text(s.title).font(.headline).foregroundColor(dark ? .white : textLight).lineLimit(1).minimumScaleFactor(0.8)
                    Text(s.text).font(.subheadline).foregroundColor(dark ? .white.opacity(0.7) : mutedLight).lineLimit(1).minimumScaleFactor(0.8)
                }
                Spacer(minLength: 6)
                Clock(s: s, size: 24, color: dark ? amber : gold)
            }
            Bar(s: s)
        }
        .padding(16)
        .dynamicTypeSize(...DynamicTypeSize.large)
        .activityBackgroundTint(dark ? ink : cream)
        .activitySystemActionForegroundColor(dark ? amber : gold)
    }
}
