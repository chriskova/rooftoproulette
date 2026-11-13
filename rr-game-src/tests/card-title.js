// A named crawl shows its name above the headline on every share card look; an unnamed one doesn't.
const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(800);
for(const [tag,title] of [['named',"Mum's 60th"],['plain',null]]){
 const urls=await p.evaluate(async(title)=>{S.onboarded=true;save();const t=Date.now()-3*3600e3;
  const r={id:"c"+Math.random(),mode:"rush",len:60,startedAt:t,endedAt:t+3600e3,city:"Sydney",center:{lat:-33.8688,lng:151.2093},startPos:{lat:-33.8688,lng:151.2093},areas:["CBD"],
   visits:[{id:"the-glenmore",arrivedAt:t+5*60e3,leftAt:t+25*60e3,counted:true},{id:"panorama-bar",arrivedAt:t+30*60e3,leftAt:t+50*60e3,counted:true}],barOfDay:"panorama-bar"};
  if(title)r.title=title;
  const out=[];for(const l of ["map","rund"]){const bl=await storyCard(r,l);out.push(await new Promise(res=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.readAsDataURL(bl)}))}return out},title);
 urls.forEach((u,i)=>fs.writeFileSync(`out/card-${tag}-${i}.png`,Buffer.from(u.split(',')[1],'base64')));}
console.log(e);await b.close()})();
