// Home gap, My Tab sublines and PBs, How to play sheet, privacy page with back, permissions sheet, backup on the web.
// node settings3.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');const fs=require('fs');
(async()=>{fs.mkdirSync('out',{recursive:true});const b=await chromium.launch();
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},acceptDownloads:true});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]);await p.evaluate(()=>{S.onboarded=true;S.sound=false;save();go('home')});await p.waitForTimeout(500);
console.log('gaps',await p.evaluate(()=>{const c=[...document.querySelectorAll('#v-home .card.mode')].map(e=>e.getBoundingClientRect());return [Math.round(c[1].top-c[0].bottom),Math.round(document.querySelector('.tabs').getBoundingClientRect().top-c[1].bottom)]}));
await p.screenshot({path:'out/s3-home.png'});
// seed a tab
await p.evaluate(()=>{const M=60000,day=86400000,t0=Date.now()-2*day,st={lat:-33.859,lng:151.207};
  const mk=(id,d,mode,len,bars)=>{let t=t0-d*day;const visits=bars.map(([bid,stay])=>{const v={id:bid,arrivedAt:t+5*M,leftAt:t+5*M+stay*M,counted:true};t=v.leftAt;return v});return {id,city:'Sydney',mode,len,radius:.8,startedAt:t0-d*day,endsAt:t+M,endedAt:t+M,started:true,ended:true,startPos:st,center:st,areas:['The Rocks'],visits,trail:[],moves:[]}};
  H.length=0;H.push(mk('a',0,'rush',60,[['the-glenmore',9],['untied',30]]),mk('b',3,'rush',120,[['the-glenmore',12],['smoke-bar',14],['cirq',8]]),mk('c',9,'rush',60,[['cirq',5]]));saveH();go('hist')});
await p.waitForTimeout(500);
console.log('tiles',await p.evaluate(()=>[...document.querySelectorAll('.hstats em')].map(x=>x.textContent)));
console.log('pbs',await p.evaluate(()=>[...document.querySelectorAll('.rec')].map(x=>x.querySelector('small').textContent+' = '+x.querySelector('b').textContent+' ('+x.querySelector('.t>span').textContent+')')));
await p.evaluate(()=>document.querySelector('.recs').scrollIntoView());await p.screenshot({path:'out/s3-tab.png'});
// settings → how to play
await p.evaluate(()=>settingsSheet());await p.waitForTimeout(400);await p.click('#stHow');await p.waitForTimeout(500);
console.log('how',await p.evaluate(()=>({route:S.route,open:$("sheet").open,h:Math.round($("sheet").getBoundingClientRect().height),onb:S.onboarded})));
await p.screenshot({path:'out/s3-how.png'});await p.click('[data-hw="rr"]');await p.waitForTimeout(300);await p.screenshot({path:'out/s3-how2.png'});
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
// privacy: opens inside, back returns to settings
await p.click('#stPriv');await p.waitForTimeout(800);await p.screenshot({path:'out/s3-priv.png'});
console.log('priv',await p.evaluate(()=>!!$("docPage")));await p.goBack();await p.waitForTimeout(500);
console.log('after back',await p.evaluate(()=>({doc:!!$("docPage"),set:!!$("setPage"),url:location.href.slice(-20)})));
await p.click('#stTerms');await p.waitForTimeout(500);await p.click('#dpBack');await p.waitForTimeout(500);
console.log('terms back btn',await p.evaluate(()=>({doc:!!$("docPage"),set:!!$("setPage")})));
await p.click('#stPerm');await p.waitForTimeout(500);console.log('perm note',await p.evaluate(()=>$("sheetBody").querySelectorAll('.note').length));await p.screenshot({path:'out/s3-perm.png'});
await p.evaluate(()=>closeSheet());await p.waitForTimeout(300);
const [dl]=await Promise.all([p.waitForEvent('download',{timeout:5000}).catch(()=>null),p.click('#stBk')]);console.log('backup download',dl&&dl.suggestedFilename());
console.log(e);await b.close()})();
