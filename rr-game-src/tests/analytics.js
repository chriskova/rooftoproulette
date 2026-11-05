// Checks PostHog events: page views with a session, URL and device info; nothing sent in test mode.
// node analytics.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7']});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
const sent=[];p.on('request',r=>{if(/\/i\/v0\/e\//.test(r.url())){try{sent.push(JSON.parse(r.postData()))}catch(_){}}});
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.goto('file://'+process.argv[2]);await p.evaluate(()=>{localStorage.setItem('rr-app-v3',JSON.stringify({onboarded:true,route:'home'}))});
await p.goto('file://'+process.argv[2]);await p.waitForTimeout(1200);
await p.evaluate(()=>{S.onboarded=true;save();go('home')});await p.waitForTimeout(200);await p.evaluate(()=>go('bars'));await p.waitForTimeout(300);await p.evaluate(()=>go('hist'));await p.waitForTimeout(500);
console.log(sent.map(x=>x.event+' '+(x.properties.$pathname||'')).join('\n'));
const pv=sent.find(x=>x.event==='$pageview');console.log('pv props',pv&&JSON.stringify({s:pv.properties.$session_id,os:pv.properties.$os,br:pv.properties.$browser,dt:pv.properties.$device_type,ref:pv.properties.$referrer,url:pv.properties.$current_url}));
console.log('same session',new Set(sent.map(x=>x.properties.$session_id)).size===1);
const n=sent.length;await p.evaluate(()=>{S.test=true;save();go('bars')});await p.waitForTimeout(300);console.log('test mode sends',sent.length-n);
console.log(e);await b.close()})();
