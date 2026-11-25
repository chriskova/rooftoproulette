// Who's coming? / Invite friends: crawl friends' faces up top (one tap invites), the QR always there, one Share link button, Skip as text.
const {chromium,devices}=require('playwright');(async()=>{const b=await chromium.launch();const e=[];const p=await (await b.newContext({...devices['Pixel 7']})).newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);const T=(f,a)=>p.evaluate(f,a);
const start=async mates=>{await T(m=>{closeSheet();window.matesList=async()=>m;const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);S.onboarded=true;S.test=true;S.ff=t-d;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};S.game=null;S.wiz={step:1,len:60,rr:false,radius:3,spoiled:1};ME={uid:'me1',name:'Chris',anon:false};S.myName='Chris';save();go('home');go('wiz')},mates);await p.waitForTimeout(1800);await p.click('#wNext');await p.waitForTimeout(3000)};
const desc=()=>T(()=>{const b=$('sheetBody');return `faces ${b.querySelectorAll('.fr').length} | qr ${(b.querySelector('.qrbox')||{}).className||'none'} | buttons ${[...b.querySelectorAll('button.btn')].map(x=>x.textContent.trim()).join(',')} | skip ${!!$('ivSkip')} | h ${Math.round($('sheet').getBoundingClientRect().height)}`});
await start([]);console.log('no friends:',await desc());await p.screenshot({path:'out/iv-none.png'});
await start([{uid:'u2',n:'Sam'},{uid:'u3',n:'Jo'},{uid:'u4',n:'Ali'},{uid:'u5',n:'Priya'},{uid:'u6',n:'Tom'},{uid:'u7',n:'Mia'}]);console.log('friends:   ',await desc());
await p.click('.fr[data-mu="u3"]');await p.waitForTimeout(600);console.log('tap Jo →',await T(()=>document.querySelector('.fr[data-mu="u3"]').innerText.replace(/\n/g,' ')));await p.screenshot({path:'out/iv-row.png'});
await p.click('#ivSkip');await p.waitForTimeout(400);console.log('skip → open',await T(()=>$('sheet').open));
await T(()=>liveInvite());await p.waitForTimeout(900);console.log('pill invite:',await T(()=>$('sheetBody').querySelector('h3').textContent),await desc());
console.log('errors',e);await b.close()})();
