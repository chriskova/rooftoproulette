const CACHE="rr-app-v33-4";
const ASSETS=["./","index.html","manifest.webmanifest",
"icons/icon-192.png","icons/apple-touch-icon.png",
"fonts/big-shoulders-display-latin-500-normal.woff2","fonts/big-shoulders-display-latin-800-normal.woff2",
"fonts/plus-jakarta-sans-latin-800-normal.woff2","fonts/plus-jakarta-sans-latin-700-normal.woff2","fonts/ibm-plex-mono-latin-400-normal.woff2","fonts/ibm-plex-mono-latin-500-normal.woff2","fonts/caveat-latin-600-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  if(r.mode==="navigate"){e.respondWith(fetch(r.url,{cache:"no-store"}).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put("index.html",c));return res}).catch(()=>caches.match("index.html")));return}
  e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c));return res}).catch(()=>caches.match(r)));
});
