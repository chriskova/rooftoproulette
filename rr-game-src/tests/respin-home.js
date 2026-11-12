// Second re-spin within a minute of starting, before any bar: the Spin again sheet offers the demo. Works in test mode.
// Slow re-spins don't. node respin-home.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(800);
const run=async(gap)=>{
  await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.game=null;S.fake={lat:-33.8688,lng:151.2093};save();const c={lat:-33.8688,lng:151.2093};S.game={id:"g"+Date.now(),mode:"rush",city:"Sydney",len:60,radius:1,newOnly:false,center:c,startPos:c,areas:["CBD"],moves:[],voluntaryUsed:false,freeSkips:1,excluded:[],zone:{lat:c.lat,lng:c.lng,name:"CBD"},cz:{type:"me",r:1},visits:[],target:null,started:false,ended:false};save();go('play')});
  await p.waitForTimeout(600);
  const spin=async()=>{await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});await p.waitForTimeout(1500);await p.evaluate(()=>{if($('sheet').open)closeSheet()})};
  await spin();
  await p.clock.runFor(gap);await p.click('#skipBtn');await p.waitForTimeout(300);const first=await p.evaluate(()=>!!$('sD'));await p.click('#sY');await p.waitForTimeout(600);await spin();
  await p.clock.runFor(gap);await p.click('#skipBtn');await p.waitForTimeout(400);const second=await p.evaluate(()=>!!$('sD'));
  await p.screenshot({path:'out/respin-'+gap+'.png'});
  if(second){await p.click('#sD');await p.waitForTimeout(800)}else await p.evaluate(()=>closeSheet());
  return {first,second,demo:await p.evaluate(()=>!!(S.game&&S.game.demo))}};
console.log('quick:',JSON.stringify(await run(10000)));
console.log('slow:',JSON.stringify(await run(45000)));
console.log(e);await b.close()})();
