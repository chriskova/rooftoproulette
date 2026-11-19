const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];const ctx=await b.newContext({...devices['Pixel 7']});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;save();settingsSheet()});await p.waitForTimeout(700);
await p.click('#stHow');await p.waitForTimeout(800);
console.log('route',await p.evaluate(()=>S.route),'| next:',await p.evaluate(()=>$("introNext").textContent));
await p.screenshot({path:'/tmp/how.png'});console.log('errors',e);await b.close()})();
