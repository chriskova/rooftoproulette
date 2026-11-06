// Whole crawls in the simulated phone app (Capacitor plugins mocked): Rush Hour and R&R from home to crawl card,
// with background location fed in, mini bar, notifications, ending, and no-location. Flags any page error.
// node e2e-app.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{fs.mkdirSync('out',{recursive:true});const b=await chromium.launch();
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:360,height:780},geolocation:{latitude:-33.8650,longitude:151.2090},permissions:['geolocation']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push('pageerror: '+x.message));p.on('console',m=>{if(m.type()==='error'&&!/ERR_|net::|Failed to load/.test(m.text()))errs.push('console: '+m.text().slice(0,160))});
await p.addInitScript(()=>{window.__n=[];window.__wid=0;
  const rec=pl=>new Proxy({},{get:(t,m)=>{if(m==='addListener')return (ev,cb)=>{window['__l_'+pl]=cb;return Promise.resolve({remove(){}})};
    if(pl==='BackgroundGeolocation'&&m==='addWatcher')return (o,cb)=>{window.__bgcb=cb;window.__n.push([pl,m]);return 'cb'+(++window.__wid)};   // like the real bridge: an id, not a promise
    return o=>{window.__n.push([pl,m,o]);return Promise.resolve({})}}});
  window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'android',Plugins:{CrawlNotify:rec('CrawlNotify'),LocalNotifications:rec('LocalNotifications'),NativeSettings:rec('NativeSettings'),SystemBars:rec('SystemBars'),BackgroundGeolocation:rec('BackgroundGeolocation'),Share:rec('Share'),Filesystem:rec('Filesystem'),Media:rec('Media')}}});
await p.clock.install({time:new Date('2026-11-07T15:00:00+11:00')});
const log=(...a)=>console.log(...a);const st=()=>p.evaluate(()=>S.route+(S.game?` game(${S.game.mode||'rush'} started=${S.game.started} target=${S.game.target} visits=${S.game.visits.length})`:' no game'));
const moveTo=async(lat,lng)=>p.evaluate(([la,ln])=>window.__bgcb&&window.__bgcb({latitude:la,longitude:ln,accuracy:8},null),[lat,lng]);
const notes=()=>p.evaluate(()=>{const n=__n.splice(0);return n.map(x=>x[0]+'.'+x[1]).join(' ')});
await p.goto('file://'+process.argv[2]);await p.evaluate(()=>{S.onboarded=true;S.city='Sydney';S.seenHow={rush:1,rr:1};S.tips={night:1,cam:1};save();go('home')});await p.waitForTimeout(800);await notes();

/* --- Rush Hour, start to finish --- */
await p.click('#newGame');await p.waitForTimeout(600);
if(await p.evaluate(()=>$("sheet").open)){const k=await p.evaluate(()=>[...document.querySelectorAll('#sheetBody button')].map(b=>b.id+':'+b.textContent.trim()).join(' | '));log('rules sheet:',k);
  await p.evaluate(()=>{const b=[...document.querySelectorAll('#sheetBody button')].find(b=>/play|skip|let/i.test(b.textContent));b&&b.click()});await p.waitForTimeout(700)}
