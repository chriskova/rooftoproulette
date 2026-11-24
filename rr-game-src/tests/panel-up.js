// Setup map panel, three positions: down (more map), middle, up (the rooftops in play). The pill opens it and becomes its heading.
// node panel-up.js $(realpath ../../play/index.html)   (runs at 5pm Sydney time via the test clock)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);const T=f=>p.evaluate(f);
const ff=await T(()=>{const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);return t-d});
await T(ff=>{S.onboarded=true;S.test=true;S.ff=ff;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const near=playable(inCircle({lat:-33.8688,lng:151.2093},2),false).filter(v=>openOK(v,now()));
  H.push({id:"hx",city:"Sydney",mode:"rush",len:60,visits:near.slice(0,3).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});S.quick={step:1,from:null};save();go('quick')},ff);
await p.waitForTimeout(2200);
const st=()=>T(()=>{const pn=document.querySelector('.fsv .fspanel');return `map ${Math.round($("rrMap").getBoundingClientRect().height)} | up ${pn.classList.contains('up')} min ${pn.classList.contains('min')} | pill ${getComputedStyle(document.querySelector('.fspill')).opacity} | head "${(document.querySelector('.fslh .n')||{}).textContent}" rows ${document.querySelectorAll('.fslb .zrow').length}`});
console.log('rest   ',await st());await p.screenshot({path:'out/pu-0.png'});
await p.click('.fspill');await p.waitForTimeout(500);console.log('pill   ',await st());await p.screenshot({path:'out/pu-1.png'});
const n0=await T(()=>document.querySelector('.fslh .n').textContent);await p.click('.fsskip');await p.waitForTimeout(400);console.log('skip  ',n0,'→',await T(()=>document.querySelector('.fslh .n').textContent),'| pill',await T(()=>$("rrN").textContent));
const cdp=await ctx.newCDPSession(p);const drag=async(dy)=>{const h=await p.$('.fshandle');const bb=await h.boundingBox();const x=bb.x+bb.width/2,y=bb.y+bb.height/2;
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y+dy*i/8}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500)};
await drag(120);console.log('drag dn',await st());
await drag(120);console.log('drag dn',await st());
await drag(-60);console.log('drag up',await st());
await drag(-200);console.log('drag up',await st());await p.screenshot({path:'out/pu-2.png'});
// mid-drag frame
{const h=await p.$('.fshandle');const bb=await h.boundingBox();await drag(400);const h2=await p.$('.fshandle');const b2=await h2.boundingBox();const x=b2.x+b2.width/2,y=b2.y+5;
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=5;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-i*30}]});await p.waitForTimeout(150);console.log('mid-drag',await st());await p.screenshot({path:'out/pu-mid.png'});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500);console.log('released',await st())}
// timed: spoiler gate, then vetoes
await T(()=>{S.quick=null;S.wiz={step:1,len:60,rr:false,radius:1};save();go('wiz')});await p.waitForTimeout(2200);
await p.click('.fspill');await p.waitForTimeout(500);console.log('timed  ',await st(),'| gate',await T(()=>!!document.querySelector('.fsgate')));await p.screenshot({path:'out/pu-3-gate.png'});
await p.click('[data-g="show"]');await p.waitForTimeout(300);console.log('shown  ',await T(()=>!document.querySelector('.fsgate')),'ticks',await T(()=>document.querySelectorAll('.fslb [data-x]').length));
await p.click('.fslb [data-x]');await p.waitForTimeout(300);console.log('veto   ',await T(()=>S.wiz.excl.length),await T(()=>document.querySelector('.fslb .fsln').textContent));await p.screenshot({path:'out/pu-4-list.png'});

console.log('errors',e);await b.close()})();
