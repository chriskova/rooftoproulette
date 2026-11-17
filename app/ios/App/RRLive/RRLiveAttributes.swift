// Shared by the app and the Live Activity extension: what a crawl's lock-screen box shows.
import Foundation
#if canImport(ActivityKit)
import ActivityKit

@available(iOS 16.1, *)
public struct RRLiveAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        public var title: String          // "Heading to The Rook", "Chris's crawl · at The Rook"
        public var text: String           // "1h crawl · 1.2 km away", "Clock starts at your first bar"
        public var startAt: Date?         // Rush Hour: the countdown runs from startAt to endsAt
        public var endsAt: Date?
        public var since: Date?           // R&R: time at the bar, counting up
        public var follower: Bool
    }
    public var kind: String               // "host" or "follower"
}
#endif
