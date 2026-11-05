// Away from the live cities: starting a game shows "We're not in your city yet"; the Sydney demo plays through and saves nothing.
// node demo.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:34.0522,longitude:-118.2437,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(500);
await p.evaluate(()=>{const d=new Date();d.setHours(19,0,0,0);});
// intro → straight home (no city step)
for(let i=0;i<8&&await p.evaluate(()=>S.route==='intro');i++){await p.click('#introNext');await p.waitForTimeout(150)}
console.log('after intro:',await p.evaluate(()=>S.route));
await p.evaluate(async()=>{S.seenHow={rush:1,rr:1};save();await getOnce().catch(()=>{})});await p.waitForTimeout(300);
await p.click('#newGame');await p.waitForTimeout(600);await p.screenshot({path:'out/d1.png'});
console.log('far sheet:',await p.evaluate(()=>document.querySelector('#sheetBody h3')&&document.querySelector('#sheetBody h3').textContent));
await p.click('#fsTrip');await p.waitForTimeout(400);await p.screenshot({path:'out/d1b.png'});await p.evaluate(()=>{closeSheet();farSheet()});await p.waitForTimeout(400);await p.click('#fsDemo');await p.waitForTimeout(1200);
// make sure bars are open in the demo regardless of the real clock: jump the demo clock to 7pm Sydney
await p.evaluate(()=>{const s=sydAt(now());let d=(19*60-s.min);if(d<0)d+=1440;S.game.dff=d*60000;save();renderPlay()});await p.waitForTimeout(500);
await p.screenshot({path:'out/d2.png'});
for(let k=0;k<3;k++){
  await p.evaluate(()=>doSpin(true,2.2));await p.waitForFunction(()=>!spinning&&S.game.target&&!document.querySelector('.jpx'),null,{timeout:40000}).catch(()=>{});await p.waitForTimeout(800);
  await p.evaluate(()=>{const s=document.querySelector('#sheet');if(s&&s.open)closeSheet()});await p.waitForTimeout(300);
  if(k===0)await p.screenshot({path:'out/d3.png'});
  if(!(await p.$('#dHere'))){console.log('no I-m-here at spin',k,await p.evaluate(()=>{const g=S.game,a=atVisit();return JSON.stringify({t:g.target,a:a&&a.id,bar:(document.querySelector('.demobar')||{}).textContent,sheet:$('sheet').open,jp:!!g.jp,wild:!!g.wild,spinning})}));break}
  await p.click('#dHere');await p.waitForTimeout(2500);
  await p.evaluate(()=>{document.querySelectorAll('.ctcard,.celebrate,.arrive').forEach(x=>x.remove&&0)});
  if(k===0)await p.screenshot({path:'out/d4.png'});
  if(await p.$('#dSkip')){await p.click('#dSkip');await p.waitForTimeout(2500)}
}
console.log('visits',await p.evaluate(()=>S.game&&S.game.visits.map(v=>v.id+':'+v.counted).join(', ')));
await p.evaluate(()=>{const s=document.querySelector('#sheet');if(s&&s.open)closeSheet()});
await p.evaluate(()=>endGame(now()));await p.waitForTimeout(2000);await p.screenshot({path:'out/d5.png'});
console.log('route',await p.evaluate(()=>S.route),'saved to tab:',await p.evaluate(()=>H.length),'real gps watch:',await p.evaluate(()=>watchId));
console.log(e);await b.close()})();
