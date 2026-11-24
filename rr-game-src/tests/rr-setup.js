// R&R setup: Pick your crawl → one map screen with pills (open count, Hit list, Skip visited), circle from the start, Start the crawl
// node rr-setup.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const run=async(vw,vh,tag)=>{const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:vw,height:vh}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(500);const T=f=>p.evaluate(f);
await T(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const z={lat:-33.8688,lng:151.2093};
  const near=playable(inCircle(z,2),false).filter(v=>openOK(v,now()));
  H.push({id:"hx",city:"Sydney",mode:"rush",len:60,visits:near.slice(0,3).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});
  S.want={};near.slice(5,11).forEach(v=>S.want[v.id]=1);S.want[near[0].id]=1;S.fav={};near.slice(0,4).forEach(v=>S.fav[v.id]=Date.now());const far=VENUES.filter(v=>cityOf(v)==="Sydney"&&openOK(v,now())&&dist(z,v)>3000&&dist(z,v)<4500)[0];if(far)S.want[far.id]=1;
  S.wiz={step:0,len:60,rr:true,radius:1};save();go('wiz')});
await p.waitForTimeout(700);
if(tag==='reg')console.log('tile:',await T(()=>document.querySelector('[data-l="rr"]').innerText.replace(/\n/g,' / ')));
await p.click('#wNext');await p.waitForTimeout(2200);
console.log(tag,'route',await T(()=>S.route),'| h1',await T(()=>$("v-quick").querySelector('h1').textContent),'| r',await T(()=>S.quick.z&&S.quick.z.r),
  '| pills',await T(()=>[...document.querySelectorAll('#v-quick .mchips .mchip, #v-quick .fspill')].filter(x=>!x.hidden).map(x=>x.innerText.trim()).join(' | ')),
  '| map h',await T(()=>Math.round($("rrMap").getBoundingClientRect().height)),'scroll',await T(()=>{const v=$("v-quick");return v.scrollHeight-v.clientHeight}),'| cta',await T(()=>$("cta").innerText));
await p.screenshot({path:`out/rr-${tag}-1.png`});
if(tag!=='reg'){await ctx.close();return}
await p.click('#zSkipC');await p.waitForTimeout(400);console.log('skip on →',await T(()=>$("rrN").textContent));await p.click('#zSkipC');await p.waitForTimeout(300);
console.log('want ticked off (visited one removed):',await T(()=>!S.want[playable(inCircle({lat:-33.8688,lng:151.2093},2),false).filter(v=>openOK(v,now()))[0].id]));
await p.click('#qHL');await p.waitForTimeout(500);console.log('picker:',await T(()=>[...document.querySelectorAll('#qMenu [data-k]')].map(x=>x.innerText.replace(/\n/g,' / ')).join(' | ')));await p.screenshot({path:'out/rr-reg-1b-picker.png'});
await p.click('#qMenu [data-k="fav"]');await p.waitForTimeout(1500);console.log('favs →',await T(()=>[...document.querySelectorAll('#v-quick .mchips .mchip, #v-quick .fspill')].filter(x=>!x.hidden).map(x=>x.innerText.trim().replace(/\n/g,' ')).join(' | ')));await p.screenshot({path:'out/rr-reg-1c-fav.png'});
await p.click('#qHL');await p.waitForTimeout(500);await p.click('#qMenu [data-k="want"]');await p.waitForTimeout(1500);console.log('hit list on → r',await T(()=>S.quick.z.r),'|',await T(()=>[...document.querySelectorAll('#v-quick .mchips .mchip, #v-quick .fspill')].filter(x=>!x.hidden).map(x=>x.innerText.trim()).join(' | ')),'| label',await T(()=>$("rrLbl").textContent));
await p.screenshot({path:`out/rr-${tag}-2-hl.png`});
await p.click('#qBack');await p.waitForTimeout(600);console.log('back →',await T(()=>S.route),await T(()=>S.wiz&&S.wiz.rr));
await p.click('#wNext');await p.waitForTimeout(2000);await p.click('#qHL');await p.waitForTimeout(400);await p.click('#qMenu [data-k="fav"]');await p.waitForTimeout(1200);await p.click('#qGo');await p.waitForTimeout(1200);console.log('fav start →',await T(()=>S.route),await T(()=>S.game&&JSON.stringify(S.game.cz)),await T(()=>S.game&&S.game.areas));
await T(()=>{S.game=null;S.wiz={step:0,len:60,rr:true,radius:1};save();go('wiz')});await p.waitForTimeout(500);await p.click('#wNext');await p.waitForTimeout(2000);await p.click('#qGo');await p.waitForTimeout(1200);
console.log('start →',await T(()=>S.route),await T(()=>S.game&&S.game.mode),await T(()=>S.game&&S.game.cz.type));
await ctx.close()};
await run(412,860,'reg');await run(375,667,'se');console.log('errors',e);await b.close()})();
