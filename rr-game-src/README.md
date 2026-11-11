# Rooftop Roulette: source

The live app at the repo root (`index.html`, `manifest.webmanifest`, `sw.js`) is generated from this folder. Don't edit those three files by hand.

## Files

- `index.template.html` contains the page markup and CSS. Edit `app.template.js` for app behaviour. The build injects venues and version information into `rooftop-app.js`.
- `data/venues.json` holds the bars (Sydney, Melbourne, Brisbane, Perth and the Gold Coast).
- `data/manifest.webmanifest` is the PWA manifest.
- `build.py` writes `../index.html`, `../manifest.webmanifest`, `../sw.js` and `../.nojekyll`. It also inlines Leaflet and the main fonts so the page works as a single file.
- `tests/` holds Playwright checks (see below).

## Updating bars without an app release

`build.py` also writes `venues.json` to the repo root with a version stamp. The app (web and native) checks it on launch and whenever it's reopened, and swaps in a newer list on the spot. To fix hours, add a bar or close one: edit `data/venues.json`, run the build, and push. Phones pick it up the next time the app opens, with no store update. Reports from "Wrong hours or info?" on each bar card arrive as emails to hello@rooftoproulette.com.

## Crawl links

Sharing a card or clip also sends a line and a link. The whole crawl (bars, times, name, jackpot) is packed into the link after `#crawl=`, so no server is involved. Opening it shows the crawl's summary with **Add to My Tab** and **Save card**. Links point at the GitHub Pages site (`SHARE_BASE` in the template). Once rooftoproulette.com points at the site, change `SHARE_BASE` and add app links so they open the native app.

## Analytics and crash reports

The app sends anonymous usage events and crash reports to PostHog: a random install ID, the app version and platform, and what happened (`app_open`, `crawl_start`, `spin`-level events like `jackpot` and `arrive`, `crawl_end` with bar count and minutes, `share_open`/`share_sent`, `camera_open`, `clip_recorded`, `report_change`, `backup`, and `$exception` for errors). It never sends names, coordinates, photos or clips, and sends nothing in test mode. It's off until a project API key is set in `data/config.json` (`posthogKey`, plus `posthogHost`: `https://us.i.posthog.com` or `https://eu.i.posthog.com`). Set up: EU Cloud, project 331226.

The app reads its browser configuration from `browser-config.js`, loaded before `rooftop-app.js`. See `browser-config.example.js` for its shape. The web build leaves this file untouched. The native sync step requires it.

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

## Native app (app/)

`app/` wraps the built web app in Capacitor (app ID `com.rooftoproulette.app`) for Android and iOS.

- `node app/sync-web.js` copies the built site into `app/www`; `npm run sync` (in `app/`) also runs `cap sync`.
- `python3 app/make-icons.py` makes the app icons and splash screens from `icons/icon-512.png` and `icons/maskable-512.png`. Placeholder for now: swap those for the final logo and re-run.
- Every push to `main` that changes `index.html` or `app/` builds an Android test APK on GitHub Actions and puts it on the `android-test` release (download it on the phone and install).
- iOS needs the Apple Developer account before builds can be signed.

## Site pages (site/)

`site/privacy.html`, `site/terms.html` and `site/support.html` are the pages Settings links to. `build.py` copies them to the repo root next to the app. The app finds them through the `SITE` constant in `index.template.html`: change that one line when the pages move to rooftoproulette.com.
