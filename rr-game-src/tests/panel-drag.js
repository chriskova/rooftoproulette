const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};S.quick={step:1,from:null};save();go('quick')});await p.waitForTimeout(2200);
const mh=()=>p.evaluate(()=>Math.round($("rrMap").getBoundingClientRect().height));
const cdp=await p.context().newCDPSession(p);const h=await p.$('.fspanel h1');const bb=await h.boundingBox();
const frames=[];
await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:bb.x+20,y:bb.y+5}]});
for(let i=1;i<=6;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:bb.x+20,y:bb.y+5+i*10}]});frames.push(await mh())}
await p.screenshot({path:'out/sw-mid.png'});
await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
for(let i=0;i<5;i++){await p.waitForTimeout(70);frames.push(await mh())}
console.log('map height while dragging/settling:',frames.join(' → '),'min',await p.evaluate(()=>document.querySelector('.fspanel').classList.contains('min')));
await p.waitForTimeout(500);await p.click('.fshandle');const up=[];for(let i=0;i<8;i++){await p.waitForTimeout(70);up.push(await mh())}console.log('tap → open:',up.join(' → '));
console.log(e);await b.close()})();
