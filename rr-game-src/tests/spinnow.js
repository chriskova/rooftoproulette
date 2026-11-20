// Wildcard packs: sealed on the way, opens at the bar with a Spin, packs sheet, pack detail, My Tab, Ready-to-spin chip.
// node packs-test.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch(process.env.X?{executablePath:process.env.X}:{});const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};S.safeOK=1;S.tpacks={spin:true};save();go('home')});
const shot=n=>p.screenshot({path:'out/pk-'+n+'.png'});
// heading to a bar with a sealed Double Spin card
await p.evaluate(()=>{S.game={id:"pk"+Date.now(),mode:"rush",len:60,visits:[{id:"the-glenmore",arrivedAt:now()-30*60000,leftAt:now()-20*60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,cz:{type:"me",r:1},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-30*60000,endsAt:now()+30*60000,target:"panorama-bar",targetFrom:{lat:-33.8688,lng:151.2093},targetAt:now()-5*60000,
  wild:{id:"panorama-bar",text:"Everyone orders something with the spirit it lands on.",leg:1,t0:now()-5*60000,shown:true,landed:true},wplan:[1],test:true};save();go('play')});
await p.waitForTimeout(1200);await shot('1-sealed');
await p.evaluate(()=>{S.tpacks={spin:true};S.freeOff=true;S.packOff={};S.wplayed={};S.wpile=[];const g=G();g.wdeck=null;const i=drawWild();g.wild={id:g.wild?g.wild.id:(g.target||{}).id,text:ALLW[i],t0:Date.now()};markDeal(ALLW[i]);save();renderPlay()});
await p.waitForTimeout(600);await shot('sn-1-onway');
console.log('on the way:',await p.evaluate(()=>{const w=document.querySelector('#stage .wild');return w&&w.innerText.replace(/\n/g,' | ')}),'spin btn:',await p.evaluate(()=>!!document.querySelector('#stage [data-wspin]')));
await p.evaluate(()=>{S.wplayed[PACKS[1].cards[1].t]=1;S.wplayed[WILDS[0]]=1;save();go('hist')});await p.waitForTimeout(800);
console.log('tab card:',await p.evaluate(()=>document.getElementById('hDeck').innerText.replace(/\n/g,' | ')));
await p.click('#hDeck');await p.waitForTimeout(600);await shot('sn-2-deck');
console.log('sections:',await p.evaluate(()=>[...document.querySelectorAll('.dk-head')].map(x=>x.innerText.replace(/\n/g,' ')).join(' / ')));
console.log('errors',e);await b.close()})();
