// Spoiler card: drag up → controls, drag down → tucked, small drag → back to the card; and frame-by-frame smoothness:
// no map resizes while anything moves, the zone circle stays centred in the visible map, the panel never jumps.
// node card-smooth.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');(async()=>{const b=await chromium.launch();const e=[];const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);const T=(f,a)=>p.evaluate(f,a);
const boot=async()=>{await T(()=>{const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);S.onboarded=true;S.test=true;S.ff=t-d;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const near=playable(inCircle({lat:-33.8688,lng:151.2093},1),false).filter(v=>openOK(v,now()));H.length=0;H.push({id:'hx',city:'Sydney',mode:'rush',len:60,visits:near.slice(0,2).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});S.quick=null;S.wiz={step:1,len:60,rr:false,radius:3};save();go('home');go('wiz')});await p.waitForTimeout(2000)};
await boot();
// record frames while running an action inside the page
const run=(act,ms)=>T(([act,ms])=>new Promise(r=>{const v=document.querySelector('#v-wiz'),pn=v.querySelector('.fspanel'),bx=v.querySelector('.rrmap'),me=$('rrMap');let rs=0;const o0=rrMap.resize;rrMap.resize=function(){rs++;return o0.apply(this,arguments)};
  const fr=[];const t0=performance.now();const f=()=>{const br=bx.getBoundingClientRect(),ring=me.querySelector('path.leaflet-interactive,path');const rr=ring?ring.getBoundingClientRect():null;
    fr.push({h:pn.offsetHeight,off:rr?Math.round((rr.top+rr.height/2)-(br.top+br.height/2)):null});if(performance.now()-t0<ms)requestAnimationFrame(f);else{rrMap.resize=o0;r({rs,fr})}};
  requestAnimationFrame(f);setTimeout(()=>eval(act),30)}),[act,ms]);
const sum=(n,x)=>{const h=x.fr.map(f=>f.h),d=h.slice(1).map((v,i)=>v-h[i]),dd=d.slice(1).map((v,i)=>v-d[i]);const offs=x.fr.map(f=>f.off).filter(v=>v!=null);
  console.log(n.padEnd(10),'resizes',x.rs,'| h',h[0],'→',h[h.length-1],'| biggest step',Math.max(...d.map(Math.abs)),'px, biggest change in speed',Math.max(...dd.map(Math.abs)),'| circle off-centre max',Math.max(...offs.map(Math.abs)),'px')};
{const x=await run("document.querySelector('#v-wiz')._fsOpen()",1300);sum('open',x);console.log(x.fr.map(f=>f.off).join(' '))}
console.log('          gated',await T(()=>document.querySelector('#v-wiz .fspanel').classList.contains('gated')),'button',await T(()=>document.querySelector('[data-g="show"]').textContent));
const cdp=await ctx.newCDPSession(p);
const drag=async(dy,ms=160)=>{const bb=await (await p.$('#v-wiz .fsgt')).boundingBox();const x=bb.x+bb.width/2,y=bb.y+bb.height/2,n=8;await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=n;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y+dy*i/n}]});await p.waitForTimeout(ms/n)}await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})};
const st=()=>T(()=>{const pn=document.querySelector('#v-wiz .fspanel');return `${pn.classList.contains('gated')?'card':pn.classList.contains('min')?'tucked':pn.classList.contains('up')?'list':'controls'} h${pn.offsetHeight} ctl ${(+getComputedStyle(pn.querySelector('.fsctl')).opacity).toFixed(2)} pill ${(+getComputedStyle(document.querySelector('#v-wiz .fspill')).opacity).toFixed(2)}`});
await drag(-120,300);await p.waitForTimeout(900);console.log('drag up   ',await st());
await T(()=>document.querySelector('#v-wiz')._fsOpen());await p.waitForTimeout(1300);
await drag(25,300);await p.waitForTimeout(900);console.log('tiny drag ',await st());
await drag(120,300);await p.waitForTimeout(900);console.log('drag down ',await st());
await T(()=>document.querySelector('#v-wiz')._fsSet(1));await p.waitForTimeout(900);
await T(()=>document.querySelector('#v-wiz')._fsOpen());await p.waitForTimeout(1300);
sum('handle',await run("document.querySelector('#v-wiz .fshandle').click()",900));console.log('          ',await st());
await T(()=>document.querySelector('#v-wiz')._fsOpen());await p.waitForTimeout(1300);
sum('see',await run("document.querySelector('[data-g=show]').click()",1100));console.log('          ',await st());
sum('down',await run("document.querySelector('#v-wiz')._fsSet(1)",900));
sum('tuck',await run("document.querySelector('#v-wiz')._fsSet(0)",900));
sum('up',await run("document.querySelector('#v-wiz')._fsSet(2)",1000));
console.log('errors',e);await b.close()})();
