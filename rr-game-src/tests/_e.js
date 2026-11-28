const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];const c=await b.newContext({...devices['Pixel 7'],viewport:{width:412,height:860}});await c.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const A=await c.newPage();A.on('pageerror',x=>e.push(x.message));await A.goto('file://'+process.argv[2]+'?test&fakecloud=http://127.0.0.1:8787');await A.waitForTimeout(600);
await A.evaluate(()=>{S.onboarded=true;S.ob=2;S.seenHow={rush:1,rr:1};S.safeOK=1;S.myName='Chris';S.tips={map2:1,mapOpened:1};S.game={id:"g1",mode:"rush",len:60,visits:[],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:2,cz:{type:"me",r:2},areas:["CBD"],city:"Sydney",started:false,test:false};save();go("play")});
await A.waitForTimeout(800);await A.click('[data-mxinv]');await A.waitForTimeout(600);await A.click('#siG').catch(()=>{});await A.waitForTimeout(2500);await A.evaluate(()=>closeSheet());await A.waitForTimeout(400);
const id=await A.evaluate(()=>G().live);await A.evaluate(id=>simJoin(id,{uid:'sam',n:'Sam'}),id);await A.waitForTimeout(800);await A.screenshot({path:'out/e-1.png',clip:{x:0,y:0,width:412,height:150}});
await A.waitForTimeout(2600);await A.screenshot({path:'out/e-2.png',clip:{x:0,y:0,width:412,height:150}});console.log(e);await b.close()})();
