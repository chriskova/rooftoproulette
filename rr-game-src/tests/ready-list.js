// Ready to spin: map + list (Crawl, Zone, Rooftops in play, Skip been, Wildcards, Friends), full-width Start, no Wildcards step
// node ready-list.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(500);
const T=f=>p.evaluate(f);
await T(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1};S.fake={lat:-33.8688,lng:151.2093};const z={lat:-33.8688,lng:151.2093};
  const L=playable(inCircle(z,1),false).slice(0,3);H.push({id:"hx",city:"Sydney",mode:"rush",len:60,visits:L.map((v,i)=>({id:v.id,arrivedAt:now()-86400000+i*600000,leftAt:now()-86400000+i*600000+300000,counted:true}))});
  S.tpacks={spin:true};S.wiz={step:1,len:60,rr:false,radius:1,z:{lat:-33.8688,lng:151.2093,r:1}};save();go('wiz')});
await p.waitForTimeout(1500);await p.click('#wNext');await p.waitForTimeout(1500);
console.log('step',await T(()=>S.wiz.step),'rows',await T(()=>[...document.querySelectorAll('.rlist .rrow')].map(r=>r.innerText.replace(/\n/g,' / ')).join(' | ')));
console.log('scroll',await T(()=>{const v=$("v-wiz");return v.scrollHeight-v.clientHeight}),'map h',await T(()=>Math.round(document.querySelector('.rmap').getBoundingClientRect().height)),'cta',await T(()=>$("cta").innerText));
await p.screenshot({path:'out/rp-1.png'});
const n0=await T(()=>$("wSeeV").textContent);await p.click('#newTog');await p.waitForTimeout(300);console.log('in play',n0,'->',await T(()=>$("wSeeV").textContent));
await p.screenshot({path:'out/rp-2-skip.png'});
await p.click('#rBeen');await p.waitForTimeout(500);await p.screenshot({path:'out/rp-3-been.png'});console.log('been sheet',await T(()=>document.querySelectorAll('[data-b]').length));
await T(()=>closeSheet());await p.waitForTimeout(300);
await p.click('#rDeck');await p.waitForTimeout(500);await p.click('[data-dk="free"]');await p.waitForTimeout(600);console.log('deck val',await T(()=>$("rDeckV").textContent));await T(()=>closeSheet());await p.waitForTimeout(300);
await p.click('#rZone');await p.waitForTimeout(500);console.log('zone ->',await T(()=>S.wiz.step));await p.click('#wNext');await p.waitForTimeout(800);
await p.click('#wBack');await p.waitForTimeout(400);console.log('back ->',await T(()=>S.wiz.step));
await T(()=>{const v=$("v-wiz");});await p.setViewportSize({width:375,height:667});await T(()=>{S.wiz.step=2;renderWiz()});await p.waitForTimeout(1200);
console.log('SE scroll',await T(()=>{const v=$("v-wiz");return v.scrollHeight-v.clientHeight}),'map h',await T(()=>Math.round(document.querySelector('.rmap').getBoundingClientRect().height)));await p.screenshot({path:'out/rp-4-se.png'});
console.log('errors',e);await b.close()})();
