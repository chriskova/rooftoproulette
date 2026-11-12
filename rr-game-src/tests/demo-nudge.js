// Demo: first Spin again before arriving explains I'm here; picking it arrives at the bar. Only once per demo.
// node demo-nudge.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},deviceScaleFactor:2,isMobile:true,hasTouch:true});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};save();startDemo()});await p.waitForTimeout(1200);
await p.evaluate(()=>{const g=G(),P=basePool(),v=P.find(v=>openOK(v,now()))||P[0];g.started=true;g.startedAt=now();g.endsAt=now()+3600000;setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});await p.waitForTimeout(1200);
const sheetOpen=async()=>p.evaluate(()=>{const s=$('sheet');return !!(s&&s.open)});
if(await sheetOpen()){await p.evaluate(()=>closeSheet());await p.waitForTimeout(400)}
console.log('state:',await p.evaluate(()=>{const g=G();return JSON.stringify({demo:g.demo,target:g.target,started:!!g.started,at:!!atVisit(),pool:basePool().length,skips:document.querySelectorAll('#skipBtn').length})}));await p.screenshot({path:'out/dn.png'});
console.log('buttons:',await p.evaluate(()=>[...document.querySelectorAll('#stage button')].filter(x=>x.offsetParent).map(x=>x.id+':'+x.innerText.replace(/\n/g,' ')).join(' | ')),'| banner:',await p.textContent('#demoBar'));
await p.evaluate(()=>{const g=G(),P=basePool().filter(v=>openOK(v,now())&&!(g.skipped||[]).includes(v.id)),v=P[0];setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});await p.waitForTimeout(500);
await p.click('#dWalk');await p.waitForTimeout(2500);console.log('skip the walk arrived:',await p.evaluate(()=>!!atVisit()),'| cant shown',!!(await p.$('#cantBtn')));
console.log('ERRORS',e);await b.close()})();
