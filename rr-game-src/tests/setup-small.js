// Length step tiles + slim R&R tile; zone step map size on a small phone and a tall one.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [tag,vp] of [['small',{width:360,height:740}],['tall',{width:412,height:860}]]){
const ctx=await b.newContext({...devices['Pixel 7'],viewport:vp,geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};save();go('home')});await p.waitForTimeout(500);
await p.click('#newGame');await p.waitForTimeout(700);await p.screenshot({path:`out/ss-len-${tag}.png`});
await p.click('#wNext');await p.waitForTimeout(1800);
console.log(tag,'map h:',await p.evaluate(()=>$('rrMap').getBoundingClientRect().height),'of',vp.height,'| row:',await p.evaluate(()=>($('rrNs')||{}).textContent),'| ticks:',await p.evaluate(()=>[...document.querySelectorAll('.rrticks span')].map(x=>x.textContent).join(' / ')));
await p.screenshot({path:`out/ss-zone-${tag}.png`});
await p.evaluate(()=>{S.wiz.step=0;save();renderWiz()});await p.waitForTimeout(300);
await p.click('[data-l="rr"]');await p.waitForTimeout(200);await p.click('#wNext');await p.waitForTimeout(700);console.log(tag,'R&R tile goes to:',await p.evaluate(()=>S.route));
console.log(e);await ctx.close()}
await b.close()})();
