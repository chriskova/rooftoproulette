const {chromium,devices}=require('playwright');const fs=require('fs');
const MODE=process.argv[3],D='out';
(async()=>{const b=await chromium.launch({args:['--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream']});const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.grantPermissions(['camera','microphone']);const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
const ph='data:image/jpeg;base64,'+fs.readFileSync('fixtures/crew.jpg').toString('base64');
await p.evaluate(()=>{S.onboarded=true;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now();}S.seenHow={rush:1,rr:1};S.tips={swipe:1,enroute:1};S.sound=false;S.fake={lat:-33.8662,lng:151.2059};save();S.wiz={step:3,len:60,radius:1,start:{type:'area',name:'Wynyard',lat:-33.8662,lng:151.2059}};tryStart()});await p.waitForTimeout(600);
await p.evaluate(ph=>VENUES.forEach(v=>phMem[v.id]={url:ph}),ph);
await p.evaluate(M=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+3600000;
  if(M==='wild')g.dealt={leg:0,text:'Order the drink with the strangest name on the menu.'};
  if(M==='pick3')g.pick3=true;
  if(M.startsWith('jp-')){g.jpLeg=0;S.forceJP=M.slice(3)}else g.jp={k:'spins',claimed:true,leg:9};
  CAM.once=true;renderPlay()},MODE);
await p.waitForFunction(()=>document.body.classList.contains('camon'),null,{timeout:8000});await p.waitForTimeout(800);
let n=0;const grab=async(tag)=>{const d=await p.evaluate(()=>CAM.cv&&CAM.rec?CAM.cv.toDataURL('image/jpeg',.6):null);if(d)fs.writeFileSync(`${D}/${MODE}-${String(n++).padStart(2,'0')}${tag?'-'+tag:''}.jpg`,Buffer.from(d.split(',')[1],'base64'))};
const shot=async t=>p.screenshot({path:`${D}/${MODE}-screen-${t}.png`});
await p.evaluate(()=>{const rb=$('reelBox');rb.dispatchEvent(new PointerEvent('pointerdown',{pointerId:1,bubbles:true,clientY:300}));doSpin(false,-30)});
const t0=Date.now();let claimed=false,p3=false;
while(Date.now()-t0<50000){await p.waitForTimeout(650);await grab();
  const st=await p.evaluate(()=>({sp:spinning,rec:!!CAM.rec,jp:!!document.querySelector('.jpx .jpcard'),go:!!document.querySelector('#jvGo:not([hidden])'),tile:!!document.querySelector('.jv-tile:not([disabled])'),card:!!document.querySelector('.jv-card:not([disabled])'),sheet:$('sheet').open,cam:document.body.classList.contains('camon')}));
  if(st.jp&&!claimed){if(!fs.existsSync(`${D}/${MODE}-screen-jpcardB.png`))await shot('jpcardB');
    if(st.tile){await p.click('.jv-tile');claimed=true}
    else if(st.card){await p.click('.jv-card');await p.waitForTimeout(500);await grab('pick');await shot('pick');await p.click('#jvGo');claimed=true}
    else if(st.go&&MODE!=='jp-dealer'&&MODE!=='jp-call'){await p.waitForTimeout(900);await grab('card');await p.click('#jvGo');claimed=true}}
  if(st.sheet&&!p3){p3=true;await shot('sheet');await p.waitForTimeout(400);await grab('sheet');await p.click('[data-p3]').catch(()=>{});}
  if(!st.rec&&!st.cam&&Date.now()-t0>4000)break}
await shot('end');const dd=await p.evaluate(()=>clipList(G().id).then(L=>Promise.all(L.map(c=>new Promise(r=>{const fr=new FileReader();fr.onload=()=>r([c.type,fr.result]);fr.readAsDataURL(c.blob)})))));dd.forEach((x,i)=>fs.writeFileSync(D+'/'+MODE+'-clip'+i+'.mp4',Buffer.from(x[1].split('base64,')[1],'base64')));
console.log(MODE,'clips',await p.evaluate(()=>G().clipN),'frames',n,'errors',e);await b.close()})();
