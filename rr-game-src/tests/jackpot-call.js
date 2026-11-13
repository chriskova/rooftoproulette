// Your call: picking a bar sets it as the target and the clock keeps running (no free trip). Time freeze still freezes.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const k of ['call','freeze']){
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093,accuracy:20},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-13T08:00:00Z')});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
await p.evaluate(k=>{S.onboarded=true;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.forceJP=k;S.sound=false;S.fake={lat:-33.8688,lng:151.2093};save();
  const c={lat:-33.8688,lng:151.2093};S.game={id:"g"+Date.now(),mode:"rush",city:"Sydney",len:60,radius:1,newOnly:false,center:c,startPos:c,areas:["CBD"],moves:[],voluntaryUsed:false,freeSkips:0,excluded:[],zone:{lat:c.lat,lng:c.lng,name:"CBD"},cz:{type:"me",r:1},
   visits:[{id:"the-glenmore",arrivedAt:now()-600000,leftAt:now()-60000,counted:true}],target:null,started:true,startedAt:now()-900000,endsAt:now()+2700000,jpAt:0,test:true};save();go('play')},k);
await p.waitForTimeout(800);await p.evaluate(()=>doSpin(true,-14));
await p.waitForFunction(()=>document.querySelector('.jpcard'),null,{timeout:30000});await p.waitForTimeout(3200);
if(k==='call'){await p.evaluate(()=>{const t=document.querySelector('.jv-tile');t&&t.click()})}else await p.evaluate(()=>$('jvGo')&&$('jvGo').click());
await p.waitForTimeout(3000);
console.log(k,JSON.stringify(await p.evaluate(()=>{const g=G();return {target:g.target&&byId(g.target).name,frozen:frozen(g)?(g.frz.trip?'trip':'freeze'):'no',label:$('clockL').textContent,text:(document.body.innerText.match(/on the house/)||['-'])[0]}})),e);
await ctx.close()}
await b.close()})();
