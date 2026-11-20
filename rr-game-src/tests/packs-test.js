// Wildcard packs: sealed on the way, opens at the bar with a Spin, packs sheet, pack detail, My Tab, Ready-to-spin chip.
// node packs-test.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch(process.env.X?{executablePath:process.env.X}:{});const e=[];
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
await p.evaluate(()=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};S.safeOK=1;S.tpacks={spin:true};save();go('home')});
const shot=n=>p.screenshot({path:'out/pk-'+n+'.png'});
// heading to a bar with a sealed Double Spin card
await p.evaluate(()=>{S.game={id:"pk"+Date.now(),mode:"rush",len:60,visits:[{id:"the-glenmore",arrivedAt:now()-30*60000,leftAt:now()-20*60000,counted:true}],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,cz:{type:"me",r:1},areas:["CBD"],city:"Sydney",started:true,startedAt:now()-30*60000,endsAt:now()+30*60000,target:"panorama-bar",targetFrom:{lat:-33.8688,lng:151.2093},targetAt:now()-5*60000,
  wild:{id:"panorama-bar",text:"Everyone orders something with the spirit it lands on.",leg:1,t0:now()-5*60000,shown:true,landed:true},wplan:[1],test:true};save();go('play')});
await p.waitForTimeout(1200);await shot('1-sealed');
console.log('on the way:',await p.evaluate(()=>document.querySelector('#stage .wild').innerText.replace(/\n/g,' | ')));
await p.evaluate(()=>{S.wplayed={};WILDS.slice(0,7).forEach(t=>S.wplayed[t]=1);save()});
await p.click('#stage .wild');await p.waitForTimeout(500);await shot('2-explainer');
console.log('played under:',await p.evaluate(()=>document.querySelectorAll('[data-pt]').length),'link:',await p.evaluate(()=>!!document.getElementById('wMore')));
await p.click('[data-pt]');await p.waitForTimeout(400);await shot('2b-played');await p.click('#ptBack');await p.waitForTimeout(400);console.log('back to info:',await p.evaluate(()=>!!document.getElementById('wOk')));
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
console.log('explainer:',await p.evaluate(()=>document.getElementById('sheet').innerText.replace(/\n/g,' | ')));
await p.evaluate(()=>deckSheet());await p.waitForTimeout(500);await shot('3-packs');
console.log('packs sheet:',await p.evaluate(()=>document.getElementById('sheet').innerText.replace(/\n/g,' | ')));
await p.click('[data-dp="house"]');await p.waitForTimeout(500);await shot('4-locked');
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
// arrive: the card opens with a Spin
await p.evaluate(()=>logArrival(true));await p.waitForTimeout(1500);await shot('5-atbar');
console.log('at the bar:',await p.evaluate(()=>{const w=document.querySelector('#stage .wild');return w&&w.innerText.replace(/\n/g,' | ')}));
await p.click('#stage [data-wspin]');await p.waitForTimeout(500);await shot('6-wheel');
await p.click('#wsGo');await p.waitForTimeout(4500);await shot('7-landed');
console.log('landed:',await p.evaluate(()=>($("wsOut")||{}).innerText),'| saved',await p.evaluate(()=>JSON.stringify(G().wild.res)));
await p.click('#wsDone');await p.waitForTimeout(600);await shot('8-result');
console.log('card now:',await p.evaluate(()=>document.querySelector('#stage .wild').innerText.replace(/\n/g,' | ')));
// owned pack detail with played count
await p.evaluate(()=>packSheet('spin'));await p.waitForTimeout(500);await shot('9-owned');
console.log('owned:',await p.evaluate(()=>document.querySelector('.pkcount').innerText));
// crawl menu row
await p.evaluate(()=>{closeSheet();openMenu()});await p.waitForTimeout(500);console.log('menu row:',await p.evaluate(()=>($("mWild")||{}).innerText));
// My Tab
await p.evaluate(()=>{closeSheet();S.game=null;save();go('hist')});await p.waitForTimeout(800);await p.evaluate(()=>{const x=document.querySelector('[data-tpk]');if(x)x.scrollIntoView()});await shot('10-mytab');
console.log('my tab rows:',await p.evaluate(()=>[...document.querySelectorAll('[data-tpk]')].map(x=>x.innerText.replace(/\n/g,' '))));
// try a spin from a locked preview, unlock in test mode
await p.evaluate(()=>{delete S.tpacks.spin;save();packSheet('spin')});await p.waitForTimeout(500);await shot('11-locked-spin');
await p.click('#pkTry');await p.waitForTimeout(400);await p.click('#wsGo');await p.waitForTimeout(4500);await shot('12-try');
await p.click('#wsDone');await p.waitForTimeout(400);await p.click('#pkBuy');await p.waitForTimeout(600);console.log('unlocked:',await p.evaluate(()=>packOwned('spin')));await shot('12b-afterbuy');
await p.click('#abOnly');await p.waitForTimeout(500);console.log('only-pack deck size',await p.evaluate(()=>deckIdx().length),await p.evaluate(()=>deckLbl()));
await p.evaluate(()=>{closeSheet();deckSheet()});await p.waitForTimeout(500);await shot('12c-decks');
await p.click('[data-dk="spin"]');await p.waitForTimeout(300);console.log('last deck kept:',await p.evaluate(()=>packOn('spin')));
await p.click('[data-dk="free"]');await p.waitForTimeout(300);console.log('with free:',await p.evaluate(()=>deckIdx().length),await p.evaluate(()=>deckLbl()));
// deck uses owned packs
console.log('deck size',await p.evaluate(()=>deckIdx().length),'free',await p.evaluate(()=>WILDS.length));
// Ready to spin chip
await p.evaluate(()=>{closeSheet();S.wiz={step:2,len:60,rr:false,radius:1,z:{lat:-33.8688,lng:151.2093,r:1},start:{type:"spot",name:"CBD",lat:-33.8688,lng:151.2093}};save();go('wiz')});await p.waitForTimeout(1500);await shot('13-ready');
console.log('chips:',await p.evaluate(()=>[...document.querySelectorAll('.rset .rs')].map(c=>c.innerText)));
await p.evaluate(()=>{S.wiz.rr=true;save();go('wiz')});await p.waitForTimeout(1200);await shot('14-ready-rr');
console.log('errors',e);await b.close()})();
