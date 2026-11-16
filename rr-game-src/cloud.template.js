
/* ---------- accounts and live crawls ----------
   Optional sign-in (Google) backs up My Tab and links you to the people you crawl with.
   Live crawls: the spinner's phone sends the crawl to the cloud when something happens (spin, arrive, leave)
   and a small "still here" every 2 minutes. Anyone with the invite link follows along live.
   One spinner at a time: they can hand the spin over, and if their phone can't be reached for 5 minutes
   a follower can take over. When the crawl ends it lands on every follower's tab.
   Backend: Firebase (Auth + Firestore) when data/config.json has "firebase"; ?fakecloud uses a local stand-in for tests.
   Nothing here runs, and none of it shows, until one of those is set. */
const FB_CFG=(window.RR_CONFIG&&RR_CONFIG.firebase)||null,FAKE_CLOUD=/[?&]fakecloud\b/.test(location.search);
const cloudOn=()=>((!!FB_CFG&&!S.test)||FAKE_CLOUD)&&!DEMO();
const BEAT_MS=120000,STALE_MS=300000;
let ME=null,CLP=null,liveUnsub=null,liveDoc=null,inviteUnsub=null;

// ----- backend: Firebase -----
function fbBackend(){return new Promise((res,rej)=>{
  const go_=()=>{try{const F=window.RRFB,app=F.initializeApp(FB_CFG);
    const auth=F.initializeAuth(app,{persistence:[F.indexedDBLocalPersistence,F.browserLocalPersistence]}),db=F.initializeFirestore(app,{});
    const d=p=>F.doc(db,...p.split("/")),c=p=>F.collection(db,...p.split("/"));
    res({
      onUser:cb=>F.onAuthStateChanged(auth,u=>{if(!u){F.signInAnonymously(auth).catch(e=>console.warn("anon",e));return}const pd=(u.providerData||[]).find(x=>x&&(x.displayName||x.email))||{};
        cb({uid:u.uid,anon:u.isAnonymous,name:u.displayName||pd.displayName||"",photo:u.photoURL||pd.photoURL||"",email:u.email||pd.email||"",via:(pd.providerId||"").replace(".com","")})}),
      emailUp:async(email,pass,name)=>{const cred=F.EmailAuthProvider.credential(email,pass);const r=await F.linkWithCredential(auth.currentUser,cred);if(name)await F.updateProfile(r.user,{displayName:name});await r.user.reload();return r},
      emailIn:(email,pass)=>F.signInWithEmailAndPassword(auth,email,pass),
      resetPw:email=>F.sendPasswordResetEmail(auth,email),
      refresh:()=>auth.currentUser,
      google:async()=>{let cred=null;
        if(NATIVE){const o=await PLG.GoogleAuth.signIn({webClientId:RR_CONFIG.googleWebClientId});cred=F.GoogleAuthProvider.credential(o.idToken)}
        const u=auth.currentUser;
        if(cred){try{const r=await F.linkWithCredential(u,cred);if(!r.user.displayName){const pd=(r.user.providerData||[])[0];if(pd&&pd.displayName)await F.updateProfile(r.user,{displayName:pd.displayName,photoURL:pd.photoURL||null})}return r}catch(e){if(e.code==="auth/credential-already-in-use"||e.code==="auth/email-already-in-use")return F.signInWithCredential(auth,F.GoogleAuthProvider.credentialFromError(e)||cred);throw e}}
        const p=new F.GoogleAuthProvider();try{return await F.linkWithPopup(u,p)}catch(e){if(e.code==="auth/credential-already-in-use")return F.signInWithCredential(auth,F.GoogleAuthProvider.credentialFromError(e));throw e}},
      signOut:async()=>{try{if(NATIVE)await PLG.GoogleAuth.signOut()}catch(e){}await F.signOut(auth)},
      deleteMe:async()=>{await F.deleteUser(auth.currentUser)},
      get:async p=>{const s=await F.getDoc(d(p));return s.exists()?s.data():null},
      set:(p,v,merge)=>F.setDoc(d(p),v,merge?{merge:true}:{}),
      del:p=>F.deleteDoc(d(p)),
      list:async p=>(await F.getDocs(c(p))).docs.map(x=>Object.assign({_id:x.id},x.data())),
      watch:(p,cb)=>F.onSnapshot(d(p),s=>cb(s.exists()?s.data():null),e=>console.warn("watch",e)),
      watchList:(p,cb)=>F.onSnapshot(c(p),s=>cb(s.docs.map(x=>Object.assign({_id:x.id},x.data()))),e=>console.warn("watchList",e)),
      tx:(p,fn)=>F.runTransaction(db,async t=>{const r=d(p),s=await t.get(r),v=fn(s.exists()?s.data():null);if(v===undefined)return false;t.set(r,v);return true})})}catch(e){rej(e)}};
  if(window.RRFB)return go_();
  const sc=document.createElement("script");sc.src="vendor/firebase/rr-firebase.js";sc.onload=go_;sc.onerror=()=>rej(new Error("firebase didn't load"));document.head.appendChild(sc)})}

