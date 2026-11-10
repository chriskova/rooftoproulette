// Home mode cards: lines and icons.
// node homecards.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;save();go('home')});await p.waitForTimeout(800);
await p.screenshot({path:'out/home.png'});
console.log(await p.$$eval('#v-home .modeline',x=>x.map(s=>s.innerText)));
console.log(e);await b.close()})();
