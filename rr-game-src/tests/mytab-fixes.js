// ⋯ and name on a crawl summary, no gear there, long-press on a crawl, tappable My Tab tiles, Hit list line + R&R default.
// node mytab-fixes.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};{const d=new Date();d.setHours(19,0,0,0);}const t0=Date.now()-864e5,st={lat:-33.859,lng:151.207};
 const mk=(id,d,ids)=>({id,city:'Sydney',mode:'rush',len:60,radius:1,startedAt:t0-d*864e5,endsAt:t0-d*864e5+36e5,endedAt:t0-d*864e5+36e5,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits:ids.map((x,i)=>({id:x,arrivedAt:t0-d*864e5+(i+1)*9e5,leftAt:t0-d*864e5+(i+1)*9e5+5e5,counted:true})),trail:[],moves:[],bodDone:true});
 H.length=0;H.push(mk('a',0,['the-glenmore','untied','smoke-bar']),mk('b',3,['the-glenmore','cirq']));saveH();S.lastEnd='a';S.rackEnd=null;save();go('end')});
await p.waitForTimeout(1500);
console.log('no menu button on summary:',await p.evaluate(()=>!document.querySelector('#v-end [data-gear]')));
await p.tap('#scMore');await p.waitForTimeout(500);console.log('⋯ opens:',await p.evaluate(()=>$('sheet').open&&document.querySelector('#sheetBody h3').textContent));
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);await p.tap('#scName');await p.waitForTimeout(400);console.log('name opens:',await p.evaluate(()=>!!$('cnIn')));
await p.evaluate(()=>{closeSheet();go('hist')});await p.waitForTimeout(500);await p.screenshot({path:'out/t1.png'});
// long press with touch
await p.click('#hCrawls');await p.waitForTimeout(500);
const bx=await p.evaluate(()=>{const r=document.querySelector('#sheetBody .hrow').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]});
const cdp=await ctx.newCDPSession(p);
await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:bx[0],y:bx[1]}]});await p.waitForTimeout(700);
await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(500);
console.log('long-press menu:',await p.evaluate(()=>$('sheet').open&&!!$('cmDel')),'route still my-tab:',await p.evaluate(()=>S.route),'selection:',JSON.stringify(await p.evaluate(()=>String(getSelection()))));
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
await p.click('#hDist');await p.waitForTimeout(400);console.log('distance tile:',await p.evaluate(()=>document.querySelector('#sheetBody h3').textContent));
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
// Hit list line + R&R default
await p.evaluate(()=>{S.want={'the-glenmore':1,'untied':1,'smoke-bar':1};S.histTab='crawls';save();go('home')});await p.waitForTimeout(400);
console.log('home line:',await p.evaluate(()=>$('homeOpen').textContent.trim()));   // the Hit list row left home; the open count is there nowawait p.screenshot({path:'out/t2.png'});
await p.evaluate(()=>{const d=new Date();d.setHours(19,0,0,0);S.test=true;S.ff=d.getTime()-Date.now();S.quick={step:0,from:null};save();go('quick')});await p.waitForTimeout(400);
console.log('R&R starts on:',await p.evaluate(()=>S.quick&&S.quick.sel));
console.log(e);await b.close()})();
