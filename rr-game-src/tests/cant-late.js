// Can't get in shows on arrival even when the app was away a while (late check-in), and in the demo after I'm here.
// node cant-late.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};save();startDemo();const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+36e5;const v=basePool().find(v=>openOK(v,now()));setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});
await p.waitForTimeout(600);
// pretend the phone was away 10 minutes and just came back
await p.evaluate(()=>{awayGap=10*60000;resumedAt=Date.now()});await p.evaluate(()=>$('dWalk').click());await p.waitForTimeout(1500);
console.log('demo: cant shown',!!(await p.$('#cantBtn')),'| time here',await p.textContent('#dwell'));
// real-game style backdated arrival still shows Can't get in
await p.evaluate(()=>{const g=G(),a=atVisit();a.arrivedAt=now()-5*60000;a.loggedAt=now();save();renderPlay()});await p.waitForTimeout(300);
console.log('backdated: cant shown',!!(await p.$('#cantBtn')));
await p.evaluate(()=>{const a=atVisit();a.arrivedAt=now()-6*60000;a.loggedAt=now()-6*60000;save();renderPlay()});await p.waitForTimeout(300);
console.log('6 min in line: cant shown',!!(await p.$('#cantBtn')));
await p.evaluate(()=>{const g=G(),a=atVisit();a.arrivedAt=now()-60000;a.loggedAt=a.arrivedAt;a.leftAt=now();a.counted=null;save();renderPlay()});await p.waitForTimeout(400);
console.log('quick exit box:',await p.textContent('.ask'));await p.screenshot({path:'out/ask.png'});
await p.click('#aC');await p.waitForTimeout(400);console.log('after couldnt get in:',await p.evaluate(()=>{const v=G().visits[0];return JSON.stringify({counted:v.counted,cant:v.cant,box:!!document.querySelector('.ask')})}));
console.log('ERRORS',e);await b.close()})();
