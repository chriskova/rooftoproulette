// A crawl left open for days (or brought back by a phone backup) ends itself on opening and lands on My Tab; a recent one still resumes.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-20T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const url='file://'+process.argv[2];
async function setup(){await p.goto(url);await p.waitForTimeout(800);
 await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};save();await getOnce().catch(()=>{});});}
await setup();
// start an R&R night and spin once
await p.evaluate(async()=>{S.quick={from:{type:"me",lat:-33.8688,lng:151.2093},r:2};save();await startCruise()});
await p.waitForTimeout(800);
await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});await p.waitForTimeout(2000);
console.log('spun:',await p.evaluate(()=>({route:S.route,started:S.game.started,tgt:!!S.game.target,tab:H.length})));
// reopen 2 hours later: still mid-crawl
await p.clock.fastForward(2*3600000);await p.reload();await p.waitForTimeout(1500);
console.log('2h later:',await p.evaluate(()=>({route:S.route,game:!!S.game,tab:H.length})));
// reopen 2 days later: ended, on home, on My Tab, no end screen
await p.evaluate(()=>markSeen());await p.close();
const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.message));await q.clock.install({time:new Date('2026-11-22T10:00:00Z')});await q.goto(url);await q.waitForTimeout(2000);
console.log('app closed, opened 2 days later:',await q.evaluate(()=>({route:S.route,game:!!S.game,tab:H.length,auto:H[0]&&H[0].autoEnded,endedAt:H[0]&&new Date(H[0].endedAt).toISOString()})));
await q.screenshot({path:'out/stale-home.png'});
console.log('errors:',e);await b.close()})();
