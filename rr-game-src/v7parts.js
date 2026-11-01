/*@@SCORE@@*/
let eMap=null;
function awards(r,st){
  const L=[],n=st.counted.length,nm=id=>esc(byId(id).name);
  const add=(t,why)=>L.push({t,why});
  if(st.last&&!r.early&&!r.missed&&r.endsAt-st.last.arrivedAt<=3*60000)add("Buzzer Beaters",`Into ${nm(st.last.id)} with ${mmss(r.endsAt-st.last.arrivedAt)} to spare`);
  if(r.missed&&r.missed.m!=null&&r.missed.m<=300)add("So Close",`${nm(r.missed.id)} was ${mOrKm(r.missed.m)} away at zero`);
  if(st.quick&&st.quick.ms>=60000&&st.quick.ms<=6*60000)add("Pit Stop Crew",`${nm(st.quick.from)} to ${nm(st.quick.to)} in ${hmm(st.quick.ms)}`);
  if(n>=2&&(r.newIds||[]).length===n)add("Fresh Territory","Every rooftop was a first");
  if(st.longest&&st.longest.d>=1500)add("Long Haul",`${km(st.longest.d)} to ${nm(st.longest.to.id)}`);
  const longStay=st.arrived.filter(v=>v.leftAt&&v.leftAt-v.arrivedAt>=30*60000).sort((a,b)=>(b.leftAt-b.arrivedAt)-(a.leftAt-a.arrivedAt))[0];
  if(longStay)add("Settled In",`${hmm(longStay.leftAt-longStay.arrivedAt)} at ${nm(longStay.id)}`);
  if((r.skipCost||0)>=6)add("Fussy Bunch",`${r.skipCost} minutes spent re-spinning`);
  const cant=r.visits.find(v=>v.cant);if(cant)add("Bounced",`Couldn't get into ${nm(cant.id)}`);
  if(r.areas.length>1)add("Change of Scenery",esc(r.areas.filter((a,i)=>a!==r.areas[i-1]).join(" → ")));
  if(!r.skipCost&&!(r.skipped||[]).length&&n>=2)add("No Regrets","Took every spin the wheel gave you");
  if(!L.length)add(n?"Top Floor":"Ground Floor",n?`${n} rooftop${n===1?"":"s"}, ${km(st.total)}`:"The wheel will be kinder next time");
  return L;
}
function renderEnd(){
  const r=H.find(x=>x.id===S.lastEnd),box=$("v-end");if(!r){go("home");return}
  const st=stats(r),n=st.counted.length,lenTxt=r.len===60?"1 hour":"2 hours",aw=awards(r,st);
  const pending=r.visits.map((v,i)=>({v,i})).filter(o=>o.v.counted===null);
  const atBars=st.arrived.reduce((s,v)=>s+((v.leftAt||r.endedAt)-v.arrivedAt),0),moving=Math.max(0,st.dur-atBars);
  box.innerHTML=`
    ${pending.map(o=>`<div class="ask"><b>Should ${esc(byId(o.v.id).name)} count?</b><span class="small">You were there under ${DWELL_MIN} minutes. Count it if you had a drink.</span><div class="row"><button class="btn sm" type="button" data-q="${o.i}" data-a="1">Count it</button><button class="btn sm dark" type="button" data-q="${o.i}" data-a="0">Don't count</button></div></div>`).join("")}
    <div class="sc">
      <div class="sc-top"><span class="eyebrow">${lenTxt} · ${dateTxt(r.startedAt)}</span><button class="txtbtn amber" type="button" id="doneBtn">Done</button></div>
      <div class="award"><span class="eyebrow" style="color:var(--amber)">Tonight's title</span><div class="aw-t">${aw[0].t}</div><div class="aw-w">${aw[0].why}</div>
        ${aw.length>1?`<div class="aw-more">${aw.slice(1,3).map(a=>`<span>${a.t}</span>`).join("")}</div>`:""}</div>
      <div class="tri"><div><b>${n}</b><small>rooftop${n===1?"":"s"}</small></div><div><b>${(st.total/1000).toFixed(1)}</b><small>km covered</small></div><div><b>${Math.round(st.dur/60000)}</b><small>minutes</small></div></div>
      <div class="map"><div id="endMap" style="height:150px"></div></div>
      <div class="sc-bars">${st.arrived.map((v,i)=>`<span class="${v.counted===true?"":"x"}">${i+1}. ${esc(byId(v.id).name)}${r.barOfDay===v.id?" ★":""}</span>`).join("")||'<span class="x">No visits logged</span>'}</div>
      <div class="quad"><div><small>At the bars</small><b>${hmm(atBars)}</b></div><div><small>Getting there</small><b>${hmm(moving)}</b></div><div><small>Longest trip</small><b>${st.longest?km(st.longest.d):"—"}</b></div><div><small>Quickest turnaround</small><b>${st.quick?hmm(st.quick.ms):"—"}</b></div></div>
    </div>
    <div class="row2"><button class="btn" type="button" id="shareBtn">${I.share} Share to story</button><button class="btn dark" type="button" id="runBack">${I.redo} Play again</button></div>
    ${n?`<div class="card"><div class="eyebrow" style="margin-bottom:10px">Bar of the day</div><div class="chips">${st.counted.map(v=>`<button class="chip" type="button" data-b="${v.id}" aria-pressed="${r.barOfDay===v.id}">${esc(byId(v.id).name)}</button>`).join("")}</div></div>`:""}
    <div class="card photo"><div class="eyebrow">Crew photo</div><div class="small" style="margin:2px 0 10px">Goes on your story. Saved on this phone only.</div>
      ${r.photo?`<img src="${r.photo}" alt="Crew photo" style="margin:0 0 10px">`:""}
      <div class="row2"><label class="btn sm dark">${I.camera} Take photo<input type="file" accept="image/*" capture="environment" id="photoCam" hidden></label><label class="btn sm dark">Choose photo<input type="file" accept="image/*" id="photoLib" hidden></label></div></div>
    <div class="card" style="padding:4px 16px"><div class="list">${st.arrived.map((v,i)=>`<div class="li"><span>${i+1}. ${esc(byId(v.id).name)}${(r.newIds||[]).includes(v.id)?'<span class="newpill">New</span>':""}${v.cant?' <span class="small">(couldn\'t get in)</span>':v.counted===false?' <span class="small">(didn\'t count)</span>':v.counted===null?' <span class="small">(?)</span>':""}</span><span class="r">${v.leftAt?hmm(v.leftAt-v.arrivedAt):"—"}</span></div>`).join("")||`<div class="li"><span class="small">No visits logged this time.</span></div>`}</div></div>`;
  box.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{const v=r.visits[+b.dataset.q];v.counted=b.dataset.a==="1";
    const prev={};H.forEach(x=>{if(x.id!==r.id)x.visits.forEach(y=>{if(y.counted===true&&x.startedAt<r.startedAt)prev[y.id]=1})});
    r.newIds=r.visits.filter(y=>y.counted===true&&!prev[y.id]).map(y=>y.id);saveH();renderEnd()});
  box.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>{r.barOfDay=r.barOfDay===b.dataset.b?null:b.dataset.b;saveH();renderEnd()});
  const onPhoto=e=>{const f=e.target.files&&e.target.files[0];if(f)shrink(f,1080).then(d=>{r.photo=d;saveH();renderEnd()})};
  $("photoCam").onchange=onPhoto;$("photoLib").onchange=onPhoto;
  $("doneBtn").onclick=()=>go("home");
  $("runBack").onclick=()=>{const c=r.zone||{lat:r.center.lat,lng:r.center.lng,name:r.areas[0]};S.wiz={step:3,start:{type:"area",name:c.name||r.areas[0],lat:c.lat,lng:c.lng},radius:r.radius,len:r.len,newOnly:!!r.newOnly};go("wiz")};
  $("shareBtn").onclick=()=>shareStory(r);
  requestAnimationFrame(async()=>{
    if(eMap){eMap.remove();eMap=null}
    const el=$("endMap"),m=await makeMap("endMap");if(!m||!document.contains(el))return;eMap=m;
    const pts=[r.startPos,...st.arrived.map(v=>byId(v.id))];
    m.line(pts);m.dot(r.startPos);
    st.arrived.forEach((v,i)=>{const b=byId(v.id);m.num(b,i+1,v.counted!==true,b.name)});
    m.fitPts(pts,16);
  });
}
async function shareStory(r){
  const btn=$("shareBtn");btn.disabled=true;btn.textContent="Making your story…";
  try{
    await Promise.all([document.fonts.load('800 100px "Big Shoulders Display"'),document.fonts.load('500 40px "Big Shoulders Display"')]).catch(()=>{});
    const W=1080,Hh=1920,c=document.createElement("canvas");c.width=W;c.height=Hh;const x=c.getContext("2d");
    const st=stats(r),n=st.counted.length,aw=awards(r,st),D='"Big Shoulders Display","Arial Narrow",Impact,sans-serif',U='system-ui,-apple-system,Roboto,Arial,sans-serif';
    const plain=s=>String(s).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
    const g=x.createRadialGradient(W,0,0,W,0,1300);g.addColorStop(0,"rgba(245,184,61,.32)");g.addColorStop(1,"rgba(245,184,61,0)");
    x.fillStyle="#0B0D12";x.fillRect(0,0,W,Hh);x.fillStyle=g;x.fillRect(0,0,W,Hh);
    x.font=`800 56px ${D}`;x.fillStyle="#F4F1EA";x.fillText("ROOFTOP",72,128);x.fillStyle="#F5B83D";x.fillText("ROULETTE",72+x.measureText("ROOFTOP ").width,128);
    x.font=`500 32px ${U}`;x.fillStyle="#9AA1AD";x.fillText(`${r.len===60?"1 hour":"2 hours"} · ${dateTxt(r.startedAt)}`,72,178);
    // hero: crew photo or route
    const bx=72,by=220,bw=W-144,bh=r.photo?700:600;
    x.save();roundRect(x,bx,by,bw,bh,40);x.clip();x.fillStyle="#141820";x.fillRect(bx,by,bw,bh);
    if(r.photo){const img=await loadImg(r.photo);const s=Math.max(bw/img.width,bh/img.height);x.drawImage(img,bx+(bw-img.width*s)/2,by+(bh-img.height*s)/2,img.width*s,img.height*s)}
    else drawRoute(x,r,st,bx,by,bw,bh);
    x.restore();
    let y=by+bh+90;
    x.fillStyle="#F5B83D";x.font=`700 30px ${U}`;x.fillText("TONIGHT'S TITLE",72,y);y+=96;
    x.fillStyle="#F4F1EA";x.font=`800 104px ${D}`;x.fillText(aw[0].t.toUpperCase(),72,y);y+=58;
    x.fillStyle="#9AA1AD";x.font=`500 36px ${U}`;x.fillText(plain(aw[0].why).slice(0,52),72,y);y+=90;
    // three stats
    const cols=[[String(n),n===1?"rooftop":"rooftops"],[(st.total/1000).toFixed(1),"km covered"],[String(Math.round(st.dur/60000)),"minutes"]];
    cols.forEach(([v,l],i)=>{const cx=72+i*322;x.fillStyle="#141820";roundRect(x,cx,y-70,290,170,28);x.fill();x.fillStyle="#F5B83D";x.font=`800 88px ${D}`;x.fillText(v,cx+28,y+28);x.fillStyle="#9AA1AD";x.font=`500 28px ${U}`;x.fillText(l,cx+30,y+74)});
    y+=170;
    x.font=`600 36px ${U}`;
    st.arrived.slice(0,r.photo?4:6).forEach((v,i)=>{if(y>Hh-110)return;x.fillStyle=v.counted===true?"#F4F1EA":"#6B7280";x.fillText(`${i+1}. ${byId(v.id).name}${r.barOfDay===v.id?"  ★":""}`,72,y);y+=56});
    x.fillStyle="#6B7280";x.font=`500 28px ${U}`;x.fillText("Spin. Go. Drink. Repeat.",72,Hh-60);
    const blob=await new Promise(res=>c.toBlob(res,"image/png"));
    const file=new File([blob],"rooftop-roulette.png",{type:"image/png"});
    if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file]}).catch(()=>{})}
    else{const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rooftop-roulette.png";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
  }catch(e){console.warn(e)}
  btn.disabled=false;btn.innerHTML=`${I.share} Share to story`;
}
/*@@END@@*/
/*@@BARS@@*/
/* ---------- rooftops tab ---------- */
let bMap=null,bMapP=null;
function barStatus(v,c){if(S.nfu[v.id])return "nfu";if(c[v.id])return "col";if(S.been[v.id])return "been";return ""}
const stampHTML=s=>s==="col"?'<span class="stamp col">Visited</span>':s==="been"?'<span class="stamp been">Been</span>':s==="nfu"?'<span class="stamp nfu">Not for us</span>':s==="next"?'<span class="stamp col">Next</span>':s==="done"?'<span class="stamp been">Tonight</span>':"";
function rowHTML(v,o,s,y){return `<button class="barrow${s==="nfu"?" hid":""}" type="button" data-id="${v.id}"><span class="dot${o.open?"":" off"}"></span><span class="t"><b>${esc(v.name)}</b><small>${esc(v.area)} · ${o.open?"Open til "+clock12(o.closeAt):o.opens!=null?"Opens "+clock12(o.opens):"Closed today"}${y?" · "+mOrKm(dist(y,v)):""}</small></span>${stampHTML(s)}<span class="chev">›</span></button>`}
function renderBars(){
  const t=now(),y=you(),c=collectedMap(),g=G();
  const tabs=g?[["zone","My zone"],["other","Other areas"],["been","Been"],["nfu","Not for us"]]:[["open","Open now"],["all","All"],["been","Been"],["nfu","Not for us"]];
  let f=S.barsFilter;if(!tabs.some(x=>x[0]===f))f=tabs[0][0];
  $("barsSeg").innerHTML=tabs.map(([k,l])=>`<button type="button" data-v="${k}" aria-pressed="${k===f}">${l}</button>`).join("");
  const sortD=(a,b)=>y?dist(y,a)-dist(y,b):a.name.localeCompare(b.name);
  const os=v=>openState(v,t);
  let intro="",rows=[],pins=[],extra="";
  const tapHint=`Tap any rooftop to mark it as <b>been before</b> or <b>not for us</b>.`;
  if(f==="zone"){
    const inZ=inCircle(g.center,g.radius).filter(v=>!S.nfu[v.id]),tonight=g.visits.map(v=>v.id);
    const live=inZ.filter(v=>!tonight.includes(v.id)&&os(v).open).sort(sortD);
    if(g.target){const i=live.findIndex(v=>v.id===g.target);if(i>0)live.unshift(live.splice(i,1)[0])}
    const closed=inZ.filter(v=>!tonight.includes(v.id)&&!os(v).open).sort(sortD);
    intro=`These are the rooftops your spins can land on. ${tapHint}`;
    rows=[...live.map(v=>rowHTML(v,os(v),v.id===g.target?"next":barStatus(v,c),y)),
      ...tonight.map(id=>rowHTML(byId(id),os(byId(id)),"done",y)),
      ...closed.map(v=>rowHTML(v,os(v),barStatus(v,c),y))];
    pins=inZ.map(v=>({v,cls:v.id===g.target?"big":tonight.includes(v.id)?"done":os(v).open?"":"off"}));
  }else if(f==="other"){
    const zIds=new Set(inCircle(g.center,g.radius).map(v=>v.id));
    const others=VENUES.filter(v=>!zIds.has(v.id)&&!S.nfu[v.id]).sort(sortD);
    const free=g.started&&basePool().length<2,canMove=free||!g.voluntaryUsed;
    intro=`<b>Fancy a change of scenery?</b> Move your zone and every spin from then on lands in the new area. You get one move per game${free?", and right now it's free because your zone's nearly empty":""}.`;
    extra=canMove?`<button class="btn sm" type="button" id="bMove" style="margin-top:10px">${I.move} Move my zone</button>`:`<p class="note" style="margin-top:8px">You've used your zone move this game.</p>`;
    rows=others.map(v=>rowHTML(v,os(v),barStatus(v,c),y));
    pins=others.map(v=>({v,cls:os(v).open?"":"off"}));
  }else if(f==="been"){
    const list=VENUES.filter(v=>{const s=barStatus(v,c);return s==="col"||s==="been"}).sort(sortD);
    intro=`Rooftops you've visited in a game or marked as been before. Turn on <b>New rooftops only</b> when you set up a game and these get skipped.`;
    rows=list.map(v=>rowHTML(v,os(v),barStatus(v,c),y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">Nothing here yet. Tap any rooftop in another tab and switch on "I've been here before".</div>`];
    pins=list.map(v=>({v,cls:"done"}));
  }else if(f==="nfu"){
    const list=VENUES.filter(v=>S.nfu[v.id]).sort(sortD);
    intro=`Rooftops your crew would never go to. These never come up in a spin. Tap one to bring it back.`;
    rows=list.map(v=>rowHTML(v,os(v),"nfu",y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">No bars hidden. If there's a rooftop you'd never go to, tap it in another tab and switch on "Not for us".</div>`];
    pins=list.map(v=>({v,cls:"off"}));
  }else{
    const list=VENUES.filter(v=>!S.nfu[v.id]&&(f==="all"||os(v).open)).sort(sortD);
    intro=`Every rooftop in Sydney${f==="open"?" that's open right now":""}. ${tapHint}`;
    rows=list.map(v=>rowHTML(v,os(v),barStatus(v,c),y));
    if(!rows.length)rows=[`<div class="empty" style="padding:22px 8px">Nothing's open right now.</div>`];
    pins=list.map(v=>({v,cls:barStatus(v,c)==="col"?"done":os(v).open?"":"off"}));
  }
  $("barsIntro").innerHTML=`<p class="note" style="margin:0">${intro}</p>${extra}`;
  $("barsList").innerHTML=rows.join("");
  $("barsList").querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>barSheet(byId(b.dataset.id)));
  if($("bMove"))$("bMove").onclick=()=>openMove(g.started&&basePool().length<2);
  requestAnimationFrame(async()=>{
    if(!bMapP)bMapP=makeMap("barsMap").then(m=>{m.setView({lat:-33.8732,lng:151.2069},13);m.onTap((lat,lng)=>{if(S.test){S.fake={lat,lng};save();onLocation();renderBars()}});return m});
    const m=bMap=await bMapP;if(!m)return;m.resize();m.clear();
    if(g){m.circle(g.center,g.radius);if(m._zoneFor!==g.id+g.center.lat){m._zoneFor=g.id+g.center.lat;m.fitZone(g.center,g.radius)}}
    pins.forEach(({v,cls})=>m.pin(v,cls,()=>barSheet(v)));
    setMe(m);
  });
}
/*@@END@@*/
