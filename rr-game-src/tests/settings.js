// Settings gear (home + top bar), toggles, and day-neutral R&R wording.
// node settings.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;save();go('home')});await p.waitForTimeout(500);await p.screenshot({path:'out/s1.png'});
await p.evaluate(()=>settingsSheet());await p.waitForTimeout(400);await p.screenshot({path:'out/s2.png'});
await p.click('#stVib');await p.waitForTimeout(200);console.log('vib',await p.evaluate(()=>S.vib));
await p.evaluate(()=>closeSheet());
// a daytime R&R crawl
await p.evaluate(()=>{const d=new Date();d.setDate(d.getDate()-1);d.setHours(13,0,0,0);const t0=d.getTime(),st={lat:-33.859,lng:151.207};
 const r={id:'day',test:true,city:'Sydney',mode:'cruise',len:1440,radius:1,startedAt:t0,endsAt:t0+3*36e5,endedAt:t0+3*36e5,started:true,ended:true,startPos:st,center:st,areas:['Paddington'],visits:[{id:'monica-rooftop',arrivedAt:t0+6e5,leftAt:t0+60*6e4,counted:true},{id:'royal-hotel',arrivedAt:t0+70*6e4,leftAt:t0+150*6e4,counted:true}],trail:[],moves:[]};
 H.unshift(r);saveH();S.lastEnd='day';S.rackEnd=null;save();go('end')});await p.waitForTimeout(1500);await p.screenshot({path:'out/s3.png'});
await p.evaluate(()=>go('hist'));await p.waitForTimeout(300);await p.evaluate(()=>settingsSheet());await p.waitForTimeout(300);
console.log('clear btn',!!(await p.$('#stClr')));await p.click('#stClr');await p.waitForTimeout(200);await p.click('#stClrY');await p.waitForTimeout(300);
console.log('test H',await p.evaluate(()=>H.length+' '+localStorage.getItem('rr-history-test')));
await p.evaluate(()=>settingsSheet());await p.waitForTimeout(300);await p.click('#stTest');await p.waitForTimeout(300);console.log('test off',await p.evaluate(()=>S.test+' ff '+S.ff+' route '+S.route));
console.log(e);await b.close()})();
