// Low battery while you hold the spin and someone's following: one follower → named, hands straight over; more → pick who; nobody → no ask.
const {chromium,devices}=require('playwright');(async()=>{const b=await chromium.launch();const e=[];const ctx=await b.newContext({...devices['Pixel 7']});
await ctx.addInitScript(()=>{const L={};window.__bat={level:.6,charging:false,addEventListener:(k,f)=>{(L[k]=L[k]||[]).push(f)},fire:k=>(L[k]||[]).forEach(f=>f())};navigator.getBattery=()=>Promise.resolve(window.__bat)});
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(800);const T=(f,a)=>p.evaluate(f,a);await T(()=>batteryWatch());
const run=members=>T(async m=>{closeSheet();await new Promise(r=>setTimeout(r,250));batAsked=false;S.game={id:"gb",mode:"rush",len:60,started:true,startedAt:now(),endsAt:now()+36e5,visits:[],skipped:[],center:{lat:-33.8688,lng:151.2093},radius:1,areas:["CBD"],city:"Sydney",live:"L1",test:true,moves:[],excluded:[]};
  ME={uid:"me1",name:"Chris",anon:false};liveDoc={host:"me1",members:m};__bat.level=.6;__bat.fire("levelchange");const a=$("sheet").open;
  __bat.level=.14;__bat.fire("levelchange");await new Promise(r=>setTimeout(r,300));const t=$("sheet").open?$("sheetBody").innerText.replace(/\n+/g," / "):"no ask";
  let after="";if($("bGive")&&Object.keys(m).length>1){$("bGive").click();await new Promise(r=>setTimeout(r,400));after=" || Give → "+$("sheetBody").querySelector("h3").textContent}
  return "60%: "+(a?"ask":"none")+" | 14%: "+t+after},members);
console.log('one   →',await run({u2:{n:"Sam"}}));
console.log('three →',await run({u2:{n:"Sam"},u3:{n:"Jo"},u4:{n:"Ali"}}));
console.log('none  →',await run({}));
console.log('errors',e);await b.close()})();
