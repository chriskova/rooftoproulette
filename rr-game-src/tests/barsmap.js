// Rooftops tab map view: fills down to the tabs; mid-game, My zone shows the circle and other chips don't.
// node barsmap.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};S.barsView='map';save();startDemo();const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+36e5;save();go('bars')});
await p.waitForTimeout(1500);
const st=()=>p.evaluate(()=>{const m=$('barsMap').getBoundingClientRect(),t=$('tabs').getBoundingClientRect();return {mapBottom:Math.round(m.bottom),tabsTop:Math.round(t.top),circle:document.querySelectorAll('#barsMap .leaflet-overlay-pane path').length,chip:document.querySelector('[data-w="zone"]').getAttribute('aria-pressed'),scroll:$('v-bars').scrollHeight>$('v-bars').clientHeight+2}});
console.log('zone:',JSON.stringify(await st()));await p.screenshot({path:'out/bm1.png'});
await p.click('[data-w="all"]');await p.waitForTimeout(800);console.log('all:',JSON.stringify(await st()));
await p.click('[data-w="zone"]');await p.waitForTimeout(800);console.log('back to zone:',JSON.stringify(await st()));
console.log('ERRORS',e);await b.close()})();
