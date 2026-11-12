// Setup map with search above, zooming past the biggest circle, Been tags in the bar list, demo minimising to the bar at the bottom.
// node setup3b.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},deviceScaleFactor:2,isMobile:true,hasTouch:true,geolocation:{latitude:-33.8722,longitude:151.2251},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
const at=h=>p.evaluate(h=>{const s=sydAt(now());let d=h*60-s.min;if(d<0)d+=1440;S.ff=(S.ff||0)+d*60000;save()},h);await at(19);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1};save();go('home')});await p.waitForTimeout(300);
await p.click('#newGame');await p.waitForTimeout(400);await p.click('#wNext');await p.waitForTimeout(2500);
await p.evaluate(()=>{const l=playable(inCircle(S.wiz.z,1),false).slice(0,3);H.push({id:'h1',mode:'rush',len:60,startedAt:now()-864e5,visits:l.map(v=>({id:v.id,counted:true,arrivedAt:now()-864e5}))});if(typeof saveH==='function')saveH();renderWiz()});await p.waitForTimeout(2500);
await p.screenshot({path:'out/b1.png'});
const ring=()=>p.evaluate(()=>{const m=$('rrMap').getBoundingClientRect(),c=document.querySelector('#rrMap .leaflet-overlay-pane path');const r=c&&c.getBoundingClientRect();return {map:[Math.round(m.width),Math.round(m.height)],circle:r?Math.round(r.height):null,label:$('rrLbl').textContent}});
console.log('fit:',JSON.stringify(await ring()));
const box=await p.$eval('#rrMap',x=>{const r=x.getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]});
await p.mouse.move(box[0],box[1]);for(let i=0;i<6;i++){await p.mouse.wheel(0,250);await p.waitForTimeout(250)}await p.waitForTimeout(1500);
console.log('zoomed out past the biggest circle:',JSON.stringify(await ring()));await p.screenshot({path:'out/b2.png'});
await p.click('#rrNB');await p.waitForTimeout(600);if(await p.$('#spShow')){await p.click('#spShow');await p.waitForTimeout(600)}await p.screenshot({path:'out/b3.png'});
console.log('been tags:',await p.$$eval('.beentag',x=>x.length));
await p.evaluate(()=>{closeSheet();S.wiz=null;startDemo()});await p.waitForTimeout(800);await p.evaluate(()=>go('home'));await p.waitForTimeout(800);
console.log('mini shown on home in demo:',await p.evaluate(()=>!$('mini').hidden),await p.textContent('#mini'));await p.screenshot({path:'out/b4.png'});
console.log('ERRORS',e);await b.close()})();
