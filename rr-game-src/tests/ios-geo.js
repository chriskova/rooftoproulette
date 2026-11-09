// iPhone app: location goes through the native Geolocation plugin, never the web view's own prompt.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
const ctx=await b.newContext({...devices['iPhone 13']});   // no web geolocation permission granted: any web prompt would fail
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push(x.message));
await p.addInitScript(()=>{window.__g=[];const pos={coords:{latitude:-33.8650,longitude:151.2090,accuracy:10},timestamp:Date.now()};
  const G={getCurrentPosition:o=>{__g.push('get');return Promise.resolve(pos)},watchPosition:(o,cb)=>{__g.push('watch');setTimeout(()=>cb(pos),50);return Promise.resolve('w1')},
    clearWatch:o=>{__g.push('clear:'+o.id);return Promise.resolve()},checkPermissions:()=>{__g.push('check');return Promise.resolve({location:'granted',coarseLocation:'granted'})}};
  const any=()=>new Proxy({},{get:()=>()=>Promise.resolve({})});
  window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'ios',Plugins:{Geolocation:G,LocalNotifications:any(),CrawlNotify:any(),Share:any(),Filesystem:any(),NativeSettings:any()}}});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
const r=await p.evaluate(async()=>{S.onboarded=true;save();const ps=await permState();const pos=await getOnce();const id=navigator.geolocation.watchPosition(()=>{} ,()=>{});await new Promise(r=>setTimeout(r,200));navigator.geolocation.clearWatch(id);await new Promise(r=>setTimeout(r,50));return {ps,pos:[pos.lat,pos.lng],city:S.city,calls:__g}});
console.log(JSON.stringify(r));console.log('ERRORS:',errs);await b.close()})();
