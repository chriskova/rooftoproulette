// Live crawls: host invites, a follower sees it live, handover, take over when the host goes quiet, and the end lands on the follower's tab.
// node fakecloud-server.js 8787 &  then  node live-crawl.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
const CL='fakecloud=http://127.0.0.1:8787';
(async()=>{const b=await chromium.launch(process.env.X?{executablePath:process.env.X}:{});const e=[];
const mk=async(name)=>{const c=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},permissions:['clipboard-read','clipboard-write']});await c.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
  const p=await c.newPage();p.on('pageerror',x=>e.push(name+': '+x.message));await p.goto('file://'+process.argv[2]+'?test&'+CL);await p.waitForTimeout(600);
  await p.evaluate(n=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};S.myName=n;save();go('home')},name);return p};
const A=await mk('Chris'),B=await mk('Sam');
// host: a started crawl at bar 1
await A.evaluate(()=>{S.game={id:"g1",mode:"rush",len:60,visits:[],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:2,cz:{type:"me",r:2},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-10*60000,endsAt:now()+50*60000,test:false};
  S.game.visits.push({id:"the-glenmore",arrivedAt:now()-5*60000,leftAt:null});save();go("play")});
await A.waitForTimeout(500);await A.evaluate(()=>openMenu());await A.waitForTimeout(300);
console.log('menu has invite',!!await A.$('#mInvite'));
await A.click('#mInvite');await A.waitForTimeout(800);console.log('signed out gate',await A.evaluate(()=>document.querySelector('#sheet h3').textContent));
await A.click('#siG');await A.waitForTimeout(2500);
const id=await A.evaluate(()=>S.game.live);console.log('live id',id);
await A.click('#liCopy');await A.waitForTimeout(300);const link=await A.evaluate(()=>navigator.clipboard.readText());console.log('link',link.replace(/.*#/,'#'));
await A.evaluate(()=>closeSheet());
// follower opens the link
await B.goto('file://'+process.argv[2]+'?test&'+CL+'#live='+id);await B.waitForTimeout(2500);
const fv=await B.evaluate(()=>({open:!!document.querySelector('.followv'),who:$('fvWho')&&$('fvWho').textContent,clock:$('fvClock')&&$('fvClock').textContent,now:$('fvNow')&&$('fvNow').textContent}));console.log('follower',JSON.stringify(fv));
await B.screenshot({path:'/tmp/follow.png'});
// host leaves bar 1 and heads somewhere; follower updates
await A.evaluate(()=>{S.game.visits[0].leftAt=now();S.game.visits[0].counted=true;S.game.target="panorama-bar";save();liveSync(true)});await B.waitForTimeout(1500);
console.log('follower after spin',await B.evaluate(()=>$('fvNow').textContent));
console.log('host sees members',await A.evaluate(()=>Object.values((liveDoc&&liveDoc.members)||{}).map(m=>m.n)));
// handover to Sam
await A.evaluate(()=>giveSpinSheet());await A.waitForTimeout(300);await A.click('[data-gs]');await A.waitForTimeout(2500);
console.log('after handover: A follows',await A.evaluate(()=>({follow:S.follow,game:!!S.game})),' B hosts',await B.evaluate(()=>({route:S.route,live:S.game&&S.game.live})));
// B goes quiet: fake an old beat, A takes over
await B.evaluate(async()=>{const C=await cloud();await C.set('live/'+S.game.live,{beat:Date.now()-6*60000},true)});
await B.evaluate(()=>{window.liveSync=()=>{}});   // B's phone "dies"
await A.waitForTimeout(2000);
console.log('A sees take over',!!await A.$('#fvTake'));await A.screenshot({path:'/tmp/stale.png'});
await A.click('#fvTake');await A.waitForTimeout(2000);
console.log('A hosts again',await A.evaluate(()=>({route:S.route,live:S.game&&S.game.live})));
// A ends the crawl; B (now a follower again after its doc update) gets it on its tab
await B.waitForTimeout(1500);console.log('B now',await B.evaluate(()=>({follow:S.follow,game:!!S.game})));
console.log("A game keys",await A.evaluate(()=>Object.keys(S.game).join(","))); try{await A.evaluate(()=>{S.game.visits.push({id:"panorama-bar",arrivedAt:now()-60000,leftAt:null});save();endGame(now())})}catch(x){console.log("ERR",x.message.split("\n").slice(0,6).join(" / "))}await A.waitForTimeout(2500);
console.log('B tab',await B.evaluate(()=>readH(HKEY).map(r=>({id:r.id,bars:r.visits.length,from:r.followed}))));
console.log('A tab',await A.evaluate(()=>readH(HKEY).map(r=>({id:r.id,bars:r.visits.length,live:r.liveId}))));
await B.screenshot({path:'/tmp/ended.png'});
console.log('errors',e);await b.close()})();
