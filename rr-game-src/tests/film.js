// Film spins: off by default, no camera anywhere on the crawl screen; on, the camera shows on the wheel only.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(800);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};save();startWizard()});await p.waitForTimeout(500);
for(let i=0;i<4&&await p.$('#wNext');i++){await p.click('#wNext');await p.waitForTimeout(500)}
console.log('setup toggle:',await p.evaluate(()=>!!$('filmTog')&&$('filmTog').getAttribute('aria-checked')));
await p.screenshot({path:'out/film-setup.png'});
await p.click('#wStart');await p.waitForTimeout(1200);
const cams=()=>p.evaluate(()=>[...document.querySelectorAll('#camBtn')].map(b=>b.className).join('|')||'none');
console.log('wheel, off:',await cams());
await p.evaluate(()=>{S.film=true;save();renderPlay()});await p.waitForTimeout(400);console.log('wheel, on:',await cams());
await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000});await p.waitForTimeout(1500);
console.log('en route, on:',await cams());
await p.evaluate(()=>{S.film=false;save();renderPlay()});console.log('en route, off:',await cams());
await p.click('#pMenu');await p.waitForTimeout(400);console.log('menu light, off:',await p.evaluate(()=>!!$('mLight')));
console.log(e);await b.close()})();
