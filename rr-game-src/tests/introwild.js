// Intro: the wildcard and jackpot slide sits before R&R. R&R's rules sheet says what it leaves out.
// node introwild.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=false;S.intro=3;S.sound=false;S.test=false;save();go('intro')});await p.waitForTimeout(1400);await p.screenshot({path:'out/intro4.png'});
console.log(await p.evaluate(()=>SLIDES.map(s=>s.h)));
await p.click('#introNext');await p.waitForTimeout(1200);await p.screenshot({path:'out/intro5.png'});
console.log('last button',await p.textContent('#introNext'));
await p.evaluate(()=>{S.onboarded=true;save();go('home');cruiseHow()});await p.waitForTimeout(500);await p.screenshot({path:'out/rrhow.png'});
console.log(e);await b.close()})();
