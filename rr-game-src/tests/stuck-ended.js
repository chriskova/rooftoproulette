// A crawl stuck as "ended but still open" (older versions tripped while opening) is cleared on opening, kept on My Tab once.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));const url='file://'+process.argv[2];
await p.clock.install({time:new Date('2026-11-20T08:00:00Z')});await p.goto(url);await p.waitForTimeout(800);
await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};S.quick={from:{type:"me",lat:-33.8688,lng:151.2093},r:2};save();await startCruise()});
await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});
await p.evaluate(()=>{S.game.ended=true;S.game.endedAt=now();save()});await p.close();
const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.message));await q.clock.install({time:new Date('2026-11-20T09:00:00Z')});await q.goto(url);await q.waitForTimeout(1500);
console.log('stuck, reopened:',JSON.stringify(await q.evaluate(()=>({route:S.route,game:!!S.game,tab:H.length}))));
await q.reload();await q.waitForTimeout(1200);console.log('again:',JSON.stringify(await q.evaluate(()=>({route:S.route,game:!!S.game,tab:H.length}))));
console.log('errors:',e);await b.close()})();