// ----- backend: a stand-in for tests (?fakecloud=http://127.0.0.1:PORT, served by tests/fakecloud-server.js) -----
function fakeBackend(){
  const base=(location.search.match(/fakecloud=([^&]+)/)||[])[1];const U=decodeURIComponent(base||"http://127.0.0.1:8787");
  const req=(m,p,v)=>fetch(`${U}/${m}?p=${encodeURIComponent(p)}`,v===undefined?{}:{method:"POST",body:JSON.stringify(v)}).then(r=>r.json());
  let uid=sessionStorage.getItem("rrfake-uid");if(!uid){uid="u"+Math.random().toString(36).slice(2,8);sessionStorage.setItem("rrfake-uid",uid)}
  let user={uid,anon:true,name:"",photo:"",email:""};const ucbs=[];
  const poll=(f,get)=>{let last,on=true;const t=async()=>{if(!on)return;try{const v=await get(),k=JSON.stringify(v);if(k!==last){last=k;f(v)}}catch(e){}setTimeout(t,400)};t();return()=>{on=false}};
  return Promise.resolve({
    onUser:cb=>{ucbs.push(cb);setTimeout(()=>cb(user),0)},
    google:async()=>{user=Object.assign({},user,{anon:false,name:sessionStorage.getItem("rrfake-name")||"Test Person",email:"test@example.com"});ucbs.forEach(f=>f(user))},
    signOut:async()=>{user={uid,anon:true,name:"",photo:"",email:""};ucbs.forEach(f=>f(user))},
    emailUp:async(email,pass,name)=>{if(pass.length<6)throw {code:"auth/weak-password"};user=Object.assign({},user,{anon:false,name:name||"",email,via:"password"});ucbs.forEach(f=>f(user))},
    emailIn:async(email,pass)=>{if(pass!=="secret1")throw {code:"auth/invalid-credential"};user=Object.assign({},user,{anon:false,name:"Email Person",email,via:"password"});ucbs.forEach(f=>f(user))},
    resetPw:async()=>true,
    deleteMe:async()=>{user={uid,anon:true,name:"",photo:"",email:""};ucbs.forEach(f=>f(user))},
    get:p=>req("get",p),set:(p,v,merge)=>req(merge?"merge":"set",p,v),del:p=>req("del",p,null),list:p=>req("list",p),
    watch:(p,cb)=>poll(cb,()=>req("get",p)),watchList:(p,cb)=>poll(cb,()=>req("list",p)),
    tx:async(p,fn)=>{const v=fn(await req("get",p));if(v===undefined)return false;await req("set",p,v);return true}})}

function cloud(){if(!CLP){CLP=(FAKE_CLOUD?fakeBackend():fbBackend()).then(B=>new Promise(res=>{let first=true;B.onUser(u=>{const was=ME;ME=u;if(first){first=false;res(B)}onUserChange(was,u)})})).catch(e=>{console.warn("cloud",e);CLP=null;throw e})}return CLP}
const signedIn=()=>!!(ME&&!ME.anon);
const myName=()=>(ME&&ME.name)||S.myName||"";
const canGoogle=()=>!!(FAKE_CLOUD||(FB_CFG&&(!NATIVE||(CAPX.getPlatform()==="android"&&RR_CONFIG.googleWebClientId))));

function onUserChange(was,u){
  if(u&&!u.anon&&(!was||was.anon||was.uid!==u.uid)){tabSyncAll();watchInvites()}
  if(u&&u.anon&&was&&!was.anon){if(inviteUnsub){inviteUnsub();inviteUnsub=null}}
  if($("setPage"))settingsSheet();if(S.route==="hist")renderHist();if(u&&!u.anon&&$("siNudge"))$("siNudge").remove();
  if(S.follow||(S.game&&S.game.live))liveAttach();
}

// ----- sign in -----
const AUTH_ERR={"auth/invalid-credential":"Wrong email or password.","auth/wrong-password":"Wrong email or password.","auth/user-not-found":"No account with that email. Create one instead.","auth/email-already-in-use":"That email already has an account. Sign in instead.","auth/credential-already-in-use":"That email already has an account. Sign in instead.","auth/weak-password":"Use at least 6 characters.","auth/invalid-email":"That email doesn't look right.","auth/too-many-requests":"Too many tries. Wait a minute and try again.","auth/network-request-failed":"No connection. Check your signal."};
const authErr=e=>AUTH_ERR[e&&e.code]||"Couldn't sign in. Try again.";
const isCancel=e=>/cancel|popup-closed|user.?cancel/i.test(String(e&&(e.code||e.message)||e));
async function signIn(from){track("sign_in_tap",{from,via:"google"});
  try{const B=await cloud();await B.google();track("signed_in",{from,via:"google"});signedInSheet();return true}
  catch(e){console.warn("sign in",e);if(!isCancel(e))toast(esc(authErr(e)),3500);return false}}
// one sign-in sheet everywhere: Google or email
function signInSheet(why,from){from=from||"sheet";
  sheet(`<h3>Sign in</h3><p class="note">${why||"Back up My Tab and get crawls from your mates."}</p><div class="acts">
    ${canGoogle()?`<button class="btn" type="button" id="siG">${GIC} Continue with Google</button>`:""}
    <button class="btn dark" type="button" id="siE">${I.mail||MAILI} Continue with email</button></div>`,()=>{
    if($("siG"))$("siG").onclick=()=>signIn(from);$("siE").onclick=()=>emailSheet("in",from)})}
