// Setup screens fit without scrolling on a small and a tall phone; skip toggle on Ready with a count; R&R screens trimmed.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [tag,vp] of [['small',{width:360,height:740}],['tall',{width:412,height:860}]]){
const ctx=await b.newContext({...devices['Pixel 7'],viewport:vp,geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};save();
  // a past crawl through two CBD bars, so "been to" has something to count
  H.push({id:"old1",mode:"rush",len:60,startedAt:Date.now()-864e5*3,endedAt:Date.now()-864e5*3+36e5,visits:[{id:"the-glenmore",arrivedAt:1,leftAt:2,counted:true},{id:"panorama-bar",arrivedAt:3,leftAt:4,counted:true}]});go('home')});
await p.waitForTimeout(400);
const sc=v=>p.evaluate(v=>{const x=$(v);return x.scrollHeight<=x.clientHeight+1?'fits':'SCROLLS '+x.scrollHeight+'/'+x.clientHeight},v);
await p.click('#newGame');await p.waitForTimeout(600);console.log(tag,'length:',await sc('v-wiz'));await p.screenshot({path:`out/fit-len-${tag}.png`});
await p.click('#wNext');await p.waitForTimeout(1800);console.log(tag,'zone:',await sc('v-wiz'),'map',await p.evaluate(()=>Math.round($('rrMap').getBoundingClientRect().height)));await p.screenshot({path:`out/fit-zone-${tag}.png`});
await p.click('#wNext');await p.waitForTimeout(1500);console.log(tag,'ready:',await sc('v-wiz'),'| skip:',await p.evaluate(()=>$('newTog')?$('newTog').innerText.replace(/\n/g,' / '):'none'));await p.screenshot({path:`out/fit-ready-${tag}.png`});
if(await p.$('#newTog')){await p.click('#newTog');await p.waitForTimeout(300);console.log(tag,'in play after skip:',await p.evaluate(()=>$('wInPlay').textContent))}
await p.evaluate(()=>{S.wiz.step=0;save();renderWiz()});await p.click('[data-l="rr"]');await p.click('#wNext');await p.waitForTimeout(1200);
console.log(tag,'rr0:',await sc('v-quick'));await p.screenshot({path:`out/fit-rr0-${tag}.png`});
await p.click('#qMe');await p.click('#qNext');await p.waitForTimeout(1800);console.log(tag,'rr1:',await sc('v-quick'));await p.screenshot({path:`out/fit-rr1-${tag}.png`});
console.log(e);await ctx.close()}
await b.close()})();
