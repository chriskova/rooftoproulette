const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{fs.mkdirSync('out',{recursive:true});
const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.test=true;S.sound=false;S.wiz={step:0,len:60,rr:false,radius:1};save();go('wiz')});await p.waitForTimeout(800);await p.screenshot({path:'out/st-0.png'});
await p.evaluate(()=>{S.wiz={step:2,len:60,rr:false,radius:1,z:{lat:-33.8688,lng:151.2093,r:1},start:{type:"spot",name:"Darlinghurst",lat:-33.8688,lng:151.2093}};save();go('wiz')});await p.waitForTimeout(1500);await p.screenshot({path:'out/st-2.png'});
console.log('steps',await p.evaluate(()=>[...document.querySelectorAll('.wst')].map(x=>x.innerText+(x.matches('.done')?'*':''))));
await p.click('.wst.done[data-s="0"]');await p.waitForTimeout(600);console.log('jumped to',await p.evaluate(()=>S.wiz.step));
console.log('errors',e);await b.close()})();
