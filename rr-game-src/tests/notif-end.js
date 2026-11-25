// Ending a crawl leaves nothing in the notification shade: the crawl notification is cleared, the background-location
// watcher is removed, and a watcher left over from before a page reload is found and removed too. (Fake native plugins.)
const {chromium,devices}=require('playwright');(async()=>{const b=await chromium.launch();const e=[];const ctx=await b.newContext({...devices['Pixel 7']});
await ctx.addInitScript(()=>{const log=window.__nl=JSON.parse(sessionStorage.getItem('__nl')||'[]');const L=(x)=>{log.push(x);sessionStorage.setItem('__nl',JSON.stringify(log))};let n=+(sessionStorage.getItem('__w')||0);
  window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'android',Plugins:{
   CrawlNotify:{update:o=>{L('update');return Promise.resolve()},clear:()=>{L('clear');return Promise.resolve()},status:()=>Promise.resolve({enabled:true}),setTheme:()=>Promise.resolve(),addListener:()=>({remove(){}})},
   BackgroundGeolocation:{addWatcher:(o,cb)=>{n++;sessionStorage.setItem('__w',n);const id='w'+n;L('add '+id);return Promise.resolve(id)},removeWatcher:o=>{L('remove '+o.id);return Promise.resolve()}}}}});
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);const T=f=>p.evaluate(f);
await T(()=>{S.onboarded=true;S.game={id:"gn",mode:"rush",len:60,started:true,startedAt:now(),endsAt:now()+36e5,visits:[{id:playable(inCircle({lat:-33.8688,lng:151.2093},1),false)[0].id,arrivedAt:now()-60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,areas:["CBD"],city:"Sydney",moves:[],excluded:[]};save();startWatch();liveNote()});await p.waitForTimeout(600);
console.log('crawl on:   ',await T(()=>__nl.join(', ')));
// the page reloads mid-crawl (an update): the watcher id from before is only in storage now
await p.reload();await p.waitForTimeout(1200);console.log('after reload:',await T(()=>__nl.join(', ')));
await T(()=>{__nl.length=0;sessionStorage.setItem('__nl','[]');endGame(now())});await p.waitForTimeout(2200);console.log('end crawl:  ',await T(()=>__nl.join(', ')));
console.log('errors',e);await b.close()})();
