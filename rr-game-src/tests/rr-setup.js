// R&R setup: one full-screen map. Lists as tabs on top (All | Hit list | Favourites), open count pill, Skip inside the bar list.
// node rr-setup.js $(realpath ../../play/index.html)
const {chromium,devices}=require('playwright');
(async()=>{const b=await chromium.launch();const e=[];
const run=async(vw,vh,tag)=>{const ctx=await b.newContext({...devices['Pixel 7'],viewport:{width:vw,height:vh}});await ctx.route('**/i/v0/e/**',r=>r.fulfill({status:200,body:'{}'}));
const p=await ctx.newPage();p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(500);const T=f=>p.evaluate(f);
await T(()=>{S.onboarded=true;S.test=true;S.seenHow={rush:1,rr:1};S.fake={lat:-33.8688,lng:151.2093};const z={lat:-33.8688,lng:151.2093};
  const near=playable(inCircle(z,2),false).filter(v=>openOK(v,now()));
  H.push({id:"hx",city:"Sydney",mode:"rush",len:60,visits:near.slice(0,3).map(v=>({id:v.id,arrivedAt:now()-86400000,leftAt:now()-86300000,counted:true}))});
  S.want={};near.slice(5,11).forEach(v=>S.want[v.id]=1);S.want[near[0].id]=1;S.fav={};near.slice(0,4).forEach(v=>S.fav[v.id]=Date.now());
  const far=VENUES.filter(v=>cityOf(v)==="Sydney"&&openOK(v,now())&&dist(z,v)>3000&&dist(z,v)<4500)[0];if(far)S.want[far.id]=1;
  S.wiz={step:0,len:60,rr:true,radius:1};save();go('wiz')});
await p.waitForTimeout(700);await p.click('#wNext');await p.waitForTimeout(2200);
const st=()=>T(()=>'tabs ['+[...document.querySelectorAll('.fstabs button')].map(x=>(x.getAttribute('aria-selected')==='true'?'*':'')+x.innerText.trim()).join(' | ')+'] pill '+$("rrN").textContent+' | '+$("rrLbl").textContent);
console.log(tag,await st(),'| map h',await T(()=>Math.round($("rrMap").getBoundingClientRect().height)),'scroll',await T(()=>{const v=$("v-quick");return v.scrollHeight-v.clientHeight}),'| cta',await T(()=>$("cta").innerText));
await p.screenshot({path:`out/rr-${tag}-1.png`});
if(tag!=='reg'){await ctx.close();return}
console.log('visited one ticked off Hit list:',await T(()=>!S.want[playable(inCircle({lat:-33.8688,lng:151.2093},2),false).filter(v=>openOK(v,now()))[0].id]));
await p.click('.fspill');await p.waitForTimeout(600);console.log('list sheet skip row:',await T(()=>!!$("mlSkip")),await T(()=>$("sheetBody").querySelector('h3').textContent));await p.screenshot({path:'out/rr-reg-2-list.png'});
await p.click('#mlSkip');await p.waitForTimeout(700);console.log('skip on →',await T(()=>$("sheetBody").querySelector('h3').textContent),await T(()=>$("mlSkip").getAttribute('aria-checked')));
await T(()=>closeSheet());await p.waitForTimeout(400);
await p.click('.fstabs [data-k="fav"]');await p.waitForTimeout(1500);console.log('favs →',await st());await p.screenshot({path:'out/rr-reg-3-fav.png'});
await p.click('.fspill');await p.waitForTimeout(500);console.log('fav list skip row:',await T(()=>!!$("mlSkip")));await T(()=>closeSheet());await p.waitForTimeout(300);
await p.click('.fstabs [data-k="want"]');await p.waitForTimeout(1500);console.log('hit list →',await st(),'r',await T(()=>S.quick.z.r));
await p.click('#qGo');await p.waitForTimeout(1200);console.log('start →',await T(()=>S.route),await T(()=>S.game&&S.game.cz.type+'/'+S.game.cz.list));
await ctx.close()};
await run(412,860,'reg');await run(375,667,'se');console.log('errors',e);await b.close()})();
