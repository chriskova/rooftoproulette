/*@@PLAY@@*/
/* ---------- play render ---------- */
const SKIP_COST=2;
let lastFix=Date.now();
function needManual(g){
  if(S.test||!g.target)return false;
  if(locErr!=null)return true;
  if(!here)return now()-g.targetAt>60000;
  if(here.acc>100)return true;
  if(Date.now()-lastFix>90000)return true;
  const v=byId(g.target),exp=walkMin(g.targetFrom||here,v);
  return now()-g.targetAt>(exp*1.5+5)*60000;
}
function logArrival(manual){
  const g=G();if(!g||!g.target)return;const v=byId(g.target);
  g.visits.push({id:v.id,arrivedAt:now(),leftAt:null,counted:undefined,manual:!!manual});
  animateId="at:"+v.id;g.target=null;ding();buzz([60,40,60]);confetti();save();
  if(S.route==="play")renderPlay();
}
function renderPlay(){
  const g=G();if(!g)return;
  $("pMenu").innerHTML=I.more;
  const counted=g.visits.filter(v=>v.counted===true).length;
  $("pCount").innerHTML=`${I.glass.replace('<svg','<svg width="18" height="18" style="color:var(--amber)"')} <b>${counted}</b>`;
  $("strip").innerHTML=g.visits.map((v,i)=>{const b=byId(v.id),c=v.leftAt==null?"here":v.counted===true?"yes":v.counted===false?"no":"q";return `<span class="pip ${c}">${i+1}. ${esc(b.name)}${c==="yes"?" ✓":""}</span>`}).join("");
  $("strip").hidden=!g.visits.length;
  renderClock();
  if(spinning)return;
  const st=$("stage"),a=atVisit(),t=now(),rem=remaining();
  const qi=g.visits.findIndex(v=>v.leftAt!=null&&v.counted===null);
  const ask=qi>=0?`<div class="ask"><b>Should ${esc(byId(g.visits[qi].id).name)} count?</b><span class="small">You were there under ${DWELL_MIN} minutes. Count it if you had a drink.</span><div class="row"><button class="btn sm" type="button" id="aY">Count it</button><button class="btn sm dark" type="button" id="aN">Don't count</button></div></div>`:"";
  let banner="";
  if(g.started&&rem<=FINAL*60000&&!g.shownFinal){g.shownFinal=true;g.finalBanner=true;save()}
  if(g.finalBanner&&!a)banner=`<div class="banner"><b>Final stretch.</b> From now on, spins only pick bars you can reach before the clock runs out.</div>`;
  const wild=(id)=>g.wild&&g.wild.id===id?`<div class="wild">${I.sparkle}<span><b>Wildcard</b>${esc(g.wild.text)}<small>Just for fun. Up to you.</small></span></div>`:"";
  if(a){
    const v=byId(a.id),o=openState(v,t),d=t-a.arrivedAt,ok=d>=DWELL_MIN*60000,nw=isNew(v.id);
    st.innerHTML=ask+`<div class="bar at${animateId===("at:"+a.id)?" anim":""}"><span class="eyebrow">Visit logged${nw?'<span class="newpill">New to you</span>':""}</span><h2>${esc(v.name)}</h2>
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><div class="small">Time here</div><div class="dwell" id="dwell">${mmss(d)}</div></div>
      <div class="small" style="text-align:right">${ok?'<b style="color:var(--green)">Counts ✓</b>':`Counts at ${DWELL_MIN}:00`}${o.open?"<br>Closes "+clock12(o.closeAt):""}</div></div>
      ${g.wild&&g.wild.id===v.id?wild(v.id).replace('class="wild"','class="wild dark"'):""}</div>
      ${tip("atbar","Stay 5 minutes and it counts, then spin when you're ready to move on.",false)}
      <button class="btn" type="button" id="spinBtn">Spin for the next one</button>
      ${d<DWELL_MIN*60000?`<div class="links"><button class="btn sm line" type="button" id="cantBtn" style="width:auto;padding:0 16px">Can't get in?</button></div>`:""}`;
    if(animateId===("at:"+a.id))animateId=null;
  }else if(g.target){
    const v=byId(g.target),y=you()||g.targetFrom,o=openState(v,t),dm=dist(y,v),nw=isNew(v.id),man=needManual(g);
    st.innerHTML=banner+ask+`<div class="bar${animateId===v.id?" anim":""}"><span class="eyebrow">Next rooftop${nw?'<span class="newpill" style="background:rgba(36,24,3,.15);color:var(--amber-ink)">New to you</span>':""}</span><h2>${esc(v.name)}</h2>
      <div class="facts"><span>${I.walk} ${walkMin(y,v)} min walk</span><span>${I.pin} ${mOrKm(dm)}</span>${o.open?`<span>${I.clock} til ${clock12(o.closeAt)}</span>`:""}</div>
      ${wild(v.id)}
      <a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.name+", "+v.address+", NSW")}" target="_blank" rel="noopener">${I.nav} Directions</a></div>
      ${tip("enroute","Your visit is logged when you arrive. Nothing to tap.",true)}
      <div class="links"><button class="btn sm line" type="button" id="skipBtn" style="width:auto;padding:0 16px">${g.freeSkip?"Skip · free":"Skip · −"+SKIP_COST+" min"}</button>${man?`<button class="btn sm line" type="button" id="hereBtn" style="width:auto;padding:0 16px">I'm here</button>`:""}</div>
      ${man?`<p class="note" style="text-align:center;margin:0">Location's struggling. Tap "I'm here" if you've arrived.</p>`:""}`;
    if(animateId===v.id)animateId=null;
  }else{
    st.innerHTML=banner+ask+`<button class="wheel" type="button" id="spinBtn">SPIN<small>${g.visits.length?"for the next rooftop":"for your first rooftop"}</small></button>
      ${g.started?"":`<p class="note" style="text-align:center;margin:0">The clock starts when you spin.</p>`}`;
  }
  g._man=g.target?needManual(g):false;
  const sb=$("spinBtn");if(sb)sb.onclick=doSpin;
  if(qi>=0){$("aY").onclick=()=>answer(qi,true);$("aN").onclick=()=>answer(qi,false)}
  const sk=$("skipBtn");if(sk)sk.onclick=()=>{const free=!!g.freeSkip;sheet(`<h3>Skip ${esc(byId(g.target).name)}?</h3><p class="note">${free?"Your wildcard covers this one, so no time lost.":`Skipping costs <b style="color:var(--amber)">${SKIP_COST} minutes</b> off the clock. You'll get a different rooftop.`}</p><div class="acts"><button class="btn" type="button" id="sY">${free?"Skip it, free":"Skip it (−"+SKIP_COST+" min)"}</button><button class="btn dark" type="button" id="sN">Keep it</button></div>`,()=>{$("sN").onclick=closeSheet;$("sY").onclick=()=>{closeSheet();if(free)g.freeSkip=false;else{g.endsAt-=SKIP_COST*60000;g.skipCost=(g.skipCost||0)+SKIP_COST}(g.skipped=g.skipped||[]).push(g.target);g.target=null;save();if(remaining()<=0){loop();return}doSpin()}})};
  const cg=$("cantBtn");if(cg)cg.onclick=()=>{const v=byId(a.id);sheet(`<h3>Couldn't get in to ${esc(v.name)}?</h3><p class="note">Closed, full, or not letting groups in. You get a free re-spin and no time is lost. We'll note it so the bar gets checked.</p><div class="acts"><button class="btn" type="button" id="cY">Yes, free re-spin</button><button class="btn dark" type="button" id="cN">We're in</button></div>`,()=>{$("cN").onclick=closeSheet;$("cY").onclick=()=>{closeSheet();a.leftAt=now();a.counted=false;a.cant=true;S.reports.push({id:a.id,at:now()});(g.skipped=g.skipped||[]).push(a.id);save();doSpin()}})};
  const hb=$("hereBtn");if(hb)hb.onclick=()=>{const v=byId(g.target),far=here?dist(here,v):null;
    sheet(`<h3>At ${esc(v.name)}?</h3><p class="note">${far!=null&&far>800?`Your phone last placed you ${mOrKm(far)} away, but GPS can be off.`:"Your location isn't coming through properly, so you can log the visit yourself."} Only tap this if you're actually there.</p><div class="acts"><button class="btn" type="button" id="hY">Yes, log my visit</button><button class="btn dark" type="button" id="hN">Not yet</button></div>`,()=>{$("hN").onclick=closeSheet;$("hY").onclick=()=>{closeSheet();logArrival(true)}})};
  const gn=$("gpsNote");
  if(S.test)gn.textContent="";
  else if(locErr===1)gn.innerHTML=`<b style="color:var(--red)">Location is off.</b> Turn it back on so visits log automatically.`;
  else if(!here)gn.textContent="Finding you…";
  else gn.textContent=g.target?"Keep the app open on the way so your visit logs the moment you arrive.":"";
}
function confetti(){
  const app=$("app"),cols=["#F5B83D","#F4F1EA","#4ADE80","#FFD27A"];
  for(let i=0;i<46;i++){const p=document.createElement("i");p.className="cf";p.style.left=(Math.random()*100)+"%";p.style.background=cols[i%4];p.style.animationDelay=(Math.random()*.25)+"s";p.style.setProperty("--x",(Math.random()*160-80)+"px");p.style.setProperty("--r",(Math.random()*720-360)+"deg");app.appendChild(p);setTimeout(()=>p.remove(),1900)}
}
const WILDS=[
 "Order something none of you have tried before.",
 "Bartender's choice for the whole group.",
 "Everyone orders the same thing.",
 "Pick the drink for the person on your left.",
 "Order the drink with the strangest name on the menu.",
 "Loser of rock-paper-scissors picks the round.",
 "Order by pointing at the menu. No talking.",
 "Free skip: your next skip won't cost any time."
];
function rollWild(g,id){
  if(g.visits.length<1||Math.random()>.3){g.wild=null;return}
  let pool=WILDS.filter(w=>w!==(g.lastWild||""));const w=pool[Math.floor(Math.random()*pool.length)];
  g.wild={id,text:w};g.lastWild=w;if(w.startsWith("Free skip"))g.freeSkip=true;
}
/*@@END@@*/
/*@@SCORE@@*/
let eMap=null;
function renderEnd(){
  const r=H.find(x=>x.id===S.lastEnd),box=$("v-end");if(!r){go("home");return}
  const st=stats(r),n=st.counted.length,lenTxt=r.len===60?"1 hour":"2 hours",nw=(r.newIds||[]).length;
  const pending=r.visits.map((v,i)=>({v,i})).filter(o=>o.v.counted===null);
  const atBars=st.arrived.reduce((s,v)=>s+((v.leftAt||r.endedAt)-v.arrivedAt),0),moving=Math.max(0,st.dur-atBars);
  let photo="";
  if(r.missed&&r.missed.m!=null&&r.missed.m<=300)photo=`${esc(byId(r.missed.id).name)} was just ${mOrKm(r.missed.m)} away at zero`;
  else if(st.last&&!r.early&&!r.missed&&r.endsAt-st.last.arrivedAt<=5*60000)photo=`Made it into ${esc(byId(st.last.id).name)} with ${mmss(r.endsAt-st.last.arrivedAt)} to spare`;
  const areas=r.areas.filter((a,i)=>a!==r.areas[i-1]).join(" → ");
  box.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center"><span class="eyebrow">${lenTxt} · ${dateTxt(r.startedAt)}</span><button class="txtbtn amber" type="button" id="doneBtn">Done</button></div>
    <div class="score"><div class="duo"><div><div class="big">${n}</div><div class="lbl">rooftop${n===1?"":"s"}</div></div><div class="sep"></div><div><div class="big">${(st.total/1000).toFixed(1)}</div><div class="lbl">km covered</div></div></div>
      <div class="small" style="margin-top:12px">${esc(areas)} · ${hmm(st.dur)}${r.skipCost?` · ${r.skipCost} min lost to skips`:""}</div>
      ${nw?`<div class="pb">${nw} rooftop${nw===1?"":"s"} you'd never been to</div>`:""}</div>
    ${pending.map(o=>`<div class="ask"><b>Should ${esc(byId(o.v.id).name)} count?</b><span class="small">You were there under ${DWELL_MIN} minutes. Count it if you had a drink.</span><div class="row"><button class="btn sm" type="button" data-q="${o.i}" data-a="1">Count it</button><button class="btn sm dark" type="button" data-q="${o.i}" data-a="0">Don't count</button></div></div>`).join("")}
    <div class="row2"><button class="btn" type="button" id="shareBtn">${I.share} Share to story</button><button class="btn dark" type="button" id="runBack">${I.redo} Run it back</button></div>
    <div class="map"><div id="endMap" style="height:240px"></div></div>
    <div class="card" style="padding:4px 16px"><div class="list">${st.arrived.map((v,i)=>`<div class="li"><span>${i+1}. ${esc(byId(v.id).name)}${(r.newIds||[]).includes(v.id)?'<span class="newpill">New</span>':""}${v.cant?' <span class="small">(couldn\'t get in)</span>':v.counted===false?' <span class="small">(didn\'t count)</span>':v.counted===null?' <span class="small">(?)</span>':""}</span><span class="r">${v.leftAt?hmm(v.leftAt-v.arrivedAt):"—"}</span></div>`).join("")||`<div class="li"><span class="small">No visits logged this time.</span></div>`}</div></div>
    <div class="grid2">
      <div class="stat"><small>At the bars</small><b>${hmm(atBars)}</b></div>
      <div class="stat"><small>Getting there</small><b>${hmm(moving)}</b></div>
      <div class="stat"><small>Longest trip</small><b>${st.longest?km(st.longest.d):"—"}</b></div>
      <div class="stat"><small>Quickest turnaround</small><b>${st.quick?hmm(st.quick.ms):"—"}</b></div>
      ${photo?`<div class="stat w" style="border-color:var(--amber)"><small style="color:var(--amber)">Photo finish</small><b>${photo}</b></div>`:""}
    </div>
    ${n?`<div class="card"><div class="eyebrow" style="margin-bottom:10px">Bar of the day</div><div class="chips">${st.counted.map(v=>`<button class="chip" type="button" data-b="${v.id}" aria-pressed="${r.barOfDay===v.id}">${esc(byId(v.id).name)}</button>`).join("")}</div></div>`:""}
    <div class="card photo"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><div class="eyebrow">Crew photo</div><div class="small">Goes on your story share</div></div>
      <label class="btn sm dark" style="width:auto;padding:0 14px">${I.camera} ${r.photo?"Replace":"Add"}<input type="file" accept="image/*" id="photoIn" hidden></label></div>${r.photo?`<img src="${r.photo}" alt="Crew photo">`:""}</div>
    <button class="btn line" type="button" id="againBtn">New game</button>`;
  box.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{const v=r.visits[+b.dataset.q];v.counted=b.dataset.a==="1";
    const prev={};H.forEach(x=>{if(x.id!==r.id)x.visits.forEach(y=>{if(y.counted===true&&x.startedAt<r.startedAt)prev[y.id]=1})});
    r.newIds=r.visits.filter(y=>y.counted===true&&!prev[y.id]).map(y=>y.id);saveH();renderEnd()});
  box.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>{r.barOfDay=r.barOfDay===b.dataset.b?null:b.dataset.b;saveH();renderEnd()});
  $("photoIn").onchange=e=>{const f=e.target.files&&e.target.files[0];if(f)shrink(f,1080).then(d=>{r.photo=d;saveH();renderEnd()})};
  $("againBtn").onclick=()=>startWizard();
  $("doneBtn").onclick=()=>go("home");
  $("runBack").onclick=()=>{const c=r.zone||{lat:r.center.lat,lng:r.center.lng,name:r.areas[0]};S.wiz={step:3,start:{type:"area",name:c.name||r.areas[0],lat:c.lat,lng:c.lng},radius:r.radius,len:r.len,newOnly:!!r.newOnly};go("wiz")};
  $("shareBtn").onclick=()=>shareStory(r);
  requestAnimationFrame(()=>{
    if(eMap){eMap.remove();eMap=null}eMap=mkMap("endMap");
    const pts=[[r.startPos.lat,r.startPos.lng],...st.arrived.map(v=>{const b=byId(v.id);return [b.lat,b.lng]})];
    L.polyline(pts,{color:"#F5B83D",weight:3.5,opacity:.95,dashArray:"2 8",lineCap:"round"}).addTo(eMap);
    L.marker(pts[0],{icon:meIcon}).addTo(eMap);
    st.arrived.forEach((v,i)=>{const b=byId(v.id);L.marker([b.lat,b.lng],{icon:numIcon(i+1,v.counted!==true)}).addTo(eMap).bindTooltip(b.name)});
    eMap.fitBounds(L.latLngBounds(pts).pad(.3),{animate:false,maxZoom:16});
  });
}
async function shareStory(r){
  const btn=$("shareBtn");btn.disabled=true;btn.textContent="Making your story…";
  try{
    await Promise.all([document.fonts.load('800 100px "Big Shoulders Display"'),document.fonts.load('500 40px "Big Shoulders Display"')]).catch(()=>{});
    const W=1080,Hh=1920,c=document.createElement("canvas");c.width=W;c.height=Hh;const x=c.getContext("2d");
    const st=stats(r),n=st.counted.length,D='"Big Shoulders Display","Arial Narrow",Impact,sans-serif',U='system-ui,-apple-system,Roboto,Arial,sans-serif';
    const g=x.createRadialGradient(W,0,0,W,0,1300);g.addColorStop(0,"rgba(245,184,61,.35)");g.addColorStop(1,"rgba(245,184,61,0)");
    x.fillStyle="#0B0D12";x.fillRect(0,0,W,Hh);x.fillStyle=g;x.fillRect(0,0,W,Hh);
    x.textBaseline="alphabetic";
    x.font=`800 64px ${D}`;x.fillStyle="#F4F1EA";x.fillText("ROOFTOP",72,150);x.fillStyle="#F5B83D";x.fillText("ROULETTE",72+x.measureText("ROOFTOP ").width,150);
    x.font=`500 34px ${U}`;x.fillStyle="#9AA1AD";x.fillText(`${r.len===60?"1 hour":"2 hours"} · ${dateTxt(r.startedAt)}`,72,205);
    // hero: photo, or the route
    const bx=72,by=260,bw=W-144,bh=760;
    x.save();roundRect(x,bx,by,bw,bh,40);x.clip();x.fillStyle="#141820";x.fillRect(bx,by,bw,bh);
    if(r.photo){const img=await loadImg(r.photo);const s=Math.max(bw/img.width,bh/img.height);x.drawImage(img,bx+(bw-img.width*s)/2,by+(bh-img.height*s)/2,img.width*s,img.height*s)}
    else drawRoute(x,r,st,bx,by,bw,bh);
    x.restore();
    // numbers
    x.fillStyle="#F5B83D";x.font=`800 300px ${D}`;x.fillText(String(n),72,1330);
    const nw=x.measureText(String(n)).width;
    x.fillStyle="#F4F1EA";x.font=`800 64px ${D}`;x.fillText(n===1?"ROOFTOP":"ROOFTOPS",72+nw+30,1240);
    x.fillStyle="#9AA1AD";x.font=`500 40px ${U}`;x.fillText(`${(st.total/1000).toFixed(1)} km · ${hmm(st.dur)}`,72+nw+32,1305);
    // bar list
    x.font=`600 40px ${U}`;let yy=1430;
    st.arrived.slice(0,6).forEach((v,i)=>{x.fillStyle=v.counted===true?"#F4F1EA":"#6B7280";x.fillText(`${i+1}. ${byId(v.id).name}${r.barOfDay===v.id?"  ★":""}`,72,yy);yy+=62});
    if(st.arrived.length>6){x.fillStyle="#6B7280";x.fillText(`+${st.arrived.length-6} more`,72,yy)}
    x.fillStyle="#6B7280";x.font=`500 30px ${U}`;x.fillText("Spin. Go. Drink. Repeat.",72,1840);
    const blob=await new Promise(res=>c.toBlob(res,"image/png"));
    const file=new File([blob],"rooftop-roulette.png",{type:"image/png"});
    if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file]}).catch(()=>{})}
    else{const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rooftop-roulette.png";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
  }catch(e){console.warn(e)}
  btn.disabled=false;btn.innerHTML=`${I.share} Share to story`;
}
function roundRect(x,X,Y,w,h,r){x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+w,Y,X+w,Y+h,r);x.arcTo(X+w,Y+h,X,Y+h,r);x.arcTo(X,Y+h,X,Y,r);x.arcTo(X,Y,X+w,Y,r);x.closePath()}
const loadImg=src=>new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src});
function drawRoute(x,r,st,bx,by,bw,bh){
  const pts=[r.startPos,...st.arrived.map(v=>byId(v.id))];
  // faint zone circle + all bars around for texture
  const lat0=pts.reduce((s,p)=>s+p.lat,0)/pts.length,cos=Math.cos(lat0*Math.PI/180);
  const xs=pts.map(p=>p.lng*cos),ys=pts.map(p=>-p.lat);
  let minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const span=Math.max(maxX-minX,maxY-minY,.006),pad=110,sc=Math.min((bw-2*pad)/span,(bh-2*pad)/span);
  const cx=(minX+maxX)/2,cy=(minY+maxY)/2,P=p=>[bx+bw/2+(p.lng*cos-cx)*sc,by+bh/2+(-p.lat-cy)*sc];
  x.fillStyle="#2A303D";VENUES.forEach(v=>{const [X,Y]=P(v);if(X>bx&&X<bx+bw&&Y>by&&Y<by+bh){x.beginPath();x.arc(X,Y,7,0,7);x.fill()}});
  x.strokeStyle="#F5B83D";x.lineWidth=8;x.setLineDash([4,22]);x.lineCap="round";x.beginPath();pts.forEach((p,i)=>{const [X,Y]=P(p);i?x.lineTo(X,Y):x.moveTo(X,Y)});x.stroke();x.setLineDash([]);
  const [sx,sy]=P(pts[0]);x.fillStyle="#5AA9FF";x.beginPath();x.arc(sx,sy,16,0,7);x.fill();x.strokeStyle="#fff";x.lineWidth=5;x.stroke();
  st.arrived.forEach((v,i)=>{const [X,Y]=P(byId(v.id));x.fillStyle=v.counted===true?"#F5B83D":"#6B7280";x.beginPath();x.arc(X,Y,30,0,7);x.fill();x.strokeStyle="#0B0D12";x.lineWidth=6;x.stroke();x.fillStyle="#241803";x.font='800 30px system-ui,Arial';x.textAlign="center";x.fillText(String(i+1),X,Y+11);x.textAlign="left"});
}
/*@@END@@*/
/*@@BARS@@*/
/* ---------- rooftops tab ---------- */
let bMap=null,bMarks=[];
function barStatus(v,c){if(S.nfu[v.id])return "nfu";if(c[v.id])return "col";if(S.been[v.id])return "been";return ""}
const stampHTML=s=>s==="col"?'<span class="stamp col">Visited</span>':s==="been"?'<span class="stamp been">Been</span>':s==="nfu"?'<span class="stamp nfu">Not for us</span>':s==="next"?'<span class="stamp col">Next</span>':s==="done"?'<span class="stamp been">Tonight</span>':"";
function rowHTML(v,o,s,y){return `<button class="barrow${s==="nfu"?" hid":""}" type="button" data-id="${v.id}"><span class="dot${o.open?"":" off"}"></span><span class="t"><b>${esc(v.name)}</b><small>${esc(v.area)} · ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):"Closed today"}${y?" · "+mOrKm(dist(y,v)):""}</small></span>${stampHTML(s)}</button>`}
function renderBars(){
  const t=now(),y=you(),f=S.barsFilter||"all",c=collectedMap(),g=G();
  $("barsSeg").hidden=!!g;
  let rows=[],pins=[];
  if(g){
    const inZ=inCircle(g.center,g.radius).filter(v=>!S.nfu[v.id]),zIds=new Set(inZ.map(v=>v.id));
    const sortD=(a,b)=>y?dist(y,a)-dist(y,b):a.name.localeCompare(b.name);
    const tonight=g.visits.map(v=>v.id);
    const live=inZ.filter(v=>!tonight.includes(v.id)&&openState(v,t).open).sort(sortD);
    if(g.target){const i=live.findIndex(v=>v.id===g.target);if(i>0)live.unshift(live.splice(i,1)[0])}
    const closedZ=inZ.filter(v=>!tonight.includes(v.id)&&!openState(v,t).open);
    const free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
    let h=`<div class="eyebrow" style="padding:14px 0 4px">In your zone · ${live.length} open</div>`;
    h+=live.map(v=>rowHTML(v,openState(v,t),v.id===g.target?"next":barStatus(v,c),y)).join("");
    if(tonight.length)h+=`<div class="eyebrow" style="padding:16px 0 4px">Tonight</div>`+tonight.map(id=>rowHTML(byId(id),openState(byId(id),t),"done",y)).join("");
    if(closedZ.length)h+=`<div class="eyebrow" style="padding:16px 0 4px">In your zone · closed</div>`+closedZ.map(v=>rowHTML(v,openState(v,t),barStatus(v,c),y)).join("");
    const others=VENUES.filter(v=>!zIds.has(v.id)&&!S.nfu[v.id]).sort(sortD);
    h+=`<div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0 4px;gap:10px"><span class="eyebrow">Other areas</span>${canMove?`<button class="btn sm line" type="button" id="bMove" style="width:auto;padding:0 14px">Move zone</button>`:`<span class="small">Zone move used</span>`}</div>`;
    h+=others.map(v=>rowHTML(v,openState(v,t),barStatus(v,c),y)).join("");
    $("barsList").innerHTML=h;
    if($("bMove"))$("bMove").onclick=()=>openMove(free);
    pins=inZ.map(v=>({v,cls:v.id===g.target?"big":tonight.includes(v.id)?"done":openState(v,t).open?"":"off"})).concat(others.map(v=>({v,cls:"off"})));
  }else{
    $("barsSeg").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.v===f)));
    let list=VENUES.map(v=>({v,o:openState(v,t),s:barStatus(v,c)}));
    if(f==="todo")list=list.filter(x=>x.s===""||x.s==="been");
    if(f==="done")list=list.filter(x=>x.s==="col"||x.s==="been");
    if(f==="open")list=list.filter(x=>x.o.open&&x.s!=="nfu");
    list.sort((a,b)=>(a.s==="nfu")-(b.s==="nfu")||(y?dist(y,a.v)-dist(y,b.v):a.v.name.localeCompare(b.v.name)));
    $("barsList").innerHTML=list.map(({v,o,s})=>rowHTML(v,o,s,y)).join("")||`<div class="empty" style="padding:24px">${f==="done"?"No rooftops yet. Bars you visit in a game, or mark as been before, show up here.":"Nothing here right now."}</div>`;
    pins=list.filter(x=>x.s!=="nfu").map(({v,o,s})=>({v,cls:s==="col"?"done":o.open?"":"off"}));
  }
  $("barsList").querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>barSheet(byId(b.dataset.id)));
  requestAnimationFrame(()=>{
    if(!bMap){bMap=mkMap("barsMap",{center:[-33.8732,151.2069],zoom:13.25});bMap.on("click",e=>{if(S.test){S.fake={lat:e.latlng.lat,lng:e.latlng.lng};save();onLocation();renderBars()}})}else bMap.invalidateSize();
    bMarks.forEach(m=>bMap.removeLayer(m));bMarks=[];
    if(g){bMarks.push(zoneCircle(g.center,g.radius).addTo(bMap));if(bMap._zoneFor!==g.id+g.center.lat){bMap._zoneFor=g.id+g.center.lat;fitZone(bMap,g.center,g.radius)}}
    pins.forEach(({v,cls})=>bMarks.push(L.marker([v.lat,v.lng],{icon:pinIcon(cls),zIndexOffset:cls==="big"?500:0}).addTo(bMap).on("click",()=>barSheet(v))));
    setMe(bMap);
  });
}
/*@@END@@*/
