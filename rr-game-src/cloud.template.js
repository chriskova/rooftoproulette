
/* ---------- accounts and live crawls ----------
   Optional sign-in (Google) backs up My Tab and links you to the people you crawl with.
   Live crawls: the spinner's phone sends the crawl to the cloud when something happens (spin, arrive, leave)
   and a small "still here" every 2 minutes. Anyone with the invite link follows along live.
   One spinner at a time: they can hand the spin over, and if their phone can't be reached for 5 minutes
   a follower can take over. When the crawl ends it lands on every follower's tab.
   Backend: Firebase (Auth + Firestore) when data/config.json has "firebase"; ?fakecloud uses a local stand-in for tests.
   Nothing here runs, and none of it shows, until one of those is set. */
const FB_CFG=(window.RR_CONFIG&&RR_CONFIG.firebase)||null,FAKE_CLOUD=/[?&]fakecloud\b/.test(location.search);
const cloudOn=()=>((!!FB_CFG&&!S.test)||FAKE_CLOUD||S.test)&&!DEMO();   // test mode: friends and live crawls are simulated on the phone (simBackend)
const BEAT_MS=120000,STALE_MS=300000;
let ME=null,CLP=null,liveUnsub=null,liveDoc=null,inviteUnsub=null;

// ----- backend: Firebase -----
function fbBackend(){return new Promise((res,rej)=>{
  const go_=()=>{try{const F=window.RRFB,app=F.initializeApp(FB_CFG);
    const auth=F.initializeAuth(app,{persistence:[F.indexedDBLocalPersistence,F.browserLocalPersistence]}),db=F.initializeFirestore(app,{});
    const d=p=>F.doc(db,...p.split("/")),c=p=>F.collection(db,...p.split("/"));
    const linkOrIn=async(cred,P,name)=>{const u=auth.currentUser;let r;
      try{r=await F.linkWithCredential(u,cred)}
      catch(e){if(e.code==="auth/credential-already-in-use"||e.code==="auth/email-already-in-use")return F.signInWithCredential(auth,P.credentialFromError(e)||cred);throw e}
      if(!r.user.displayName){const pd=(r.user.providerData||[])[0]||{},n=name||pd.displayName;if(n)await F.updateProfile(r.user,{displayName:n,photoURL:pd.photoURL||null})}
      return r};
    res({
      onUser:cb=>F.onAuthStateChanged(auth,u=>{if(!u){F.signInAnonymously(auth).catch(e=>console.warn("anon",e));return}const pd=(u.providerData||[]).find(x=>x&&(x.displayName||x.email))||{};
        cb({uid:u.uid,anon:u.isAnonymous,name:u.displayName||pd.displayName||"",photo:u.photoURL||pd.photoURL||"",email:u.email||pd.email||"",via:(pd.providerId||"").replace(".com","")})}),
      emailUp:async(email,pass,name)=>{const cred=F.EmailAuthProvider.credential(email,pass);const r=await F.linkWithCredential(auth.currentUser,cred);if(name)await F.updateProfile(r.user,{displayName:name});await r.user.reload();return r},
      emailIn:(email,pass)=>F.signInWithEmailAndPassword(auth,email,pass),
      resetPw:email=>F.sendPasswordResetEmail(auth,email),
      rename:n=>F.updateProfile(auth.currentUser,{displayName:n}),
      refresh:()=>auth.currentUser,
      // Google and Apple both end in a Firebase credential, linked onto this phone's anonymous account so its data comes along
      // (or, if that Google/Apple account already exists, signed into instead).
      google:async()=>{let cred=null;
        if(NATIVE&&IOSNAT){const o=await PLG.RRSignIn.google({clientId:RR_CONFIG.googleIosClientId});cred=F.GoogleAuthProvider.credential(o.idToken)}
        else if(NATIVE){const o=await PLG.GoogleAuth.signIn({webClientId:RR_CONFIG.googleWebClientId});cred=F.GoogleAuthProvider.credential(o.idToken)}
        if(cred)return linkOrIn(cred,F.GoogleAuthProvider,null);
        const u=auth.currentUser,p=new F.GoogleAuthProvider();try{return await F.linkWithPopup(u,p)}catch(e){if(e.code==="auth/credential-already-in-use")return F.signInWithCredential(auth,F.GoogleAuthProvider.credentialFromError(e));throw e}},
      apple:async()=>{const raw=Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,"0")).join("");
        const o=await PLG.RRSignIn.apple({nonce:raw});
        const cred=new F.OAuthProvider("apple.com").credential({idToken:o.idToken,rawNonce:raw});
        // Apple only shares the name the first time someone signs in to the app
        return linkOrIn(cred,F.OAuthProvider,[o.givenName,o.familyName].filter(Boolean).join(" ")||null)},
      // Apple asks apps to cut their access when an account is deleted: a fresh Apple sign-in gives the code to revoke with
      revokeApple:async()=>{const raw=Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,"0")).join("");
        const o=await PLG.RRSignIn.apple({nonce:raw});if(o.authorizationCode)await F.revokeAccessToken(auth,o.authorizationCode)},
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
  const sc=document.createElement("script");sc.src=(window.RR_ROOT||"")+"vendor/firebase/rr-firebase.js";sc.onload=go_;sc.onerror=()=>rej(new Error("firebase didn't load"));document.head.appendChild(sc)})}

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
    rename:async n=>{user=Object.assign({},user,{name:n})},
    deleteMe:async()=>{user={uid,anon:true,name:"",photo:"",email:""};ucbs.forEach(f=>f(user))},
    get:p=>req("get",p),set:(p,v,merge)=>req(merge?"merge":"set",p,v),del:p=>req("del",p,null),list:p=>req("list",p),
    watch:(p,cb)=>poll(cb,()=>req("get",p)),watchList:(p,cb)=>poll(cb,()=>req("list",p)),
    tx:async(p,fn)=>{const v=fn(await req("get",p));if(v===undefined)return false;await req("set",p,v);return true}})}

// ----- backend: test mode. Nothing leaves the phone. You're signed in as "You", and two simulated friends,
// Sam and Jess, answer invites, follow your crawl, invite you to theirs and play their crawls out (a step every ~25 s).
const SIM={docs:{},w:{},wl:{},quiet:{},B:null,t:null};
const SIMF=[{uid:"sim-sam",n:"Sam"},{uid:"sim-jess",n:"Jess"}],SIMSTEP=25000;
function simBackend(){
  const me={uid:"sim-me",anon:false,name:S.myName||"You",photo:"",email:"you@test",via:"google"};
  try{SIM.docs=JSON.parse(localStorage.getItem("rr-sim")||"{}")}catch(e){SIM.docs={}}
  const cp=v=>v==null?null:JSON.parse(JSON.stringify(v)),par=p=>p.split("/").slice(0,-1).join("/");
  const list=pp=>Object.keys(SIM.docs).filter(k=>par(k)===pp).map(k=>Object.assign({_id:k.split("/").pop()},cp(SIM.docs[k])));
  const fire=p=>{(SIM.w[p]||[]).forEach(cb=>setTimeout(()=>cb(cp(SIM.docs[p]||null)),0));const pp=par(p);(SIM.wl[pp]||[]).forEach(cb=>setTimeout(()=>cb(list(pp)),0))};
  const put=(p,v)=>{if(v==null)delete SIM.docs[p];else SIM.docs[p]=cp(v);try{localStorage.setItem("rr-sim",JSON.stringify(SIM.docs))}catch(e){}fire(p)};
  const sub=(m,p,cb)=>{(m[p]=m[p]||[]).push(cb);return()=>{m[p]=(m[p]||[]).filter(x=>x!==cb)}};
  put(`users/${me.uid}`,Object.assign({},SIM.docs[`users/${me.uid}`]||{},{mates:Object.fromEntries(SIMF.map(f=>[f.uid,{n:f.n,t:Date.now()}]))}));
  const B={onUser:cb=>setTimeout(()=>cb(me),0),refresh:()=>me,
    google:async()=>{},apple:async()=>{},emailUp:async()=>{},emailIn:async()=>{},resetPw:async()=>true,deleteMe:async()=>{},revokeApple:async()=>{},
    signOut:async()=>{toast("Test mode keeps you signed in.",2200)},rename:async n=>{me.name=n},
    get:async p=>cp(SIM.docs[p]||null),set:async(p,v,merge)=>put(p,merge?Object.assign({},SIM.docs[p]||{},v):v),del:async p=>put(p,null),list:async p=>list(p),
    watch:(p,cb)=>{setTimeout(()=>cb(cp(SIM.docs[p]||null)),0);return sub(SIM.w,p,cb)},
    watchList:(p,cb)=>{setTimeout(()=>cb(list(p)),0);return sub(SIM.wl,p,cb)},
    tx:async(p,fn)=>{const v=fn(cp(SIM.docs[p]||null));if(v===undefined)return false;put(p,v);return true}};
  SIM.B=B;if(!SIM.t)SIM.t=setInterval(simTick,2000);return Promise.resolve(B)}
const simFriend=uid=>SIMF.find(f=>f.uid===uid);
function simTick(){const B=SIM.B;if(!B)return;
  // an invite to Sam or Jess: they join that crawl a couple of seconds later
  SIMF.forEach(f=>Object.keys(SIM.docs).filter(k=>k.startsWith(`users/${f.uid}/invites/`)).forEach(k=>{B.del(k);simJoin(k.split("/").pop(),f)}));
  Object.keys(SIM.docs).filter(k=>k.startsWith("live/")).forEach(k=>{const d=SIM.docs[k];if(d&&!d.ended&&simFriend(d.host)&&!SIM.quiet[k])simDrive(k,false)})}
