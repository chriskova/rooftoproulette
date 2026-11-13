// First camera open hands over a picture that never moves: the app reopens the camera by itself, once.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch({args:['--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream']});
const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860},permissions:['camera','microphone']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
await p.addInitScript(()=>{let n=0;const real=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia=c=>{n++;window._gum=n;if(n===1){const cv=document.createElement('canvas');cv.width=640;cv.height=480;return Promise.resolve(cv.captureStream(0))}return real(c)}});
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(600);
await p.evaluate(()=>{S.onboarded=true;S.firstPlay=1;S.seenHow={rush:1,rr:1};S.sound=false;S.fake={lat:-33.8688,lng:151.2093};save();
  const c={lat:-33.8688,lng:151.2093};S.game={id:"g1",mode:"rush",city:"Sydney",len:60,radius:1,center:c,startPos:c,areas:["CBD"],moves:[],freeSkips:0,excluded:[],zone:{lat:c.lat,lng:c.lng,name:"CBD"},cz:{type:"me",r:1},visits:[],target:null,started:false,test:true};save();go('play')});
await p.waitForTimeout(800);await p.click('#camBtn.ontop,#camBtn');
for(let i=0;i<14;i++){await p.waitForTimeout(500)}
console.log('getUserMedia calls:',await p.evaluate(()=>window._gum),'| moving picture:',await p.evaluate(()=>{const v=$('camVid');return !!(v&&v.videoWidth&&v.currentTime>0)}),e);
await b.close()})();
