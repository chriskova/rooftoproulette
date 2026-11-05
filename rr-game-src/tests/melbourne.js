// Melbourne: the city switches from location, Rooftops lists Melbourne's bars, a Rush Hour game in the CBD spins a Melbourne bar, R&R zone setup.
// node melbourne.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{fs.mkdirSync('out',{recursive:true});const b=await chromium.launch();
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-37.8130,longitude:144.9650},permissions:['geolocation']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.clock.install({time:new Date('2026-11-06T19:00:00+11:00')});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(500);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};S.sound=false;save();go('home')});await p.waitForTimeout(1500);
console.log('city',await p.evaluate(()=>S.city),'mel bars',await p.evaluate(()=>VENUES.filter(v=>v.city==='Melbourne').length),'game areas',await p.evaluate(()=>GAME_AREAS('Melbourne').map(a=>a.name).join(', ')));
console.log('open now (Fri 7pm)',await p.evaluate(()=>VENUES.filter(v=>v.city==='Melbourne'&&openState(v,now()).open).length),'far',await p.evaluate(()=>VENUES.filter(v=>v.city==='Melbourne'&&FAR.has(v.id)).map(v=>v.name).join(', ')));
console.log('areaOf mismatches',await p.evaluate(()=>VENUES.filter(v=>v.city==='Melbourne'&&!areaOf(v).src.includes(v.area)).map(v=>v.name)));
await p.evaluate(()=>go('bars'));await p.waitForTimeout(800);await p.screenshot({path:'out/mel-bars.png'});
console.log('rooftops rows',await p.evaluate(()=>document.querySelectorAll('#v-bars .brow, #v-bars [data-v]').length),'parts of town',await p.evaluate(()=>REG().map(r=>r.name).join(', ')));
// Rush Hour in the CBD
await p.evaluate(()=>{S.wiz={step:2,start:{type:'area',name:'Melbourne CBD',lat:-37.8136,lng:144.9650},radius:1,len:60,newOnly:false};save();go('wiz')});await p.waitForTimeout(400);
await p.evaluate(()=>tryStart());await p.waitForTimeout(1200);
console.log('game',await p.evaluate(()=>S.route+' city='+S.game.city+' zoneN='+S.game.zoneN));
await p.evaluate(()=>doSpin(true));await p.waitForTimeout(9000);
console.log('target',await p.evaluate(()=>{const v=byId(S.game.target);return v?v.name+' ('+v.city+', '+v.area+')':'none'}));
await p.screenshot({path:'out/mel-play.png'});
// a bar card with hours in Melbourne time
await p.evaluate(()=>{closeSheet&&closeSheet();barSheet(byId('mel-rooftop-bar-curtin-house'))});await p.waitForTimeout(700);await p.screenshot({path:'out/mel-card.png'});
console.log('card text',await p.evaluate(()=>$('sheetBody').innerText.replace(/\s+/g,' ').slice(0,200)));
console.log(e);await b.close()})();