function simJoin(id,f){return SIM.B.tx(`live/${id}`,d=>{if(!d||d.ended)return undefined;const m=Object.assign({},d.members||{});if(m[f.uid])return undefined;
  let gg={};try{gg=JSON.parse(d.g)}catch(e){}m[f.uid]={n:f.n,j:Date.now(),b:(gg.visits||[]).length};return Object.assign({},d,{members:m})})}
function simSpin(g,t){const c=g.center||{lat:-33.8688,lng:151.2093},been=new Set((g.visits||[]).map(v=>v.id));
  let P=VENUES.filter(v=>!been.has(v.id)&&dist(c,v)<=(g.radius||1.5)*1000);if(!P.length)P=VENUES.filter(v=>!been.has(v.id)).sort((a,b)=>dist(c,a)-dist(c,b)).slice(0,20);
  const v=P[Math.floor(Math.random()*P.length)];if(!v)return;g.target=v.id;g.tAt=t;
  g.wild=Math.random()<.5?{id:v.id,text:WILDS[Math.floor(Math.random()*WILDS.length)],shown:1}:null}
// one step of a crawl Sam or Jess is spinning: spin, walk (~25 s), arrive, stay (~35 s), leave and spin again
const simMin=(a,b)=>(a+Math.random()*(b-a))*60000;
function simDrive(k,force){const d=SIM.docs[k];let g;try{g=JSON.parse(d.g)}catch(e){return}
  let off=d.off||0;const real=Date.now(),cr=g.mode==="cruise";let ch=false;g.visits=g.visits||[];
  if(!d.simAt&&!force){SIM.B.set(k,{simAt:real,beat:real},true);return}   // just handed the spin: start their clock from now, not from the crawl's start
  const jump=ms=>{off+=Math.max(0,ms-(real-(d.simAt||real)));t=real+off};let t=real+off;
  if(!cr&&g.started&&t>=g.endsAt){simEnd(k);return}
  const at=g.visits.find(v=>v.arrivedAt!=null&&!v.leftAt);
  if(at){if(force||real-(d.simAt||0)>=SIMSTEP*1.4){jump(simMin(15,30));if(!cr&&t>=g.endsAt){simEnd(k,g);return}at.leftAt=t;at.counted=true;simSpin(g,t);ch=true}}
  else if(g.target){if(!g.tAt){g.tAt=t;ch=true}
    else if(force||real-(d.simAt||0)>=SIMSTEP){jump(simMin(6,14));if(!cr&&g.started&&t>=g.endsAt){simEnd(k,g);return}g.visits.push({id:g.target,arrivedAt:t,counted:null});if(g.frz&&t<g.frz.until){g.endsAt-=g.frz.until-t;g.frz.until=t}
      if(g.wild&&g.wild.id!==g.target)g.wild=null;g.target=null;ch=true}}
  else{simSpin(g,t);ch=true}
  const patch={beat:real};if(ch){patch.g=JSON.stringify(g);patch.off=off;patch.simAt=real}
  if(!cr&&g.started&&t>=g.endsAt){SIM.B.set(k,patch,true).then(()=>simEnd(k));return}
  SIM.B.set(k,patch,true)}
function simEnd(k,g0){const d=SIM.docs[k];if(!d||d.ended)return;let g=g0;if(!g)try{g=JSON.parse(d.g)}catch(e){return}const t=Date.now()+(d.off||0),stop=g.mode==="cruise"?t:Math.min(t,g.endsAt||t);
  (g.visits||[]).forEach(v=>{if(v.arrivedAt!=null&&!v.leftAt){v.leftAt=Math.max(stop,v.arrivedAt+60000);v.counted=true}});
  const rec=Object.assign({},g,{id:g.id||("gsim"+t),ended:true,endedAt:stop,target:null,wild:null});
  SIM.B.set(k,{ended:true,rec:recForCloud(rec),g:JSON.stringify(rec),beat:Date.now()},true)}
// Sam or Jess starts a 1 hr crawl near you and invites you
async function simInvite(f){const B=await cloud();if(!SIM.B)return;const c=you()||{lat:-33.8688,lng:151.2093},t=Date.now(),len=60;
  // the same shape as a crawl started on a real phone, so it ends, lands on the tab and shows its card like one
  const g={id:"gsim"+t,city:S.city,test:true,mode:"rush",len,radius:1.5,newOnly:false,started:true,startedAt:t,endsAt:t+len*60000+45*60000,frz:{from:t,until:t+45*60000,start:true,zone:true,trip:true},
    center:{lat:c.lat,lng:c.lng},startPos:{lat:c.lat,lng:c.lng},areas:[nearestSuburb(c)],moves:[],voluntaryUsed:false,freeSkips:1,excluded:[],zone:{lat:c.lat,lng:c.lng,name:nearestArea(c)},
    visits:[],target:null,targetAt:null,targetFrom:null,ended:false,shownFinal:false};
  g.zoneN=playable(inCircle(c,g.radius),false).length;
  simSpin(g,t);const id="SIM"+t.toString(36);
  await B.set(`live/${id}`,{host:f.uid,hostName:f.n,g:JSON.stringify(g),beat:t,upd:t,members:{},ended:false,v:1,off:0,simAt:t});
  await B.set(`users/${ME.uid}/invites/${id}`,{from:f.n,fromUid:f.uid,at:t});return id}
// Sam or Jess follows your crawl (makes it live first if it isn't)
async function simFollowMe(f){const g=G();if(!g||!g.started)return;await cloud();const id=await startLive();if(id)await simJoin(id,f)}
const simLiveKey=()=>{const id=S.follow||(G()&&G().live);return id?`live/${id}`:null};
function simQuiet(){const k=simLiveKey();if(!k||!SIM.docs[k])return;SIM.quiet[k]=1;SIM.B.set(k,{beat:Date.now()-STALE_MS-5000},true)}

function cloud(){if(!CLP){CLP=(S.test?simBackend():FAKE_CLOUD?fakeBackend():fbBackend()).then(B=>new Promise(res=>{let first=true;B.onUser(u=>{const was=ME;ME=u;if(first){first=false;res(B)}onUserChange(was,u)})})).catch(e=>{console.warn("cloud",e);CLP=null;throw e})}return CLP}
const signedIn=()=>!!(ME&&!ME.anon);
const myName=()=>(ME&&ME.name)||S.myName||"";
const canGoogle=()=>!!(FAKE_CLOUD||(FB_CFG&&(!NATIVE||(CAPX.getPlatform()==="android"&&RR_CONFIG.googleWebClientId)||(IOSNAT&&RR_CONFIG.googleIosClientId))));
// Sign in with Apple: on iPhone (Apple requires it next to Google there)
const canApple=()=>!!(FB_CFG&&IOSNAT);

function onUserChange(was,u){
  if(u&&!u.anon&&(!was||was.anon||was.uid!==u.uid)){tabSyncAll();watchInvites()}
  if(u&&u.anon&&was&&!was.anon){if(inviteUnsub){inviteUnsub();inviteUnsub=null}}
  if($("setPage"))settingsSheet();if($("acctPage")){if(u&&!u.anon)accountPage();else closeAcct()}if(S.route==="hist")renderHist();if(u&&!u.anon){if($("siNudge"))$("siNudge").remove();if($("rcIn"))$("rcIn").remove()}
  if(S.follow||(S.game&&S.game.live))liveAttach();
}

// ----- sign in -----
const AUTH_ERR={"auth/invalid-credential":"Wrong email or password.","auth/wrong-password":"Wrong email or password.","auth/user-not-found":"No account with that email. Create one instead.","auth/email-already-in-use":"That email already has an account. Sign in instead.","auth/credential-already-in-use":"That email already has an account. Sign in instead.","auth/weak-password":"Use at least 6 characters.","auth/invalid-email":"That email doesn't look right.","auth/too-many-requests":"Too many tries. Wait a minute and try again.","auth/network-request-failed":"No connection. Check your signal."};
const authErr=e=>AUTH_ERR[e&&e.code]||"Couldn't sign in. Try again.";
const isCancel=e=>/cancel|popup-closed|user.?cancel/i.test(String(e&&(e.code||e.message)||e));
async function signIn(from,via){via=via||"google";track("sign_in_tap",{from,via});
  try{const B=await cloud();await(via==="apple"?B.apple():B.google());track("signed_in",{from,via});afterSignIn(from);return true}
  catch(e){console.warn("sign in",e);if(!isCancel(e))toast(esc(authErr(e)),3500);return false}}
// one sign-in sheet everywhere: Apple (iPhone), Google or email
// Signing in from Settings or the account button lists the perks; from an action, just the line that action needs.
const PERK_TAB=()=>`<div>${I.check}<span><b>Save your tab</b><small>Keep your crawls, photos and saved lists across devices</small></span></div>`;
const PERK_LIVE=()=>`<div>${I.check}<span><b>Share your crawl live</b><small>Let friends follow every spin and the timer from their own phones</small></span></div>`;
function signInSheet(why,from,title){from=from||"sheet";
  const perks=(from==="acct"||from==="settings"||from==="sheet"||from==="mytab")?PERK_TAB()+PERK_LIVE():"";
  sheet(`<h3>${title||"Sign in"}</h3>${why?`<p class="note">${why}</p>`:""}
    ${perks?`<div class="aperks">${perks}</div>`:""}
    <div class="acts">
    ${canApple()?`<button class="btn apple" type="button" id="siA">${AIC} Continue with Apple</button>`:""}
    ${canGoogle()?`<button class="btn" type="button" id="siG">${GIC} Continue with Google</button>`:""}
    <button class="btn dark" type="button" id="siE">${I.mail||MAILI} Continue with email</button></div>`,()=>{
    if($("siA"))$("siA").onclick=()=>signIn(from,"apple");if($("siG"))$("siG").onclick=()=>signIn(from);$("siE").onclick=()=>emailSheet("in",from)})}
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
        track("signed_in",{from,via:"email",created:up});afterSignIn(from)}
      catch(e){console.warn(e);err(authErr(e));b.disabled=false}};
    $("aeGo").onclick=go;$("aePw").onkeydown=e=>{if(e.key==="Enter")go()};setTimeout(()=>(up?$("aeName"):$("aeMail")).focus(),60)})}
