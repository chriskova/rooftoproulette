// Setup maps (timed game and R&R): zoom changes the distance, past the limits it settles back, taps on dots open the card.
// node zonemap.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],hasTouch:false,isMobile:false,viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093},permissions:['geolocation']});
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
const st=()=>p.evaluate(()=>{const z=S.route==='wiz'?S.wiz.z:(S.quick.z);return {r:z.r,label:$("rrLbl").textContent}});
const ringPx=()=>p.evaluate(()=>{const r=document.querySelector('#rrMap path.leaflet-interactive,#rrMap path');if(!r)return null;const b=r.getBoundingClientRect();return Math.round(b.width)});
async function run(name,setup){
  await p.evaluate(setup);await p.waitForTimeout(1500);
  const box=await (await p.$('#rrMap')).boundingBox();const cx=box.x+box.width/2,cy=box.y+box.height/2;
  console.log(name,'start',await st(),'ring',await ringPx());
  await p.mouse.move(cx,cy);await p.mouse.wheel(0,-120);await p.waitForTimeout(900);console.log(' zoom in a bit',await st(),'ring',await ringPx());
  await p.mouse.wheel(0,240);await p.waitForTimeout(900);console.log(' zoom out',await st(),'ring',await ringPx());
  for(let i=0;i<6;i++){await p.mouse.wheel(0,-200);await p.waitForTimeout(120)}await p.waitForTimeout(1400);console.log(' zoom way in (should settle on smallest)',await st(),'ring',await ringPx());
  for(let i=0;i<8;i++){await p.mouse.wheel(0,250);await p.waitForTimeout(120)}await p.waitForTimeout(1400);console.log(' zoom way out (should settle on biggest)',await st(),'ring',await ringPx());
  const ps=await p.$$('#rrMap .leaflet-marker-icon .pin');let ok=0;for(let i=0;i<Math.min(4,ps.length);i++){await ps[i].click({force:true});await p.waitForTimeout(250);if(!(await p.evaluate(()=>$("rrCard").hidden)))ok++}
  console.log(' dot taps that opened a card:',ok,'of',Math.min(4,ps.length));
}
await run('R&R',()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};S.quick={step:1,from:{type:'me',lat:-33.8688,lng:151.2093},sel:'__me',z:{lat:-33.8688,lng:151.2093,r:2}};save();go('quick')});
await run('Timed 2hr',()=>{S.quick=null;S.wiz={step:1,len:120,newOnly:false,z:{lat:-33.8688,lng:151.2093,r:1}};save();go('wiz')});
await run('Timed 1hr',()=>{S.wiz={step:1,len:60,newOnly:false,z:{lat:-33.8688,lng:151.2093,r:.5}};save();go('wiz');renderWiz()});
console.log(e);await b.close()})();
