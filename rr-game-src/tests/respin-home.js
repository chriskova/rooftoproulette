// Near bars (no distance trigger), two quick re-spins before arriving anywhere: "Trying it from home?"
// Slow re-spins don't ask. node respin-home.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
const run=async(gap)=>{
  await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.game=null;save();await getOnce().catch(()=>{});const c={lat:-33.8688,lng:151.2093};S.game={id:"g"+Date.now(),mode:"rush",city:"Sydney",len:60,radius:1,newOnly:false,center:c,startPos:c,areas:["CBD"],moves:[],voluntaryUsed:false,freeSkips:1,excluded:[],zone:{lat:c.lat,lng:c.lng,name:"CBD"},cz:{type:"me",r:1},visits:[],target:null,started:false,ended:false};save();go('play')});
  await p.waitForTimeout(600);
  const spin=async()=>{await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});await p.waitForTimeout(1500)};
  await spin();
  for(let i=0;i<2;i++){await p.clock.runFor(gap);await p.click('#skipBtn');await p.waitForTimeout(300);await p.click('#sY');await p.waitForTimeout(600);await spin()}
  await p.waitForTimeout(1500);return p.evaluate(()=>$('sheet').open?$('sheetBody').querySelector('h3').textContent:'none')};
console.log('quick:',await run(10000));await p.screenshot({path:'out/respin-home.png'});
await p.evaluate(()=>closeSheet());
console.log('slow:',await run(45000));
console.log(e);await b.close()})();
