// Demo: confirm popup, counts on arrival, Practice run banner. Play's map button: zone, ticked visited bars, next bar, no route.
// Rooftops tab: no My zone chip; Map view hides the tiles and fits above the game bar.
// node crawlmap.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},deviceScaleFactor:2,isMobile:true,hasTouch:true,geolocation:{latitude:-33.8722,longitude:151.2251},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};save();go('home')});await p.waitForTimeout(300);
await p.click('#newGame');await p.waitForTimeout(300);await p.click('#wNext');await p.waitForTimeout(2500);
console.log('setup tile:',await p.textContent('#rrNB'));await p.screenshot({path:'out/c1.png'});
await p.click('#zoneDemo');await p.waitForTimeout(500);console.log('demo popup:',await p.textContent('#sheetBody h3'),'|',await p.evaluate(()=>$('sheetBody').querySelector('.note').innerText.replace(/\n/g,' / ')));await p.screenshot({path:'out/c2.png'});
await p.click('#dmGo');await p.waitForTimeout(1200);console.log('banner:',await p.textContent('#demoBar'));
await p.evaluate(()=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+36e5;const v=basePool().find(v=>openOK(v,now()));setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});await p.waitForTimeout(600);
await p.click('#dWalk');await p.waitForTimeout(2500);
console.log('arrived:',await p.evaluate(()=>JSON.stringify({counted:countShown(G()),cant:!!$('cantBtn'),banner:$('demoBar').innerText.replace(/\n/g,' ')})));await p.waitForTimeout(1200);await p.screenshot({path:'out/c3.png'});
await p.click('#spinBtn');await p.waitForTimeout(800);console.log('drink question on spin:',await p.evaluate(()=>$('sheet').open?$('sheetBody').innerText.slice(0,40):'none'));
await p.waitForTimeout(6000);await p.evaluate(()=>{if($('sheet').open)closeSheet()});
console.log('target after spin:',await p.evaluate(()=>G().target));
await p.evaluate(()=>{const g=G(),v=basePool().find(v=>openOK(v,now())&&!g.visits.some(x=>x.id===v.id));const a=atVisit();if(a){a.leftAt=now();a.counted=true}g.dpos={lat:v.lat+.01,lng:v.lng,acc:5};setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});console.log('why no tip:',await p.evaluate(()=>JSON.stringify({tips:S.tips,cam:!!document.querySelector('.camtip'),sheet:$('sheet').open,pmap:!!($('pMap')&&$('pMap').offsetParent)})));await p.waitForTimeout(1200);console.log('map tip:',await p.evaluate(()=>{const t=document.querySelector('.maptip');return t?t.innerText.replace(/\n/g,' '):'none'}));await p.screenshot({path:'out/c3b.png'});await p.mouse.click(180,600);await p.waitForTimeout(300);await p.click('#pMap');await p.waitForTimeout(1500);

console.log('crawl map:',await p.evaluate(()=>JSON.stringify({ticks:document.querySelectorAll('#crawlMap .pin.seen').length,big:document.querySelectorAll('#crawlMap .pin.big').length,circle:document.querySelectorAll('#crawlMap .leaflet-overlay-pane path').length,move:$('cmMove')&&$('cmMove').innerText,card:document.querySelector('.mf-card')&&document.querySelector('.mf-card').innerText.replace(/\n/g,' | ')})));await p.screenshot({path:'out/c4.png'});
await p.click('.mf-x');await p.waitForTimeout(400);
await p.evaluate(()=>{S.barsView='map';save();go('bars')});await p.waitForTimeout(1500);
console.log('rooftops:',await p.evaluate(()=>{const m=$('barsMap').getBoundingClientRect(),mi=$('mini').getBoundingClientRect();return JSON.stringify({zoneChip:!!document.querySelector('[data-w="zone"]'),tiles:!$('barsLists').hidden,mapBottom:Math.round(m.bottom),miniTop:Math.round(mi.top),scroll:$('v-bars').scrollHeight>$('v-bars').clientHeight+2})}));await p.screenshot({path:'out/c5.png'});
console.log('ERRORS',e);await b.close()})();
