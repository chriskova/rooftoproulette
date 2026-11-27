// R&R spun at 6pm (wraps up at 9pm). Reopening at 8pm resumes; at 11pm (finished 2h ago) shows the crawl card;
// two days later (or anything 3h+ after it finished) it goes quietly onto My Tab and opens on home.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];const url='file://'+process.argv[2];
async function run(label,reopenAt){
  const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
  await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
  const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));await p.clock.install({time:new Date('2026-11-20T18:00:00+11:00')});await p.goto(url);await p.waitForTimeout(800);
  await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};S.quick={from:{type:"me",lat:-33.8688,lng:151.2093},r:2};save();await startCruise()});
  await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});await p.evaluate(()=>markSeen());await p.close();
  const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.message));await q.clock.install({time:new Date(reopenAt)});await q.goto(url);await q.waitForTimeout(2000);
  console.log(label,JSON.stringify(await q.evaluate(()=>({route:S.route,crawlOpen:!!S.game,onTab:H.length}))));
  await q.screenshot({path:'out/stale-'+label.replace(/\W+/g,'')+'.png'});await ctx.close()}
await run('8pm',  '2026-11-20T20:00:00+11:00');
await run('11pm', '2026-11-20T23:00:00+11:00');
await run('2 days later', '2026-11-22T20:00:00+11:00');
console.log('errors:',e);await b.close()})();
