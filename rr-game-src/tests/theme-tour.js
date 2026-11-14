// Screenshots of every main screen in one colour scheme, for checking the light and dark themes.
// node theme-tour.js $(realpath ../../index.html) light|dark [outdir]
const {chromium,devices}=require('playwright');const fs=require('fs');
const FILE=process.argv[2],SCHEME=process.argv[3]||'light',D=process.argv[4]||('out/tour-'+SCHEME);
(async()=>{fs.mkdirSync(D,{recursive:true});
const b=await chromium.launch({args:['--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream']});
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:390,height:844},colorScheme:SCHEME,geolocation:{latitude:-33.8662,longitude:151.2059},permissions:['geolocation','camera','microphone']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push(x.message));
const ph='data:image/jpeg;base64,'+fs.readFileSync('fixtures/crew.jpg').toString('base64');
let n=0;const shot=async t=>{await p.screenshot({path:`${D}/${String(n++).padStart(2,'0')}-${t}.png`})};
const step=async(t,fn,wait=700)=>{try{await fn();await p.waitForTimeout(wait);await shot(t)}catch(e){console.log('step failed:',t,e.message.split('\n')[0])}};
const ev=(f,a)=>p.evaluate(f,a);
await p.goto('file://'+FILE+'?test');await p.waitForTimeout(800);
await shot('intro');
await ev(()=>{S.onboarded=true;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now();}S.sound=false;S.city='Sydney';S.fake={lat:-33.8662,lng:151.2059};save();go('home')});
await ev(ph=>VENUES.forEach(v=>phMem[v.id]={url:ph}),ph);
await step('home',async()=>{},900);
await step('how',()=>ev(()=>howSheet()));
await ev(()=>closeSheet());
await step('setup-1',async()=>{await p.click('#newGame');await p.waitForTimeout(500);if(await ev(()=>$("sheet").open))await ev(()=>{const b=[...document.querySelectorAll('#sheetBody button')].find(b=>/play|skip|let|heading/i.test(b.textContent));b&&b.click()})},1200);
for(let i=2;i<=5;i++){const r=await ev(()=>S.route);if(r!=='wiz')break;
  await step('setup-'+i,async()=>{const id=await ev(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(id)await p.click('#'+id)},1500)}
// a game already going
await ev(()=>{S.seenHow={rush:1,rr:1};S.tips={swipe:1,enroute:1,night:1,cam:1};S.cam=false;S.wiz={step:3,len:60,radius:1,start:{type:'area',name:'Wynyard',lat:-33.8662,lng:151.2059}};tryStart()});await p.waitForTimeout(700);
await ev(()=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+3600000;g.jp={k:'spins',claimed:true,leg:9};renderPlay()});
await step('play-ready',async()=>{},900);
await step('spinning',()=>ev(()=>doSpin(false)),1200);
await p.waitForTimeout(9000);await shot('bar-card');
await step('menu',()=>ev(()=>openMenu()));
await ev(()=>closeSheet());
await step('wildcard',()=>ev(()=>{const g=G();g.dealt={leg:0,text:'Order the drink with the strangest name on the menu.'};renderPlay()}),900);
await step('bars-tab-mini',()=>p.click('#tBars'),1200);
await step('bar-sheet',()=>ev(()=>barSheet(VENUES[0])),1200);
await ev(()=>closeSheet());
await step('bars-map',async()=>{await p.click('.mapfab').catch(()=>{})},1500);
await step('mytab-empty',()=>p.click('#tHist'),900);
await step('settings',()=>ev(()=>settingsSheet()),900);
await ev(()=>{try{closeSettings()}catch(e){closeSheet()}});
// jackpot reveal
await ev(()=>{go('play')});await p.waitForTimeout(500);
await ev(()=>{const g=G();g.jpAt=0;g.jp=null;S.forceJP='call';g.target=null;renderPlay()});await p.waitForTimeout(500);
await ev(()=>doSpin(false));
for(let i=0;i<30;i++){await p.waitForTimeout(500);if(await ev(()=>!!document.querySelector('.jpx .jpcard'))){await p.waitForTimeout(1500);await shot('jackpot');break}}
await ev(()=>{const t=document.querySelector('.jv-card:not([disabled])')||document.querySelector('.jv-tile:not([disabled])');if(t)t.click()});await p.waitForTimeout(800);await shot('jackpot-pick');
// finished crawl: scorecard, summary, share
await ev(()=>{S.game=null;const t0=now()-3600000;const ids=['the-glenmore','harbour-view-hotel','the-mercantile','henry-deane','smoke-bar','untied'];
 const visits=ids.map((id,i)=>({id,arrivedAt:t0+i*9*60000+4*60000,leftAt:t0+i*9*60000+11*60000,counted:i!==3}));const st={lat:-33.8590,lng:151.2070};
 const r={id:'gx',city:'Sydney',mode:'rush',len:60,radius:.8,startedAt:t0,endsAt:t0+3600000,endedAt:t0+3600000,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits,trail:[],moves:[],name:'Sophie\'s 30th'};
 H.unshift(r);saveH();S.lastEnd='gx';S.rackEnd='gx';save();go('end')});
await p.waitForTimeout(1500);await shot('end-bod');
await step('summary',()=>p.click('#bodSkip'),1800);
await step('summary-scroll',()=>ev(()=>{$('v-end').scrollTop=9999}),600);
await step('share',async()=>{await ev(()=>{$('v-end').scrollTop=0});await p.click('#shareBtn')},900);
await step('share-cards',()=>p.click('#shvSkip'),8000);
await ev(()=>{try{closeSheet()}catch(e){};go('hist')});
await step('mytab-history',async()=>{},1200);
await step('demo',()=>ev(()=>{S.game=null;save();startDemo()}),2500);
console.log(SCHEME,'shots',n,'errors',JSON.stringify(errs));await b.close()})();
