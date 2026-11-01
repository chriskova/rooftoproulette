// Checks the one-off split of a mixed history into real and test games, and that each mode only sees its own.
// node split-test.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const c=await b.newContext();const p=await c.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
const url='file://'+process.argv[2];
await p.goto(url);await p.evaluate(()=>{localStorage.clear();const T=Date.now(),H=36e5,v=(id,t)=>({id,arrivedAt:t,leftAt:t+6e5,counted:true});
 const g=(id,t,sp,ids)=>({id,city:'Sydney',mode:'rush',len:60,startedAt:t,endsAt:t+H,endedAt:t+H,started:true,ended:true,startPos:sp,center:sp,areas:['The Rocks'],visits:ids.map((x,i)=>v(x,t+(i+1)*6e5)),trail:[],moves:[]});
 const gl=byId('the-glenmore');
 localStorage.setItem('rr-history-v2',JSON.stringify([
  g('future',T+40*864e5,{lat:-33.86,lng:151.2},['the-glenmore']),       // time travelled → test
  g('real',T-864e5,{lat:-33.861234,lng:151.207891},['the-glenmore','untied']), // real
  g('atbar',T-2*864e5,{lat:gl.lat,lng:gl.lng},['the-glenmore'])          // start on the bar → test
 ]));localStorage.removeItem('rr-hsplit');localStorage.setItem('rr-app-v3',JSON.stringify({onboarded:true,test:false}))});
await p.goto(url);console.log('real mode:',await p.evaluate(()=>H.map(r=>r.id).join(',')));
await p.goto(url+'?test');console.log('test mode:',await p.evaluate(()=>H.map(r=>r.id).join(',')));
// a game finished in test mode lands in test history only
await p.evaluate(()=>{S.ff=5*864e5;const t=now();S.game={id:'gnew',test:true,city:'Sydney',mode:'rush',len:60,started:true,startedAt:t,ff0:S.ff,endsAt:t+36e5,radius:1,center:{lat:-33.86,lng:151.2},startPos:{lat:-33.86,lng:151.2},areas:['x'],visits:[],trail:[],moves:[]};save();endGame(now())});
console.log('test after end:',await p.evaluate(()=>H.map(r=>r.id).join(',')+' | shown date '+dateTxt(rt(H[0],H[0].startedAt))+' vs phone '+dateTxt(Date.now())));
await p.evaluate(()=>{S.test=false;S.ff=0;save();render()});console.log('back to real:',await p.evaluate(()=>H.map(r=>r.id).join(',')+' | now offset '+(now()-Date.now())));
console.log(e);await b.close()})();
