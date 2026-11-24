const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};S.quick={step:1,from:null};save();go('quick')});await p.waitForTimeout(2200);
const mh=()=>p.evaluate(()=>Math.round($("rrMap").getBoundingClientRect().height));
console.log('open',await mh());await p.screenshot({path:'out/sw-open.png'});
const h=await p.$('.fspanel h1');const bb=await h.boundingBox();
await p.mouse.move(bb.x+20,bb.y+5);await p.mouse.down();await p.mouse.move(bb.x+20,bb.y+80,{steps:5});await p.mouse.up();await p.waitForTimeout(500);
console.log('swiped down',await mh(),await p.evaluate(()=>document.querySelector('.fspanel').classList.contains('min')));await p.screenshot({path:'out/sw-min.png'});
await p.click('.fshandle');await p.waitForTimeout(400);await p.waitForTimeout(500);console.log('tap handle → open',await p.evaluate(()=>!document.querySelector('.fspanel').classList.contains('min')));
// slider drag must not collapse
const sl=await p.$('#rrR');const sb=await sl.boundingBox();await p.mouse.move(sb.x+sb.width*.4,sb.y+sb.height/2);await p.mouse.down();await p.mouse.move(sb.x+sb.width*.6,sb.y+sb.height/2+40,{steps:5});await p.mouse.up();await p.waitForTimeout(300);
console.log('slider drag kept open',await p.evaluate(()=>!document.querySelector('.fspanel').classList.contains('min')));
await p.evaluate(()=>{S.quick=null;S.wiz={step:1,len:60,rr:false,radius:1};save();go('wiz')});await p.waitForTimeout(2000);console.log('timed opens full',await p.evaluate(()=>!!document.querySelector('#v-wiz .fshandle')&&!document.querySelector('#v-wiz .fspanel').classList.contains('min')));
console.log(e);await b.close()})();
