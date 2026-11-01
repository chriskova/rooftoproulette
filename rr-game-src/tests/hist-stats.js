// Seeds a few months of crawls and screenshots the History tab, the Bar visits screen and the Records.
// node hist-stats.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{fs.mkdirSync('out',{recursive:true});
const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.test=true;S.sound=false;
  const M=60000,day=86400000,base=new Date();base.setHours(18,0,0,0);
  const st={lat:-33.8590,lng:151.2070};
  const mk=(id,daysAgo,mode,len,bars,areas,startH)=>{const t0=base.getTime()-daysAgo*day+((startH||18)-18)*3600000;let t=t0+6*M;
    const visits=bars.map(([bid,stay,walk,counted])=>{const v={id:bid,arrivedAt:t+walk*M,leftAt:t+walk*M+stay*M,counted:counted!==false};t=v.leftAt;return v});
    const end=mode==='cruise'?t+5*M:t0+len*M;
    return {id,city:'Sydney',mode,len,radius:.8,startedAt:t0,endsAt:end,endedAt:end,started:true,ended:true,startPos:st,center:st,areas,visits,trail:[],moves:[],barOfDay:bars[1]?bars[1][0]:null,newIds:bars.slice(0,2).map(x=>x[0])}};
  H.length=0;
  H.push(mk('g6',1,'rush',60,[['the-glenmore',9,6],['harbour-view-hotel',8,7],['henry-deane',2,9,false],['smoke-bar',10,8],['untied',6,4]],['The Rocks','Barangaroo']));
  H.push(mk('g5',8,'cruise',0,[['monica-rooftop',72,12],['royal-hotel',41,6],['the-light-brigade',55,9]],['Paddington'],14));
  H.push(mk('g4',15,'rush',120,[['the-glenmore',12,5],['sky-bar-shell-house',14,11],['the-rook',9,6],['jimmy-s-rooftop',11,4],['above-319',7,5],['zephyr',10,9],['panorama-bar',6,3]],['The Rocks','Sydney CBD']));
  H.push(mk('g3',34,'rush',60,[['slims-rooftop',11,7],['burdekin-rooftop',9,2],['east-village-hotel',14,4]],['Darlinghurst']));
  H.push(mk('g2',41,'cruise',0,[['the-glenmore',95,8],['the-tilbury',38,24]],['The Rocks','Woolloomooloo']));
  H.push(mk('g1',63,'rush',60,[['untied',8,9],['cirq',4,3],['smoke-bar',12,2],['the-glenmore',7,18]],['Barangaroo','The Rocks']));
  saveH();save();go('hist')});
await p.waitForTimeout(800);await p.screenshot({path:'out/h1.png'});
if(await p.$('#hVisits')){await p.click('#hVisits');await p.waitForTimeout(500);await p.screenshot({path:'out/h2.png'});
  if(await p.$('[data-vt="bars"]')){await p.click('[data-vt="bars"]');await p.waitForTimeout(400);await p.screenshot({path:'out/h3.png'})}
  await p.evaluate(()=>closeSheet());await p.waitForTimeout(400)}
if(await p.$('.recs')){await p.evaluate(()=>document.querySelector('.recs').scrollIntoView());await p.waitForTimeout(200);await p.screenshot({path:'out/h4.png'})}
if(await p.$('#hStats')){await p.click('#hStats');await p.waitForTimeout(500);await p.screenshot({path:'out/h5.png'});await p.evaluate(()=>closeSheet());await p.waitForTimeout(300)}
await p.click('#hVisits');await p.waitForTimeout(400);await p.click('[data-vt="bars"]');await p.waitForTimeout(300);await p.click('[data-b="the-glenmore"]');await p.waitForTimeout(600);await p.screenshot({path:'out/h6.png'});await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);await p.click('.rec');await p.waitForTimeout(800);console.log('route',await p.evaluate(()=>S.route+' '+S.lastEnd));
console.log(e);await b.close()})();
