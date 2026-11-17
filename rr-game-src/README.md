# Rooftop Roulette: source

The game lives at `/play/` (`play/index.html`) and the website at the root (`index.html`, built from `site/index.html`). Both, plus `manifest.webmanifest` and `sw.js`, are generated from this folder. Don't edit them by hand.

The game page loads shared files from the root (`../rooftop-app.js`, `../venues.json`, `../sw.js` and so on) through `window.RR_ROOT` (`"../"`), set at the top of `index.template.html`.

## Files

- `index.template.html` contains the page markup and CSS. Edit `app.template.js` for app behaviour. The build injects venues and version information into `rooftop-app.js`.
- `data/config.json` holds the public browser settings (Google Maps browser key, PostHog key). The build writes them to `../browser-config.js`, which loads before `rooftop-app.js`. The Maps browser key is restricted to the site's address and APIs in Google Cloud, so it's fine for it to be public. `googleMapsAppKey` ("Rooftop Roulette app key" in Google Cloud) is used only inside the store apps, which carry the game inside them: it's limited to the Maps JavaScript, Maps Static and Places (New) APIs, with no address restriction because iPhones send none.
- `data/venues.json` holds the bars (Sydney, Melbourne, Brisbane, Perth and the Gold Coast).
- `data/manifest.webmanifest` is the PWA manifest.
- `build.py` writes `../play/index.html`, `../rooftop-app.js`, `../browser-config.js`, `../manifest.webmanifest`, `../sw.js` and `../.nojekyll`. It also inlines Leaflet and the main fonts.
- `tests/` holds Playwright checks (see below).

## Updating bars without an app release

`build.py` also writes `venues.json` to the repo root with a version stamp. The app (web and native) checks it on launch and whenever it's reopened, and swaps in a newer list on the spot. To fix hours, add a bar or close one: edit `data/venues.json`, run the build, and push. Phones pick it up the next time the app opens, with no store update. Reports from "Wrong hours or info?" on each bar card arrive as emails to hello@rooftoproulette.com.

## Crawl links

Sharing a card or clip also sends a line and a link. The whole crawl (bars, times, name, jackpot) is packed into the link after `#crawl=`, so no server is involved. Opening it shows the crawl's summary with **Add to My Tab** and **Save card**. The app lives at https://rooftoproulette.com (GitHub Pages with the custom domain in `CNAME`; the old chriskova.github.io address forwards there). Crawl links are `rooftoproulette.com/crawl/#crawl=...` and live-crawl invites `rooftoproulette.com/live/#live=...`. Both pages just hand over to the game at `/play/`. With the app installed, Android App Links and iOS Universal Links open them straight in the app, verified by the files in `.well-known/` at the repo root: `assetlinks.json` lists the test build's key and the Play App Signing key, `apple-app-site-association` the Apple Team ID.

## Analytics and crash reports

The app sends anonymous usage events and crash reports to PostHog: a random install ID, the app version and platform, and what happened (`app_open`, `crawl_start`, `spin`-level events like `jackpot` and `arrive`, `crawl_end` with bar count and minutes, `share_open`/`share_sent`, `camera_open`, `clip_recorded`, `report_change`, `backup`, and `$exception` for errors). It never sends names, coordinates, photos or clips, and sends nothing in test mode. It's off until a project API key is set in `data/config.json` (`posthogKey`, plus `posthogHost`: `https://us.i.posthog.com` or `https://eu.i.posthog.com`). Set up: EU Cloud, project 331226.

The app reads its browser configuration from `browser-config.js`, which the build generates from `data/config.json`.

## Build and release

1. Edit `app.template.js`, `index.template.html` (or `data/venues.json`).
2. Bump the cache version in `build.py` (`const CACHE="rr-app-vNN-N"`) so phones pick up the new version.
3. Run `python3 rr-game-src/build.py` from the repo root.
4. Commit and push to `main`. GitHub Pages deploys in about a minute.

## Tests

They need Node with `playwright` and Chromium. Run them from `rr-game-src/tests/` after a build.

- `node regression-summary.js $(realpath ../../index.html)` checks the summary and share flow. It should print `[]` (no page errors) at the end.
- `node sim-record.js $(realpath ../../index.html) <mode>` films a spin in record mode with a fake camera. Frames and the clip are saved to `out/`.
  - Modes: `plain`, `wild`, `pick3`, `jp-call`, `jp-freeze`, `jp-spins`, `jp-short`, `jp-dealer`.
  - Check the clip with `ffprobe` (it should be 1080x1920, a plain MP4 and the right length).

