// Permissions in the phone app: rows ask when not set, open the phone's settings when set; works without plugin objects.
// node perms.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},permissions:['geolocation']});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
// like the real bridge: no Plugins objects, only nativePromise / nativeCallback
await p.addInitScript(()=>{window._calls=[];window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'android',Plugins:{},nativePromise:(pl,m,o)=>{_calls.push(pl+'.'+m+' '+JSON.stringify(o));return Promise.resolve({})},nativeCallback:(pl,m,o,cb)=>{_calls.push(pl+'.'+m);window._cb=cb;return 'cb1'}}});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;save();go('home')});await p.waitForTimeout(300);
await p.click('#gearHome');await p.waitForTimeout(500);await p.click('#stPerm');await p.waitForTimeout(600);
console.log('rows:',await p.evaluate(()=>[...document.querySelectorAll('.prow')].map(x=>x.innerText.replace(/\n/g,' ')).join(' | ')));
await p.screenshot({path:'out/pm.png'});
await p.click('[data-pm="cam"]');await p.waitForTimeout(500);console.log('tap camera →',await p.evaluate(()=>_calls.join(' ; ')));
await p.click('#pmOpen');await p.waitForTimeout(300);console.log('open button →',await p.evaluate(()=>_calls.slice(-1)[0]));
// background location through the bridge only
await p.evaluate(()=>{closeSheet();closeSettings(true);const t=Date.now(),st={lat:-33.86,lng:151.21};S.bgSeen=1;S.game={id:'gx',city:'Sydney',mode:'rush',len:60,radius:1,started:true,startedAt:t,endsAt:t+36e5,startPos:st,center:st,areas:['x'],moves:[],visits:[],trail:[],target:'the-glenmore',targetAt:t,targetFrom:st};save();go('play');startWatch()});
await p.waitForTimeout(400);console.log('bg watcher via bridge:',await p.evaluate(()=>_calls.filter(c=>c.startsWith('BackgroundGeolocation')).join(' ; ')+' | bgWatch='+bgWatch));
await p.evaluate(()=>{const v=byId('the-glenmore');_cb({latitude:v.lat,longitude:v.lng,accuracy:10})});await p.waitForTimeout(300);
console.log('arrival from bridge callback:',await p.evaluate(()=>S.game.visits.map(v=>v.id).join(',')));
await p.evaluate(()=>stopWatch());console.log('stop →',await p.evaluate(()=>_calls.slice(-1)[0]));
console.log(e);await b.close()})();
