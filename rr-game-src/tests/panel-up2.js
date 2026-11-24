// Setup panel: tucked / controls / list. Pill opens the list (timed: spoiler first, same size). node panel-up2.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);const T=(f,a)=>p.evaluate(f,a);
const ff=await T(()=>{const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);return t-d});
await T(ff=>{S.onboarded=true;S.test=true;S.ff=ff;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const near=playable(inCircle({lat:-33.8688,lng:151.2093},2),false).filter(v=>openOK(v,now()));
  H.push({id:"hx",city:"Sydney",mode:"rush",len:60,visits:near.slice(0,3).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});S.quick={step:1,from:null};save();go('quick')},ff);
await p.waitForTimeout(2200);
const st=()=>T(()=>{const v=document.querySelector('.view.fsv:not([hidden])'),pn=v.querySelector('.fspanel'),c=v.querySelector('.fsctl'),l=v.querySelector('.fslist'),s=v.querySelector('.msearch');
  return `panelTop ${Math.round(pn.getBoundingClientRect().top)} (search bottom ${Math.round(s.getBoundingClientRect().bottom)}) h ${Math.round(pn.offsetHeight)} | ctl ${(+getComputedStyle(c).opacity).toFixed(2)} list ${(+getComputedStyle(l).opacity).toFixed(2)} gated ${pn.classList.contains('gated')} | pill ${(+getComputedStyle(v.querySelector('.fspill')).opacity).toFixed(2)} | "${v.querySelector('.fslh .n').textContent}"`});
const shot=n=>p.screenshot({path:'out/'+n+'.png'});
console.log('rest   ',await st());await shot('p2-0');
await p.click('.fspill');await p.waitForTimeout(500);console.log('pill   ',await st());await shot('p2-1');
const cdp=await ctx.newCDPSession(p);
const touch=async(x,y,dy,steps=8,hold=false)=>{await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=steps;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y+dy*i/steps}]});if(!hold){await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500)}};
// scroll the list down, then drag the heading: collapses straight to the controls
await T(()=>{document.querySelector('.fslb').scrollTop=200});
{const bb=await (await p.$('.fslh')).boundingBox();await touch(bb.x+60,bb.y+bb.height/2,150);console.log('head dn',await st())}
await p.click('.fspill');await p.waitForTimeout(500);
// pull down from inside the list at the top
{const bb=await (await p.$('.fslb')).boundingBox();await touch(bb.x+100,bb.y+80,180);console.log('list dn',await st())}
// scroll inside list (scrolled) doesn't collapse
await p.click('.fspill');await p.waitForTimeout(500);await T(()=>{document.querySelector('.fslb').scrollTop=150});
{const bb=await (await p.$('.fslb')).boundingBox();await touch(bb.x+100,bb.y+80,100);console.log('scrolled list dn',await st(),'scrollTop',await T(()=>document.querySelector('.fslb').scrollTop))}
await T(()=>document.querySelector('.view.fsv:not([hidden])')._fsSet(1));await p.waitForTimeout(500);
// mid drag frame
{const bb=await (await p.$('.fshandle')).boundingBox();await touch(bb.x+20,bb.y+6,-170,6,true);await p.waitForTimeout(100);console.log('mid    ',await st());await shot('p2-mid');await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500);console.log('release',await st())}
await T(()=>document.querySelector('.view.fsv:not([hidden])')._fsSet(1));await p.waitForTimeout(500);
{const bb=await (await p.$('.fshandle')).boundingBox();await touch(bb.x+20,bb.y+6,140);console.log('tuck   ',await st())}
// timed
await T(()=>{S.quick=null;S.wiz={step:1,len:60,rr:false,radius:3};save();go('wiz')});await p.waitForTimeout(2200);
const h0=await T(()=>document.querySelector('#v-wiz .fspanel').offsetHeight);
await p.click('#v-wiz .fspill');await p.waitForTimeout(500);console.log('timed  ',await st(),'| h before',h0);await shot('p2-gate');
await p.click('#v-wiz .fshandle');await p.waitForTimeout(900);console.log('keep   ',await st());
{const bb=await (await p.$('#v-wiz .fshandle')).boundingBox();await touch(bb.x+20,bb.y+6,-200);console.log('pull up',await st())}
await p.waitForTimeout(700);await p.click('[data-g="show"]');await p.waitForTimeout(900);console.log('show   ',await st(),'ticks',await T(()=>document.querySelectorAll('#v-wiz .fslb [data-x]').length));await shot('p2-list');
await T(()=>document.querySelector('#v-wiz')._fsSet(1));await p.waitForTimeout(500);await p.click('#v-wiz .fspill');await p.waitForTimeout(500);console.log('again  ',await st());
console.log('errors',e);await b.close()})();