const MAILI='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>';
function emailSheet(mode,from,em){const up=mode==="up";
  sheet(`<h3>${up?"Create an account":"Sign in with email"}</h3>
    <div class="aform">${up?`<input class="cnin" id="aeName" maxlength="24" autocomplete="given-name" placeholder="First name" value="${esc(S.myName||"")}">`:""}
    <input class="cnin" id="aeMail" type="email" autocomplete="email" inputmode="email" placeholder="Email" value="${esc(em||"")}">
    <input class="cnin" id="aePw" type="password" autocomplete="${up?"new-password":"current-password"}" placeholder="${up?"Password (6+ characters)":"Password"}">
    <p class="aerr" id="aeErr"></p></div>
    <div class="acts"><button class="btn" type="button" id="aeGo">${up?"Create account":"Sign in"}</button>
    <button class="txtbtn" type="button" id="aeSwap">${up?"Already have an account? Sign in":"New here? Create an account"}</button>
    ${up?"":`<button class="txtbtn" type="button" id="aeForgot">Forgot password</button>`}</div>`,()=>{
    const err=t=>{$("aeErr").textContent=t||""};
    $("aeSwap").onclick=()=>emailSheet(up?"in":"up",from,$("aeMail").value.trim());
    if($("aeForgot"))$("aeForgot").onclick=async()=>{const m=$("aeMail").value.trim();if(!m){err("Type your email first.");return}
      try{const B=await cloud();await B.resetPw(m);err("");toast("Check your email for a reset link.",3500)}catch(e){err(authErr(e))}};
    const go=async()=>{const m=$("aeMail").value.trim(),pw=$("aePw").value,nm=up?$("aeName").value.trim():"";
      if(!m||!pw){err("Fill in your email and password.");return}if(up&&!nm){err("Add your first name.");return}
      const b=$("aeGo");b.disabled=true;err("");
      try{const B=await cloud();if(up){await B.emailUp(m,pw,nm);S.myName=nm;save();const u=B.refresh&&B.refresh();if(u&&!FAKE_CLOUD){const was=ME;ME=Object.assign({},ME,{anon:false,name:nm,email:m,via:"password"});onUserChange(was,ME)}}else await B.emailIn(m,pw);
        track("signed_in",{from,via:"email",created:up});signedInSheet()}
      catch(e){console.warn(e);err(authErr(e));b.disabled=false}};
    $("aeGo").onclick=go;$("aePw").onkeydown=e=>{if(e.key==="Enter")go()};setTimeout(()=>(up?$("aeName"):$("aeMail")).focus(),60)})}
// your Google photo when there is one, otherwise your initial (also if the photo fails to load)
const meInitial=()=>esc(((ME&&(ME.name||ME.email))||"?")[0].toUpperCase());
const avatarHTML=big=>`<span class="aav${big?" big":""}">${ME&&ME.photo?`<img src="${esc(ME.photo)}" alt="" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode(this.parentNode.dataset.i))">`:meInitial()}</span>`.replace('<span class="aav','<span data-i="'+meInitial()+'" class="aav');
// what you see once you're in, and from the account button on My Tab
function signedInSheet(){const n=readH(HKEY).filter(r=>!r.demo).length,first=((ME&&ME.name)||"").split(" ")[0];
  sheet(`<div class="acct">${avatarHTML(true)}
    <h3>${first?`You're in, ${esc(first)}`:"You're signed in"}</h3><p class="note">${esc((ME&&ME.email)||"")}</p></div>
    <div class="aperks"><div>${I.check}<span><b>My Tab is backed up</b><small>${n?`${n} crawl${n===1?"":"s"} saved to your account. `:""}Delete the app or change phones and it comes back when you sign in.</small></span></div>
    <div>${I.check}<span><b>Crawls you follow land on your tab</b><small>Follow a mate's live crawl and it's yours too when it ends.</small></span></div>
    <div>${I.check}<span><b>Mates can invite you</b><small>Anyone you've crawled with can send you their next crawl.</small></span></div></div>
    <div class="acts"><button class="btn" type="button" id="sdOk">Done</button></div>`,()=>{$("sdOk").onclick=closeSheet})}
function accountSheet(){if(signedIn()){signedInSheet();const a=document.querySelector("#sheetBody .acts");if(a)a.insertAdjacentHTML("beforeend",`<button class="txtbtn" type="button" id="sdOut">Sign out</button>`);if($("sdOut"))$("sdOut").onclick=()=>{closeSheet();signOutNow()}}
  else signInSheet("Back up My Tab and get crawls from your mates.","mytab")}
// the account button on My Tab: your initial when signed in, an outline when not
function acctChip(){if(!(FB_CFG||FAKE_CLOUD))return "";
  return signedIn()?`<button class="achip on" type="button" id="acctChip" aria-label="Your account">${avatarHTML()}</button>`
    :`<button class="achip" type="button" id="acctChip" aria-label="Sign in"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg><span>Sign in</span></button>`}
function acctChipBind(){const b=$("acctChip");if(b)b.onclick=accountSheet}
const GIC='<svg viewBox="0 0 24 24" width="18" height="18" style="vertical-align:-3px"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>';
async function signOutNow(){const B=await cloud();await B.signOut();localStorage.removeItem("rr-synced");toast("Signed out. Your tab stays on this phone.",3000)}
function deleteAccountSheet(){
  sheet(`<h3>Delete your account?</h3><p class="note">Removes your account and your tab's backup. Crawls on this phone stay here.</p><div class="acts"><button class="btn" type="button" id="daY" style="background:var(--red);color:#fff">Delete account</button><button class="btn dark" type="button" id="daN">Keep it</button></div>`,()=>{
    $("daN").onclick=closeSheet;$("daY").onclick=async()=>{const B=await cloud(),uid=ME.uid;
      try{const L=await B.list(`users/${uid}/crawls`);for(const x of L)await B.del(`users/${uid}/crawls/${x._id}`);await B.del(`users/${uid}`);await B.deleteMe();localStorage.removeItem("rr-synced");closeSheet();toast("Account deleted.",3000);track("account_deleted")}
      catch(e){console.warn(e);if(/recent-login/.test(e.code||"")){closeSheet();toast("Sign in again, then delete.",3500);await signIn("delete")}else toast("Couldn't delete it. Try again.",3000)}}})}

