// Small screens and big text: no sideways scrolling, and the main button on each screen stays in view.
// node bigtext.js $(realpath ../../index.html) [scale]
const {chromium}=require('playwright');
const scale=+(process.argv[3]||1);
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:320,height:693},deviceScaleFactor:2,isMobile:true,hasTouch:true,geolocation:{latitude:-33.8722,longitude:151.2251},permissions:['geolocation']});
const p=await ctx.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.argv[2]+'?test');await p.waitForTimeout(500);
const big=async()=>{if(scale===1)return;await p.evaluate(s=>{document.querySelectorAll('body *').forEach(el=>{if(el.dataset.bt)return;const f=parseFloat(getComputedStyle(el).fontSize);if(f){el.dataset.bt=1;el.style.fontSize=(f*s)+'px'}})},scale)};
const check=async(name,sel)=>{await big();await p.waitForTimeout(400);const r=await p.evaluate(sel=>{const d=document.documentElement,over=Math.max(d.scrollWidth,document.body.scrollWidth)-innerWidth;const wide=[...document.querySelectorAll('body *')].filter(el=>{const r=el.getBoundingClientRect();return el.offsetParent&&r.width>0&&r.right>innerWidth+1&&!el.closest('.leaflet-container,#crawlMap,#rrMap,#wMap,#barsMap,.mapfull')}).slice(0,4).map(el=>(el.id?'#'+el.id:el.className&&String(el.className).split(' ')[0]||el.tagName)+':'+Math.round(el.getBoundingClientRect().right));
  const c=sel&&document.querySelector(sel);const cr=c&&c.getBoundingClientRect();return {sideways:over,wide,cta:c?(cr.bottom<=innerHeight+1&&cr.top>=0?'in view':'OFF SCREEN '+Math.round(cr.top)+'-'+Math.round(cr.bottom)):'n/a'}},sel);
  console.log(name.padEnd(14),JSON.stringify(r));await p.screenshot({path:`out/bt-${name}-${scale}.png`})};
await p.evaluate(()=>{const s=sydAt(now());let d=19*60-s.min;if(d<0)d+=1440;S.ff=d*60000;S.onboarded=true;S.seenHow={rush:1};save();go('home')});await p.waitForTimeout(600);
await check('home','#newGame');
await p.click('#newGame');await p.waitForTimeout(500);await check('setup1','#wNext');
await p.click('#wNext');await p.waitForTimeout(2500);await check('setup2','#wNext');
await p.click('#wNext');await p.waitForTimeout(1500);await check('ready','#wStart');
await p.evaluate(()=>{S.wiz=null;startDemo()});await p.waitForTimeout(1000);await check('play-start','#spinBtn,#reelBox,.reel');
await p.evaluate(()=>{const g=G();g.started=true;g.startedAt=now();g.endsAt=now()+36e5;const v=basePool()[0];setTarget(v,{lat:v.lat+.01,lng:v.lng});save();renderPlay()});await p.waitForTimeout(800);await check('play-enroute','#dWalk');
await p.click('#dWalk');await p.waitForTimeout(2500);await check('play-atbar','#spinBtn');
await p.evaluate(()=>go('bars'));await p.waitForTimeout(800);await check('rooftops',null);
await p.evaluate(()=>go('hist'));await p.waitForTimeout(800);await check('mytab',null);
console.log('ERRORS',e);await b.close()})();
