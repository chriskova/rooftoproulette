// Location blocked: the warning when a round starts, playing without it (manual check-ins), estimates on the crawl card.
// node noloc.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.addInitScript(()=>{navigator.permissions.query=()=>Promise.resolve({state:'denied'});
  navigator.geolocation.getCurrentPosition=(ok,err)=>setTimeout(()=>err({code:1,message:'denied'}),10);navigator.geolocation.watchPosition=(ok,err)=>{setTimeout(()=>err({code:1}),10);return 1}});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};const a=AREAS.find(x=>areaCity(x)==='Sydney');S.wiz={step:2,start:{type:'area',name:'Sydney CBD',lat:-33.8688,lng:151.2093},radius:1,len:60,newOnly:false};save();go('wiz')});
await p.waitForTimeout(500);
await p.evaluate(()=>tryStart());await p.waitForTimeout(500);await p.screenshot({path:'out/nl1.png'});
console.log('warning:',await p.evaluate(()=>document.querySelector('#sheetBody h3')&&document.querySelector('#sheetBody h3').textContent));
await p.click('#nlGo');await p.waitForTimeout(800);
console.log('playing:',await p.evaluate(()=>S.route+' noLoc='+S.game.noLoc),'tag:',await p.evaluate(()=>($('manTag')||{}).textContent));
// a 7pm clock so bars are open, spin, tap I'm here, wait, spin, leave, arrive
await p.evaluate(()=>{S.test=false});
await p.evaluate(()=>{const g=S.game,t=Date.now();g.started=true;g.startedAt=t-30*6e4;g.endsAt=t+30*6e4;g.target='the-glenmore';g.targetAt=t-12*6e4;g.targetFrom=g.startPos;save();renderPlay()});await p.waitForTimeout(400);
await p.screenshot({path:'out/nl2.png'});
console.log('manual button shown:',await p.evaluate(()=>!!document.querySelector('#stage button')&&[...document.querySelectorAll('#stage button')].map(b=>b.textContent.trim()).filter(Boolean).slice(0,4).join(' | ')));
await p.evaluate(()=>{logArrival(true);const g=S.game,a=g.visits[0];a.arrivedAt-=20*6e4;closeVisit(a,Date.now()-2*6e4,"walk");save();endGame(now())});await p.waitForTimeout(1500);
await p.screenshot({path:'out/nl3.png'});
console.log('card:',await p.evaluate(()=>[(document.querySelector('.estnote')||{}).textContent,[...document.querySelectorAll('#v-end .tm')].map(x=>x.textContent).join(',')].join(' | ')));
console.log(e);await b.close()})();
