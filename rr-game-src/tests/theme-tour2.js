// More screens for the theme check: permissions, My Tab with a crawl, crawl map, R&R setup, demo, pick-3 sheet.
// node theme-tour2.js $(realpath ../../index.html) light|dark [outdir]
const {chromium,devices}=require('playwright');const fs=require('fs');
const FILE=process.argv[2],SCHEME=process.argv[3]||'light',D=process.argv[4]||('out/tour2-'+SCHEME);
(async()=>{fs.mkdirSync(D,{recursive:true});
const b=await chromium.launch();
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:390,height:844},colorScheme:SCHEME,geolocation:{latitude:-33.8662,longitude:151.2059},permissions:['geolocation']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push(x.message));
let n=0;const shot=async t=>{await p.screenshot({path:`${D}/${String(n++).padStart(2,'0')}-${t}.png`})};
const step=async(t,fn,wait=900)=>{try{await fn();await p.waitForTimeout(wait);await shot(t)}catch(e){console.log('step failed:',t,e.message.split('\n')[0])}};
const ev=f=>p.evaluate(f);
await p.goto('file://'+FILE+'?test');await p.waitForTimeout(800);
await ev(()=>{S.onboarded=true;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now();}S.sound=false;S.city='Sydney';S.seenHow={rush:1,rr:1};S.tips={swipe:1,enroute:1,night:1,cam:1};S.cam=false;save();
 const t0=now()-86400000;const ids=['the-glenmore','harbour-view-hotel','the-mercantile','henry-deane'];
 const visits=ids.map((id,i)=>({id,arrivedAt:t0+i*12*60000+4*60000,leftAt:t0+i*12*60000+14*60000,counted:true}));const st={lat:-33.8590,lng:151.2070};
 H.unshift({id:'h1',city:'Sydney',mode:'rush',len:60,radius:.8,startedAt:t0,endsAt:t0+3600000,endedAt:t0+3600000,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits,trail:[],moves:[],name:'Friday drinks'});saveH();go('home')});
await step('perm',()=>ev(()=>go('perm')));
await step('mytab',()=>ev(()=>go('hist')),1200);
await step('crawl-open',async()=>{const el=await p.$('#v-hist [data-h], #v-hist .hrow, #v-hist button.crawl, #v-hist .colcard');if(el)await el.click()},1500);
await ev(()=>{try{closeSheet()}catch(e){};go('home')});
await step('rr-setup',async()=>{await ev(()=>{S.quick={step:0,from:null};save();go('quick')})},1200);
await step('rr-setup-2',async()=>{const id=await ev(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(id)await p.click('#'+id)},1500);
await ev(()=>{go('home')});
await ev(()=>{S.wiz={step:3,len:60,radius:1,start:{type:'area',name:'Wynyard',lat:-33.8662,lng:151.2059}};tryStart()});await p.waitForTimeout(600);
await ev(()=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+3600000;g.jp={k:'spins',claimed:true,leg:9};g.pick3=true;renderPlay()});
await ev(()=>doSpin(false));
for(let i=0;i<24;i++){await p.waitForTimeout(500);if(await ev(()=>$('sheet').open)){await p.waitForTimeout(700);await shot('pick3');break}}
await ev(()=>{try{closeSheet()}catch(e){}});
await step('crawl-map',async()=>{const el=await p.$('#pMap, .clock ~ button, [aria-label*="map" i]');if(el)await el.click()},1500);
await ev(()=>{try{document.querySelector('.mf-x')&&document.querySelector('.mf-x').click()}catch(e){}});
await step('toast',()=>ev(()=>toast('Saved to My Tab')),400);
await ev(()=>{S.game=null;save();go('home')});
await step('demo',()=>ev(()=>startDemo()),2500);
await step('demo-2',async()=>{const id=await ev(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(id)await p.click('#'+id)},2500);
console.log(SCHEME,'shots',n,'errors',JSON.stringify(errs));await b.close()})();
