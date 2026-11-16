// Last orders: heading to a bar when the clock hits 0 keeps the crawl open 10 minutes; arriving counts it, otherwise it ends as before.
// Also: the safety sheet shows before the first real crawl.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch(process.env.X?{executablePath:process.env.X}:{});const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};save();go('home')});
const mk=()=>p.evaluate(()=>{S.game={id:"lo"+Date.now(),mode:"rush",len:60,visits:[{id:"the-glenmore",arrivedAt:now()-30*60000,leftAt:now()-20*60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,cz:{type:"me",r:1},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-58*60000,endsAt:now()+1500,target:"panorama-bar",targetFrom:{lat:-33.8688,lng:151.2093},targetAt:now()-60000,test:true};save();go("play")});
await mk();await p.waitForTimeout(3500);
const st=await p.evaluate(()=>({lo:!!(S.game&&S.game.lastOrders),ended:!S.game,label:$("clockL").textContent,clock:$("clockT").textContent,toast:(document.getElementById("toast")||{}).textContent}));console.log('at zero',JSON.stringify(st));
await p.screenshot({path:'/tmp/lo1.png'});
await p.evaluate(()=>logArrival(true));await p.waitForTimeout(1500);
console.log('arrived',await p.evaluate(()=>{const r=readH(TKEY)[0];return {route:S.route,last:r.visits[r.visits.length-1],missed:r.missed,award:document.querySelector('.aw-t')&&document.querySelector('.aw-t').textContent}}));
await p.screenshot({path:'/tmp/lo2.png'});
// second: never arrives
await p.evaluate(()=>go('home'));await mk();await p.waitForTimeout(3000);await p.evaluate(()=>{S.ff=(S.ff||0)+11*60000;save()});await p.waitForTimeout(2500);
console.log('expired',await p.evaluate(()=>({game:!!S.game,missed:readH(TKEY)[0].missed&&readH(TKEY)[0].missed.id})));
// safety sheet on a real (non-test) first crawl
const q=await ctx.newPage();q.on('pageerror',x=>e.push(x.message));await q.goto('file://'+process.argv[2]);await q.waitForTimeout(600);
await q.evaluate(()=>{S.test=false;S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};delete S.safeOK;save();go('home');startWizard()});await q.waitForTimeout(600);
console.log('safety shown',await q.evaluate(()=>!!document.getElementById('sfOk')));await q.screenshot({path:'/tmp/lo3.png'});
await q.click('#sfOk');await q.waitForTimeout(500);console.log('then wizard',await q.evaluate(()=>S.route));
console.log('errors',e);await b.close()})();
