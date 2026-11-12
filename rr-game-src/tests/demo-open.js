// Demo: every bar is open during play at any hour; real hours elsewhere.
// node demo-open.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({viewport:{width:360,height:780}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=9*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;save();go('home')});
console.log('9am, not in a demo: open',await p.evaluate(()=>VENUES.filter(v=>openOK(v,now())).length),'of',await p.evaluate(()=>VENUES.length));
await p.evaluate(()=>{startDemo()});await p.waitForTimeout(800);
console.log('9am, in the demo: open',await p.evaluate(()=>VENUES.filter(v=>!v.tempClosed&&openOK(v,now())).length),'| pool',await p.evaluate(()=>basePool().length));
await p.evaluate(()=>go('bars'));console.log('Rooftops tab during demo: open',await p.evaluate(()=>VENUES.filter(v=>openOK(v,now())).length));
console.log('ERRORS',e);await b.close()})();
