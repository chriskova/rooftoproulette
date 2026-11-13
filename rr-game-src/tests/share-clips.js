// Lots of clips from old crawls in a v1 clip store: the card still loads quickly, shows only this crawl's clip, and the store upgrades.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(600);
// recreate the old (version 1) clip store with 40 x 4 MB clips from other crawls and one from this crawl
await p.evaluate(()=>new Promise(res=>{indexedDB.deleteDatabase("rr-clips").onsuccess=()=>{const q=indexedDB.open("rr-clips",1);q.onupgradeneeded=()=>q.result.createObjectStore("clips",{keyPath:"id"});
  q.onsuccess=()=>{const db=q.result,t=db.transaction("clips","readwrite"),st=t.objectStore("clips"),big=new Uint8Array(4e6);
    for(let i=0;i<40;i++)st.put({id:"c"+i,game:"old"+(i%5),at:i,type:"video/webm",blob:new Blob([big],{type:"video/webm"})});
    st.put({id:"cx",game:"today",at:99,type:"video/webm",blob:new Blob([new Uint8Array(1000)],{type:"video/webm"})});t.oncomplete=()=>{db.close();res()}}}}));
await p.reload();await p.waitForTimeout(800);
await p.evaluate(()=>{S.onboarded=true;save();const t=Date.now()-3*3600e3;
  const r={id:"today",mode:"rush",len:60,startedAt:t,endedAt:t+3600e3,city:"Sydney",center:{lat:-33.8688,lng:151.2093},startPos:{lat:-33.8688,lng:151.2093},areas:["CBD"],title:"Mum's 60th",bodDone:true,
   visits:[{id:"the-glenmore",arrivedAt:t+5*60e3,leftAt:t+25*60e3,counted:true},{id:"panorama-bar",arrivedAt:t+30*60e3,leftAt:t+50*60e3,counted:true}]};
  H.unshift(r);saveH();S.lastEnd=r.id;save();go('end')});
await p.waitForTimeout(1000);const t0=Date.now();await p.evaluate(()=>$('shareBtn').click());await p.waitForTimeout(600);
const skip=await p.$('text=Skip, use the map');if(skip)await skip.click();
let ok=false;for(let i=0;i<60&&!ok;i++){await p.waitForTimeout(500);ok=await p.evaluate(()=>!!document.querySelector('.sharev .shv-car'))}
console.log('cards loaded:',ok,'in',Math.round((Date.now()-t0)/1000)+'s','| slides:',await p.evaluate(()=>[...document.querySelectorAll('.shv-dots [data-k]')].map(d=>d.getAttribute('aria-label')).join(',')));
console.log('index added:',await p.evaluate(()=>new Promise(r=>{const q=indexedDB.open("rr-clips");q.onsuccess=()=>{const db=q.result;r(db.version+' '+db.transaction("clips").objectStore("clips").indexNames.contains("game"));db.close()}})));
console.log(e);await b.close()})();
