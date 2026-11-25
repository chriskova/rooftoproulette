// Who's coming? is the last setup step (timed and R&R): Next on the zone, then faces/QR/Share link with Start the crawl;
// the live link made in setup carries into the crawl; three skips in a row and it stops asking.
const {chromium,devices}=require('playwright');(async()=>{const b=await chromium.launch();const e=[];const p=await (await b.newContext({...devices['Pixel 7']})).newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);const T=(f,a)=>p.evaluate(f,a);
const boot=async(signed,skips)=>{await T(([sg,sk])=>{closeSheet();window.matesList=async()=>[{uid:'u2',n:'Sam'},{uid:'u3',n:'Jo'}];const d=new Date(new Date().toLocaleString('en-US',{timeZone:'Australia/Sydney'}));const t=new Date(d);t.setHours(17,0,0,0);S.onboarded=true;S.test=true;S.ff=t-d;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};S.game=null;S.whoSkips=sk;
  if(sg){ME={uid:'me1',name:'Chris',anon:false};S.myName='Chris'}else{ME=null}S.wiz={step:1,len:60,rr:false,radius:3,spoiled:1};save();go('home');go('wiz')},[signed,skips]);await p.waitForTimeout(1800)};
await boot(true,0);console.log('zone button:',await T(()=>$('wNext').textContent));await p.click('#wNext');await p.waitForTimeout(2000);
console.log('step 2:',await T(()=>S.wiz.step+' | '+document.querySelector('#wBody h1').textContent+' | faces '+document.querySelectorAll('#whoBox .fr').length+' qr '+!!document.querySelector('#whoBox .qrbox svg')+' | cta '+$('whoGo').textContent+' | live '+S.wiz.live));await p.screenshot({path:'out/whostep.png'});
await p.click('#whoGo');await p.waitForTimeout(1500);console.log('start → route',await T(()=>S.route+' game.live '+(G()&&G().live)+' skips '+S.whoSkips+' | sheet open '+$('sheet').open));
// three skips → no step
await boot(true,2);await p.click('#wNext');await p.waitForTimeout(1500);await p.click('#whoGo');await p.waitForTimeout(1200);console.log('3rd skip → skips',await T(()=>S.whoSkips));
await boot(true,3);console.log('after 3 skips, zone button:',await T(()=>$('wNext').textContent));
// signed out
await boot(false,0);await p.click('#wNext');await p.waitForTimeout(1200);console.log('signed out:',await T(()=>$('whoBox').innerText.trim()));
// R&R
await T(()=>{closeSheet();ME={uid:'me1',name:'Chris',anon:false};S.myName='Chris';S.whoSkips=0;S.wiz=null;S.quick=null;save();go('quick')});await p.waitForTimeout(2200);
await p.click('#qGo');await p.waitForTimeout(2000);console.log('R&R step:',await T(()=>document.querySelector('#qWho h1').textContent+' qr '+!!document.querySelector('#whoBox .qrbox svg')+' live '+S.quick.live));
await p.click('#whoGo');await p.waitForTimeout(2000);console.log('R&R start →',await T(()=>S.route+' mode '+(G()&&G().mode)+' live '+(G()&&G().live)));
console.log('errors',e);await b.close()})();
