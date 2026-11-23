// Zone step → Ready: the map stays put and settles; Back slides the zone controls back in
// node morph.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(500);const T=f=>p.evaluate(f);
await T(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1};S.fake={lat:-33.8688,lng:151.2093};S.wiz={step:1,len:60,rr:false,radius:1,z:{lat:-33.8688,lng:151.2093,r:1}};save();go('wiz')});
await p.waitForTimeout(1800);await p.screenshot({path:'out/mo-0.png'});
await p.click('#wNext');
for(const [i,t] of [[1,100],[2,150],[3,200],[4,250],[5,400],[6,600]]){await p.waitForTimeout(t);await p.screenshot({path:`out/mo-${i}.png`})}
console.log('step',await T(()=>S.wiz.step),'box style',await T(()=>document.querySelector('.rmap').getAttribute('style')),'pins',await T(()=>document.querySelectorAll('#wMap .pin').length),'gone',await T(()=>document.querySelectorAll('#wMap .pin.gone').length));
await p.click('#wBack');for(const [i,t] of [[7,120],[8,250],[9,900]]){await p.waitForTimeout(t);await p.screenshot({path:`out/mo-${i}.png`})}
console.log('back step',await T(()=>S.wiz.step),'win',await T(()=>document.querySelectorAll('#wBody .win').length));
console.log('errors',e);await b.close()})();
