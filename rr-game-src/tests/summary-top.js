// Crawl card summary: back arrow + one-line title + ⋯, no Play again on an old crawl, photo opens photos & clips.
// node summary-top.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(async()=>{S.onboarded=true;const t0=new Date(2026,9,31,14,0).getTime(),st={lat:-33.869,lng:151.207};
 const c=document.createElement('canvas');c.width=900;c.height=1200;const x=c.getContext('2d');x.fillStyle='#3a6';x.fillRect(0,0,900,1200);x.fillStyle='#fff';x.font='120px sans-serif';x.fillText('PHOTO',200,600);const ph=c.toDataURL('image/jpeg',.7);
 H.length=0;H.push({id:'a',title:'Pilot',city:'Sydney',mode:'rush',len:120,radius:1,startedAt:t0,endsAt:t0+72e5,endedAt:t0+72e5,started:true,ended:true,startPos:st,center:st,areas:['Sydney CBD'],
  visits:['the-rooftop-sydney','sora-rooftop-bar','smoke-bar','untied'].map((id,i)=>({id,arrivedAt:t0+(i*30+5)*6e4,leftAt:t0+(i*30+28)*6e4,counted:true})),trail:[],moves:[],bodDone:true,photos:[ph],photo:ph});saveH();
 // a clip for this crawl
 const cv=document.createElement('canvas');cv.width=64;cv.height=64;const blob=await new Promise(r=>cv.toBlob(r,'image/png'));await clipPut({id:'c1',game:'a',at:t0+40*6e4,type:'video/mp4',blob});
 S.histTab=null;save();go('hist')});
await p.waitForTimeout(400);
await p.evaluate(()=>{crawlsSheet()});await p.waitForTimeout(300);await p.click('#sheetBody .hrow');await p.waitForTimeout(1500);
await p.screenshot({path:'out/u1.png'});
console.log('title one line:',await p.evaluate(()=>{const t=document.querySelector('.scttl');return t.scrollWidth<=t.clientWidth+1&&t.getBoundingClientRect().height<30}),'play again shown:',!!(await p.$('#runBack')),'back goes to:',await p.evaluate(()=>S.endBack));
console.log('clip badge:',await p.evaluate(()=>(document.querySelector('.phclips')||{}).textContent));
await p.click('#scPh');await p.waitForTimeout(600);await p.screenshot({path:'out/u2.png'});
console.log('viewer:',await p.evaluate(()=>document.querySelector('.mv-n').textContent+' | '+document.querySelector('.mv-acts').textContent));
await p.evaluate(()=>{const c=document.querySelector('.mv-car');c.scrollLeft=c.clientWidth});await p.waitForTimeout(500);
console.log('slide 2:',await p.evaluate(()=>document.querySelector('.mv-n').textContent+' | '+document.querySelector('.mv-acts').textContent));
await p.click('.mv-x');await p.waitForTimeout(400);
await p.click('#scMore');await p.waitForTimeout(500);console.log('menu media:',await p.evaluate(()=>!$('cmMedia').hidden&&$('cmMediaS').textContent));
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);await p.click('#doneBtn');await p.waitForTimeout(400);console.log('back to:',await p.evaluate(()=>S.route));
console.log(e);await b.close()})();
