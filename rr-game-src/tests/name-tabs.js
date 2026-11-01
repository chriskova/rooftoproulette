// Summary name pill + History tabs. node name-tabs.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;const t0=Date.now()-864e5,st={lat:-33.859,lng:151.207};
 const mk=(id,d,ids)=>({id,test:true,city:'Sydney',mode:'rush',len:60,radius:.8,startedAt:t0-d*864e5,endsAt:t0-d*864e5+36e5,endedAt:t0-d*864e5+36e5,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits:ids.map((x,i)=>({id:x,arrivedAt:t0-d*864e5+(i+1)*9e5,leftAt:t0-d*864e5+(i+1)*9e5+5e5,counted:true})),trail:[],moves:[]});
 H.length=0;H.push(mk('a',0,['the-glenmore','untied','smoke-bar']),mk('b',3,['cirq','untied']));saveH();S.lastEnd='a';S.rackEnd=null;save();go('end')});
await p.waitForTimeout(1500);await p.screenshot({path:'out/n1.png'});
await p.click('#scName');await p.waitForTimeout(300);await p.fill('#cnIn','Jess’s birthday');await p.click('#cnSave');await p.waitForTimeout(800);await p.screenshot({path:'out/n2.png'});
await p.evaluate(()=>go('hist'));await p.waitForTimeout(400);await p.screenshot({path:'out/n3.png'});
await p.click('[data-ht="bests"]');await p.waitForTimeout(300);await p.screenshot({path:'out/n4.png'});
console.log(e);await b.close()})();
