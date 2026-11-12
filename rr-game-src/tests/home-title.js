// Home is a title screen: name, line, open count, Play, R&R. Checks the buttons still start the right thing.
// node home-title.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
for(const [w,h,tag,extra] of [[412,860,'tall',0],[375,667,'short',0],[375,667,'short-extras',1]]){
 const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:w,height:h}})).newPage();p.on('pageerror',x=>e.push(tag+': '+x.message));
 await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
 await p.evaluate(x=>{S.onboarded=true;S.sound=false;S.test=false;S.city='Sydney';if(x){S.want={};VENUES.filter(inCityNow).slice(0,3).forEach(v=>S.want[v.id]=1)}save();go('home')},extra);await p.waitForTimeout(700);
 await p.screenshot({path:'out/home-'+tag+'.png'});
 console.log(tag,await p.evaluate(()=>{const v=$("v-home");return {fits:v.scrollHeight<=v.clientHeight+1,hs:v.style.getPropertyValue('--hs'),open:$("homeOpen").textContent,play:$("newGame").textContent}}));
 if(tag==='tall'){
  await p.click('#homeHow');await p.waitForTimeout(400);console.log(' how it works goes to:',await p.evaluate(()=>S.route));await p.click('#introSkip');await p.waitForTimeout(300);
  await p.evaluate(()=>{S.seenHow={rush:1,rr:1};save()});
  await p.click('#newGame');await p.waitForTimeout(500);console.log(' Play goes to:',await p.evaluate(()=>S.route),await p.$eval('#v-wiz .eyebrow',x=>x.textContent).catch(()=>'-'));
 }}
console.log(e);await b.close()})();
