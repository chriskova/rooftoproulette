// Your crawl nudge waits for the first bar to count (after 3 minutes in a real crawl), then the map hints follow.
// node nudge.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:360,height:780}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};S.tips={cam:1};save()});
// real-style game: arrive, nothing yet; 3 minutes later it counts and the nudge shows
await p.evaluate(()=>{startDemo();const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+36e5;const v=basePool().find(v=>openOK(v,now()));setTarget(v,{lat:v.lat+.01,lng:v.lng});g.dpos={lat:v.lat+.0002,lng:v.lng,acc:5};save();onLocation();renderPlay()});
await p.waitForTimeout(150);
const st=()=>p.evaluate(()=>JSON.stringify({count:$('pCount').querySelector('b').textContent,nudge:!!document.querySelector('.cnudge'),dot:$('pMap').classList.contains('hasdot')}));
console.log('on arrival, before the count animation:',await st());
await p.waitForTimeout(4000);console.log('after the count animation:',await st());
console.log('ERRORS',e);await b.close()})();
