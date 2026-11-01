// Crawl options: rename, move between real and test, delete with undo.
// node crawl-menu.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;const t0=Date.now()-864e5,st={lat:-33.859,lng:151.207};
 const mk=(id,d,ids)=>({id,test:true,city:'Sydney',mode:'rush',len:60,startedAt:t0-d*864e5,endsAt:t0-d*864e5+36e5,endedAt:t0-d*864e5+36e5,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits:ids.map((x,i)=>({id:x,arrivedAt:t0-d*864e5+(i+1)*9e5,leftAt:t0-d*864e5+(i+1)*9e5+5e5,counted:true})),trail:[],moves:[]});
 H.length=0;H.push(mk('a',0,['the-glenmore','untied']),mk('b',3,['smoke-bar']));saveH();S.lastEnd='a';save();go('end')});
await p.waitForTimeout(1200);await p.click('#scMore');await p.waitForTimeout(400);await p.screenshot({path:'out/m1.png'});
await p.click('#cmName');await p.waitForTimeout(300);await p.fill('#cnIn','Jess’s birthday');await p.click('#cnSave');await p.waitForTimeout(500);
await p.screenshot({path:'out/m2.png'});
await p.evaluate(()=>go('hist'));await p.waitForTimeout(400);await p.screenshot({path:'out/m3.png'});
await p.click('.hrow[data-id="a"]',{button:'right'});await p.waitForTimeout(400);await p.click('#cmDel');await p.waitForTimeout(500);
console.log('after delete',await p.evaluate(()=>H.map(r=>r.id).join(',')));await p.screenshot({path:'out/m4.png'});
await p.click('.tundo');await p.waitForTimeout(300);console.log('after undo',await p.evaluate(()=>H.map(r=>r.id+':'+(r.title||'')).join(',')));
await p.click('.hrow[data-id="b"]',{button:'right'});await p.waitForTimeout(400);await p.click('#cmMove');await p.waitForTimeout(400);
console.log('test list',await p.evaluate(()=>H.map(r=>r.id).join(',')),'real store',await p.evaluate(()=>readH(HKEY).map(r=>r.id+':'+r.test).join(',')));
console.log(e);await b.close()})();
