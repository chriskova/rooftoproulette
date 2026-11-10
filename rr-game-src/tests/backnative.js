// Android back button in the phone app (Capacitor's App plugin mocked): closes a panel, steps back a screen, at home tucks the app away.
// node backnative.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}})).newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.addInitScript(()=>{window.__min=0;window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'android',nativePromise:()=>Promise.resolve({}),
  Plugins:{App:{addListener:(ev,fn)=>{if(ev==='backButton')window.__back=fn;return Promise.resolve({remove(){}})},minimizeApp:()=>{window.__min++;return Promise.resolve()}}}}});
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(400);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};save();go('home')});await p.waitForTimeout(300);
const where=()=>p.evaluate(()=>S.route+(S.route==='wiz'?' step'+S.wiz.step:'')+($('sheet').open?' +panel':'')+' minimised:'+window.__min);
const back=async()=>{await p.evaluate(()=>window.__back&&window.__back());await p.waitForTimeout(350);return where()};
console.log('listener registered:',await p.evaluate(()=>typeof window.__back));
await p.click('#newGame');await p.waitForTimeout(300);await p.click('#wNext');await p.waitForTimeout(700);console.log('setup:',await where());
console.log('back:',await back());console.log('back:',await back());
await p.evaluate(()=>{go('hist')});await p.waitForTimeout(300);console.log('My Tab:',await where());console.log('back:',await back());
await p.evaluate(()=>barSheet(VENUES[0]));await p.waitForTimeout(300);console.log('bar card:',await where());console.log('back:',await back());
console.log('back at home:',await back());
console.log(e);await b.close()})();