// ----- My Tab backup (signed in) -----
const syncedMap=()=>{try{return JSON.parse(localStorage.getItem("rr-synced")||"{}")}catch(e){return {}}};
const recHash=s=>{let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return String(h)};
const recForCloud=r=>{const o=Object.assign({},r);delete o.photo;delete o.photos;if(o.trail&&o.trail.length>600)o.trail=o.trail.filter((_,i)=>i%Math.ceil(o.trail.length/600)===0);return JSON.stringify(o)};
let tabT=null;
function tabSyncSoon(){if(!signedIn())return;clearTimeout(tabT);tabT=setTimeout(tabPush,2500)}
async function tabPush(){if(!signedIn())return;const B=await cloud(),uid=ME.uid,m=syncedMap(),L=readH(HKEY),seen={};
  for(const r of L){if(r.demo)continue;seen[r.id]=1;const j=recForCloud(r),h=recHash(j);if(m[r.id]===h)continue;
    try{await B.set(`users/${uid}/crawls/${r.id}`,{j,at:r.startedAt||0});m[r.id]=h}catch(e){console.warn("tab push",e);break}}
  for(const id of Object.keys(m))if(!seen[id]){try{await B.del(`users/${uid}/crawls/${id}`);delete m[id]}catch(e){}}
  localStorage.setItem("rr-synced",JSON.stringify(m))}
async function tabSyncAll(){if(!signedIn())return;const B=await cloud(),uid=ME.uid;
  try{B.set(`users/${uid}`,{name:ME.name||"",photo:ME.photo||"",seen:Date.now()},true);
    const L=readH(HKEY),have=new Set(L.map(r=>r.id)),m=syncedMap();let added=0;
    for(const x of await B.list(`users/${uid}/crawls`)){if(have.has(x._id))continue;try{const r=JSON.parse(x.j);L.push(r);m[r.id]=recHash(x.j);added++}catch(e){}}
    if(added){L.sort((a,b)=>b.startedAt-a.startedAt);writeH(HKEY,L);if(!hTest)H=readH(HKEY);localStorage.setItem("rr-synced",JSON.stringify(m));toast(`${added} crawl${added===1?"":"s"} back on your tab.`,3000);if(S.route==="hist")renderHist()}
    await tabPush()}catch(e){console.warn("tab sync",e)}}

