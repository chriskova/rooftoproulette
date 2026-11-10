// Area pills on the Rooftops tab show how many bars each part of town has.
// node chipcount.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
for(const c of ['Sydney','Gold Coast']){
 await p.evaluate(c=>{S.onboarded=true;S.sound=false;S.city=c;S.barsRegion='all';save();go('bars')},c);await p.waitForTimeout(600);
 await p.screenshot({path:'out/chip-'+c.replace(' ','')+'.png'});
 console.log(c,await p.$$eval('#barsSeg .chip',x=>x.map(s=>s.textContent)));
 console.log(' sum check',await p.evaluate(()=>REG().reduce((n,r)=>n+VENUES.filter(v=>inCityNow(v)&&areaOf(v).reg===r.name).length,0)+'/'+VENUES.filter(inCityNow).length));
 await p.click('#barsSeg .chip:nth-child(2)');await p.waitForTimeout(400);
 console.log(' rows after tap',await p.$$eval('#barsList .barrow',x=>x.length));}
console.log(e);await b.close()})();
