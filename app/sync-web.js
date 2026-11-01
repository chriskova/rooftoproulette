// Copies the built web app (repo root) into www/ for the native apps.
// Run rr-game-src/build.py first, then: npm run sync
const fs=require("fs"),path=require("path");
const ROOT=path.resolve(__dirname,".."),OUT=path.join(__dirname,"www");
fs.rmSync(OUT,{recursive:true,force:true});fs.mkdirSync(OUT,{recursive:true});
for(const f of ["index.html","manifest.webmanifest"])fs.copyFileSync(path.join(ROOT,f),path.join(OUT,f));
for(const d of ["icons","fonts","vendor"])fs.cpSync(path.join(ROOT,d),path.join(OUT,d),{recursive:true});
console.log("web app copied to www/");
