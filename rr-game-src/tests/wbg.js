const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7']})).newPage();
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
const src=require('fs').readFileSync('packs-test.js','utf8').split('\n')[10]+'\n'+require('fs').readFileSync('packs-test.js','utf8').split('\n')[11];
await p.evaluate(()=>{S.onboarded=true;S.test=true;S.sound=false;save()});
await p.evaluate(()=>{S.game={id:"x"+Date.now(),mode:"rush",len:60,visits:[{id:"the-glenmore",arrivedAt:now()-30*60000,leftAt:now()-20*60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,cz:{type:"me",r:1},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-30*60000,endsAt:now()+30*60000,target:"panorama-bar",targetFrom:{lat:-33.8688,lng:151.2093},targetAt:now()-5*60000,wild:{id:"panorama-bar",text:"Everyone orders something with the spirit it lands on.",leg:1,t0:now()-5*60000,shown:true,landed:true},wplan:[1],test:true};save();go('play')});
await p.waitForTimeout(1200);
console.log(await p.evaluate(()=>{const w=document.querySelector('#stage .wild');const c=getComputedStyle(w);return [w.className,w.parentElement.className,c.backgroundColor,c.borderColor].join(' | ')}));
await b.close()})();
