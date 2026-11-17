// Copies the built game (repo root) into www/ so the store and test apps carry it inside.
// The layout matches the website: the game at play/, shared files (scripts, icons, fonts, vendor) beside it.
// Run rr-game-src/build.py first, then: npm run sync
const fs=require("fs"),path=require("path");
const ROOT=path.resolve(__dirname,".."),OUT=path.join(__dirname,"www");
fs.rmSync(OUT,{recursive:true,force:true});fs.mkdirSync(path.join(OUT,"play"),{recursive:true});
fs.copyFileSync(path.join(ROOT,"play","index.html"),path.join(OUT,"play","index.html"));
for(const f of ["browser-config.js","rooftop-app.js","manifest.webmanifest","venues.json"])fs.copyFileSync(path.join(ROOT,f),path.join(OUT,f));
for(const d of ["icons","fonts","vendor"])fs.cpSync(path.join(ROOT,d),path.join(OUT,d),{recursive:true});
// The app opens www/index.html: hand straight over to the game, keeping any link details.
fs.writeFileSync(path.join(OUT,"index.html"),'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>html{background:#FBF7F0}@media(prefers-color-scheme:dark){html{background:#000}}</style><script>location.replace("play/"+location.search+location.hash)</script></head><body></body></html>\n');
// Store builds must never point at the website. Only the RR Dev build (RR_DEV=1) loads the live game.
const cfg=JSON.parse(fs.readFileSync(path.join(__dirname,"capacitor.config.json"),"utf8"));
if(cfg.server&&cfg.server.url&&process.env.RR_DEV!=="1"){console.error("capacitor.config.json has server.url set: store and test builds must carry the game inside.");process.exit(1)}
console.log(cfg.server&&cfg.server.url?"RR Dev: the app loads "+cfg.server.url:"game copied to www/ (bundled)");
