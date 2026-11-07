// The app is showing Brisbane (picked by hand this run) but you start a crawl in Sydney: the crawl, and the app, switch to Sydney.
// node city-mismatch.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:360,height:780},geolocation:{latitude:-33.8650,longitude:151.2090},permissions:['geolocation']});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();const errs=[];p.on('pageerror',x=>errs.push(x.message));
await p.goto('file://'+process.argv[2]);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};S.tips={night:1,cam:1};S.city='Brisbane';S.cityManual=true;S.cityManualRun=RUN;save();go('home')});await p.waitForTimeout(500);
await p.evaluate(()=>{S.wiz={step:1,start:{type:'me',lat:-33.8650,lng:151.2090},radius:1,len:60,newOnly:false};save();go('wiz');tryStart()});await p.waitForTimeout(1500);
console.log('rush:',await p.evaluate(()=>[S.city,S.game&&S.game.city].join(' / ')));
await p.evaluate(()=>{S.game=null;S.city='Brisbane';S.cityManual=true;S.cityManualRun=RUN;save();S.quick={from:{type:'me',lat:-33.8650,lng:151.2090},r:2};startCruise()});await p.waitForTimeout(1500);
console.log('r&r:',await p.evaluate(()=>[S.city,S.game&&S.game.city].join(' / ')));
await p.screenshot({path:'out/city-mismatch.png'});
console.log('ERRORS:',errs);await b.close()})();
