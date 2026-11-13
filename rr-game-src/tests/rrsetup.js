const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:360,height:740},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};S.been={"the-glenmore":1,"panorama-bar":1,"harbour-view-hotel":1};save();go('home')});await p.waitForTimeout(400);
await p.click('#newGame');await p.waitForTimeout(500);await p.click('#wNext');await p.waitForTimeout(1800);
await p.screenshot({path:'out/z-hist.png',fullPage:false});
console.log('zone scroll:',await p.evaluate(()=>{const v=$('v-wiz');return v.scrollHeight+' vs '+v.clientHeight}));
await p.evaluate(()=>{S.wiz.step=0;save();renderWiz()});await p.click('[data-l="rr"]');await p.click('#wNext');await p.waitForTimeout(1500);
await p.screenshot({path:'out/rr-0.png'});
console.log(await p.evaluate(()=>$('v-quick').innerText.slice(0,1200)));
for(let i=1;i<3;i++){const n=await p.$('#qNext');if(!n)break;await n.click();await p.waitForTimeout(1500);await p.screenshot({path:'out/rr-'+i+'.png'});console.log('--- step',i,await p.evaluate(()=>$('v-quick').innerText.slice(0,1200)))}
await b.close()})();
