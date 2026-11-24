// Drag the setup panel up from anywhere on it (not the slider); a drag over the Skip switch doesn't flip it.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);const T=(f,a)=>p.evaluate(f,a);
const ff=await T(()=>{const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);return t-d});
await T(ff=>{S.onboarded=true;S.test=true;S.ff=ff;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const near=playable(inCircle({lat:-33.8688,lng:151.2093},1),false).filter(v=>openOK(v,now()));H.push({id:'hx',city:'Sydney',mode:'rush',len:60,visits:near.slice(0,3).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});S.quick={step:1};save();go('quick')},ff);await p.waitForTimeout(2000);
const cdp=await ctx.newCDPSession(p);const drag=async(sel,dy,dx=0)=>{const bb=await (await p.$(sel)).boundingBox();const x=bb.x+bb.width/2,y=bb.y+bb.height/2;await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x+dx*i/8,y:y+dy*i/8}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500)};
const st=()=>T(()=>{const v=document.querySelector('.view.fsv:not([hidden])'),pn=v.querySelector('.fspanel');return `up ${pn.classList.contains('up')} gated ${pn.classList.contains('gated')} min ${pn.classList.contains('min')}`});
await drag('.fspanel h1',-200);console.log('R&R title up  ',await st());
await T(()=>document.querySelector('#v-quick')._fsSet(1));await p.waitForTimeout(500);
const r0=await T(()=>document.querySelector('#v-quick .rrrange').value);await drag('#v-quick .rrrange',-150,-60);console.log('slider        ',await st(),'value',r0,'→',await T(()=>document.querySelector('#v-quick .rrrange').value));
await T(()=>document.querySelector('#v-quick')._fsSet(1));await p.waitForTimeout(500);
await drag('#v-quick .fspanel p.sub',-200);console.log('R&R sub up    ',await st());
await T(()=>{S.quick=null;S.wiz={step:1,len:60,rr:false,radius:3};save();go('wiz')});await p.waitForTimeout(2000);
const s0=await T(()=>!!S.wiz.newOnly);await drag('#zSkipC',-200);console.log('timed skip up ',await st(),'skip',s0,'→',await T(()=>!!S.wiz.newOnly));
await p.click('#v-wiz .fshandle');await p.waitForTimeout(400);await drag('#zSkipC',150);console.log('timed skip dn ',await st(),'skip',await T(()=>!!S.wiz.newOnly));
await T(()=>document.querySelector('#v-wiz')._fsSet(1));await p.waitForTimeout(500);await p.click('#zSkipC');await p.waitForTimeout(300);console.log('tap skip      ',await T(()=>!!S.wiz.newOnly));
console.log('errors',e);await b.close()})();
