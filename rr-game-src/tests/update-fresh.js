// After an update: a never-spun crawl is gone and the app opens on home; a crawl under way is kept.
const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const e=[];const url='file://'+process.argv[2];
async function run(label,started){
  const ctx=await b.newContext({...devices['Pixel 7'],geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
  const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));await p.clock.install({time:new Date('2026-11-20T18:00:00+11:00')});await p.goto(url);await p.waitForTimeout(800);
  await p.evaluate(async(started)=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};S.quick={from:{type:"me",lat:-33.8688,lng:151.2093},r:2};save();await startCruise();
    if(started){doSpin(true,-14)}},started);
  if(started)await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});
  await p.evaluate(()=>{S.appv="rr-app-old";save()});   // pretend the last open was an older version
  await p.close();const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.message));await q.clock.install({time:new Date('2026-11-20T18:20:00+11:00')});await q.goto(url);await q.waitForTimeout(1500);
  console.log(label,JSON.stringify(await q.evaluate(()=>({route:S.route,crawl:!!S.game,appv:S.appv===APPV}))));
  await q.reload();await q.waitForTimeout(1000);console.log('  reopened again:',JSON.stringify(await q.evaluate(()=>({route:S.route,crawl:!!S.game}))));await ctx.close()}
await run('never spun, after update:',false);
await run('under way, after update:',true);
console.log('errors:',e);await b.close()})();
