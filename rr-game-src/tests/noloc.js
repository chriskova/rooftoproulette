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
console.log('buttons:',await p.evaluate(()=>[...document.querySelectorAll('#stage button')].map(b=>b.id+':'+b.textContent.trim()).filter(x=>!x.startsWith(':')).join(' | ')),'leaving bar:',!!(await p.$('#leaveBtn')));
await p.click('#hereBtn');await p.waitForTimeout(500);console.log('logged on tap:',await p.evaluate(()=>S.game.visits.length+' '+S.game.visits[0].id));
await p.evaluate(()=>{const a=S.game.visits[0];a.arrivedAt-=5*6e4;a.counted=true;S.game.target=null;save();renderPlay()});await p.waitForTimeout(300);
await p.evaluate(()=>{S.game.target='untied';S.game.targetAt=Date.now()-30*6e4;S.game.visits[0].dep=Date.now();save();renderPlay()});await p.waitForTimeout(300);
console.log('next leg, leaving bar shown:',!!(await p.$('#leaveBtn')));await p.screenshot({path:'out/nl2.png'});
await p.click('#hereBtn');await p.waitForTimeout(300);await p.evaluate(()=>endGame(now()));await p.waitForTimeout(800);if(await p.$('#bodSkip'))await p.click('#bodSkip');await p.waitForTimeout(1500);
await p.screenshot({path:'out/nl3.png'});
console.log('card:',await p.evaluate(()=>[(document.querySelector('.estnote')||{}).textContent,'times['+[...document.querySelectorAll('#v-end .tm')].map(x=>x.textContent).join(',')+']','stats['+[...document.querySelectorAll('#v-end .scov small')].map(x=>x.textContent).join(',')+']','award '+document.querySelector('#v-end .aw-t').textContent].join(' | ')));
const cv=await p.evaluate(async()=>{const r=H[0];const bl=await storyCard(r,'a').catch(e=>'ERR '+e.message);return typeof bl==='string'?bl:'card ok '+(bl&&bl.size)});console.log('share card:',cv);
await p.evaluate(()=>go('hist'));await p.waitForTimeout(400);console.log('my tab:',await p.evaluate(()=>[...document.querySelectorAll('.hstats .stat')].map(x=>x.querySelector('small').textContent.replace('›','').trim()+'='+x.querySelector('b').textContent).join(', ')));
console.log(e);await b.close()})();
