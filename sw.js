const CACHE="rr-app-v98-247";
const ASSETS=["play/","./","browser-config.js","rooftop-app.js","manifest.webmanifest",
"icons/icon-192.png","icons/apple-touch-icon.png","icons/logo-pin.png",
"fonts/big-shoulders-display-latin-500-normal.woff2","fonts/big-shoulders-display-latin-800-normal.woff2",
"fonts/plus-jakarta-sans-latin-800-normal.woff2","fonts/plus-jakarta-sans-latin-700-normal.woff2","fonts/ibm-plex-mono-latin-400-normal.woff2","fonts/ibm-plex-mono-latin-500-normal.woff2","fonts/caveat-latin-600-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  // pages: always fresh, with the last copy kept for no signal. The game is play/; the website is the root.
  if(r.mode==="navigate"){const p=new URL(r.url).pathname,k=/^\/play(\/|$)/.test(p)?"play/":p.replace(/^\//,"")||"./";
    e.respondWith(fetch(r.url,{cache:"no-store"}).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put(k,c))}return res}).catch(()=>caches.match(k).then(m=>m||caches.match("play/"))));return}
  e.respondWith(fetch(r,{cache:"no-cache"}).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c));return res}).catch(()=>caches.match(r)));
});
