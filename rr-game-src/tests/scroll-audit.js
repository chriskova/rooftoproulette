// Which screens scroll? Every main screen at several phone sizes, light and dark. Prints the overflow in px for any that do.
// node scroll-audit.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');const fs=require('fs');
const SIZES=[[360,640],[360,700],[360,740],[390,844],[412,915]];
(async()=>{const b=await chromium.launch();const out=[];
for(const [scheme,tz] of [['light',100],['dark',100],['light',115]])for(const [w,h] of SIZES){
 const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:w,height:h},colorScheme:scheme,geolocation:{latitude:-33.8662,longitude:151.2059},permissions:['geolocation']});
 await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
 const p=await ctx.newPage();const ph='data:image/jpeg;base64,'+fs.readFileSync('fixtures/crew.jpg').toString('base64');
 await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
 if(tz!==100)await p.addStyleTag({content:`html{-webkit-text-size-adjust:${tz}%!important;text-size-adjust:${tz}%!important}`});
 const over=async(tag)=>{await p.waitForTimeout(700);const r=await p.evaluate((()=>{const r=[];const de=document.scrollingElement;if(de.scrollHeight>innerHeight+1)r.push('document +'+(de.scrollHeight-innerHeight));
  document.querySelectorAll('*').forEach(e=>{if(!e.offsetParent||e.closest('dialog:not([open])'))return;const cs=getComputedStyle(e);if(!/(auto|scroll)/.test(cs.overflowY))return;const o=e.scrollHeight-e.clientHeight;if(o>1&&e.clientHeight>120)r.push((e.id||e.className||e.tagName).toString().slice(0,30)+' +'+o)});return r}));
   if(r.length){out.push(`${scheme}${tz!==100?' text'+tz+'%':''} ${w}x${h} ${tag}: ${r.join(', ')}`);await p.screenshot({path:`out/scroll-${scheme}${tz}-${w}x${h}-${tag}.png`})}};
 const ev=f=>p.evaluate(f);const closeAll=()=>ev(()=>{try{closeSheet()}catch(e){}});
 await over('intro');
 await ev(()=>{S.onboarded=true;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now();}S.sound=false;S.city='Sydney';S.seenHow={rush:1,rr:1};S.tips={swipe:1,enroute:1,night:1,cam:1};S.cam=false;S.fake={lat:-33.8662,lng:151.2059};save();go('home')});
 await ev(ph=>VENUES.forEach(v=>phMem[v.id]={url:ph}),ph);
 await over('home');
 await ev(()=>go('perm'));await over('perm');await ev(()=>go('home'));
 // setup, open bars
 await p.click('#newGame');await p.waitForTimeout(400);
 for(let i=1;i<=5&&await ev(()=>S.route)==='wiz';i++){await over('setup'+i);const id=await ev(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(!id)break;await p.click('#'+id,{timeout:4000}).catch(()=>{});await p.waitForTimeout(900)}
 // setup with nothing open (3am)
 await ev(()=>{S.game=null;S.wiz=null;{const d=new Date();d.setHours(9,50,0,0);S.ff=d.getTime()-Date.now();}save();go('home')});await p.waitForTimeout(300);
 await p.click('#newGame');await p.waitForTimeout(400);
 for(let i=1;i<=3&&await ev(()=>S.route)==='wiz';i++){await over('closed-setup'+i);const id=await ev(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(!id||id==='wDemo')break;await p.click('#'+id,{timeout:4000}).catch(()=>{});await p.waitForTimeout(900)}
 await closeAll();await ev(()=>{S.game=null;S.wiz=null;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now();}save();go('home')});
 // R&R setup
 await ev(()=>{S.quick={step:0,from:null};save();go('quick')});await over('rr-setup1');
 await ev(()=>go('home'));
 // a crawl: ready, spun, wildcard, at bar
 await ev(()=>{S.test=false;save()});
 await ev(()=>{S.wiz={step:3,len:60,radius:1,start:{type:'area',name:'Wynyard',lat:-33.8662,lng:151.2059}};tryStart()});await p.waitForTimeout(500);
 await over('play-start');
 await ev(()=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+3600000;g.jp={k:'spins',claimed:true,leg:9};renderPlay()});await over('play-ready');
 await ev(()=>doSpin(true));await p.waitForTimeout(9000);await over('bar-card');
 await ev(()=>{const g=G();g.dealt={leg:g.visits.length,text:'Make a toast. Worst one buys the next round.'};renderPlay()});await over('bar-card-wild');
 await ev(()=>{const g=G();const v=byId(g.target);S.fake={lat:v.lat,lng:v.lng};here={lat:v.lat,lng:v.lng,acc:5};onLocation()});await p.waitForTimeout(1500);await over('at-bar');
 await ev(()=>{S.game=null;save();go('home')});
 // demo
 await ev(()=>startDemo());await over('demo-start');
 await ev(()=>doSpin(true));await p.waitForTimeout(9000);await over('demo-bar');
 await ev(()=>{const b=$("dWalk");b&&b.click()});await p.waitForTimeout(1500);await over('demo-at-bar');
 await ev(()=>{S.game=null;save();go('home')});
 // end screens
 await ev(()=>{const t0=now()-3600000;const ids=['the-glenmore','harbour-view-hotel','the-mercantile','henry-deane','smoke-bar','untied'];const visits=ids.map((id,i)=>({id,arrivedAt:t0+i*9*60000+4*60000,leftAt:t0+i*9*60000+11*60000,counted:true}));const st={lat:-33.859,lng:151.207};
   H.unshift({id:'gx'+Math.random(),city:'Sydney',mode:'rush',len:60,radius:.8,startedAt:t0,endsAt:t0+3600000,endedAt:t0+3600000,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits,trail:[],moves:[]});saveH();S.lastEnd=H[0].id;S.rackEnd=H[0].id;save();go('end')});
 await over('end-bod');await p.click('#bodSkip').catch(()=>{});await over('summary');
 await ctx.close()}
console.log(out.length?out.join('\n'):'no screens scroll');await b.close()})();
