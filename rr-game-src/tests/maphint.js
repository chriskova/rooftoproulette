// Map hints come one at a time: Your crawl nudge first, then the dot + tip on the map icon, cleared once the map is opened.
// node maphint.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};S.tips={cam:1,map:1};save();startDemo();const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+36e5;const v=basePool().find(v=>openOK(v,now()));setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});
await p.waitForTimeout(500);await p.click('#dWalk');await p.waitForTimeout(2500);
const st=()=>p.evaluate(()=>JSON.stringify({nudge:!!document.querySelector('.cnudge'),dot:$('pMap').classList.contains('hasdot'),tip:!!document.querySelector('.maptip')}));
console.log('first arrival:',await st());await p.screenshot({path:'out/h1.png'});
await p.click('#pCount');await p.waitForTimeout(600);await p.evaluate(()=>closeSheet());await p.waitForTimeout(400);await p.evaluate(()=>renderPlay());await p.waitForTimeout(1300);
console.log('after Your crawl:',await st(),await p.evaluate(()=>{const r=$('pMap').getBoundingClientRect(),t=document.querySelector('.maptip');return JSON.stringify({icon:[r.top,r.bottom],tipTop:t&&t.style.top,tipRect:t&&t.getBoundingClientRect().top,anim:t&&getComputedStyle(t).transform})}));await p.screenshot({path:'out/h2.png'});
await p.waitForTimeout(1600);await p.mouse.click(180,500);await p.waitForTimeout(300);console.log('tip closed, dot stays:',await st());
await p.click('#pMap');await p.waitForTimeout(1200);await p.click('.mf-x');await p.waitForTimeout(400);await p.evaluate(()=>renderPlay());await p.waitForTimeout(1200);
console.log('after opening map:',await st());
console.log('ERRORS',e);await b.close()})();
