// Mockup: R&R as a proper second game, with its own button and how-it-works link. Not wired up.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
for(const [w,h,tag] of [[412,860,'tall'],[375,667,'short']]){
 const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:w,height:h}})).newPage();p.on('pageerror',x=>e.push(x.message));
 await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
 await p.evaluate(()=>{S.onboarded=true;S.sound=false;S.test=false;S.city='Sydney';S.want={};VENUES.filter(inCityNow).slice(0,27).forEach(v=>S.want[v.id]=1);save();go('home');
  const rr=$("quickGo"),card=document.createElement('div');card.className='rrcard';
  card.innerHTML=`<div class="rrhead"><span class="mic">${$("rrIcon").innerHTML}</span><div><b>R<i>&amp;</i>R</b><small>Rest &amp; Roulette</small></div></div>
   <p class="rrdesc">No clock, no wildcards. Stay at each bar as long as you like.</p>
   <div class="rracts"><button class="btn line" type="button">Play R&amp;R</button><button class="txtbtn" type="button">How R&amp;R works</button></div>`;
  rr.replaceWith(card);$("homeWant").remove();
  const st=document.createElement('style');st.textContent=`
  #v-home .rrcard{background:var(--s1);border:1.5px solid var(--line);border-radius:20px;padding:14px 14px 12px;display:flex;flex-direction:column;gap:10px}
  .rrhead{display:flex;align-items:center;gap:12px}
  .rrhead .mic{width:44px;height:44px;border-radius:13px;background:var(--s2);color:var(--amber);display:grid;place-items:center;flex:none}.rrhead .mic svg{width:25px;height:25px}
  .rrhead div{display:flex;flex-direction:column;gap:3px}
  .rrhead b{font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:26px;line-height:1;letter-spacing:.02em}.rrhead b i{font-style:normal;color:var(--amber)}
  .rrhead small{color:var(--muted);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
  .rrdesc{margin:0;color:var(--muted);font-size:15px;line-height:1.4}
  .rracts{display:flex;align-items:center;gap:14px}.rracts .btn{flex:1;height:48px}
  .rracts .txtbtn{color:var(--muted);font-size:14px;text-decoration:underline;text-underline-offset:3px;white-space:nowrap}`;document.head.appendChild(st);fitHome()});
 await p.waitForTimeout(600);await p.screenshot({path:'out/mockrr-'+tag+'.png'});}
console.log(e);await b.close()})();
