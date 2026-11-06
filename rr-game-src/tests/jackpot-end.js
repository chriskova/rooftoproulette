// A jackpot card is up when the crawl ends: the card goes, and the next game can spin.
// node jackpot-end.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:360,height:780},geolocation:{latitude:-33.8650,longitude:151.2090},permissions:['geolocation']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');
const start=()=>p.evaluate(()=>{S.wiz={step:2,start:{type:'area',name:'The City',lat:-33.8650,lng:151.2090},radius:1,len:60,newOnly:false};save();go('wiz');tryStart()});
await p.evaluate(()=>{S.onboarded=true;S.test=true;S.city='Sydney';S.seenHow={rush:1,rr:1};S.tips={night:1,cam:1};save()});
await start();await p.waitForTimeout(1500);
await p.evaluate(()=>{const g=S.game;g.started=true;g.startedAt=now();g.endsAt=now()+3600000;g.visits.push({id:'the-glenmore',arrivedAt:now()-600000,leftAt:now()-60000,counted:true});g.jpLeg=0;delete g.jp;g.target=null;save();renderPlay();doSpin(true)});
await p.waitForTimeout(6000);console.log('jackpot up:',await p.evaluate(()=>!!document.querySelector('.jpx')),'spinning',await p.evaluate(()=>spinning));
await p.evaluate(()=>endGame(now()));await p.waitForTimeout(800);console.log('after end: overlay',await p.evaluate(()=>!!document.querySelector('.jpx')),'route',await p.evaluate(()=>S.route),'spinning',await p.evaluate(()=>spinning));
await start();await p.waitForTimeout(1500);await p.evaluate(()=>doSpin(true));await p.waitForTimeout(9000);console.log('next game spins:',await p.evaluate(()=>S.game&&S.game.started&&!!S.game.target));
console.log(e);await b.close()})();
