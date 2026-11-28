// Your spin on a live crawl: followers spin on their own phone, the host's card adds their drink with their name,
// and the host's wheel stays open for anyone not following.
// node fakecloud-server.js 8787 &  then  node yourspin.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
const CL='fakecloud=http://127.0.0.1:8787';
(async()=>{const b=await chromium.launch(process.env.X?{executablePath:process.env.X}:{});const e=[];
const mk=async(name)=>{const c=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},permissions:['clipboard-read','clipboard-write']});await c.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
  const p=await c.newPage();p.on('pageerror',x=>e.push(name+': '+x.message+' @ '+String(x.stack||'').split('\n').slice(1,3).join(' ')));await p.goto('file://'+process.argv[2]+'?test&'+CL);await p.waitForTimeout(600);
  await p.evaluate(n=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};S.myName=n;S.testLive=true;save();go('home')},name);return p};
const A=await mk('Chris'),B=await mk('Sam');
const YS="Pass the phone. Everyone spins for their own drink.";
await A.evaluate(YS=>{S.game={id:"g1",mode:"rush",len:60,visits:[],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:2,cz:{type:"me",r:2},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-10*60000,endsAt:now()+50*60000,test:false};
  S.game.visits.push({id:"the-glenmore",arrivedAt:now()-2*60000,leftAt:null});S.game.wild={id:"the-glenmore",text:YS,leg:0,t0:now()-9*60000,shown:1};save();go("play")},YS);
await A.waitForTimeout(500);
console.log('host caption alone:',await A.evaluate(()=>{const c=document.querySelector('.wcap');return c&&c.textContent}));
await A.click('#pPile');await A.waitForTimeout(800);await A.click('#siG');await A.waitForTimeout(2500);
const id=await A.evaluate(()=>S.game.live);await A.evaluate(()=>closeSheet());
await B.evaluate(id=>followLive(id),id);await B.waitForTimeout(3000);
console.log('follower popup:',await B.evaluate(()=>$("sheet").open&&document.querySelector('#sheetBody h3').textContent+' / '+document.querySelector('#sheetBody .note').textContent));
await B.screenshot({path:'/tmp/ys-follower-pop.png'});
await A.waitForTimeout(500);await A.evaluate(()=>renderPlay());
console.log('host caption with follower:',await A.evaluate(()=>{const c=document.querySelector('.wcap');return c&&c.textContent}));
await B.click('#wsGo');await B.waitForTimeout(4500);
console.log('follower result:',await B.evaluate(()=>$('wsOut').textContent));
await B.screenshot({path:'/tmp/ys-follower-res.png'});
await B.click('#wsDone');await B.waitForTimeout(2000);
console.log('follower strip:',await B.evaluate(()=>document.querySelector('.fv-ws').textContent));
await B.screenshot({path:'/tmp/ys-follower-card.png'});
console.log('host res:',await A.evaluate(()=>JSON.stringify(S.game.wild.res)));
console.log('host card:',await A.evaluate(()=>{const w=document.querySelector('.wild');return w&&w.textContent}));
await A.screenshot({path:'/tmp/ys-host.png'});
// host spins for someone not following
await A.evaluate(()=>wildSpin(S.game.wild.text));await A.waitForTimeout(300);await A.click('#wsGo');await A.waitForTimeout(4500);await A.click('#wsDone');await A.waitForTimeout(1500);
console.log('host res after own spin:',await A.evaluate(()=>JSON.stringify(S.game.wild.res)));
console.log('follower strip after:',await B.evaluate(()=>document.querySelector('.fv-ws').textContent));
// next bar spun: follower can't spin any more
await A.evaluate(()=>{S.game.visits[0].leftAt=now();S.game.target="panorama-bar";S.game.wild=null;S.fake={lat:-33.8688,lng:151.2093};save();liveSync(true)});await B.waitForTimeout(2000);
console.log('follower strip gone:',await B.evaluate(()=>!document.querySelector('[data-fws]')));
console.log('errors',e);await b.close()})();
