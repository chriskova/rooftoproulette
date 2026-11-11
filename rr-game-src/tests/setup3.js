// Three-screen timed setup: length, zone (100 m steps, merged bar row, skip toggle, demo fallback), Ready to spin.
// node setup3.js $(realpath ../../index.html)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:780},deviceScaleFactor:2,isMobile:true,hasTouch:true,geolocation:{latitude:-33.8722,longitude:151.2251},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
const at=h=>p.evaluate(h=>{const s=sydAt(now());let d=h*60-s.min;if(d<0)d+=1440;S.ff=(S.ff||0)+d*60000;save()},h);
await at(19);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={};save();go('home')});await p.waitForTimeout(300);
await p.click('#newGame');await p.waitForTimeout(500);await p.screenshot({path:'out/s1.png'});
console.log('s1 heading:',await p.textContent('#wBody h1'));
await p.click('#wNext');await p.waitForTimeout(2500);await p.screenshot({path:'out/s2.png'});
console.log('s2:',await p.textContent('#rrLbl'),'|',await p.textContent('#rrN'),'|',await p.textContent('#rrNs'),'| demo link shown:',!(await p.$eval('#zoneDemo',x=>x.hidden)));
const r=[];for(const v of [0,1,2,3,4,5]){await p.$eval('#rrR',(el,v)=>{el.value=v;el.dispatchEvent(new Event('input'))},v);r.push(await p.textContent('#rrLbl'))}
console.log('slider steps:',r.join(' / '),'| max',await p.$eval('#rrR',x=>x.max));
await p.$eval('#rrR',el=>{el.value=3;el.dispatchEvent(new Event('input'));el.dispatchEvent(new Event('change'))});await p.waitForTimeout(1200);
const fits=async()=>p.evaluate(()=>{const v=$('v-wiz');return {scroll:v.scrollHeight>v.clientHeight+2,map:$('rrMap').offsetHeight}});
console.log('s2 fits:',JSON.stringify(await fits()));
// with past games: toggle shows how many you've been to
await p.evaluate(()=>{const l=playable(inCircle(S.wiz.z,S.wiz.z.r),false).slice(0,2);H.push({id:'h1',mode:'rush',len:60,startedAt:now()-864e5,visits:l.map(v=>({id:v.id,counted:true,arrivedAt:now()-864e5}))});saveH&&saveH();renderWiz()});await p.waitForTimeout(2500);
console.log('toggle:',await p.textContent('#newTogS'),'| fits',JSON.stringify(await fits()));await p.screenshot({path:'out/s2b.png'});
await p.click('#wNext');await p.waitForTimeout(1500);await p.screenshot({path:'out/s3.png'});
console.log('s3:',await p.textContent('#wBody h1'),'|',await p.textContent('#wSum'),'|',await p.textContent('#wSee'),'| rule:',!!(await p.$('.zrule')),'| practice:',!!(await p.$('#wPractice')),'| cta',await p.textContent('#cta'));
console.log('s3 scroll:',await p.evaluate(()=>{const v=$('v-wiz');return v.scrollHeight>v.clientHeight+2}));
await p.click('#wPractice');await p.waitForTimeout(800);console.log('practice sheet:',await p.textContent('#sheetBody h3'),'|',await p.textContent('#demoBack'));await p.click('#demoBack');await p.waitForTimeout(500);
// returning player: no rules
await p.evaluate(()=>{S.seenHow={rush:1};save();renderWiz()});await p.waitForTimeout(400);await p.screenshot({path:'out/s3b.png'});
console.log('s3 returning rule:',!!(await p.$('.zrule')),'| practice:',!!(await p.$('#wPractice')));
await p.click('#wSee');await p.waitForTimeout(600);await p.click('#zList [data-x]');await p.waitForTimeout(300);await p.screenshot({path:'out/s3c.png'});await p.click('#zDone');await p.waitForTimeout(400);
console.log('after veto:',await p.textContent('#wSee'));
// back to the map, morning: nothing open, demo is the main button
await p.click('#wSum [data-s="1"]');await at(9);await p.evaluate(()=>renderWiz());await p.waitForTimeout(2500);await p.screenshot({path:'out/s2c.png'});
console.log('closed row:',await p.textContent('#rrN'),'/',await p.textContent('#rrNs'),'| toggle hidden',await p.$eval('#newTog',x=>x.hidden),'| fits',JSON.stringify(await fits()));
console.log('closed:',await p.textContent('#zWarnT'),'|',await p.textContent('#zWarnS'),'| cta',await p.textContent('#cta'),'| suggest hidden',await p.$eval('#zoneSuggest',x=>x.hidden));
await p.click('.wtop #wBack');await p.waitForTimeout(400);await p.click('[data-l="120"]');await p.click('#wNext');await p.waitForTimeout(1500);
console.log('2h max',await p.$eval('#rrR',x=>x.max),await p.textContent('.rrticks'));await p.evaluate(()=>{S.ff=0;save()});await at(9);await p.evaluate(()=>renderWiz());await p.waitForTimeout(1500);
await p.click('#wDemo');await p.waitForTimeout(800);console.log('demo started:',await p.evaluate(()=>!!(S.game&&S.game.demo)),S=>0);
console.log('ERRORS',e);await b.close()})();
