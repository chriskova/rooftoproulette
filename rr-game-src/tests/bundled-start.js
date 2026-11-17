// Store-build check: open app/www the way the installed app does and make sure the game actually starts.
// The server copies Capacitor's local routing: any address without a file extension gets the root index.html.
// Fails if the start page loops, the game screen never renders, or the page throws.
// Usage: node bundled-start.js <path to app/www>
const {chromium}=require('playwright'),http=require('http'),fs=require('fs'),path=require('path');
const WWW=path.resolve(process.argv[2]||'app/www');
const TYPES={'.html':'text/html','.js':'text/javascript','.json':'application/json','.png':'image/png','.css':'text/css','.woff2':'font/woff2','.webmanifest':'application/manifest+json'};
const srv=http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);const seg=p.split('/').pop();
  if(p==='/'||!seg.includes('.'))p='/index.html';const f=path.join(WWW,p);
  if(!fs.existsSync(f)){r.writeHead(404);r.end();return}r.writeHead(200,{'Content-Type':TYPES[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)});
srv.listen(8765,async()=>{let ok=false;const b=await chromium.launch();
  try{const pg=await b.newPage({viewport:{width:390,height:844}});const errs=[];let navs=0;
    pg.on('pageerror',e=>errs.push(e.message));pg.on('framenavigated',f=>{if(f===pg.mainFrame())navs++});
    await pg.route(u=>!u.href.startsWith('http://localhost'),rt=>rt.abort());   // no network needed to start
    await pg.addInitScript(()=>{window.Capacitor={isNativePlatform:()=>true,getPlatform:()=>'android',Plugins:{},addListener(){},nativePromise:()=>Promise.reject(new Error('stub'))}});
    await pg.goto('http://localhost:8765/');await pg.waitForTimeout(4000);
    const st=await pg.evaluate(()=>({url:location.pathname,bundled:typeof BUNDLED!=='undefined'&&BUNDLED,screen:!!document.querySelector('#v-intro:not([hidden]),#v-home:not([hidden])')}));
    console.log('start page navigations:',navs,'| landed on',st.url,'| bundled:',st.bundled,'| game screen:',st.screen);
    if(errs.length)console.log('page errors:',errs.join(' | '));
    ok=navs<=3&&st.url==='/play/index.html'&&st.bundled&&st.screen&&!errs.length;
  }catch(e){console.log('check failed:',e.message)}
  await b.close();srv.close();
  if(!ok){console.log('::error::The bundled app does not start. Not publishing this build.');process.exit(1)}
  console.log('Bundled app starts and shows the game.')});