// ----- live crawls -----
const liveId=()=>"L"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const liveLink=id=>SHARE_BASE+"#live="+id;
const liveCode=u=>{const m=String(u||"").match(/[#?&]live=([A-Za-z0-9]+)/);return m?m[1]:null};
// what followers get: the bars and times, never your GPS trail or where you started from
const gameForCloud=g=>{const o=Object.assign({},g);["trail","photos","photo","moves","clipN","startPos","here","lastFix"].forEach(k=>delete o[k]);return JSON.stringify(o)};
const liveSig=g=>JSON.stringify([g.started,g.startedAt,g.endsAt,g.target,g.jp,g.wild,g.title,(g.visits||[]).map(v=>[v.id,v.arrivedAt,v.leftAt,v.counted])]);
let liveLastSig=null,liveLastPut=0,liveBusy=false;
const isHost=()=>!!(liveDoc&&ME&&liveDoc.host===ME.uid);

async function startLive(){const g=G();if(!g||g.live)return g&&g.live;const B=await cloud();
  const id=liveId(),me=ME.uid;g.live=id;save();
  await B.set(`live/${id}`,{host:me,hostName:myName(),g:gameForCloud(g),beat:Date.now(),upd:Date.now(),members:{},ended:false,v:1});
  liveLastSig=liveSig(g);liveLastPut=Date.now();track("live_start");liveAttach();return id}
async function liveInvite(){if(!myName()&&!signedIn()){nameSheet(()=>liveInvite());return}
  let id;try{id=await startLive()}catch(e){console.warn(e);toast("Couldn't start live. Check your signal.",3000);return}
  const link=liveLink(id),text=`Follow our crawl on Rooftop Roulette:\n${link}`;track("live_invite");
  const mates=signedIn()?await matesList():[];
  sheet(`<h3>Invite to follow</h3><p class="note">They see the clock, the bar you're at and where's next. You keep the spin.</p>
    <div class="acts"><button class="btn" type="button" id="liSend">${I.share} Send invite link</button><button class="btn dark" type="button" id="liCopy">${I.link} Copy link</button></div>
    ${mates.length?`<div class="eyebrow hsec">Crawled with before</div><div class="mates">${mates.map(m=>`<button type="button" class="mate" data-mu="${m.uid}"><span class="mav">${esc((m.n||"?")[0])}</span><span class="mn">${esc(m.n||"Mate")}</span><span class="mst">Invite</span></button>`).join("")}</div>`:""}`,()=>{
    $("liSend").onclick=()=>{if(NATIVE)PLG.Share.share({title:"Rooftop Roulette",text}).catch(()=>{});else if(navigator.share)navigator.share({text}).catch(()=>{});else{navigator.clipboard&&navigator.clipboard.writeText(link);toast("Link copied.",2000)}};
    $("liCopy").onclick=async()=>{try{await navigator.clipboard.writeText(link);toast("Link copied.",2000)}catch(e){toast("Couldn't copy the link.",2500)}};
    document.querySelectorAll("[data-mu]").forEach(b=>b.onclick=async()=>{const B=await cloud();
      try{await B.set(`users/${b.dataset.mu}/invites/${id}`,{from:myName(),fromUid:ME.uid,at:Date.now()});b.querySelector(".mst").textContent="Invited";b.disabled=true;track("live_invite_mate")}catch(e){toast("Couldn't send that one.",2500)}})})}
function nameSheet(after){
  sheet(`<h3>What's your name?</h3><p class="note">So your mates know whose crawl it is.</p><input class="cnin" id="nmIn" maxlength="24" autocomplete="given-name" placeholder="First name" value="${esc(S.myName||"")}">
    <div class="acts"><button class="btn" type="button" id="nmOk">Done</button><button class="btn dark" type="button" id="nmG">Sign in instead</button></div>`,()=>{
    const ok=()=>{const v=$("nmIn").value.trim();if(!v)return;S.myName=v;save();closeSheet();after&&after()};
    $("nmOk").onclick=ok;$("nmIn").onkeydown=e=>{if(e.key==="Enter")ok()};if($("nmG"))$("nmG").onclick=()=>signInSheet("So your mates see your name, and the crawl lands on your tab.","live");setTimeout(()=>$("nmIn").focus(),50)})}

// host: push the crawl when something happened, plus a "still here" every 2 minutes
async function liveSync(force){const g=G();if(!g||!g.live||!CLP||liveBusy||!isHost())return;
  const sig=liveSig(g),t=Date.now();if(!force&&sig===liveLastSig&&t-liveLastPut<BEAT_MS)return;if(!force&&sig!==liveLastSig&&t-liveLastPut<3000)return;
  liveBusy=true;try{const B=await cloud();const patch={beat:t,upd:t};if(sig!==liveLastSig||force)patch.g=gameForCloud(g);if(g.ended)patch.ended=true;
    await B.set(`live/${g.live}`,patch,true);liveLastSig=sig;liveLastPut=t}catch(e){console.warn("live sync",e)}finally{liveBusy=false}}

// everyone in a live crawl watches its doc
async function liveAttach(){const id=(S.game&&S.game.live)||S.follow;if(!id)return;const B=await cloud();if(liveUnsub&&liveUnsub._id===id)return;if(liveUnsub)liveUnsub();
  liveUnsub=B.watch(`live/${id}`,d=>{liveDoc=d;onLive(id,d)});liveUnsub._id=id}
function liveDetach(){if(liveUnsub)liveUnsub();liveUnsub=null;liveDoc=null}
function onLive(id,d){
  if(!d){if(S.follow===id){S.follow=null;save();closeFollow();toast("That crawl's not live any more.",3000)}return}
  const me=ME&&ME.uid,g=G();
  if(g&&g.live===id&&d.host!==me){   // the spin was handed over or taken: this phone becomes a follower
    g.handedOff=true;S.game=null;S.follow=id;save();stopWatch();closeSheet();toast(`${esc(d.hostName||"A mate")} has the spin now.`,3500);go("home");openFollow();return}
  if(S.follow===id&&d.host===me&&!d.ended){takeSpin(d);return}   // handed to this phone
  if(S.follow===id){if(d.ended)followEnded(d);paintFollow()}
  if(g&&g.live===id)paintMembers(d)}
function paintMembers(d){const n=Object.keys(d.members||{}).length,el=$("liveN");if(el)el.textContent=n?`${n} following`:"Live"}

// follower
async function followLive(id){if(!cloudOn()){toast("Live crawls need the latest app.",3000);return}
  if(S.game&&S.game.live===id){go("play");return}
  if(S.game&&S.game.started&&!S.game.ended){toast("Finish your own crawl first.",3000);return}
  S.follow=id;save();track("live_follow");openFollow();
  const B=await cloud();
  try{await B.tx(`live/${id}`,d=>{if(!d||d.ended||d.host===ME.uid)return undefined;const m=d.members||{};if(m[ME.uid]){if(m[ME.uid].n===myName())return undefined}else{let gg={};try{gg=JSON.parse(d.g)}catch(e){}m[ME.uid]={n:myName()||"",j:Date.now(),b:(gg.visits||[]).length}}
    m[ME.uid].n=myName()||m[ME.uid].n||"";return Object.assign({},d,{members:m})})}catch(e){console.warn("join",e)}
  liveAttach()}
let fv=null,fvMap=null,fvLayer=null,fvT=null;
function openFollow(){if(fv)return;fv=document.createElement("div");fv.className="followv";document.body.appendChild(fv);requestAnimationFrame(()=>fv.classList.add("on"));
  fv.innerHTML=`<div class="fv-top"><span class="eyebrow" id="fvWho">Live crawl</span><button type="button" class="shv-x" id="fvX" aria-label="Close">${I.x}</button></div>
    <div class="fv-clock" id="fvClock">--:--</div><div class="fv-sub" id="fvSub"></div><div class="fv-map" id="fvMap"></div><div class="fv-now" id="fvNow"></div><div class="fv-list" id="fvList"></div><div class="fv-act" id="fvAct"></div>`;
  $("fvX").onclick=()=>{closeFollow();go("home")};
  try{fvMap=mkMap($("fvMap"),{attributionControl:false});fvMap.setView([-33.8688,151.2093],14);fvLayer=L.layerGroup().addTo(fvMap)}catch(e){}
  clearInterval(fvT);fvT=setInterval(paintFollow,1000);liveAttach();paintFollow()}
function closeFollow(){clearInterval(fvT);if(fv){const el=fv;el.classList.remove("on");setTimeout(()=>el.remove(),220)}fv=null;fvMap=null;if(S.follow&&!(liveDoc&&!liveDoc.ended)){S.follow=null;save();liveDetach()}}
function leaveFollow(){S.follow=null;save();liveDetach();closeFollow()}
let fvSig="";
function paintFollow(){if(!fv)return;const d=liveDoc;if(!d){$("fvSub").textContent="Connecting…";return}
  let g={};try{g=JSON.parse(d.g)}catch(e){}const vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),t=Date.now(),cr=g.mode==="cruise";
  $("fvWho").textContent=`${d.hostName?d.hostName+"'s":"A"} crawl · live`;
  const ck=$("fvClock");if(d.ended)ck.textContent="Done";else if(!g.started)ck.textContent="Not started";else if(cr){ck.textContent=hmm(t-g.startedAt)}else{const ms=Math.max(0,g.endsAt-t),m=Math.floor(ms/60000),s=Math.floor(ms/1000)%60;ck.textContent=`${m}:${String(s).padStart(2,"0")}`}
  const at=vs.find(v=>!v.leftAt),tgt=g.target&&byId(g.target);
  $("fvSub").textContent=d.ended?`${vs.filter(v=>v.counted!==false).length} bars`:cr?"No timer":`${vs.filter(v=>v.counted!==false).length} bar${vs.length===1?"":"s"} so far`;
  $("fvNow").innerHTML=d.ended?"":at?`<small>At</small><b>${esc(byId(at.id).name)}</b><span>${hmm(t-at.arrivedAt)} there</span>`:tgt?`<small>Heading to</small><b>${esc(tgt.name)}</b>`:`<small>Next</small><b>Waiting on a spin</b>`;
  const sig=JSON.stringify([vs.map(v=>[v.id,v.leftAt,v.counted]),g.target,d.ended]);
  if(sig!==fvSig){fvSig=sig;
    $("fvList").innerHTML=vs.map((v,i)=>{const b=byId(v.id);return `<div class="fv-row${v.counted===false?" x":""}"><i>${i+1}</i><span>${esc(b.name)}</span><small>${v.leftAt?hmm(v.leftAt-v.arrivedAt):"now"}</small></div>`}).join("");
    if(fvMap&&fvLayer){fvMap.invalidateSize();fvLayer.clearLayers();const pts=[];vs.forEach((v,i)=>{const b=byId(v.id);pts.push([b.lat,b.lng]);L.marker([b.lat,b.lng],{icon:numIcon(i+1),interactive:false}).addTo(fvLayer)});
      if(tgt&&!at){pts.push([tgt.lat,tgt.lng]);L.marker([tgt.lat,tgt.lng],{icon:pinIcon("big"),interactive:false}).addTo(fvLayer)}
      if(pts.length===1)fvMap.setView(pts[0],15,{animate:false});else if(pts.length)fvMap.fitBounds(pts,{padding:[30,30],animate:false});else if(g.center)fvMap.setView([g.center.lat,g.center.lng],14,{animate:false})}}
  const stale=!d.ended&&g.started&&t-(d.beat||0)>STALE_MS,act=$("fvAct");
  const want=d.ended?"end":stale?"stale":"none";if(act.dataset.k!==want){act.dataset.k=want;
    act.innerHTML=want==="stale"?`<p>Can't reach ${esc(d.hostName||"the spinner")}'s phone.</p><button class="btn" type="button" id="fvTake">Take over the spin</button>`
      :want==="end"?`<button class="btn" type="button" id="fvDone">See the crawl</button>`:`<button class="txtbtn" type="button" id="fvLeave">Stop following</button>`;
    if($("fvTake"))$("fvTake").onclick=takeOver;if($("fvLeave"))$("fvLeave").onclick=()=>{leaveFollow();go("home")};
    if($("fvDone"))$("fvDone").onclick=()=>{const id=S.follow;leaveFollow();const r=H.find(x=>x.liveId===id);if(r){S.lastEnd=r.id;S.endBack="home";save();go("end")}else go("home")}}}
async function takeOver(){const id=S.follow,B=await cloud();let ok=false;
  try{ok=await B.tx(`live/${id}`,d=>{if(!d||d.ended||Date.now()-(d.beat||0)<=STALE_MS)return undefined;const m=Object.assign({},d.members||{}),me=m[ME.uid];delete m[ME.uid];let gg={};try{gg=JSON.parse(d.g)}catch(e){}
    m[d.host]={n:d.hostName||"",j:(me&&me.j)||Date.now(),b:0,was:1};
    return Object.assign({},d,{host:ME.uid,hostName:myName(),beat:Date.now(),prevHost:d.host,members:m})})}catch(e){console.warn(e)}
  if(!ok){toast("Someone else got there first.",2500);return}track("live_takeover")}
function takeSpin(d){let g;try{g=JSON.parse(d.g)}catch(e){return}
  const id=S.follow;closeFollow();S.follow=null;g.live=id;g.id=g.id||("g"+Date.now());g.test=false;
  S.game=g;save();liveLastSig=liveSig(g);startWatch();buzz(30);go("play");toast("You've got the spin.",2500);liveSync(true)}
// host hands the spin to a follower
function giveSpinSheet(){const d=liveDoc,ms=Object.entries((d&&d.members)||{});
  sheet(`<h3>Give the spin to…</h3><p class="note">They spin from here and their phone tracks the crawl. You keep following.</p><div class="mates">${ms.length?ms.map(([u,m])=>`<button type="button" class="mate" data-gs="${u}"><span class="mav">${esc((m.n||"?")[0])}</span><span class="mn">${esc(m.n||"Mate")}</span><span class="mst">Give</span></button>`).join(""):`<p class="note">Nobody's following yet. Invite someone first.</p>`}</div>`,()=>{
    document.querySelectorAll("[data-gs]").forEach(b=>b.onclick=async()=>{const u=b.dataset.gs,m=d.members[u],g=G();if(!g)return;await liveSync(true);const B=await cloud();
      const members=Object.assign({},d.members);delete members[u];members[ME.uid]={n:myName(),j:g.startedAt||Date.now(),b:0,was:1};
      try{await B.set(`live/${g.live}`,{host:u,hostName:m.n||"",members,beat:Date.now()},true);closeSheet();track("live_handover")}catch(e){toast("Couldn't hand it over. Check your signal.",3000)}})})}
// the end: the host's final crawl goes to the doc; followers copy it to their tab from the bar they joined
async function liveEnded(rec){if(!rec.live||!CLP)return;rec.liveId=rec.live;delete rec.live;
  try{const B=await cloud();const j=JSON.stringify(Object.assign(JSON.parse(recForCloud(rec)),{trail:[],startPos:null}));await B.set(`live/${rec.liveId}`,{ended:true,rec:j,beat:Date.now(),g:gameForCloud(Object.assign({},rec,{ended:true}))},true);saveH();
    matesFrom(liveDoc)}catch(e){console.warn("live end",e)}
  liveDetach()}
function followEnded(d){if(!d.rec)return;const id=S.follow;if(H.some(r=>r.liveId===id))return;
  let r;try{r=JSON.parse(d.rec)}catch(e){return}const m=(d.members||{})[ME.uid],b=m?m.b||0:0;
  r.id="f"+id;r.liveId=id;r.followed=d.hostName||"";if(b>0){r.visits=r.visits.slice(b);if(r.visits[0])r.startedAt=Math.max(r.startedAt,m.j||r.startedAt)}
  delete r.newIds;r.bodDone=true;r.test=false;pushH(r);syncH();matesFrom(d);track("live_landed",{bars:r.visits.length});
  toast("The crawl's on your tab.",3000);if(!signedIn())setTimeout(()=>signInSheet("Sign in and crawls you're on land on your tab, on any phone.","follow_end"),1800)}
async function matesFrom(d){if(!d||!signedIn())return;const B=await cloud(),me=ME.uid,add={};
  const all=Object.assign({},d.members||{});if(d.host)all[d.host]={n:d.hostName};Object.entries(all).forEach(([u,m])=>{if(u!==me)add[u]={n:m.n||"",t:Date.now()}});
  if(Object.keys(add).length)try{const cur=(await B.get(`users/${me}`))||{};await B.set(`users/${me}`,{mates:Object.assign({},cur.mates||{},add)},true)}catch(e){console.warn(e)}}
async function matesList(){try{const B=await cloud(),u=await B.get(`users/${ME.uid}`);return Object.entries((u&&u.mates)||{}).map(([uid,m])=>({uid,n:m.n,t:m.t})).sort((a,b)=>b.t-a.t).slice(0,12)}catch(e){return []}}
// invites from mates (while the app's open)
async function watchInvites(){if(!signedIn()||inviteUnsub)return;const B=await cloud(),seen=new Set(JSON.parse(localStorage.getItem("rr-inv-seen")||"[]"));
  inviteUnsub=B.watchList(`users/${ME.uid}/invites`,L=>{L.filter(x=>!seen.has(x._id)&&Date.now()-x.at<6*3600000).forEach(x=>{seen.add(x._id);localStorage.setItem("rr-inv-seen",JSON.stringify([...seen].slice(-50)));
    toast(`<b>${esc(x.from||"A mate")}</b> invited you to follow their crawl <button class="txtbtn amber" type="button" id="invGo">Follow</button>`,10000,()=>{const b=$("invGo");if(b)b.onclick=()=>{followLive(x._id)}});B.del(`users/${ME.uid}/invites/${x._id}`).catch(()=>{})})})}

// low battery: offer to hand the spin over before the phone dies
let batAsked=false;
function batteryWatch(){if(!navigator.getBattery)return;navigator.getBattery().then(b=>{const chk=()=>{const g=G();
  if(!batAsked&&g&&g.live&&isHost()&&!b.charging&&b.level<=0.1&&Object.keys((liveDoc&&liveDoc.members)||{}).length){batAsked=true;
    sheet(`<h3>Battery's low</h3><p class="note">Hand the spin to someone before your phone dies?</p><div class="acts"><button class="btn" type="button" id="bGive">Give the spin</button><button class="btn dark" type="button" id="bNo">Keep it</button></div>`,()=>{$("bGive").onclick=giveSpinSheet;$("bNo").onclick=closeSheet})}};
  b.addEventListener("levelchange",chk);chk()}).catch(()=>{})}

// menu rows during a crawl
function liveMenuRows(g){if(!cloudOn()||!g.started)return "";const n=Object.keys((liveDoc&&liveDoc.members)||{}).length;
  return `<button type="button" id="mInvite">${I.share}<span>${g.live?"Invite more people":"Invite to follow"}<small>${g.live?(n?`${n} following live`:"Live. Nobody's following yet"):"Mates see the clock and bars live"}</small></span></button>`+(g.live&&n?`<button type="button" id="mGive">${I.redo}<span>Give the spin to…<small>They spin, you follow</small></span></button>`:"")}
function liveMenuBind(){if($("mInvite"))$("mInvite").onclick=()=>liveInvite();if($("mGive"))$("mGive").onclick=giveSpinSheet}

// Settings rows
function accountRows(lk){if(!(FB_CFG||FAKE_CLOUD))return [];
  if(signedIn())return [`<button class="strow" type="button" id="stAcct"><span class="t"><b>${esc(ME.name||ME.email||"Signed in")}</b><small>${ME.name&&ME.email?esc(ME.email)+" · ":""}My Tab is backed up</small></span><i class="chev">›</i></button>`,lk("stOut","Sign out"),lk("stDel","Delete account",null,"danger")];
  return [`<button class="strow" type="button" id="stIn"><span class="t"><b>Sign in</b><small>Back up My Tab. Crawls you follow land on your tab</small></span><i class="chev">›</i></button>`]}
function accountBind(){if($("stIn"))$("stIn").onclick=()=>signInSheet(null,"settings");if($("stAcct"))$("stAcct").onclick=signedInSheet;if($("stOut"))$("stOut").onclick=()=>signOutNow();if($("stDel"))$("stDel").onclick=deleteAccountSheet}

// scorecard nudge, once, after your first real crawl
function endSignInNudge(r){if(!cloudOn()||signedIn()||S.siNudged||r.demo||r.shared||!H.length)return "";
  return `<button class="sinudge" type="button" id="siNudge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg><span><b>Sign in to back up My Tab</b><small>And crawls you follow land on your tab, on any phone</small></span></button>`}
function endSignInBind(){const b=$("siNudge");if(b)b.onclick=()=>{S.siNudged=true;save();signInSheet(null,"scorecard")}}

// start up
function cloudBoot(){if(!(FB_CFG||FAKE_CLOUD))return;
  const lc=liveCode(location.hash)||liveCode(location.search);
  if(lc){history.replaceState(null,"",location.pathname+location.search.replace(/[?&]live=[A-Za-z0-9]+/,"").replace(/^&/,"?"))}
  if(lc||S.follow||(S.game&&S.game.live)||localStorage.getItem("rr-synced")||ME){cloud().then(()=>{if(lc)followLive(lc);else if(S.follow)openFollow()}).catch(()=>{})}
  else setTimeout(()=>cloud().catch(()=>{}),4000);
  if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App&&CAPX.Plugins.App.getLaunchUrl)CAPX.Plugins.App.getLaunchUrl().then(o=>{const c=liveCode(o&&o.url);if(c)cloud().then(()=>followLive(c))}).catch(()=>{});
  setInterval(()=>liveSync(false),5000);batteryWatch()}
if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App)try{CAPX.Plugins.App.addListener("appUrlOpen",e=>{const c=liveCode(e&&e.url);if(c)cloud().then(()=>followLive(c))})}catch(e){}
addEventListener("hashchange",()=>{const c=liveCode(location.hash);if(c){history.replaceState(null,"",location.pathname+location.search);cloud().then(()=>followLive(c))}});
cloudBoot();
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("#acctChip"))accountSheet()});