for(let i=0;i<5&&await p.evaluate(()=>S.route)==='wiz';i++){const id=await p.evaluate(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(!id)break;await p.click('#'+id);await p.waitForTimeout(1600)}
log('after wizard:',await st());await p.screenshot({path:'out/e2e-1.png'});
await p.evaluate(()=>doSpin(true));await p.clock.runFor(9000);await p.waitForTimeout(300);
let g=await p.evaluate(()=>{const v=byId(S.game.target);return {t:S.game.target,lat:v.lat,lng:v.lng}});log('spun:',await st());
await moveTo(g.lat,g.lng);await p.clock.runFor(4000);await moveTo(g.lat+0.00002,g.lng);await p.clock.runFor(200000);await moveTo(g.lat,g.lng);await p.waitForTimeout(300);
log('at bar 3+ min:',await st(),await p.evaluate(()=>{const a=atVisit();return a?'atVisit '+a.id+' counted='+a.counted:'none'}));
log('notifications so far:',await notes());
// look around the app mid-game: mini bar
await p.click('#tBars');await p.waitForTimeout(700);log('bars tab mini:',await p.evaluate(()=>!$("mini").hidden&&$("mini").innerText.replace(/\s+/g,' ')));
await p.click('#tPlay');await p.waitForTimeout(500);log('play tab ->',await p.evaluate(()=>S.route+' mini='+!$("mini").hidden));
await p.click('#mini');await p.waitForTimeout(700);log('mini tap ->',await st());
// spin again, leave, arrive
log('buttons at bar:',await p.evaluate(()=>[...document.querySelectorAll('#v-play button')].filter(b=>b.offsetParent).map(b=>b.id+':'+b.textContent.trim().slice(0,20)).join(' | ')));
await p.evaluate(()=>{const b=$("spinBtn")||$("skipBtn");if(b)b.click()});await p.waitForTimeout(500);await p.evaluate(()=>doSpin(true));await p.waitForTimeout(300);
log('after tapping spin:',await st(),await p.evaluate(()=>$("sheet").open?'SHEET: '+$("sheetBody").innerText.slice(0,120):'no sheet'),await p.evaluate(()=>typeof spinning!=='undefined'&&spinning));
await p.clock.runFor(9000);await p.waitForTimeout(300);
g=await p.evaluate(()=>{const v=byId(S.game.target);return v?{t:S.game.target,lat:v.lat,lng:v.lng}:null});log('second spin:',await st());
if(g){await moveTo(g.lat-0.003,g.lng);await p.clock.runFor(60000);await moveTo(g.lat,g.lng);await p.clock.runFor(200000);await moveTo(g.lat,g.lng)}
log('second bar:',await st());
// end it from the menu
await p.evaluate(()=>openMenu());await p.waitForTimeout(400);await p.click('#mEnd');await p.waitForTimeout(400);
const endBtn=await p.evaluate(()=>{const b=[...document.querySelectorAll('#sheetBody button')].find(b=>/end/i.test(b.textContent));return b&&b.id});await p.click('#'+endBtn);await p.waitForTimeout(1500);
log('ended:',await st(),'| calls:',await notes());await p.screenshot({path:'out/e2e-2.png'});
log('notification cleared + watcher removed:',await p.evaluate(()=>bgWatch===null));

/* --- R&R --- */
await p.evaluate(()=>{closeSheet();go('home')});await p.waitForTimeout(400);await p.click('#quickGo');await p.waitForTimeout(600);
if(await p.evaluate(()=>$("sheet").open))await p.evaluate(()=>{const b=[...document.querySelectorAll('#sheetBody button')].find(b=>/play|skip|let/i.test(b.textContent));b&&b.click()});await p.waitForTimeout(600);
for(let i=0;i<4&&await p.evaluate(()=>S.route)==='quick';i++){const id=await p.evaluate(()=>{const b=document.querySelector('#cta button:not([disabled])');return b&&b.id});if(!id)break;await p.click('#'+id);await p.waitForTimeout(1600)}
log('R&R started:',await st());
await p.evaluate(()=>doSpin(true));await p.clock.runFor(9000);await p.waitForTimeout(300);
g=await p.evaluate(()=>{const v=byId(S.game.target);return v?{lat:v.lat,lng:v.lng}:null});if(g){await moveTo(g.lat,g.lng);await p.clock.runFor(200000);await moveTo(g.lat,g.lng)}
log('R&R at bar:',await st(),'| live note:',await p.evaluate(()=>{const u=__n.filter(x=>x[1]==='update').pop();return u&&JSON.stringify(u[2])}));
await p.evaluate(()=>openMenu());await p.waitForTimeout(400);await p.click('#mEnd');await p.waitForTimeout(400);
await p.evaluate(()=>{const b=[...document.querySelectorAll('#sheetBody button')].find(b=>/end/i.test(b.textContent));b&&b.click()});await p.waitForTimeout(1500);
log('R&R ended:',await st(),'| watcher stopped:',await p.evaluate(()=>bgWatch===null));

/* --- no location --- */
await p.evaluate(()=>{closeSheet();S.wiz={step:2,start:{type:'area',name:'The City',lat:-33.8650,lng:151.2090},radius:1,len:60,newOnly:false};save();go('wiz');tryStart(true)});await p.waitForTimeout(1200);
log('no-location game:',await st(),await p.evaluate(()=>!!S.game&&S.game.noLoc));
await p.evaluate(()=>doSpin(true));await p.clock.runFor(9000);await p.waitForTimeout(300);
log('check-in alert scheduled:',await p.evaluate(()=>__n.some(x=>x[1]==='schedule'&&JSON.stringify(x[2]).includes('Check-in'))));
await p.clock.runFor(30*60000);await p.waitForTimeout(300);await p.evaluate(()=>{const b=$("hereBtn");b&&b.click()});await p.waitForTimeout(800);
log('checked in by hand:',await st());
await p.evaluate(()=>endGame(now()));await p.waitForTimeout(800);log('no-loc ended:',await st());

/* --- My Tab, settings --- */
await p.evaluate(()=>{closeSheet();go('hist')});await p.waitForTimeout(600);log('My Tab crawls:',await p.evaluate(()=>H.length));
await p.click('[data-gear]');await p.waitForTimeout(600);log('settings:',await p.evaluate(()=>!!$("setPage")));
for(const id of ['stHow','stPerm']){if(await p.$('#'+id)){await p.click('#'+id);await p.waitForTimeout(700);log(id,'sheet:',await p.evaluate(()=>$("sheet").open));await p.evaluate(()=>closeSheet());await p.waitForTimeout(300)}}
if(await p.$('#stBk')){await p.click('#stBk');await p.waitForTimeout(800);log('backup calls:',await notes())}
await p.evaluate(()=>closeSettings(true));
await p.screenshot({path:'out/e2e-3.png'});
console.log('ERRORS:',JSON.stringify(errs));await b.close()})();