// your Google photo when there is one, otherwise your initial (also if the photo fails to load)
const meInitial=()=>esc(((ME&&(ME.name||ME.email))||"?")[0].toUpperCase());
const avatarHTML=big=>`<span class="aav${big?" big":""}">${ME&&ME.photo?`<img src="${esc(ME.photo)}" alt="" referrerpolicy="no-referrer" onerror="this.replaceWith(document.createTextNode(this.parentNode.dataset.i))">`:meInitial()}</span>`.replace('<span class="aav','<span data-i="'+meInitial()+'" class="aav');
// once you're in: the account page if you came from the account button or Settings, otherwise just a toast
function afterSignIn(from){let k=0;const go=()=>{const first=((ME&&ME.name)||"").split(" ")[0];
    if(signedIn()&&(from==="acct"||from==="settings"||from==="mytab"))accountPage();
    else if(signedIn()&&from==="live"){closeSheet();toast(first?`You're in, ${esc(first)}.`:"You're in.",2000);setTimeout(liveInvite,350)}
    else{closeSheet();toast(first?`You're in, ${esc(first)}.`:"You're in.",2600)}};
  if(signedIn())go();else{const t=setInterval(()=>{if(signedIn()||++k>25){clearInterval(t);go()}},100)}}
// Account: a full page like Settings, for when you're signed in. Who you are, who you crawl with, your tab's backup.
// App preferences (look, sound, creator mode) stay in Settings: they're for this phone and work signed out too.
const fmtD=t=>new Date(t).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:new Date(t).getFullYear()===new Date().getFullYear()?undefined:"numeric"});
function accountPage(){if(!signedIn()){signInSheet(null,"acct");return}
  let pg=$("acctPage");const fresh=!pg;
  if(fresh){pg=document.createElement("div");pg.id="acctPage";pg.className="setpage";document.body.appendChild(pg);
    try{history.pushState({acctPage:1},"")}catch(e){}requestAnimationFrame(()=>requestAnimationFrame(()=>pg.classList.add("on")))}
  if($("sheet").open)closeSheet();
  const n=readH(HKEY).filter(r=>!r.demo).length,via=ME.via==="google"?"Google":ME.via==="apple"?"Apple":ME.via==="password"?"Email":"";
  pg.innerHTML=`<div class="sphead"><button class="spback" type="button" id="apBack" aria-label="Back">${I.back}</button><b>Account</b></div><div class="spbody">
    <div class="acct aphead">${avatarHTML(true)}<h3>${esc(ME.name||"Signed in")}</h3>${ME.email?`<p class="note">${esc(ME.email)}</p>`:""}</div>
    <div class="sgh">Profile</div><div class="sgrp">
      <button class="strow" type="button" id="apName"><span class="t"><b>Name</b><small>Shown to friends on live crawls</small></span><span class="sval">${esc(myName()||"Add")}</span><i class="chev">›</i></button>
      ${via?`<div class="strow"><span class="t"><b>Signed in with</b></span><span class="sval">${via}</span></div>`:""}</div>
    <div class="sgh">My Tab</div><div class="sgrp">
      <div class="strow"><span class="t"><b>Backed up</b><small>Sign in on any phone and it comes back</small></span><span class="sval">${n} crawl${n===1?"":"s"}</span></div></div>
    <div class="sgh">Friends</div><div class="sgrp" id="apMates"><div class="strow"><span class="t"><small>Loading…</small></span></div></div>
    <div class="sgh">Account</div><div class="sgrp">
      <button class="strow" type="button" id="apOut"><span class="t"><b>Sign out</b></span></button>
      <button class="strow danger" type="button" id="apDel"><span class="t"><b>Delete account</b></span></button></div>
  </div>`;
  $("apBack").onclick=()=>{try{if(history.state&&history.state.acctPage)history.back();else closeAcct()}catch(e){closeAcct()}};
  $("apName").onclick=renameSheet;$("apOut").onclick=()=>signOutNow();$("apDel").onclick=deleteAccountSheet;
  matesList(true).then(L=>{const el=$("apMates");if(!el)return;
    el.innerHTML=L.length?L.map(m=>`<button class="strow apmate" type="button" data-mu="${m.uid}"><span class="mav">${esc((m.n||"?")[0].toUpperCase())}</span><span class="t"><b>${esc(m.n||"Friend")}</b><small>${m.t?"Last crawled "+fmtD(m.t):""}</small></span><i class="chev">›</i></button>`).join("")
      :`<div class="strow"><span class="t"><b>No friends here yet</b><small>People from your live crawls show up here</small></span></div>`;
    el.querySelectorAll("[data-mu]").forEach(b=>b.onclick=()=>{const m=L.find(x=>x.uid===b.dataset.mu);if(m)mateSheet(m)})})}
function closeAcct(){const pg=$("acctPage");if(!pg)return;pg.id="";pg.classList.remove("on");setTimeout(()=>pg.remove(),260)}
function renameSheet(){
  sheet(`<h3>Your name</h3><p class="note">Shown to friends on live crawls.</p><input class="cnin" id="rnIn" maxlength="24" autocomplete="given-name" placeholder="Name" value="${esc(myName())}">
    <div class="acts"><button class="btn" type="button" id="rnOk">Save</button></div>`,()=>{
    const ok=async()=>{const v=$("rnIn").value.trim();if(!v)return;$("rnOk").disabled=true;
      try{const B=await cloud();await B.rename(v);ME=Object.assign({},ME,{name:v});S.myName=v;save();track("rename");closeSheet();accountPage();if($("setPage"))settingsSheet()}
      catch(e){console.warn(e);$("rnOk").disabled=false;toast("Couldn't save that. Try again.",2600)}};
    $("rnOk").onclick=ok;$("rnIn").onkeydown=e=>{if(e.key==="Enter")ok()};setTimeout(()=>$("rnIn").focus(),60)})}
function mateSheet(m){
  sheet(`<h3>${esc(m.n||"Friend")}</h3><p class="note">${m.t?"Last crawled together "+fmtD(m.t)+". ":""}Removing them takes them off your Friends list.</p>
    <div class="acts"><button class="btn dark" type="button" id="mtKeep">Keep</button><button class="txtbtn" type="button" id="mtDel" style="color:var(--red)">Remove</button></div>`,()=>{
    $("mtKeep").onclick=closeSheet;
    $("mtDel").onclick=async()=>{try{const B=await cloud(),cur=(await B.get(`users/${ME.uid}`))||{},ms=Object.assign({},cur.mates||{});delete ms[m.uid];
      await B.set(`users/${ME.uid}`,Object.assign({},cur,{mates:ms}));track("mate_removed");closeSheet();accountPage()}catch(e){console.warn(e);toast("Couldn't remove them. Try again.",2600)}}})}
function accountSheet(){if(signedIn())accountPage();else signInSheet(null,"acct")}
// the account button on My Tab: your initial when signed in, an outline when not
function acctChip(){if(!(FB_CFG||FAKE_CLOUD))return "";
  return signedIn()?`<button class="acbtn on" type="button" id="acctChip" aria-label="Your account">${avatarHTML()}</button>`
    :`<button class="acbtn" type="button" id="acctChip" aria-label="Sign in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg></button>`}
function acctChipBind(){const b=$("acctChip");if(b)b.onclick=accountSheet}
const AIC='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="vertical-align:-2px"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.97.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.38-3.69zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.68-1.1 1.77-.96 2.81 1.02.08 2.06-.52 2.69-1.29z"/></svg>';
const GIC='<svg viewBox="0 0 24 24" width="18" height="18" style="vertical-align:-3px"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>';
async function signOutNow(){const B=await cloud();await B.signOut();closeAcct();localStorage.removeItem("rr-synced");toast("Signed out. Your tab stays on this phone.",3000)}
function deleteAccountSheet(){
  sheet(`<h3>Delete your account?</h3><p class="note">Removes your account and your tab's backup. Crawls on this phone stay here.</p><div class="acts"><button class="btn" type="button" id="daY" style="background:var(--red);color:#fff">Delete account</button><button class="btn dark" type="button" id="daN">Keep it</button></div>`,()=>{
    $("daN").onclick=closeSheet;$("daY").onclick=async()=>{const B=await cloud(),uid=ME.uid;
      try{const L=await B.list(`users/${uid}/crawls`);for(const x of L)await B.del(`users/${uid}/crawls/${x._id}`);
        try{for(const x of await B.list(`users/${uid}/invites`))await B.del(`users/${uid}/invites/${x._id}`)}catch(e){}
        await B.del(`users/${uid}`);if(ME.via==="apple"&&B.revokeApple&&RR_CONFIG.appleRevoke)try{await B.revokeApple()}catch(e){console.warn("apple revoke",e)}await B.deleteMe();localStorage.removeItem("rr-synced");closeSheet();closeAcct();toast("Account deleted.",3000);track("account_deleted")}
      catch(e){console.warn(e);if(/recent-login/.test(e.code||"")){closeSheet();toast("Sign in again, then delete.",3500);await signIn("delete",ME.via==="apple"?"apple":"google")}else toast("Couldn't delete it. Try again.",3000)}}})}

