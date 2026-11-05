// My Tab tiles: Bar visits history (bar opens its card), Most time at, Distance and Time at bars per crawl with drill-down.
// node mytab-sheets.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;const t0=Date.now()-864e5,st={lat:-33.859,lng:151.207};
 const mk=(id,d,ids,stay)=>({id,city:'Sydney',mode:'rush',len:60,radius:1,startedAt:t0-d*864e5,endsAt:t0-d*864e5+36e5,endedAt:t0-d*864e5+36e5,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits:ids.map((x,i)=>({id:x,arrivedAt:t0-d*864e5+(i+1)*12e5,leftAt:t0-d*864e5+(i+1)*12e5+stay*6e4,counted:true})),trail:[],moves:[],bodDone:true});
 H.length=0;H.push(mk('a',0,['the-glenmore','untied','smoke-bar'],9),mk('b',3,['the-glenmore','cirq'],15));H[1].title='Jess’s birthday';saveH();save();go('hist')});
await p.waitForTimeout(500);await p.screenshot({path:'out/s1.png'});
await p.click('#hVisits');await p.waitForTimeout(400);await p.screenshot({path:'out/s2.png'});
await p.click('.vrow[data-b="the-glenmore"]');await p.waitForTimeout(500);await p.screenshot({path:'out/s3.png'});
console.log('bar card visits line:',await p.evaluate(()=>($('vHist')||{}).textContent),'back:',!!(await p.$('#bsBack')));
await p.click('#bsBack');await p.waitForTimeout(300);await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
await p.click('#hMost');await p.waitForTimeout(400);console.log('most time at opens:',await p.evaluate(()=>document.querySelector('#sheetBody h2')&&document.querySelector('#sheetBody h2').textContent));
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
await p.click('#hDist');await p.waitForTimeout(400);await p.screenshot({path:'out/s4.png'});
await p.click('[data-cs="a"]');await p.waitForTimeout(400);await p.screenshot({path:'out/s5.png'});
await p.click('#csBack');await p.waitForTimeout(300);await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
await p.click('#hTime');await p.waitForTimeout(400);await p.click('[data-cs="b"]');await p.waitForTimeout(400);await p.screenshot({path:'out/s6.png'});
await p.click('#csOpen');await p.waitForTimeout(800);console.log('see whole crawl:',await p.evaluate(()=>S.route+' '+S.lastEnd));
console.log(e);await b.close()})();
