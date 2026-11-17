// The crawl on the lock screen and in the Dynamic Island: where the crawl's at and the time left.
// The countdown and its bar run on their own; the app only sends a change when the bar or the text changes.
import WidgetKit
import SwiftUI
import ActivityKit

private let amber = Color(red: 0.961, green: 0.722, blue: 0.239)      // #F5B83D
private let ink = Color(red: 0.11, green: 0.086, blue: 0.047)         // the app's dark background

@main
struct RRLiveBundle: WidgetBundle {
    var body: some Widget { RRLiveWidget() }
}

struct RRLiveWidget: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: RRLiveAttributes.self) { ctx in
            LockView(s: ctx.state)
                .activityBackgroundTint(ink)
                .activitySystemActionForegroundColor(amber)
        } dynamicIsland: { ctx in
            let s = ctx.state
            return DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Image(systemName: "wineglass.fill").foregroundColor(amber).font(.title3).padding(.leading, 4)
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
                Image(systemName: "wineglass.fill").foregroundColor(amber)
            } compactTrailing: {
                Clock(s: s, size: 14).frame(maxWidth: 52)
            } minimal: {
                Image(systemName: "wineglass.fill").foregroundColor(amber)
            }
            .keylineTint(amber)
        }
    }
}

// Time left (Rush Hour), time at the bar (R&R), or nothing while the clock's held for the walk
struct Clock: View {
    let s: RRLiveAttributes.ContentState
    let size: CGFloat
    var body: some View {
        if let e = s.endsAt, e > Date() {
            Text(timerInterval: Date()...e, countsDown: true)
                .font(.system(size: size, weight: .heavy, design: .rounded)).monospacedDigit()
                .foregroundColor(amber).multilineTextAlignment(.trailing)
        } else if let since = s.since {
            Text(since, style: .timer)
                .font(.system(size: size, weight: .heavy, design: .rounded)).monospacedDigit()
                .foregroundColor(amber).multilineTextAlignment(.trailing)
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

struct LockView: View {
    let s: RRLiveAttributes.ContentState
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(alignment: .center, spacing: 12) {
                VStack(alignment: .leading, spacing: 3) {
                    Text(s.title).font(.headline).foregroundColor(.white).lineLimit(1)
                    Text(s.text).font(.subheadline).foregroundColor(.white.opacity(0.7)).lineLimit(1)
                }
                Spacer(minLength: 8)
                Clock(s: s, size: 30)
            }
            Bar(s: s)
        }
        .padding(16)
    }
}
