// R&R setup: "Skip bars I've been to" opens an editable Been list right there.
// node beenlist.js $(realpath ../../index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},geolocation:{latitude:-33.8688,longitude:151.2093},permissions:['geolocation']});const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.seenHow={rush:1,rr:1};S.been={};VENUES.filter(inCityNow).slice(0,3).forEach(v=>S.been[v.id]=1);S.quick={step:0,from:null,sel:'__me'};save();go('quick')});await p.waitForTimeout(500);
console.log('step 1 options:',await p.$$eval('#v-quick .opt b',x=>x.map(b=>b.textContent)));
console.log('count:',await p.textContent('#qBeenN'));
await p.click('#qBeenX');await p.waitForTimeout(400);
console.log('open, rows:',await p.$$eval('#bpItems [data-t] b',x=>x.map(b=>b.textContent)));
await p.screenshot({path:'out/been1.png'});
await p.click('#bpItems [data-t]');await p.waitForTimeout(200);console.log('after removing one:',await p.textContent('#qBeenN'));
await p.click('#bpQ');await p.keyboard.type('glen');await p.waitForTimeout(300);
console.log('search glen:',await p.$$eval('#bpItems [data-t] b',x=>x.map(b=>b.textContent)));
await p.click('#bpItems [data-t]');await p.waitForTimeout(200);console.log('after adding:',await p.textContent('#qBeenN'));
// step 2: the toggle recounts without rebuilding the map
await p.evaluate(()=>{S.quick.step=1;S.quick.from={type:'me',lat:-33.8688,lng:151.2093};S.quick.z={lat:-33.8688,lng:151.2093,r:2};save();renderQuick()});await p.waitForTimeout(1500);
console.log('step 2 heading:',await p.textContent('#v-quick h1'),'|',await p.textContent('#v-quick .msub'));
const n0=await p.textContent('#rrN');const mapEl=await p.$('#rrMap .leaflet-container,#rrMap.leaflet-container');
await p.click('#qNew');await p.waitForTimeout(400);const n1=await p.textContent('#rrN');
console.log('open count before/after skipping:',n0,'->',n1,'| same map:',await p.evaluate(m=>document.contains(m),mapEl));
await p.screenshot({path:'out/been2.png',fullPage:true});
console.log(e);await b.close()})();
