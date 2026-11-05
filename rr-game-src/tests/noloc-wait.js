// No-location: I'm here is greyed out with a countdown until half the walk has passed, then opens; the visit counts as a bar visit.
// node noloc-wait.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;const t=Date.now(),st={lat:-33.8688,lng:151.2093};
 S.game={id:'gw',city:'Sydney',mode:'rush',len:60,radius:1,noLoc:true,started:true,startedAt:t-6e4,endsAt:t+59*6e4,startPos:st,center:st,areas:['Sydney CBD'],moves:[],visits:[],trail:[],zone:{lat:st.lat,lng:st.lng},target:'the-glenmore',targetAt:t,targetFrom:st};save();go('play')});
await p.waitForTimeout(500);
const walk=await p.evaluate(()=>walkMin(S.game.targetFrom,byId('the-glenmore')));
console.log('walk min',walk,'| button now:',await p.evaluate(()=>$('hereBtn').classList.contains('locked')+' "'+$('hereBtn').textContent.trim()+'" | why: '+(($('hereWhy')||{}).textContent||'none')));
await p.screenshot({path:'out/w1.png'});
// jump the clock past half the walk
await p.evaluate(w=>{S.game.targetAt-=Math.ceil(w/3)*60000+1000;save()},walk);await p.waitForTimeout(1300);
console.log('after a third of the walk:',await p.evaluate(()=>$('hereBtn').classList.contains('locked')+' "'+$('hereBtn').textContent.trim()+'" | why: '+(($('hereWhy')||{}).textContent||'none')));
await p.click('#hereBtn');await p.waitForTimeout(400);
await p.evaluate(()=>{const a=S.game.visits[0];a.arrivedAt-=4*6e4;save();loop()});await p.waitForTimeout(1200);
await p.evaluate(()=>endGame(now()));await p.waitForTimeout(800);
console.log('counted:',await p.evaluate(()=>H[0].visits.map(v=>v.id+':'+v.counted).join(',')),'bar visits on tab:',await p.evaluate(()=>allVisits().length));
console.log(e);await b.close()})();
