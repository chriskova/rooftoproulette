// Timed setup's Skip row: "Skip visited rooftops", the visited ones named in yellow; the words open them, the switch toggles.
const {chromium,devices}=require('playwright');(async()=>{const b=await chromium.launch();const e=[];const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);const T=f=>p.evaluate(f);
await T(()=>{const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);S.onboarded=true;S.test=true;S.ff=t-d;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const near=playable(inCircle({lat:-33.8688,lng:151.2093},1),false).filter(v=>openOK(v,now()));H.push({id:'hx',city:'Sydney',mode:'rush',len:60,visits:near.slice(0,4).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});S.quick=null;S.wiz={step:1,len:60,rr:false,radius:3};save();go('wiz')});await p.waitForTimeout(2200);
console.log('row:',await T(()=>$('zSkipC').innerText.replace(/\n/g,' / ')));await p.screenshot({path:'out/skip-row.png',clip:{x:0,y:500,width:412,height:360}});
await p.click('#zSkipC .ln');await p.waitForTimeout(700);console.log('words → sheet:',await T(()=>$('sheet').open&&$('sheetBody').querySelector('h3').textContent),await T(()=>$('sheetBody').querySelectorAll('.zrow').length),'rows | skip',await T(()=>!!S.wiz.newOnly));await p.screenshot({path:'out/skip-sheet.png'});
await T(()=>closeSheet());await p.waitForTimeout(500);
await p.click('#zSkipC .sw');await p.waitForTimeout(500);console.log('switch → skip',await T(()=>!!S.wiz.newOnly),'sheet',await T(()=>$('sheet').open));
console.log('errors',e);await b.close()})();
