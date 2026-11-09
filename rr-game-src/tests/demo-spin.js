// Practice spin on an iPhone-size screen: lands on an open bar in your city, no gap under the buttons.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
const ctx=await b.newContext({...devices['iPhone 13'],geolocation:{latitude:-33.8650,longitude:151.2090},permissions:['geolocation']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push(x.message));
await p.goto('file://'+process.argv[2]);
await p.evaluate(()=>{S.onboarded=true;S.city='Sydney';save();go('home');demoSheet(()=>{},()=>{})});await p.waitForTimeout(800);
const r=await p.locator('#demoReel').boundingBox();
for(let i=0;i<3;i++){await p.locator('#demoReel').click();await p.waitForTimeout(7000);
  const t=await p.evaluate(()=>{const c=document.querySelector('#demoBox [data-sc]');return c?c.dataset.sc:null});
  if(t){const v=await p.evaluate(id=>{const v=byId(id);return [v.name,cityOf(v),openState(v,now()).open]},t);console.log('landed',v);break}}
await p.screenshot({path:'out/demo-spin.png'});
console.log('play label:',await p.locator('#demoPlay').innerText().catch(()=>'none'));
console.log('ERRORS:',errs);await b.close()})();
