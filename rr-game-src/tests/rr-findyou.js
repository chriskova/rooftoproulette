// R&R setup shouldn't sit on "Finding you…" waiting for a GPS lock: a recent fix is used straight away, otherwise the first (rough) answer wins.
// node rr-findyou.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const run=async(tag,fresh)=>{const ctx=await b.newContext({...devices['Pixel 7']});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
  const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
  await p.clock.install({time:new Date('2026-11-27T17:00:00+11:00')});
  // Surry Hills: GPS takes 9 s, the rough network fix 300 ms
  await p.addInitScript(()=>{const pos={coords:{latitude:-33.8845,longitude:151.2120,accuracy:30}};
    const g={getCurrentPosition(ok,bad,o){setTimeout(()=>ok(pos),o&&o.enableHighAccuracy?9000:300)},watchPosition(ok){return 1},clearWatch(){}};
    Object.defineProperty(navigator,'geolocation',{value:g});navigator.permissions.query=async()=>({state:'granted'})});
  await p.goto('file://'+process.argv[2]);await p.clock.runFor(500);const T=f=>p.evaluate(f);
  await T(f=>{S.onboarded=true;S.seenHow={rush:1,rr:1};if(!f)here=null;S.wiz={step:0,len:60,rr:true,radius:1};save();go('wiz')},fresh);
  await p.clock.runFor(600);await p.click('#wNext');const t0=Date.now();
  let ms=null;for(let i=0;i<60;i++){await p.clock.runFor(100);if(await T(()=>!!(S.quick&&S.quick.from&&$("rrMap")))){ms=(i+1)*100;break}}
  console.log(tag,'map after',ms,'ms (page clock) | from',await T(()=>S.quick&&S.quick.from&&S.quick.from.type+' '+S.quick.from.lat.toFixed(3)),'| finding shown',await T(()=>/Finding you/.test($("v-quick").innerText)));
  await p.screenshot({path:`out/rr-findyou-${tag}.png`});await ctx.close()};
await run('fresh',true);await run('cold',false);console.log('errors',e);await b.close()})();
