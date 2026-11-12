// Jackpot timing: never bar 1; 1 hour bar 3–4, 2 hours bar 3–5; bar 2 possible only when one's owed
// (first timed crawl, or the last one ended without a jackpot); 2 hours fires on bar 4 with under 45 min left.
// Also: the demo ends on "Bar of the day?".
// node jackpot-timing.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.stack.split('\n').slice(0,3).join(' | ')));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};save();go('home')});
const r=await p.evaluate(()=>{const out={};const plan=(len,owed)=>{H.length=0;if(!owed)H.push({mode:"rush",startedAt:1,jp:{k:"spins"},visits:[]});const s=new Set();for(let i=0;i<400;i++)s.add(jpPlan({len}));return [...s].sort().join(",")};
  out.h1=plan(60,false);out.h1owed=plan(60,true);out.h2=plan(120,false);out.h2owed=plan(120,true);
  H.length=0;H.push({mode:"rush",startedAt:2,visits:[]},{mode:"rush",startedAt:1,jp:{k:"spins"},visits:[]});out.afterNoJp=jpOwed();
  H.length=0;H.push({mode:"cruise",startedAt:3,visits:[]},{mode:"rush",startedAt:1,jp:{k:"spins"},visits:[]});out.rrIgnored=!jpOwed();
  H.length=0;return out});
console.log(JSON.stringify(r));
const ok=r.h1==="3,4"&&r.h1owed==="2,3,4"&&r.h2==="3,4,5"&&r.h2owed==="2,3,4,5"&&r.afterNoJp&&r.rrIgnored;
// 2 hours, planned for bar 5, bar 4 spun with 40 min left → jackpot
await p.evaluate(()=>{S.game={id:"t1",mode:"rush",len:120,visits:[],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:2,cz:{type:"me",r:2},started:true,startedAt:now()-80*60000,endsAt:now()+40*60000,jpAt:5,test:true};
  ["the-glenmore","panorama-bar","harbour-view-hotel"].forEach((id,i)=>S.game.visits.push({id,arrivedAt:now()-(70-i*20)*60000,leftAt:now()-(60-i*20)*60000,counted:true}));save();go("play");doSpin(true)});
await p.waitForTimeout(800);const late=await p.evaluate(()=>!!S.game.jp);
await p.evaluate(()=>{document.querySelectorAll(".jpx").forEach(x=>x.remove());spinning=false;S.game=null;save()});
// same, 1 hour planned 4, bar 2 spun → no jackpot
await p.evaluate(()=>{S.game={id:"t2",mode:"rush",len:60,visits:[{id:"the-glenmore",arrivedAt:now()-20*60000,leftAt:now()-15*60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,cz:{type:"me",r:1},started:true,startedAt:now()-25*60000,endsAt:now()+35*60000,jpAt:3,test:true};save();go("play");doSpin(true)});
await p.waitForTimeout(800);const early=await p.evaluate(()=>!!S.game.jp);
console.log('late bar 4 fires:',late,'bar 2 holds:',!early,'plan ok:',ok);
await p.evaluate(()=>{spinning=false;S.game=null;save();go("home")});await p.waitForTimeout(300);
// demo: two bars then end → Bar of the day
await p.evaluate(()=>{startDemo()});await p.waitForTimeout(1200);
await p.evaluate(()=>{const g=S.game;g.started=true;g.startedAt=now();g.endsAt=now()+3600000;["the-glenmore","panorama-bar"].forEach((id,i)=>g.visits.push({id,arrivedAt:now()-(30-i*10)*60000,leftAt:now()-(25-i*10)*60000,counted:true}));save();endGame(now())});
await p.waitForTimeout(1500);
console.log('route',await p.evaluate(()=>S.route+' '+S.lastEnd+' '+(DEMO_REC&&DEMO_REC.id)));console.log('demo bar of the day:',await p.evaluate(()=>!!document.querySelector('#v-end .bodpick')));
await p.screenshot({path:'out/jt-demo-bod.png'});
console.log(e);await b.close()})();
