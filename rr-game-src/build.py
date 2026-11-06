import json,os,shutil
# Builds the app into the repo root (index.html, manifest, sw.js). Bump CACHE below on every release.
D=os.path.dirname(os.path.abspath(__file__));OUT=os.path.dirname(D)
V=json.load(open(os.path.join(D,'data','venues.json')))
t=open(os.path.join(D,'index.template.html')).read()
import re
VER=re.search(r'const CACHE="rr-app-(v[\d-]+)"',open(__file__).read()).group(1)
import time
VV=int(time.time())   # bar list version: the app swaps in a newer venues.json from the site without an app update
open(os.path.join(OUT,'venues.json'),'w').write(json.dumps({'v':VV,'bars':V},separators=(',',':'),ensure_ascii=False))
open(os.path.join(OUT,'index.html'),'w').write(t.replace('__VENUES_V__',str(VV)).replace('__VENUES__',json.dumps(V,separators=(',',':'),ensure_ascii=False)).replace('__VERSION__',VER).replace('__ANALYTICS__',json.dumps({k:v for k,v in json.load(open(os.path.join(D,'data','config.json'))).items() if not k.startswith('_')})))
m=json.load(open(os.path.join(D,'data','manifest.webmanifest')))
m['description']='A rooftop bar crawl against the clock.'
json.dump(m,open(os.path.join(OUT,'manifest.webmanifest'),'w'),indent=1)
open(os.path.join(OUT,'sw.js'),'w').write('''const CACHE="rr-app-v68-7";
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
''')
open(os.path.join(OUT,'.nojekyll'),'w').write('')
print('built',len(V))
# support, privacy and terms pages: served next to the app (linked from Settings)
for f in os.listdir(os.path.join(D,'site')):
    if f.endswith('.html'):shutil.copy(os.path.join(D,'site',f),os.path.join(OUT,f))
# inline Leaflet so the page also works as a single downloaded file
p=os.path.join(OUT,'index.html');s=open(p).read()
css=open(os.path.join(OUT,'vendor/leaflet/leaflet.css')).read()
js=open(os.path.join(OUT,'vendor/leaflet/leaflet.js')).read().replace('</script','<\\/script')
s=s.replace('<link rel="stylesheet" href="vendor/leaflet/leaflet.css">','<style>'+css+'</style>').replace('<script src="vendor/leaflet/leaflet.js"></script>','<script>'+js+'</script>')
import base64
for fn in ['big-shoulders-display-latin-500-normal.woff2','big-shoulders-display-latin-800-normal.woff2','plus-jakarta-sans-latin-800-normal.woff2','plus-jakarta-sans-latin-700-normal.woff2']:
    data=base64.b64encode(open(os.path.join(OUT,'fonts',fn),'rb').read()).decode()
    assert s.count('url(fonts/'+fn+')')==1,fn
    s=s.replace('url(fonts/'+fn+')','url(data:font/woff2;base64,'+data+')')
open(p,'w').write(s);print('inlined leaflet and fonts')