Add `?test` to the URL for test mode: no real GPS, tap the map to fake your location, and nothing is saved to History. Tests set the clock to 7pm so bars are open.

## Light and dark

The app is light (warm cream) by default and switches to the dark look when the phone is in dark mode. The colours are CSS variables at the top of `index.template.html`: `:root` holds the light set, the `prefers-color-scheme:dark` block holds the dark one. Things that always sit on a photo, the camera, the jackpot card or the share view use the dark set whatever the phone does (the selector list just after). Use `--amber-text` for small amber text and `--amber-display` for big display text, so it stays readable on cream; `--amber` is for fills. Share cards are always dark. On Android, `res/values/theme_colors.xml` and `res/values-night/` set the launch screen and bar colours, and `MainActivity` updates the bars if the phone switches while the app is open.

`node theme-tour.js $(realpath ../../index.html) light` (or `dark`) and `theme-tour2.js` screenshot the main screens into `out/` for checking both looks.

## Native app (app/)

`app/` wraps the game in Capacitor (app ID `com.rooftoproulette.app`) for Android and iOS. **Every build carries the game inside the app**, the way the stores expect: it opens instantly, works on a bad connection, and never depends on the website's address. Never set `server.url` in `capacitor.config.json`; `sync-web.js` refuses to build if it is, and the Play Store build checks the bundle before publishing.

- `node app/sync-web.js` copies the built game into `app/www` (same layout as the site: the game at `play/`, shared files beside it); `npm run sync` (in `app/`) also runs `cap sync`.
- Inside the app, `BUNDLED` (top of `app.template.js`) is true: bar lists still update from `https://rooftoproulette.com/venues.json`, the Settings pages load from the site, there's no service worker, and Google Maps uses `googleMapsAppKey`.
- Game changes reach phones through a new store build: the test APK (`android-test` release) and TestFlight build on every push that changes the game or `app/`; the Play Store build is the "Android Play Store build" workflow, uploaded to closed testing. Bar list changes still need no build (see above).
- `python3 app/make-icons.py` makes the app icons and splash screens from `icons/icon-512.png` and `icons/maskable-512.png`.

## Website and early access (site/index.html)

`rooftoproulette.com` is the website: for now an early-access signup, swapped for the launch site (store buttons) after launch. Anything that should open the game goes on to `/play/` from there: older app builds that loaded the live site, an installed web app, `#crawl=`/`#live=` links, `?test` and `?fakecloud=`.

Signups go into the Firestore `waitlist` collection over the REST API, no sign-in needed: email, phone (`iphone`/`android`) and `src` (`?from=` or the referring site). The document id is a hash of the email, so signing up twice doesn't add a second entry. The rules in `firebase/firestore.rules` only allow adding a well-formed entry, never reading it. Read the list in the Firebase console (Firestore > Data > waitlist). On the free Spark plan a flood of signups stops at the daily write cap rather than billing.

## Site pages (site/)

`site/privacy.html`, `site/terms.html` and `site/support.html` are the pages Settings links to. `build.py` copies them to the repo root next to the app. The app finds them through the `SITE` constant in `index.template.html`: change that one line when the pages move to rooftoproulette.com.

## Accounts and live crawls (cloud.template.js)

Optional Google sign-in backs up My Tab and records who you crawl with. Live crawls: Invite to follow (crawl menu) sends a link; followers see the clock, the bar and where's next live; one spinner, who can give the spin away; a follower can take over if the spinner's phone can't be reached for 5 minutes; when it ends the crawl lands on every follower's tab.

- Backend: Firebase on the free Spark plan (no card, so it can't bill). Hidden until `firebase` (the web app config) and `googleWebClientId` are set in `data/config.json`.
- `firebase/firestore.rules`: paste into Firestore > Rules.
- `vendor/firebase/rr-firebase.js` is a bundle of the Firebase SDK (rebuild from `vendor/firebase/entry.js` with esbuild). Loaded only when needed.
- Android sign-in uses `GoogleAuthPlugin` (Credential Manager); register the app's SHA-1s in the Firebase project.
- Tests: `node fakecloud-server.js 8787 &` then `node live-crawl.js $(realpath ../../index.html)` (uses `?fakecloud=`).
