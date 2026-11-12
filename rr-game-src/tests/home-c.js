// New home (one Play), R&R line on the length step, intro replay from How it works, zone step line, low-zone Move zone.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(800);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.rules={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};save();go('home')});await p.waitForTimeout(800);
await p.screenshot({path:'out/hc-home.png'});
await p.click('#homeHow');await p.waitForTimeout(500);console.log('replay route:',await p.evaluate(()=>S.route));
for(let i=0;i<4;i++){await p.click('#introNext');await p.waitForTimeout(350)}
console.log('last button:',await p.evaluate(()=>$('introNext').textContent));await p.screenshot({path:'out/hc-intro5.png'});
await p.click('#introNext');await p.waitForTimeout(500);console.log('back home:',await p.evaluate(()=>S.route+' '+S.onboarded));
await p.click('#newGame');await p.waitForTimeout(800);await p.screenshot({path:'out/hc-len.png'});
await p.click('#wNext');await p.waitForTimeout(1500);await p.screenshot({path:'out/hc-zone.png'});
await p.evaluate(()=>{S.wiz.step=0;save();renderWiz()});await p.waitForTimeout(400);
await p.click('#wRR');await p.waitForTimeout(800);console.log('rr route:',await p.evaluate(()=>S.route+' wiz:'+!!S.wiz));
// low pool on the wheel
await p.evaluate(()=>{const c={lat:-33.8688,lng:151.2093};S.quick=null;S.game={id:"g1",mode:"rush",city:"Sydney",len:60,radius:.3,newOnly:false,center:c,startPos:c,areas:["CBD"],moves:[],voluntaryUsed:false,freeSkips:0,excluded:[],zone:{lat:c.lat,lng:c.lng,name:"CBD"},cz:{type:"me",r:.3},visits:[{id:"the-glenmore",arrivedAt:now()-600000,leftAt:now()-300000,counted:true}],target:null,started:true,startedAt:now()-900000,endsAt:now()+2700000,test:true};save();go('play')});
await p.waitForTimeout(600);await p.evaluate(()=>{const ids=basePool().map(v=>v.id);S.game.excluded=ids.slice(2);save();renderPlay()});await p.waitForTimeout(500);console.log('pool:',await p.evaluate(()=>{const x=document.querySelector('.poolnum');return x?x.textContent:'none'}),'move link:',await p.evaluate(()=>!!$('poolMove')));
await p.screenshot({path:'out/hc-pool.png'});
if(await p.$('#poolMove')){await p.click('#poolMove');await p.waitForTimeout(600);console.log('move sheet:',await p.evaluate(()=>$('sheet').open))}
console.log(e);await b.close()})();
