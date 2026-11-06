// Phone app path with a fake BackgroundGeolocation plugin: explainer once, watcher during a crawl, arrivals while "locked", stops at the end.
// node bggeo.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.addInitScript(()=>{window._bg={adds:0,removes:0,cb:null};window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'android',Plugins:{BackgroundGeolocation:{
  addWatcher:(o,cb)=>{_bg.adds++;_bg.opts=o;_bg.cb=cb;return Promise.resolve('w1')},removeWatcher:()=>{_bg.removes++;return Promise.resolve()}}}}});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(400);
await p.evaluate(()=>{S.onboarded=true;const d=new Date();d.setHours(19,0,0,0);const t=Date.now();const st={lat:-33.8612,lng:151.2110};
 S.game={id:'gbg',city:'Sydney',mode:'rush',len:60,radius:1,started:true,startedAt:t-6e5,endsAt:t+50*6e4,startPos:st,center:st,areas:['The Rocks'],moves:[],visits:[],target:'the-glenmore',targetAt:t-3e5,targetFrom:st,trail:[],zone:{lat:st.lat,lng:st.lng}};save();go('play');startWatch()});
await p.waitForTimeout(400);console.log('explainer:',await p.evaluate(()=>document.querySelector('#sheetBody h3')&&document.querySelector('#sheetBody h3').textContent),'watchers so far:',await p.evaluate(()=>_bg.adds));
console.log('watcher started:',await p.evaluate(()=>_bg.adds+' '+_bg.opts.backgroundTitle));
// phone locked; a fix arrives at the bar
await p.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});const v=byId('the-glenmore');_bg.cb({latitude:v.lat,longitude:v.lng,accuracy:12})});
await p.waitForTimeout(300);
console.log('arrived while locked:',await p.evaluate(()=>{const a=S.game.visits[0];return a&&a.id+' at '+Math.round((Date.now()-a.arrivedAt)/1000)+'s ago, assumed='+!!a.assumed}));
await p.evaluate(()=>endGame(now()));await p.waitForTimeout(300);console.log('stopped:',await p.evaluate(()=>_bg.removes+' bgWatch='+bgWatch));
await p.evaluate(()=>{S.game={id:'g2',city:'Sydney',mode:'rush',len:60,radius:1,started:true,startedAt:Date.now(),endsAt:Date.now()+36e5,startPos:{lat:-33.86,lng:151.21},center:{lat:-33.86,lng:151.21},areas:['x'],moves:[],visits:[],trail:[]};save();startWatch()});await p.waitForTimeout(200);
console.log('second crawl, no explainer:',await p.evaluate(()=>!$('sheet').open&&_bg.adds));
console.log(e);await b.close()})();
