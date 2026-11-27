// A crawl set up but never spun: still there an hour later, dropped (opens on home) 3+ hours later.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];const url='file://'+process.argv[2];
async function run(label,reopenAt){
  const ctx=await b.newContext({...devices['Pixel 7'],geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
  const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.stack.split('\n').slice(0,3).join(' | ')));await p.clock.install({time:new Date('2026-11-20T18:00:00+11:00')});await p.goto(url);await p.waitForTimeout(800);
  await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};
    S.game={id:"g"+now(),city:"Sydney",test:false,started:false,startedAt:null,endsAt:null,len:60,radius:.5,newOnly:false,center:{lat:-33.8688,lng:151.2093},visits:[],target:null};S.route="play";save()});
  await p.close();const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.stack.split('\n').slice(0,3).join(' | ')));await q.clock.install({time:new Date(reopenAt)});await q.goto(url);await q.waitForTimeout(1500);
  console.log(label,JSON.stringify(await q.evaluate(()=>({route:S.route,crawl:!!S.game,tab:H.length}))));await ctx.close()}
await run('1h later',  '2026-11-20T19:00:00+11:00');
await run('4h later',  '2026-11-20T22:00:00+11:00');
console.log('errors:',e);await b.close()})();
