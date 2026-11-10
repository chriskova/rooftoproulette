// City picker on the Rooftops tab shows each city's bar count.
// node citycount.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;S.city='Sydney';save();go('bars')});await p.waitForTimeout(600);
await p.click('#barsCity [data-city]');await p.waitForTimeout(400);await p.screenshot({path:'out/citycount.png'});
console.log(await p.$$eval('#sheetBody [data-c] small',x=>x.map(s=>s.textContent)));
console.log(e);await b.close()})();
