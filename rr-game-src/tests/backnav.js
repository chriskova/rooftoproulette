// Back gesture: steps back a screen or closes a panel; at home it leaves. (Browser history here; on Android the same appBack runs from the back button.)
// node backnav.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};save();go('home')});await p.waitForTimeout(300);
const where=()=>p.evaluate(()=>S.route+(S.wiz?' wiz'+S.wiz.step:'')+(S.quick?' rr'+S.quick.step:'')+($('sheet').open?' +panel':''));
await p.click('#newGame');await p.waitForTimeout(300);await p.click('#wNext');await p.waitForTimeout(800);console.log('in setup:',await where());
await p.goBack();await p.waitForTimeout(400);console.log('back ->',await where());
await p.goBack();await p.waitForTimeout(400);console.log('back ->',await where());
await p.evaluate(()=>go('bars'));await p.waitForTimeout(300);await p.evaluate(()=>barSheet(VENUES[0]));await p.waitForTimeout(300);console.log('bar card on Rooftops:',await where());
await p.goBack();await p.waitForTimeout(400);console.log('back ->',await where());
await p.goBack();await p.waitForTimeout(400);console.log('back ->',await where());
// the same steps through the Android path
await p.evaluate(()=>{S.wiz=null;S.quick={step:0,from:null};save();go('quick')});await p.waitForTimeout(400);console.log('R&R setup:',await where());
console.log('android back:',await p.evaluate(()=>appBack()),await where());
console.log('android back at home leaves the app:',await p.evaluate(()=>appBack()===false));
console.log(e);await b.close()})();
