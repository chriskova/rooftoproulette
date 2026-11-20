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
await p.evaluate(()=>{S.tpacks={spin:true};S.packOff={spin:true};delete S.freeOff;S.wpile=[];save()});
const before=await p.evaluate(()=>deckIdx().length);
await p.click('#menuBtn').catch(()=>p.evaluate(()=>document.querySelector('[id^=menu],#mMore')?.click()));await p.waitForTimeout(500);
const hasRow=await p.evaluate(()=>!!document.getElementById('mWild'));if(hasRow){await p.click('#mWild')}else{await p.evaluate(()=>deckSheet())}await p.waitForTimeout(500);
await p.click('[data-dk="spin"]');await p.waitForTimeout(200);await p.click('[data-dk="free"]');await p.waitForTimeout(200);await shot('mid-decks');
const r=await p.evaluate(()=>{const out=[];for(let k=0;k<5;k++){const i=drawWild();out.push(!!WMETA[ALLW[i]]&&WMETA[ALLW[i]].p)}return out});
console.log('menu row',hasRow,'before',before,'after',await p.evaluate(()=>deckIdx().length),'deals',JSON.stringify(r));
console.log('errors',e);await b.close()})();
