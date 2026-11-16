# Link site (rooftoproulette.com)

These files are the whole of rooftoproulette.com. They live in their own repo (chriskova/rooftoproulette-links) with GitHub Pages and the custom domain on. The app itself stays at chriskova.github.io/rooftoproulette, so nobody's saved crawls move (browser storage belongs to the site's address).

- `crawl/` is where crawl links point (`https://rooftoproulette.com/crawl/#crawl=...`). With the app installed, tapping one opens the app. Without it, the page sends you on to the app's website with the crawl.
- `.well-known/assetlinks.json` lets Android open those links in the app. It lists the test build's key; add the Play App Signing key's SHA-256 (Play Console → Test and release → App integrity) so Play installs work too.
- `.well-known/apple-app-site-association` does the same for iPhone. Replace TEAMID with the Apple Team ID.
