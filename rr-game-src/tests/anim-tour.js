// Frame-by-frame screenshots of the spin, wildcard and every jackpot, for checking the look in light or dark.
// node anim-tour.js $(realpath ../../index.html) light|dark [modes...]
const {chromium,devices}=require('playwright');const fs=require('fs');
const FILE=process.argv[2],SCHEME=process.argv[3]||'light';
const MODES=process.argv.slice(4).length?process.argv.slice(4):['wild','pick3','jp-call','jp-freeze','jp-spins','jp-short','jp-dealer'];
(async()=>{const b=await chromium.launch();
for(const M of MODES){const D=`out/anim-${SCHEME}/${M}`;fs.mkdirSync(D,{recursive:true});
 const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:390,height:844},colorScheme:SCHEME});const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push(x.message));
 await p.goto('file://'+FILE+'?test');await p.waitForTimeout(400);
 const ph='data:image/jpeg;base64,'+fs.readFileSync('/home/claude/photo_bright.jpg').toString('base64');
 await p.evaluate(()=>{S.onboarded=true;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now();}S.seenHow={rush:1,rr:1};S.tips={swipe:1,enroute:1,night:1,cam:1};S.sound=false;S.film=false;S.fake={lat:-33.8662,lng:151.2059};save();
   S.wiz={step:3,len:60,radius:1,start:{type:'area',name:'Wynyard',lat:-33.8662,lng:151.2059}};tryStart()});await p.waitForTimeout(600);
 await p.evaluate(ph=>VENUES.forEach(v=>phMem[v.id]={url:ph}),ph);
 await p.evaluate(M=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+3600000;
   if(M==='wild')g.dealt={leg:0,text:'Order the drink with the strangest name on the menu.'};
   if(M==='pick3')g.pick3=true;
   if(M.startsWith('jp-')){g.jpAt=0;S.forceJP=M.slice(3)}else g.jp={k:'spins',claimed:true,leg:9};renderPlay()},M);await p.waitForTimeout(500);
 await p.evaluate(()=>doSpin(false));let n=0,claimed=false;
 for(let i=0;i<34;i++){await p.waitForTimeout(450);await p.screenshot({path:`${D}/${String(n++).padStart(2,'0')}.png`});
   if(!claimed&&i>12){const c=await p.evaluate(()=>{const t=document.querySelector('.jv-tile:not([disabled])')||document.querySelector('.jv-card:not([disabled])');if(t){t.click();return 1}const g=document.querySelector('#jvGo:not([hidden])');if(g){g.click();return 2}const s=document.querySelector('[data-p3]');if(s&&$('sheet').open){s.click();return 3}return 0});if(c)claimed=true}}
 console.log(M,'frames',n,'errors',JSON.stringify(errs));await ctx.close()}
await b.close()})();
