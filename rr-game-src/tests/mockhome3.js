// Mockup C: a title screen. Big name, the line, then Play and R&R at the bottom. Not wired up.
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
for(const [w,h,tag] of [[412,860,'tall'],[375,700,'short']]){
const p=await (await b.newContext({...devices['Pixel 7'],viewport:{width:w,height:h}})).newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(300);
await p.evaluate(()=>{S.onboarded=true;S.sound=false;S.city="Sydney";S.test=false;save();go("home");
 const home=document.querySelector('#v-home');home.querySelectorAll('.card.mode').forEach(c=>c.style.display='none');
 const hero=home.querySelector('.hero');hero.classList.add('ts');
 hero.querySelector('.brand').innerHTML='Rooftop<br><span>Roulette</span>';
 const ln=document.createElement('p');ln.className='tsline';ln.innerHTML='Race the clock.<br>Spin, go, drink, repeat.';hero.querySelector('.brand').after(ln);
 const t=now(),open=VENUES.filter(inCityNow).filter(v=>openOK(v,t)).length;
 const bot=document.createElement('div');bot.className='tsbot';
 bot.innerHTML=`<div class="tsopen">${I.pin}<span><b>${open} rooftops</b> open in ${esc(cityIn(S.city))} right now</span></div>
  <button class="btn tsplay" type="button">Play</button>
  <button class="txtbtn howlink" type="button">How it works</button>
  <button class="tsrr" type="button"><span class="mic">${CHEERS_ART().replace('class="ia-cheers"','class="ia-cheers mcheers"').replace('viewBox="0 0 48 48"','viewBox="4 0 40 40"')}</span><span class="rrt"><b>R<i>&amp;</i>R</b><small>Rest &amp; Roulette.<br>Same game, no clock.</small></span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>`;
 home.appendChild(bot);
 const st=document.createElement('style');st.textContent=`
 #v-home .hero.ts{flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 2px}
 #v-home .hero.ts .brand{font-size:clamp(68px,22vw,96px);line-height:.86;white-space:normal}
 .tsline{margin:18px 0 0;font-size:clamp(18px,5vw,21px);line-height:1.4;color:var(--muted)}
 .tsbot{display:flex;flex-direction:column;gap:12px}
 .tsopen{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:14.5px;padding:0 2px}
 .tsopen svg{width:16px;height:16px;color:var(--amber);flex:none}.tsopen b{color:var(--text);font-weight:700}
 #v-home .tsplay{height:60px;font-size:19px}
 #v-home .tsbot .howlink{margin:-4px 0 2px;font-size:14px}
 .tsrr{appearance:none;display:flex;align-items:center;gap:14px;width:100%;text-align:left;background:var(--s1,#151a22);border:1.5px solid var(--line);border-radius:20px;padding:12px 14px;color:var(--text)}
 .tsrr .mic{width:46px;height:46px;border-radius:14px;background:var(--s2);color:var(--amber);display:grid;place-items:center;flex:none}
 .tsrr .mic svg{width:26px;height:26px}
 .tsrr .rrt{flex:1;display:flex;flex-direction:column;gap:1px}
 .tsrr b{font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:26px;line-height:1;letter-spacing:.02em}.tsrr b i{font-style:normal;color:var(--amber)}
 .tsrr small{color:var(--muted);font-size:14.5px}
 .tsrr .chev{width:20px;height:20px;color:var(--muted)}`;document.head.appendChild(st)});
await p.waitForTimeout(500);await p.screenshot({path:'out/mock3-'+tag+'.png'});}
console.log(e);await b.close()})();
