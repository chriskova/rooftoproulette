// First Play asks "Heading out now?"; the first bar far away asks "You're not near this bar";
// the way there shows a locked main button with a small re-spin link.
// node batch2.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8150,longitude:151.0011,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
await p.evaluate(async()=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};save();go('home');await getOnce().catch(()=>{})});await p.waitForTimeout(500);
await p.click('#newGame');await p.waitForTimeout(700);
console.log('first play:',await p.evaluate(()=>$('sheet').open&&$('sheetBody').querySelector('h3').textContent));
await p.screenshot({path:'out/b2-first.png'});
await p.click('#fpOut');await p.waitForTimeout(500);console.log('after out:',await p.evaluate(()=>S.route));
await p.evaluate(()=>{S.wiz=null;const c={lat:-33.8688,lng:151.2093};S.game={id:"g"+Date.now(),mode:"rush",city:"Sydney",len:60,radius:1,newOnly:false,center:c,startPos:c,areas:["CBD"],moves:[],voluntaryUsed:false,freeSkips:0,excluded:[],zone:{lat:c.lat,lng:c.lng,name:"CBD"},cz:{type:"me",r:1},visits:[],target:null,started:false,ended:false};save();go('play')});
await p.waitForTimeout(800);
await p.evaluate(()=>doSpin(true,-14));await p.waitForFunction(()=>!spinning&&S.game.target,null,{timeout:30000}).catch(()=>{});
await p.waitForTimeout(4000);
console.log('far sheet:',await p.evaluate(()=>$('sheet').open&&$('sheetBody').querySelector('h3').textContent+' | '+$('sheetBody').querySelector('.note').textContent));
await p.screenshot({path:'out/b2-far.png'});
await p.click('#fbKeep');await p.waitForTimeout(600);
await p.screenshot({path:'out/b2-enroute.png'});
console.log('lock:',await p.evaluate(()=>!!$('lockBtn')),'skip:',await p.evaluate(()=>$('skipBtn')&&$('skipBtn').textContent));
await p.click('#lockBtn',{force:true});await p.waitForTimeout(400);console.log('toast:',await p.evaluate(()=>($('toast')||{}).textContent));
// asked once only
await p.evaluate(()=>renderPlay());await p.waitForTimeout(2500);console.log('asked again:',await p.evaluate(()=>$('sheet').open));
// reel: an upward flick spins
await p.evaluate(()=>{S.game.target=null;save();renderPlay()});await p.waitForTimeout(800);
const box=await p.$('#reelBox');const bb=await box.boundingBox();const x=bb.x+bb.width/2,y=bb.y+bb.height*.7;
await p.mouse.move(x,y);await p.mouse.down();for(let i=1;i<=6;i++){await p.mouse.move(x,y-i*30);await p.waitForTimeout(10)}await p.mouse.up();
await p.waitForTimeout(300);console.log('up flick spins:',await p.evaluate(()=>spinning||!!S.game.target));
console.log(e);await b.close()})();
