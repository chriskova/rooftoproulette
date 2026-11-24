const {chromium,devices}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
const img='file://'+path.resolve('out/fakebar.jpg');
await p.evaluate((img)=>{S.onboarded=true;S.test=true;S.sound=false;S.tpacks={spin:true};save();phMem["panorama-bar"]={url:img,by:"Test"};
 S.game={id:"x"+Date.now(),mode:"rush",len:60,visits:[{id:"the-glenmore",arrivedAt:now()-30*60000,leftAt:now()-20*60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,cz:{type:"me",r:1},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-30*60000,endsAt:now()+30*60000,target:"panorama-bar",targetFrom:{lat:-33.8688,lng:151.2093},targetAt:now()-5*60000,wild:{id:"panorama-bar",text:"Everyone orders something with the spirit it lands on.",leg:1,t0:now()-5*60000,shown:true,landed:true},wplan:[1],test:true};save();go('play')},img);
await p.waitForTimeout(1800);await p.screenshot({path:'out/ph-card.png'});if(process.argv[3]==='dark'){await p.emulateMedia({colorScheme:'dark'});await p.evaluate(()=>{document.documentElement.classList.add('dark');renderPlay()});await p.waitForTimeout(500);await p.screenshot({path:'out/ph-card-dark.png'});console.log('dark',await p.evaluate(()=>getComputedStyle(document.querySelector('#stage .wild')).backgroundColor))}
console.log(await p.evaluate(()=>{const w=document.querySelector('#stage .wild');const c=getComputedStyle(w);return [w.parentElement.className,c.backgroundColor].join(' | ')}));
// fly-in: deal a fresh one and grab the flying card mid-way
await p.evaluate(()=>{const g=G();g.wild={id:"panorama-bar",text:"Everyone orders something with the spirit it lands on.",leg:1,t0:now(),dealing:true};save();renderPlay()});
for(let k=0;k<12;k++){await p.waitForTimeout(150);if(await p.evaluate(()=>!!document.querySelector('.wfly'))){await p.waitForTimeout(250);await p.screenshot({path:'out/ph-fly.png'});console.log('fly',await p.evaluate(()=>{const f=document.querySelector('.wfly');return f.className+' | '+getComputedStyle(f).backgroundColor}));break}}
console.log('errors',e);await b.close()})();
