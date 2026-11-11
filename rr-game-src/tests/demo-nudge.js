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
console.log('state:',await p.evaluate(()=>{const g=G();return JSON.stringify({demo:g.demo,target:g.target,started:!!g.started,at:!!atVisit(),pool:basePool().length,skips:document.querySelectorAll('#skipBtn').length})}));await p.evaluate(()=>$('skipBtn').click());await p.waitForTimeout(600);console.log('open:',await p.evaluate(()=>$('sheet').open+' '+$('sheetBody').innerText.slice(0,80)));console.log('nudge:',await p.textContent('#sheetBody h3'));await p.screenshot({path:'out/dn.png'});
await p.click('#dnHere');await p.waitForTimeout(2500);console.log('arrived:',await p.evaluate(()=>!!atVisit()));
await p.evaluate(()=>{const g=G(),P=basePool().filter(v=>!(g.visits||[]).some(x=>x.id===v.id)),v=P[0];setTarget(v,{lat:v.lat+.01,lng:v.lng});g.dpos=null;save();renderPlay()});await p.waitForTimeout(800);
if(await p.$('#skipBtn')){await p.evaluate(()=>$('skipBtn').click());await p.waitForTimeout(600);console.log('second time:',await p.textContent('#sheetBody h3'))}else console.log('second time: no Spin again button',await p.evaluate(()=>[...document.querySelectorAll('#v-play button')].filter(x=>x.offsetParent).map(x=>x.id).join(',')));console.log('ERRORS',e);await b.close()})();
