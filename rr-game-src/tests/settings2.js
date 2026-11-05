// Settings: sections render, analytics opt-out stops events, clip storage + clear, permissions sheet.
// node settings2.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},permissions:['geolocation']});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
const sent=[];p.on('request',r=>{if(/\/i\/v0\/e\//.test(r.url()))sent.push(JSON.parse(r.postData()).event)});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(300);
await p.evaluate(async()=>{S.onboarded=true;save();go('home');const cv=document.createElement('canvas');cv.width=400;cv.height=400;const blob=await new Promise(r=>cv.toBlob(r,'image/png'));
 await clipPut({id:'c1',game:'a',at:1,type:'video/mp4',blob,gal:true});await clipPut({id:'c2',game:'a',at:2,type:'video/mp4',blob})});
await p.click('#gearHome');await p.waitForTimeout(700);
console.log('labels:',await p.evaluate(()=>[...document.querySelectorAll('#sheetBody .menu button b, #sheetBody .menu button > span')].map(x=>x.childNodes[0].textContent.trim()).join(' | ')));
console.log('eyebrows:',await p.evaluate(()=>[...document.querySelectorAll('#sheetBody .eyebrow')].map(x=>x.textContent).join(' | ')),'undefined?',await p.evaluate(()=>$('sheetBody').innerHTML.includes('undefined')));
console.log('clips line:',await p.evaluate(()=>$('stClipsS').textContent));
await p.screenshot({path:'out/st1.png',fullPage:false});
await p.evaluate(()=>$('sheet').scrollTop=600);await p.waitForTimeout(200);await p.screenshot({path:'out/st2.png'});
await p.click('#stClips');await p.waitForTimeout(400);console.log('clear sheet:',await p.evaluate(()=>$('sheetBody').innerText.split('\n').slice(0,4).join(' / ')));
await p.click('#ccGal');await p.waitForTimeout(600);console.log('after clearing gallery ones:',await p.evaluate(()=>clipAll().then(L=>L.map(c=>c.id).join(','))));
await p.click('#stPerm');await p.waitForTimeout(500);console.log('perms:',await p.evaluate(()=>$('sheetBody').querySelector('.plist').innerText.replace(/\n/g,' ')));
await p.click('#pmBack');await p.waitForTimeout(400);
const n=sent.length;await p.click('#stAn');await p.waitForTimeout(300);await p.evaluate(()=>{closeSheet();go('bars')});await p.waitForTimeout(400);
console.log('events after opt-out:',sent.slice(n).join(','),'anOff',await p.evaluate(()=>S.anOff));
console.log(e);await b.close()})();
