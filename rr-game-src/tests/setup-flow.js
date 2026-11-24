// Setup: How long → (Pick your decks, pack owners) → Set your zone, which starts the crawl. Skip row on the zone step. Invite on the first spin screen.
// node setup-flow.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(500);const T=f=>p.evaluate(f);
const st=()=>T(()=>S.wiz&&S.wiz.step);
await T(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const z={lat:-33.8688,lng:151.2093};
  const L=playable(inCircle(z,1),false).filter(v=>openOK(v,now())).slice(0,3);H.push({id:"hx",city:"Sydney",mode:"rush",len:60,visits:L.map((v,i)=>({id:v.id,arrivedAt:now()-86400000+i*600000,leftAt:now()-86400000+i*600000+300000,counted:true}))});
  S.tpacks={};S.wiz={step:0,len:60,rr:false,radius:1};save();go('wiz')});
await p.waitForTimeout(800);await p.click('#wNext');await p.waitForTimeout(1800);
console.log('no packs: after time →',await st(),'| cta',await T(()=>$("cta").innerText),'| chip',await T(()=>!$("zSkipC").hidden&&$("zSkipC").innerText));
console.log('map h',await T(()=>Math.round(document.querySelector('#rrMap').getBoundingClientRect().height)),'scroll',await T(()=>{const v=$("v-wiz");return v.scrollHeight-v.clientHeight}));
await p.screenshot({path:'out/sf-1-zone.png'});
const n0=await T(()=>$("rrN").textContent);await p.click('#zSkipC');await p.waitForTimeout(500);console.log('skip on:',n0,'→',await T(()=>$("rrN").textContent),await T(()=>$("zSkipC").getAttribute('aria-pressed')));
await p.screenshot({path:'out/sf-1b-on.png'});await p.click('#zSkipC');await p.waitForTimeout(300);
await p.click('#wBack');await p.waitForTimeout(500);console.log('back →',await st());
// pack owner
await T(()=>{S.tpacks={spin:true};save();renderWiz()});await p.click('#wNext');await p.waitForTimeout(600);
console.log('owner: after time →',await st(),'|',await T(()=>$("wBody").querySelector('h1').textContent),'| packs',await T(()=>document.querySelectorAll('#wBody [data-dp]').length));
await p.screenshot({path:'out/sf-2-decks.png'});
await p.click('#wNext');await p.waitForTimeout(1500);console.log('→',await st(),'| cta',await T(()=>$("cta").innerText));
await p.click('#wBack');await p.waitForTimeout(400);console.log('back →',await st());await p.click('#wBack');await p.waitForTimeout(400);console.log('back →',await st());
// R&R skips decks
await T(()=>{S.wiz={step:0,len:60,rr:false,radius:1};save();renderWiz()});
// start the crawl from the zone step
await p.click('#wNext');await p.waitForTimeout(500);await p.click('#wNext');await p.waitForTimeout(1500);await p.click('#wNext');await p.waitForTimeout(1500);
console.log('route',await T(()=>S.route),'| invite pill',await T(()=>!!document.querySelector('#v-play [data-mxinv]')));
await p.screenshot({path:'out/sf-3-first.png'});
await p.setViewportSize({width:375,height:667});await T(()=>{S.game=null;S.wiz={step:1,len:60,rr:false,radius:1};save();go('wiz')});await p.waitForTimeout(1800);
console.log('SE map h',await T(()=>Math.round(document.querySelector('#rrMap').getBoundingClientRect().height)),'scroll',await T(()=>{const v=$("v-wiz");return v.scrollHeight-v.clientHeight}),'chip',await T(()=>!$("zSkipC").hidden));
await p.screenshot({path:'out/sf-4-se.png'});
console.log('errors',e);await b.close()})();