// ----- My Tab backup (signed in) -----
const syncedMap=()=>{try{return JSON.parse(localStorage.getItem("rr-synced")||"{}")}catch(e){return {}}};
const recHash=s=>{let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return String(h)};
// Everything on your tab comes back when you sign in on another phone: crawls, their photos, your lists and crawl names.
// Photos (already shrunk to 1000px, 3 a crawl at most) go as their own docs next to the crawl: "<crawl id>~p0", "~p1"…
const crawlPics=r=>{const P=(r.photos||[]).slice();if(r.photo&&!P.includes(r.photo))P.push(r.photo);return P};
const recForCloud=r=>{const o=Object.assign({},r),P=crawlPics(r);delete o.photo;delete o.photos;if(P.length){o.np=P.length;o.pi=r.photo?P.indexOf(r.photo):-1}
  if(o.trail&&o.trail.length>600)o.trail=o.trail.filter((_,i)=>i%Math.ceil(o.trail.length/600)===0);return JSON.stringify(o)};
const isPicDoc=id=>/~p\d+$/.test(id);
// a photo has to fit the cloud's size cap; most already do, the rest get re-squeezed
function fitPic(d){if(!d||d.length<380000)return Promise.resolve(d);return new Promise(res=>{const img=new Image();img.onload=()=>{let s=.85,q=.72,out=d;
  for(let k=0;k<6&&out.length>=380000;k++){const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext("2d").drawImage(img,0,0,c.width,c.height);out=c.toDataURL("image/jpeg",q);s*=.85;q=Math.max(.5,q-.05)}
  res(out.length<380000?out:null)};img.onerror=()=>res(null);img.src=d})}
// lists (been, not for us, hit list, favourites) and crawl names live on your account too
const PREF_KEYS=["been","nfu","want","fav","names"];
const prefsNow=()=>{const o={};PREF_KEYS.forEach(k=>{if(S[k]&&typeof S[k]==="object")o[k]=S[k]});return JSON.stringify(o)};
let tabT=null,prefsSent=null;
function tabSyncSoon(){if(!signedIn())return;clearTimeout(tabT);tabT=setTimeout(tabPush,2500)}
async function tabPush(){if(!signedIn())return;const B=await cloud(),uid=ME.uid,m=syncedMap(),L=readH(HKEY),seen={};
  for(const r of L){if(r.demo)continue;seen[r.id]=1;const j=recForCloud(r),h=recHash(j);
    if(m[r.id]!==h){try{await B.set(`users/${uid}/crawls/${r.id}`,{j,at:r.startedAt||0});m[r.id]=h}catch(e){console.warn("tab push",e);break}}
    const P=crawlPics(r);
    for(let i=0;i<P.length;i++){const k=`${r.id}~p${i}`,ph=recHash(P[i]);seen[k]=1;if(m[k]===ph)continue;
      try{const d=await fitPic(P[i]);if(d)await B.set(`users/${uid}/crawls/${k}`,{j:d,at:r.startedAt||0});m[k]=ph}catch(e){console.warn("photo push",e);break}}}
  for(const id of Object.keys(m))if(!seen[id]){try{await B.del(`users/${uid}/crawls/${id}`);delete m[id]}catch(e){}}
  localStorage.setItem("rr-synced",JSON.stringify(m));await prefsPush()}
async function prefsPush(){if(!signedIn())return;const j=prefsNow();if(j===prefsSent)return;
  try{const B=await cloud();await B.set(`users/${ME.uid}`,{prefs:j},true);prefsSent=j}catch(e){console.warn("prefs push",e)}}
// save the whole tab, falling back to cover photos only if the phone's storage is full
function writeTab(L){try{localStorage.setItem(HKEY,JSON.stringify(L));return}catch(e){}
  L.forEach(r=>{if(r.photos&&r.photos.length>1)r.photos=r.photo?[r.photo]:r.photos.slice(-1)});writeH(HKEY,L)}
async function tabSyncAll(){if(!signedIn())return;const B=await cloud(),uid=ME.uid;
  try{const u=(await B.get(`users/${uid}`))||{};B.set(`users/${uid}`,{name:ME.name||"",photo:ME.photo||"",seen:Date.now()},true);
    // lists: merge what's on the account with what's on this phone
    if(u.prefs){try{const p=JSON.parse(u.prefs);PREF_KEYS.forEach(k=>{if(p[k]&&typeof p[k]==="object")S[k]=Object.assign({},p[k],S[k]||{})});save();if(typeof render==="function"&&S.route!=="play")render()}catch(e){}}
    const L=readH(HKEY),have=new Set(L.map(r=>r.id)),m=syncedMap(),docs=await B.list(`users/${uid}/crawls`),pics={};let added=0,picsBack=0;
    docs.filter(x=>isPicDoc(x._id)).forEach(x=>{const [id,n]=x._id.split("~p");(pics[id]=pics[id]||[])[+n]=x.j});
    // test crawls (simulated friends' crawls, ones moved to test) don't belong on the real tab: mark them so tabPush
    // clears them from the account, instead of bringing them back on every open
    const testIds=new Set(readH(TKEY).map(r=>r.id)),isTestRec=r=>r.test||/^SIM/.test(r.liveId||"")||testIds.has(r.id);
    for(const x of docs){if(isPicDoc(x._id)||have.has(x._id))continue;try{const r=JSON.parse(x.j);m[r.id]=recHash(x.j);
      if(isTestRec(r)){docs.filter(d=>d._id.startsWith(r.id+"~p")).forEach(d=>m[d._id]=1);continue}
      const P=(pics[r.id]||[]).filter(Boolean);if(P.length){r.photos=P;if(r.pi>=0&&P[r.pi])r.photo=P[r.pi]}delete r.np;delete r.pi;L.push(r);added++}catch(e){}}
    // crawls already on this phone that lost their photos get them back too
    L.forEach(r=>{const P=(pics[r.id]||[]).filter(Boolean);if(P.length&&!crawlPics(r).length){r.photos=P;r.photo=P[P.length-1];picsBack++}});
    localStorage.setItem("rr-synced",JSON.stringify(m));
    if(added||picsBack){L.sort((a,b)=>b.startedAt-a.startedAt);writeTab(L);if(!hTest)H=readH(HKEY);localStorage.setItem("rr-synced",JSON.stringify(m));
      if(added)toast(`${added} crawl${added===1?"":"s"} back on your tab.`,3000);if(S.route==="hist")renderHist()}
    await tabPush()}catch(e){console.warn("tab sync",e)}}
// lists change all over the app: check every 15 seconds and send them when they have
setInterval(()=>{if(CLP&&signedIn())prefsPush()},15000);

