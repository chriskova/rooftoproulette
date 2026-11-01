# Rooftop Roulette: source

The live app at the repo root (`index.html`, `manifest.webmanifest`, `sw.js`) is generated from this folder. Don't edit those three files by hand.

## Files

- `index.template.html` is the whole app: markup, CSS and JS. The venue list is injected at `__VENUES__`.
- `data/venues.json` holds the bars (Sydney and Brisbane).
- `data/manifest.webmanifest` is the PWA manifest.
- `build.py` writes `../index.html`, `../manifest.webmanifest`, `../sw.js` and `../.nojekyll`. It also inlines Leaflet and the main fonts so the page works as a single file.
- `tests/` holds Playwright checks (see below).

## Build and release

1. Edit `index.template.html` (or `data/venues.json`).
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
