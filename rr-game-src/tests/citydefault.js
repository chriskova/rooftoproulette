// Setup starts in the city you're in, even after browsing another city on the Rooftops tab.
// node citydefault.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},geolocation:{latitude:-33.8722,longitude:151.2251},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(600);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1};S.city="Melbourne";S.cityManual=true;save();go('home')});await p.waitForTimeout(800);
await p.click('#newGame');await p.waitForTimeout(400);console.log('city on setup:',await p.evaluate(()=>S.city));
await p.click('#wNext');await p.waitForTimeout(2500);console.log('zone:',await p.textContent('#rrLbl'));
console.log('ERRORS',e);await b.close()})();
