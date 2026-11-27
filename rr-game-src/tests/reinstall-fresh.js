// Android reinstall with data brought back from a backup: the crawl is dropped and the app opens on home, My Tab kept.
// An update (same install time) keeps a crawl under way.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];const url='file://'+process.argv[2];
const nat=first=>`window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>"android",Plugins:{CrawlNotify:{installInfo:async()=>({first:${first}}),update:async()=>({}),clear:async()=>({}),status:async()=>({enabled:true}),hostBeat:async()=>({})}}};`;
async function run(label,firstBefore,firstAfter){
  const ctx=await b.newContext({...devices['Pixel 7'],geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
  const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));await p.addInitScript(nat(firstBefore));await p.clock.install({time:new Date('2026-11-20T18:00:00+11:00')});await p.goto(url);await p.waitForTimeout(1000);
  await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};S.quick={from:{type:"me",lat:-33.8688,lng:151.2093},r:2};S.test=true;save();await startCruise();doSpin(true,-14)});
  await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});const inst=await p.evaluate(()=>S.inst);await p.close();
  const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.message));await q.addInitScript(nat(firstAfter));await q.clock.install({time:new Date('2026-11-20T18:20:00+11:00')});await q.goto(url);await q.waitForTimeout(1500);
  console.log(label,'saved install:',inst,JSON.stringify(await q.evaluate(()=>({route:S.route,crawl:!!S.game,inst:S.inst}))));await ctx.close()}
await run('update (same install):',111,111);
await run('reinstall (new install):',111,222);
console.log('errors:',e);await b.close()})();
