// Timed game setup, then R&R setup in the same session: only one map on the page, R&R's label and dots work.
// node setup-switch.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:915},geolocation:{latitude:-33.8688,longitude:151.2093},permissions:['geolocation']})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};save();go('home')});await p.waitForTimeout(300);
await p.click('#newGame');await p.waitForTimeout(300);await p.click('#wNext');await p.waitForTimeout(1200);await p.click('#wClose');await p.waitForTimeout(300);
await p.click('#quickGo');await p.waitForTimeout(400);await p.click('#qMe');await p.waitForTimeout(200);await p.click('#qNext');await p.waitForTimeout(2000);
console.log('maps on page:',await p.evaluate(()=>document.querySelectorAll('#rrMap').length),'| label:',await p.textContent('#rrLbl'));
const ps=await p.$$('#rrMap .leaflet-marker-icon .pin');await ps[2].click({force:true});await p.waitForTimeout(300);console.log('dot opens card:',!(await p.evaluate(()=>$('rrCard').hidden)));
console.log(e);await b.close()})();
