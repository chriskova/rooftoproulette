// "Your crawl" sheet mid-game: mini map, photos, time per bar, tap to favourite. Plus the Favourites list card.
// node crawl-sheet.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;{const d=new Date();d.setHours(19,0,0,0);S.ff=d.getTime()-Date.now()}
 const t=now(),gl=byId('the-glenmore');S.fake={lat:gl.lat,lng:gl.lng};
 S.game={id:'gplay',test:true,city:'Sydney',mode:'rush',len:120,radius:1.5,started:true,startedAt:t-50*6e4,endsAt:t+70*6e4,startPos:{lat:-33.861,lng:151.208},center:{lat:-33.861,lng:151.208},areas:['The Rocks'],
  visits:[{id:'harbour-view-hotel',arrivedAt:t-44*6e4,leftAt:t-33*6e4,counted:true},{id:'henry-deane',arrivedAt:t-27*6e4,leftAt:t-25*6e4,counted:false},{id:'smoke-bar',arrivedAt:t-18*6e4,leftAt:t-6*6e4,counted:true},{id:'the-glenmore',arrivedAt:t-2*6e4,leftAt:null,counted:undefined}],trail:[],moves:[],skipped:[]};
 save();go('play')});
await p.waitForTimeout(1200);await p.evaluate(()=>nightSheet());await p.waitForTimeout(1800);await p.screenshot({path:'out/c1.png'});
await p.click('.ngrow[data-b="smoke-bar"]');await p.waitForTimeout(600);await p.screenshot({path:'out/c2.png'});
await p.click('#tgFav');await p.waitForTimeout(300);console.log('fav',await p.evaluate(()=>JSON.stringify(Object.keys(S.fav))));
await p.evaluate(()=>{closeSheet();nightSheet()});await p.waitForTimeout(1200);
console.log('heart in list',await p.evaluate(()=>!!document.querySelector('.ngrow[data-b="smoke-bar"] .fv')));
await p.evaluate(()=>{closeSheet();go('bars')});await p.waitForTimeout(800);await p.screenshot({path:'out/c3.png'});
await p.click('[data-l="fav"]');await p.waitForTimeout(500);console.log('fav list rows',await p.evaluate(()=>[...document.querySelectorAll('#lsItems [data-t]')].map(x=>x.dataset.t).join(',')));
console.log(e);await b.close()})();
