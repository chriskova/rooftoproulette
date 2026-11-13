// End screen → Share card: the preview cards load (named crawl, with and without a photo).
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.stack.split('\n').slice(0,3).join(' | ')));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')e.push('console: '+m.text().slice(0,200))});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
for(const photo of [false,true]){
await p.evaluate((photo)=>{S.onboarded=true;save();const t=Date.now()-3*3600e3;
  const r={id:"c"+Math.random().toString(36).slice(2),mode:"rush",len:60,startedAt:t,endedAt:t+3600e3,city:"Sydney",center:{lat:-33.8688,lng:151.2093},startPos:{lat:-33.8688,lng:151.2093},areas:["CBD"],title:"Mum's 60th",bodDone:true,
   visits:[{id:"the-glenmore",arrivedAt:t+5*60e3,leftAt:t+25*60e3,counted:true},{id:"panorama-bar",arrivedAt:t+30*60e3,leftAt:t+50*60e3,counted:true}],barOfDay:"panorama-bar"};
  if(photo){const c=document.createElement('canvas');c.width=600;c.height=800;const x=c.getContext('2d');x.fillStyle='#456';x.fillRect(0,0,600,800);r.photo=c.toDataURL('image/jpeg',.8)}
  H.unshift(r);saveH();S.lastEnd=r.id;save();go('end')},photo);
await p.waitForTimeout(1200);await p.evaluate(()=>$('shareBtn').click());await p.waitForTimeout(800);
const skip=await p.$('text=Skip, use the map');if(skip){await skip.click()}
let ok=false;for(let i=0;i<40&&!ok;i++){await p.waitForTimeout(500);ok=await p.evaluate(()=>{const s=document.querySelector('.sharev');return !!(s&&s.querySelector('img[src^="blob:"]'))})}
console.log('photo',photo,'cards loaded:',ok,await p.evaluate(()=>{const s=document.querySelector('.sharev');return s?s.innerText.slice(0,160).replace(/\n/g,' / '):'none'}));
await p.screenshot({path:'out/share-'+photo+'.png'});await p.evaluate(()=>{document.querySelectorAll('.sharev').forEach(x=>x.remove())});await p.waitForTimeout(300)}
console.log(e.slice(0,8));await b.close()})();