// ----- live crawls -----
const liveId=()=>"L"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const liveLink=id=>LIVE_BASE+"#live="+id;
const liveCode=u=>{const m=String(u||"").match(/[#?&]live=([A-Za-z0-9]+)/);return m?m[1]:null};
// what followers get: the bars and times, never your GPS trail or where you started from
const gameForCloud=g=>{const o=Object.assign({},g);["trail","photos","photo","moves","clipN","startPos","here","lastFix"].forEach(k=>delete o[k]);return JSON.stringify(o)};
const liveSig=g=>JSON.stringify([g.started,g.startedAt,g.endsAt,g.frz&&g.frz.until,g.target,g.jp,g.wild,g.title,(g.visits||[]).map(v=>[v.id,v.arrivedAt,v.leftAt,v.counted])]);
let liveLastSig=null,liveLastPut=0,liveBusy=false;
const isHost=()=>!!(liveDoc&&ME&&liveDoc.host===ME.uid);

async function startLive(){const g=G();if(!g)return startLivePre();if(g.live)return g.live;const B=await cloud();
  const id=liveId(),me=ME.uid;g.live=id;save();
  await B.set(`live/${id}`,{host:me,hostName:myName(),g:gameForCloud(g),beat:Date.now(),upd:Date.now(),members:{},ended:false,v:1});
  liveLastSig=liveSig(g);liveLastPut=Date.now();track("live_start");liveAttach();return id}
// invited before the crawl starts: the follow link works straight away and shows "Not started" until the first spin
async function startLivePre(){const w=S.wiz;if(!w||!w.z)return null;if(w.live)return w.live;const B=await cloud();
  const id=liveId();w.live=id;save();
  const pre={mode:"rush",len:w.len,started:false,visits:[],center:{lat:w.z.lat,lng:w.z.lng},radius:w.radius,city:S.city};
  await B.set(`live/${id}`,{host:ME.uid,hostName:myName(),g:JSON.stringify(pre),beat:Date.now(),upd:Date.now(),members:{},ended:false,v:1});
  track("live_start",{pre:true});return id}
async function liveInvite(){
  if(!signedIn()){track("live_invite_gate");signInSheet("Friends don't need an account to follow.","live","Sign in to share live");return}
  if(!myName()){nameSheet(()=>liveInvite());return}
  let id;try{id=await startLive()}catch(e){console.warn(e);toast("Couldn't start live. Check your signal.",3000);return}if(!id)return;
  const link=liveLink(id),text=`Follow our crawl on Rooftop Roulette:\n${link}`;track("live_invite");
  const [mates,svg]=await Promise.all([matesList(),qrSVG(link)]);
  const n=Object.keys((liveDoc&&liveDoc.members)||{}).length;
  sheet(`<h3>Invite friends</h3><p class="note">${n?`${n} following. `:""}They follow every spin and the timer from their own phones. You keep the spin.</p>
    ${svg?`<div class="qrbox sm">${svg}</div><p class="note qrnote">Scan to follow</p>`:""}
    <div class="acts row2"><button class="btn" type="button" id="liSend">${I.share} Send link</button><button class="btn dark" type="button" id="liCopy">${I.link} Copy link</button></div>
    ${mates.length?`<div class="eyebrow hsec">Friends</div><div class="mates">${mates.map(m=>`<button type="button" class="mate" data-mu="${m.uid}"><span class="mav">${esc((m.n||"?")[0])}</span><span class="mn">${esc(m.n||"Friend")}</span><span class="mst">Invite</span></button>`).join("")}</div>`:""}`,()=>{

    $("liSend").onclick=()=>{if(NATIVE)PLG.Share.share({title:"Rooftop Roulette",text}).catch(()=>{});else if(navigator.share)navigator.share({text}).catch(()=>{});else{navigator.clipboard&&navigator.clipboard.writeText(link);toast("Link copied.",2000)}};
    $("liCopy").onclick=async()=>{try{await navigator.clipboard.writeText(link);toast("Link copied.",2000)}catch(e){toast("Couldn't copy the link.",2500)}};
    document.querySelectorAll("[data-mu]").forEach(b=>b.onclick=async()=>{const B=await cloud();
      try{await B.set(`users/${b.dataset.mu}/invites/${id}`,{from:myName(),fromUid:ME.uid,at:Date.now()});b.querySelector(".mst").textContent="Invited";b.disabled=true;track("live_invite_mate")}catch(e){toast("Couldn't send that one.",2500)}})})}
// QR code of the follow link: for when everyone's standing together. Always black on white so cameras read it.
const QRI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.2"/><path d="M14 14h2.5v2.5H14zM18.5 18.5h2M14 20.5h2.5M20.5 14v2.5"/></svg>';
let qrP=null;
const qrLib=()=>qrP||(qrP=new Promise((res,rej)=>{if(window.qrcode)return res(window.qrcode);const sc=document.createElement("script");sc.src=(window.RR_ROOT||"")+"vendor/qr/qrcode.js";sc.onload=()=>res(window.qrcode);sc.onerror=()=>{qrP=null;rej(new Error("qr didn't load"))};document.head.appendChild(sc)}));
async function qrSVG(link){try{const Q=await qrLib(),q=Q(0,"M");q.addData(link);q.make();return q.createSvgTag({cellSize:6,margin:3,scalable:true})}catch(e){console.warn(e);return ""}}
async function qrSheet(link,back){let svg="";
  try{const Q=await qrLib(),q=Q(0,"M");q.addData(link);q.make();svg=q.createSvgTag({cellSize:6,margin:3,scalable:true})}catch(e){console.warn(e);toast("Couldn't make the code. Send the link instead.",3000);return}
  track("live_qr");
  sheet(`<h3>Scan to follow</h3><p class="note">Open the phone camera and point it here.</p><div class="qrbox">${svg}</div>
    <div class="acts"><button class="btn dark" type="button" id="qrBack">Back</button></div>`,()=>{$("qrBack").onclick=()=>back?back():closeSheet()})}
function nameSheet(after,why){
  sheet(`<h3>What's your name?</h3><p class="note">${why==="follow"?"So friends know who's following.":"So friends know whose crawl it is."}</p><input class="cnin" id="nmIn" maxlength="24" autocomplete="given-name" placeholder="First name" value="${esc(S.myName||"")}">
    <div class="acts"><button class="btn" type="button" id="nmOk">Done</button>${why==="follow"?"":`<button class="btn dark" type="button" id="nmG">Sign in instead</button>`}</div>`,()=>{
    const ok=()=>{const v=$("nmIn").value.trim();if(!v)return;S.myName=v;save();closeSheet();after&&after()};
    $("nmOk").onclick=ok;$("nmIn").onkeydown=e=>{if(e.key==="Enter")ok()};if($("nmG"))$("nmG").onclick=()=>signInSheet("So friends see your name.","live");setTimeout(()=>$("nmIn").focus(),50)})}

// host: push the crawl when something happened, plus a "still here" every 2 minutes
async function liveSync(force){const g=G();if(!g||!g.live||!CLP||liveBusy||!isHost())return;
  const sig=liveSig(g),t=Date.now();if(!force&&sig===liveLastSig&&t-liveLastPut<BEAT_MS)return;if(!force&&sig!==liveLastSig&&t-liveLastPut<3000)return;
  liveBusy=true;try{const B=await cloud();const patch={beat:t,upd:t,off:now()-Date.now()};if(sig!==liveLastSig||force)patch.g=gameForCloud(g);if(g.ended)patch.ended=true;
    await B.set(`live/${g.live}`,patch,true);liveLastSig=sig;liveLastPut=t}catch(e){console.warn("live sync",e)}finally{liveBusy=false}}

// everyone in a live crawl watches its doc
async function liveAttach(){const id=(S.game&&S.game.live)||S.follow;if(!id)return;const B=await cloud();if(liveUnsub&&liveUnsub._id===id)return;if(liveUnsub)liveUnsub();
  liveUnsub=B.watch(`live/${id}`,d=>{liveDoc=d;onLive(id,d)});liveUnsub._id=id}
function liveDetach(){if(liveUnsub)liveUnsub();liveUnsub=null;liveDoc=null}
function onLive(id,d){
  if(!d){if(S.follow===id){S.follow=null;save();closeFollow();if(fvNote){fvNote="";natCall("CrawlNotify","clear").catch(()=>{})}toast("That crawl's not live any more.",3000)}return}
  const me=ME&&ME.uid,g=G();
  if(g&&g.live===id&&d.host!==me){   // the spin was handed over or taken: this phone becomes a follower
    if(fv&&fvPrev)closeFollow();g.handedOff=true;S.game=null;S.follow=id;save();stopWatch();closeSheet();toast(`${esc(d.hostName||"Someone else")} has the spin now.`,3500);go("home");openFollow();return}
  if(S.follow===id&&d.host===me&&!d.ended){takeSpin(d);return}   // handed to this phone
  if(S.follow===id){if(d.ended)followEnded(d);paintFollow();if(!fv){let gg={};try{gg=JSON.parse(d.g)}catch(e){}followNote(d,gg,Date.now()+(d.off||0))}}
  if(g&&g.live===id)paintMembers(d)}
function paintMembers(d){const n=Object.keys(d.members||{}).length,el=$("liveN");if(el)el.textContent=n?`${n} following`:"Live";paintPeople()}
// the people button on the crawl screen: a plus until someone follows, then how many are following
function PEOPLEI_(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="3.6"/><path d="M3.5 20c1-3.7 3.6-5.6 6.5-5.6s5.5 1.9 6.5 5.6"/></svg>'}
function paintPeople(){const b=$("pPeople"),g=G();if(!b)return;const on=cloudOn()&&g&&!g.ended&&!g.demo;b.hidden=!on;if(!on)return;
  const n=g.live&&liveDoc&&!liveDoc.ended?Object.keys(liveDoc.members||{}).length:0;
  b.innerHTML=PEOPLEI_()+`<i class="pbadge${n?" n":""}">${n||"+"}</i>`;{const t=$("tbar");if(t)b.style.top=(t.offsetTop+t.offsetHeight+12)+"px"}b.setAttribute("aria-label",n?`${n} following. Invite friends`:"Invite friends")}

// test mode: open the follow screen on your own crawl, exactly as it reaches friends' phones
async function previewFollow(){const g=G();if(!g||!g.started)return;try{await cloud();await startLive();await liveSync(true)}catch(e){console.warn(e)}closeSheet();openFollow(true);liveAttach()}
// follower
async function followLive(id){if(!cloudOn()){toast("Live crawls need the latest app.",3000);return}
  if(S.game&&S.game.live===id){go("play");return}
  if(S.game&&S.game.started&&!S.game.ended){toast("Finish your own crawl first.",3000);return}
  if(!myName()){nameSheet(()=>followLive(id),"follow");return}   // so the host sees who's following, not "Friend"
  S.follow=id;S.liveInv=null;save();track("live_follow");openFollow();
  const B=await cloud();
  try{await B.tx(`live/${id}`,d=>{if(!d||d.ended||d.host===ME.uid)return undefined;const m=d.members||{};if(m[ME.uid]){if(m[ME.uid].n===myName())return undefined}else{let gg={};try{gg=JSON.parse(d.g)}catch(e){}m[ME.uid]={n:myName()||"",j:Date.now(),b:(gg.visits||[]).length}}
    m[ME.uid].n=myName()||m[ME.uid].n||"";return Object.assign({},d,{members:m})})}catch(e){console.warn("join",e)}
  liveAttach()}
let fv=null,fvMap=null,fvLayer=null,fvT=null,fvPrev=false;
const CHEVD='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
function openFollow(prev){if(fv)return;fvPrev=!!prev;fvSig="";fvCardSig="";fv=document.createElement("div");fv.className="followv";document.body.appendChild(fv);requestAnimationFrame(()=>fv&&fv.classList.add("on"));
  fv.innerHTML=`<div class="fv-top"><span class="eyebrow" id="fvWho">Live crawl</span>${S.test?`<button type="button" class="fv-test" id="fvTest">TEST</button>`:""}<button type="button" class="fv-ic" id="fvMapB" aria-label="Map">${I.map}</button><button type="button" class="fv-ic" id="fvMin" aria-label="Minimise">${CHEVD}</button></div>
    <div class="fv-head"><div><div class="fv-clock" id="fvClock">--:--</div><div class="fv-sub" id="fvSub"></div></div><button type="button" class="fv-count" id="fvCount" hidden></button></div>
    <div class="fv-now" id="fvNow"></div><div class="fv-act" id="fvAct"></div>`;
  $("fvMin").onclick=()=>{const p=fvPrev;closeFollow();go(p?"play":"home")};
  $("fvMapB").onclick=followMap;$("fvCount").onclick=followBars;if($("fvTest"))$("fvTest").onclick=()=>$("testFab").onclick();
  // travel time to the bar from where you are: only if location's already allowed (no prompt just for following)
  if(!(S.test&&S.fake)&&!here)permState(false).then(st=>{if(st==="granted")getOnce().then(()=>{fvCardSig="";paintFollow()}).catch(()=>{})}).catch(()=>{});
  clearInterval(fvT);fvT=setInterval(paintFollow,1000);liveAttach();paintFollow()}
const fvGame=d=>{try{return JSON.parse(d.g)}catch(e){return {}}};
// the crawl's map, full screen, Google like the person spinning has: zone, bars so far (numbered), the next bar, you
async function followMap(){const d=liveDoc;if(!d)return;const g=fvGame(d),vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),tgt=g.target&&byId(g.target);
  const ov=document.createElement("div");ov.className="mapfull";
  ov.innerHTML=`<div id="fvBigMap"></div><button class="shv-x mf-x" type="button" aria-label="Close">${I.x}</button><div class="mf-card"><span class="mf-ring" aria-hidden="true"></span><div class="t"><b>${esc(fvPrev?"Your crawl":(d.hostName||"Their")+"'s crawl")}</b><small>${tgt?"Heading to "+esc(tgt.name)+" · ":""}${plural(vs.filter(v=>v.counted!==false).length,"bar")} so far</small></div></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));let m=null;
  const close=()=>{ov.classList.remove("on");setTimeout(()=>{try{m&&m.remove()}catch(e){}ov.remove()},220)};ov.querySelector(".mf-x").onclick=close;
  m=await makeMap("fvBigMap",{greedy:true});if(!m)return;
  if(g.center&&g.radius&&g.mode!=="cruise")m.circle(g.center,g.radius);
  const pts=[];vs.forEach((v,i)=>{const b=byId(v.id);if(!b)return;pts.push(b);m.num(b,i+1,v.counted===false,b.name,()=>barSheet(b))});
  if(tgt){pts.push(tgt);m.pin(tgt,"big",()=>barSheet(tgt))}setMe(m);if(you())pts.push(you());
  if(pts.length)setTimeout(()=>m.fitPts(pts,16,{top:80,left:30,right:30,bottom:110}),80);else if(g.center&&g.radius)m.fitZone(g.center,g.radius,[],60)}
// the bars so far, behind the counter like the person spinning has it
function followBars(){const d=liveDoc;if(!d)return;const g=fvGame(d),vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),t=Date.now()+(d.off||0);
  sheet(`<h3>Bars so far</h3><div class="fv-list">${vs.map((v,i)=>{const b=byId(v.id);return `<div class="fv-row${v.counted===false?" x":""}"><i>${i+1}</i><span>${esc(b.name)}</span><small>${v.leftAt?hmm(v.leftAt-v.arrivedAt):"There now"}</small></div>`}).join("")}</div>`)}
// clock and line under it, shared by the follow screen and the minimised bar
function fvClockTxt(d,g,t){const cr=g.mode==="cruise",fz=g.frz&&t<g.frz.until,left=fz?g.endsAt-g.frz.until:g.endsAt-t,vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),nb=vs.filter(v=>v.counted!==false).length;
  return {clock:d.ended?"Done":!g.started?"Not started":cr?hmm(t-g.startedAt):mmss(left),sub:d.ended?plural(nb,"bar"):cr?"No timer":fz&&g.frz.start?"Clock starts at the first bar":`${plural(nb,"bar")} so far`,nb}}
// Followers get the same ongoing notification as the person spinning (Android): where the crawl's at and the time left
let fvNote="",fvNoteAt=0;
function followNote(d,g,t){if(!NATIVE||fvPrev)return;
  if(!d||d.ended||!g.started){if(fvNote){fvNote="";natCall("CrawlNotify","clear").catch(()=>{})}return}
  noteSetup();notifEnsure("f"+S.follow,true);
  const cr=g.mode==="cruise",vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),at=vs.find(v=>!v.leftAt),tgt=g.target&&byId(g.target),who=d.hostName?d.hostName+"'s crawl":"Live crawl";
  const o={follower:true,title:at?`${who} · at ${byId(at.id).name}`:tgt?`${who} · heading to ${tgt.name}`:`${who} · spinning next`,text:cr?"R&R":plural(vs.filter(v=>v.counted!==false).length,"bar")+" so far"};
  const fz=g.frz&&t<g.frz.until;
  if(!cr&&fz&&g.frz.start)o.text="Clock starts at the first bar";
  else if(!cr&&!fz){o.endsAt=Math.round(g.endsAt-(d.off||0));o.startAt=Math.round(g.startedAt-(d.off||0));o.max=1000;o.progress=Math.round(1000*Math.max(0,g.endsAt-t)/Math.max(1,g.endsAt-g.startedAt))}
  else if(cr&&at)o.since=Math.round(at.arrivedAt);
  const key=JSON.stringify([o.title,o.text,o.endsAt,o.since]);if(key===fvNote&&Date.now()-fvNoteAt<60000)return;
  fvNote=key;fvNoteAt=Date.now();natCall("CrawlNotify","update",o).catch(()=>{})}
function closeFollow(){clearInterval(fvT);fvPrev=false;if(fv){const el=fv;el.classList.remove("on");setTimeout(()=>el.remove(),220)}fv=null;fvMap=null;if(S.follow&&!(liveDoc&&!liveDoc.ended)){S.follow=null;save();liveDetach()}}
function leaveFollow(){S.follow=null;save();liveDetach();closeFollow();if(fvNote){fvNote="";natCall("CrawlNotify","clear").catch(()=>{})}}
let fvSig="",fvCardSig="";
// The bar card, the same one the person spinning sees: photo, name, wildcard, time there or directions
function fvCard(d,g,t){const el=$("fvNow");
  if(d.ended||!g.started){el.innerHTML="";fvCardSig="";return}
  const vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),at=vs.find(v=>!v.leftAt),v=at?byId(at.id):g.target?byId(g.target):null;
  const wd=g.wild&&v&&g.wild.id===v.id&&!g.wild.locked&&g.wild.text?g.wild.text:"";
  const yy=fvPrev?null:you(),sig=JSON.stringify([at?"at:"+at.id:v?v.id:null,wd,v&&!!phMem[v.id],yy&&Math.round(yy.lat*2000),yy&&Math.round(yy.lng*2000)]),prev=fvCardSig;
  if(sig===fvCardSig){const dw=$("fvDwell");if(dw&&at)dw.textContent=mmss(t-at.arrivedAt);return}
  fvCardSig=sig;
  const landed=prev&&JSON.parse(prev)[0]!==JSON.parse(sig)[0];if(landed&&v)buzz(at?[40,40,40]:30);
  if(!v){el.innerHTML=`<div class="bar fv-spin${landed?" anim":""}"><span class="eyebrow">Next bar</span><h2>Spinning…</h2></div>`;return}
  if(phMem[v.id]===undefined)barPhoto(v).then(ph=>{if(ph&&fv){fvCardSig="";paintFollow()}});
  const cp0=cardPhoto(v),cp=cp0.cls?cp0:{cls:" photo blank",style:"",cr:""},o=openState(v,t),nw=isNew(v.id),an=landed?" anim":"",y=fvPrev?null:you();
  const wild=wd?`<div class="wild${at?" dark":""}">${I.sparkle}<span><b>Wildcard</b>${esc(wd)}</span></div>`:"";
  el.innerHTML=at
    ?`<div class="bar at${cp.cls}${an}"${cp.style}>${cp.cr}<span class="eyebrow">At the bar${nw?'<span class="newpill">New to you</span>':""}</span><h2>${esc(v.name)}</h2>${v.fact?`<div class="wi">${esc(v.fact)}</div>`:""}
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><div class="small">Time here</div><div class="dwell" id="fvDwell">${mmss(t-at.arrivedAt)}</div></div>
      <div class="small" style="text-align:right">${o.open?"Closes "+clock12(o.closeAt):""}</div></div>${wild}</div>`
    :`<div class="bar tgt${cp.cls}${an}"${cp.style}>${cp.cr}<span class="eyebrow">Next bar${nw?`<span class="newpill"${cp0.cls?"":' style="background:rgba(36,24,3,.15);color:var(--amber-ink)"'}>New to you</span>`:""}</span><h2>${esc(v.name)}</h2>${v.vibe?`<div class="vibe">${esc(v.vibe)}</div>`:""}
      <div class="facts">${y?`<span>${travelHTML(y,v)}</span><span>${I.pin} ${mOrKm(dist(y,v))}</span>`:""}${o.open?`<span>${I.clock} til ${clock12(o.closeAt)}</span>`:""}</div>${wild}
      <a class="btn dir" href="${esc(dirURL(v))}" target="_blank" rel="noopener">${I.nav} Directions</a></div>`}
function paintFollow(){if(!fv)return;const d=liveDoc;if(!d){$("fvSub").textContent="Connecting…";return}
  let g={};try{g=JSON.parse(d.g)}catch(e){}const vs=(g.visits||[]).filter(v=>v.arrivedAt!=null),t=Date.now()+(d.off||0),cr=g.mode==="cruise";   // the host's game clock
  $("fvWho").textContent=fvPrev?"What friends see":`${d.hostName?d.hostName+"'s":"A"} crawl · live`;
  followNote(d,g,t);
  // the same clock as the host's phone: held at the full length until the first bar (and through a time freeze), then counting down
  const c=fvClockTxt(d,g,t);$("fvClock").textContent=c.clock;$("fvSub").textContent=c.sub;
  fvCard(d,g,t);
  const fc=$("fvCount"),fch=vs.length?`${I.glass.replace('<svg','<svg width="18" height="18"')} <b>${c.nb}</b><i class="cv">${I.chev||"›"}</i>`:"";if(fc._h!==fch){fc._h=fch;fc.innerHTML=fch;fc.hidden=!vs.length}
  const stale=!d.ended&&g.started&&t-(d.beat||0)>STALE_MS,act=$("fvAct");
  const want=fvPrev?"prev":d.ended?"end":stale?"stale":"none";if(act.dataset.k!==want){act.dataset.k=want;
    act.innerHTML=want==="prev"?`<button class="btn dark" type="button" id="fvBack">Back to your crawl</button>`:want==="stale"?`<p>Can't reach ${esc(d.hostName||"the spinner")}'s phone.</p><button class="btn" type="button" id="fvTake">Take over the spin</button>`
      :want==="end"?`<button class="btn" type="button" id="fvDone">See the crawl</button>`:`<button class="txtbtn" type="button" id="fvLeave">Stop following</button>`;
    if($("fvBack"))$("fvBack").onclick=()=>{closeFollow();go("play")};if($("fvTake"))$("fvTake").onclick=takeOver;if($("fvLeave"))$("fvLeave").onclick=()=>{leaveFollow();go("home")};
    if($("fvDone"))$("fvDone").onclick=()=>{const id=S.follow;leaveFollow();const r=H.find(x=>x.liveId===id);if(r){S.lastEnd=r.id;S.endBack="home";save();go("end")}else go("home")}}}
async function takeOver(){const id=S.follow,B=await cloud();let ok=false;
  try{ok=await B.tx(`live/${id}`,d=>{if(!d||d.ended||Date.now()-(d.beat||0)<=STALE_MS)return undefined;const m=Object.assign({},d.members||{}),me=m[ME.uid];delete m[ME.uid];let gg={};try{gg=JSON.parse(d.g)}catch(e){}
    m[d.host]={n:d.hostName||"",j:(me&&me.j)||Date.now(),b:0,was:1};
    return Object.assign({},d,{host:ME.uid,hostName:myName(),beat:Date.now(),prevHost:d.host,members:m})})}catch(e){console.warn(e)}
  if(!ok){toast("Someone else got there first.",2500);return}track("live_takeover")}
function takeSpin(d){let g;try{g=JSON.parse(d.g)}catch(e){return}
  const id=S.follow;closeFollow();S.follow=null;g.live=id;g.id=g.id||("g"+Date.now());g.test=!!S.test;
  S.game=g;save();liveLastSig=liveSig(g);startWatch();buzz(30);go("play");toast("You've got the spin.",2500);liveSync(true)}
// host hands the spin to a follower
function giveSpinSheet(){const d=liveDoc,ms=Object.entries((d&&d.members)||{});
  sheet(`<h3>Give the spin to…</h3><p class="note">They spin from here and their phone tracks the crawl. You keep following.</p><div class="mates">${ms.length?ms.map(([u,m])=>`<button type="button" class="mate" data-gs="${u}"><span class="mav">${esc((m.n||"?")[0])}</span><span class="mn">${esc(m.n||"Friend")}</span><span class="mst">Give</span></button>`).join(""):`<p class="note">Nobody's following yet. Invite someone first.</p>`}</div>`,()=>{
    document.querySelectorAll("[data-gs]").forEach(b=>b.onclick=async()=>{const u=b.dataset.gs,m=d.members[u],g=G();if(!g)return;await liveSync(true);const B=await cloud();
      const members=Object.assign({},d.members);delete members[u];members[ME.uid]={n:myName(),j:g.startedAt||Date.now(),b:0,was:1};
      try{await B.set(`live/${g.live}`,{host:u,hostName:m.n||"",members,beat:Date.now()},true);closeSheet();track("live_handover")}catch(e){toast("Couldn't hand it over. Check your signal.",3000)}})})}
// the end: the host's final crawl goes to the doc; followers copy it to their tab from the bar they joined
async function liveEnded(rec){if(!rec.live||!CLP)return;rec.liveId=rec.live;delete rec.live;
  try{const B=await cloud();const j=JSON.stringify(Object.assign(JSON.parse(recForCloud(rec)),{trail:[],startPos:null}));await B.set(`live/${rec.liveId}`,{ended:true,rec:j,beat:Date.now(),g:gameForCloud(Object.assign({},rec,{ended:true}))},true);saveH();
    matesFrom(liveDoc)}catch(e){console.warn("live end",e)}
  liveDetach()}
// after the crawl: the host's name and bar of the day reach everyone who followed (only the host sets them)
async function liveMeta(r){if(!r||!r.liveId||r.followed||!cloudOn()||!signedIn())return;
  try{const B=await cloud();await B.set(`live/${r.liveId}`,{title:r.title||"",bod:r.barOfDay||""},true)}catch(e){console.warn("live meta",e)}}
// followers pick those up when the app opens or comes back, for crawls from the last week
let metaAt=0;
async function followMetaPull(){if(!cloudOn()||Date.now()-metaAt<5*60000)return;
  const L=H.filter(r=>r.followed&&r.liveId&&now()-(r.endedAt||0)<7*864e5);if(!L.length)return;metaAt=Date.now();
  let ch=false;try{const B=await cloud();for(const r of L){const d=await B.get(`live/${r.liveId}`).catch(()=>null);if(!d)continue;
    if(d.title!==undefined&&(d.title||"")!==(r.title||"")){if(d.title)r.title=d.title;else delete r.title;ch=true}
    if(d.bod!==undefined){const b=d.bod&&r.visits.some(v=>v.id===d.bod&&v.counted===true)?d.bod:"";if(b!==(r.barOfDay||"")){if(b)r.barOfDay=b;else delete r.barOfDay;ch=true}}}}catch(e){console.warn("meta pull",e)}
  if(ch){saveH();if(S.route==="end"||S.route==="hist")render()}}
document.addEventListener("visibilitychange",()=>{if(!document.hidden)followMetaPull()});
function followEnded(d){if(!d.rec)return;const id=S.follow;if(H.some(r=>r.liveId===id))return;
  let r;try{r=JSON.parse(d.rec)}catch(e){return}
  // fill in anything an older host version left out, so the crawl card and tab can always draw it
  r.visits=r.visits||[];r.moves=r.moves||[];r.excluded=r.excluded||[];if(!(r.areas&&r.areas.length))r.areas=[r.center?nearestSuburb(r.center):""];
  const m=(d.members||{})[ME.uid],b=m?m.b||0:0;
  r.id="f"+id;r.liveId=id;r.followed=d.hostName||"";if(d.title)r.title=d.title;if(b>0){r.visits=r.visits.slice(b);if(r.visits[0])r.startedAt=Math.max(r.startedAt,m.j||r.startedAt)}
  delete r.newIds;r.bodDone=true;r.test=!!S.test;pushH(r);syncH();matesFrom(d);track("live_landed",{bars:r.visits.length});afterNote(r);
  // followers get the same ending as the host: straight onto the summary, with the stats racking up. No sign-in ask here
  // (they're out, a few drinks in); the day-after card and My Tab ask instead.
  if(fvPrev)return;leaveFollow();closeSheet();S.lastEnd=r.id;S.rackEnd=r.id;SHARED=null;
  if(!["home","bars","hist"].includes(S.route))go("home");S.route="play";go("end");   // as if from the crawl screen, so "Play again" shows like it does for the host
  ding();buzz([100,60,100,60,200]);confetti()}
async function matesFrom(d){if(!d||!signedIn())return;const B=await cloud(),me=ME.uid,add={};
  const all=Object.assign({},d.members||{});if(d.host)all[d.host]={n:d.hostName};Object.entries(all).forEach(([u,m])=>{if(u!==me)add[u]={n:m.n||"",t:Date.now()}});
  if(Object.keys(add).length)try{const cur=(await B.get(`users/${me}`))||{};await B.set(`users/${me}`,{mates:Object.assign({},cur.mates||{},add)},true)}catch(e){console.warn(e)}}
async function matesList(all){try{const B=await cloud(),u=await B.get(`users/${ME.uid}`);return Object.entries((u&&u.mates)||{}).map(([uid,m])=>({uid,n:m.n,t:m.t})).sort((a,b)=>b.t-a.t).slice(0,all?200:12)}catch(e){return []}}
// invites from mates (while the app's open)
async function watchInvites(){if(!signedIn()||inviteUnsub)return;const B=await cloud(),seen=new Set(JSON.parse(localStorage.getItem("rr-inv-seen")||"[]"));
  inviteUnsub=B.watchList(`users/${ME.uid}/invites`,L=>{L.filter(x=>!seen.has(x._id)&&Date.now()-x.at<6*3600000).forEach(x=>{seen.add(x._id);localStorage.setItem("rr-inv-seen",JSON.stringify([...seen].slice(-50)));
    S.liveInv={id:x._id,from:x.from||"",at:x.at};save();homeLive();inviteCard();B.del(`users/${ME.uid}/invites/${x._id}`).catch(()=>{})})})}
// the invite as a card you answer (like an incoming request). Not over another open panel or your own crawl: the home banner keeps it.
function inviteCard(){const v=S.liveInv;if(!v||$("sheet").open||(S.game&&S.game.started&&!S.game.ended)||S.follow)return;
  const nm=String(v.from||"").trim(),first=nm.split(" ")[0];track("invite_card");
  sheet(`<div class="invcard"><span class="mav">${esc((first||"?")[0].toUpperCase())}</span>
    <h3>${first?esc(first):"A friend"} invited you to a live crawl</h3><p class="note">Follow every spin and the timer from your phone.</p></div>
    <div class="acts"><button class="btn" type="button" id="icJoin">Join</button><button class="btn dark" type="button" id="icNo">Not now</button></div>`,()=>{
    $("icJoin").onclick=()=>{const id=v.id;S.liveInv=null;save();closeSheet();homeLive();followLive(id)};
    $("icNo").onclick=()=>{closeSheet();homeLive()}})}
// home: a friend's crawl you've been invited to, while it's live (invites last 6 hours)
function homeLive(){const b=$("homeLive");if(!b)return;const v=S.liveInv,ok=v&&Date.now()-v.at<6*3600000&&!S.game&&!S.follow&&cloudOn();
  if(!ok){if(v&&Date.now()-v.at>=6*3600000){S.liveInv=null;save()}b.hidden=true;return}
  const first=String(v.from||"").trim().split(" ")[0];
  b.innerHTML=`${PEOPLEI_()}<span><b>${first?esc(first):"A friend"}</b> invited you</span><span class="hjoin">Join</span><button class="x" type="button" aria-label="Not now">×</button>`;b.hidden=false;
  b.onclick=e=>{if(e.target.closest(".x")){e.stopPropagation();S.liveInv=null;save();b.hidden=true;if(typeof fitHome==="function")requestAnimationFrame(fitHome);return}
    const id=v.id;S.liveInv=null;save();b.hidden=true;track("home_live_join");followLive(id)};
  if(typeof fitHome==="function")requestAnimationFrame(fitHome)}
// setup: join a friend's crawl by scanning their QR code in the app (like unlocking a scooter)
let scanSt=null,jqP=null;
const jsqrLib=()=>jqP||(jqP=new Promise((res,rej)=>{if(window.jsQR)return res(window.jsQR);const sc=document.createElement("script");sc.src=(window.RR_ROOT||"")+"vendor/qr/jsQR.js";sc.onload=()=>res(window.jsQR);sc.onerror=()=>{jqP=null;rej(new Error("jsqr didn't load"))};document.head.appendChild(sc)}));
async function joinScan(){track("join_scan_open");
  const ov=document.createElement("div");ov.className="scanv";
  ov.innerHTML=`<video playsinline muted autoplay poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></video><div class="scan-frame" aria-hidden="true"></div>
    <div class="scan-top"><b>Scan a friend's QR code</b><button type="button" class="shv-x" id="scX" aria-label="Close">${I.x}</button></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add("on"));
  const msg=t=>{toast(esc(t),2500);const tt=$("toast");if(tt){tt.style.zIndex="2001";if(tt.parentNode!==document.body)document.body.appendChild(tt)}};
  const close=()=>{if(scanSt){scanSt.getTracks().forEach(t=>t.stop());scanSt=null}ov.remove()};
  ov.querySelector("#scX").onclick=close;
  try{scanSt=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false})}catch(e){msg("Allow camera access to scan");return}
  if(!ov.isConnected){close();return}
  const v=ov.querySelector("video");v.srcObject=scanSt;v.play().catch(()=>{});
  let det=null;try{if("BarcodeDetector" in window&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code"))det=new BarcodeDetector({formats:["qr_code"]})}catch(e){}
  let J=null;if(!det){try{J=await jsqrLib()}catch(e){msg("Couldn't start the scanner. Check your signal.");return}}
  const cv=document.createElement("canvas"),cx=cv.getContext("2d",{willReadFrequently:true});
  let bad="";const found=t=>{const c=liveCode(t);if(!c){if(t!==bad){bad=t;msg("That's not a Rooftop Roulette code")}return false}
    close();buzz(25);track("join_scanned");S.wiz=null;save();cloud().then(()=>followLive(c)).catch(()=>toast("No connection. Check your signal.",3000));return true};
  const tick=async()=>{if(!scanSt||!ov.isConnected)return;
    try{if(v.readyState>=2&&v.videoWidth){if(det){const r=await det.detect(v);if(r&&r[0]&&found(r[0].rawValue))return}
      else{const w=Math.min(640,v.videoWidth),h=Math.round(v.videoHeight*w/v.videoWidth);cv.width=w;cv.height=h;cx.drawImage(v,0,0,w,h);const r=J(cx.getImageData(0,0,w,h).data,w,h,{inversionAttempts:"dontInvert"});if(r&&found(r.data))return}}}catch(e){}
    setTimeout(tick,200)};
  tick()}

// low battery: offer to hand the spin over before the phone dies
let batAsked=false;
function batteryWatch(){if(!navigator.getBattery)return;navigator.getBattery().then(b=>{const chk=()=>{const g=G();
  if(!batAsked&&g&&g.live&&isHost()&&!b.charging&&b.level<=0.1&&Object.keys((liveDoc&&liveDoc.members)||{}).length){batAsked=true;
    sheet(`<h3>Battery's low</h3><p class="note">Hand the spin to someone before your phone dies?</p><div class="acts"><button class="btn" type="button" id="bGive">Give the spin</button><button class="btn dark" type="button" id="bNo">Keep it</button></div>`,()=>{$("bGive").onclick=giveSpinSheet;$("bNo").onclick=closeSheet})}};
  b.addEventListener("levelchange",chk);chk()}).catch(()=>{})}

// menu rows during a crawl
function liveMenuRows(g){if(!cloudOn()||g.demo)return "";const n=Object.keys((liveDoc&&liveDoc.members)||{}).length;
  return `<button type="button" id="mInvite">${PEOPLEI_()}<span>Invite friends<small>${n?`${n} following live`:"They follow every spin and the timer"}</small></span></button>`+(g.live&&n?`<button type="button" id="mGive">${I.redo}<span>Give the spin to…<small>They spin, you follow</small></span></button>`:"")}
function liveMenuBind(){if($("mInvite"))$("mInvite").onclick=()=>liveInvite();if($("mGive"))$("mGive").onclick=giveSpinSheet}

// Settings rows
function accountRows(){if(!(FB_CFG||FAKE_CLOUD))return [];
  if(signedIn())return [`<button class="strow stacct" type="button" id="stAcct">${avatarHTML()}<span class="t"><b>${esc(ME.name||"Your account")}</b><small>${esc(ME.email||"Signed in")}</small></span><i class="chev">›</i></button>`];
  return [`<button class="strow" type="button" id="stIn"><span class="t"><b>Sign in</b><small>Save your tab and share crawls live</small></span><i class="chev">›</i></button>`]}
function accountBind(){if($("stIn"))$("stIn").onclick=()=>signInSheet(null,"settings");if($("stAcct"))$("stAcct").onclick=accountPage}

// scorecard nudge, once, after your first real crawl
function endSignInNudge(r){if(!cloudOn()||signedIn()||S.siNudged||r.demo||r.shared||!H.length)return "";
  return `<button class="sinudge" type="button" id="siNudge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg><span><b>Save your tab</b><small>Keep your crawls, photos and saved lists across devices</small></span></button>`}
// the day after, opened from the recap notification: one quiet line under the card, once per crawl, signed out only
const SAVEI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg>';
function recapSignIn(r){if(!cloudOn()||signedIn()||r.demo||r.recapAsked)return "";
  return `<button class="sinudge" type="button" id="rcIn">${SAVEI}<span><b>Save your crawls</b><small>Keep your crawls and saved lists across devices</small></span></button>`}
// top of My Tab, signed out, once there's more than one crawl to lose
function tabSignIn(){if(!cloudOn()||signedIn()||H.length<2)return "";
  return `<button class="sinudge tabsi" type="button" id="tabIn">${SAVEI}<span><b>Save your crawls</b><small>Keep your crawls and saved lists across devices</small></span></button>`}
function endSignInBind(){const b=$("siNudge");if(b)b.onclick=()=>{S.siNudged=true;save();signInSheet("Keep your crawls, photos and saved lists across devices.","scorecard","Save your tab")}}

// start up
function cloudBoot(){if(!(FB_CFG||FAKE_CLOUD))return;
  const lc=liveCode(location.hash)||liveCode(location.search);
  if(lc){history.replaceState(null,"",location.pathname+location.search.replace(/[?&]live=[A-Za-z0-9]+/,"").replace(/^&/,"?"))}
  if(lc||S.follow||(S.game&&S.game.live)||localStorage.getItem("rr-synced")||ME){cloud().then(()=>{if(lc)followLive(lc);else if(S.follow)openFollow()}).catch(()=>{})}
  else setTimeout(()=>cloud().catch(()=>{}),4000);
  if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App&&CAPX.Plugins.App.getLaunchUrl)CAPX.Plugins.App.getLaunchUrl().then(o=>{const c=liveCode(o&&o.url);if(c)cloud().then(()=>followLive(c))}).catch(()=>{});
  setInterval(()=>liveSync(false),5000);batteryWatch();paintPeople();homeLive();setTimeout(followMetaPull,3000)}
if(NATIVE&&CAPX.Plugins&&CAPX.Plugins.App)try{CAPX.Plugins.App.addListener("appUrlOpen",e=>{const c=liveCode(e&&e.url);if(c)cloud().then(()=>followLive(c))})}catch(e){}
addEventListener("hashchange",()=>{const c=liveCode(location.hash);if(c){history.replaceState(null,"",location.pathname+location.search);cloud().then(()=>followLive(c))}});
cloudBoot();
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("#acctChip"))accountSheet()});
