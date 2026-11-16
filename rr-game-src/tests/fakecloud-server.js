// A stand-in for the cloud in tests: node fakecloud-server.js [port]. Docs live in memory, keyed by path.
const http=require('http'),D={},port=+process.argv[2]||8787;
http.createServer((q,s)=>{const u=new URL(q.url,'http://x'),p=u.searchParams.get('p'),m=u.pathname.slice(1);let b='';
  q.on('data',c=>b+=c);q.on('end',()=>{s.setHeader('Access-Control-Allow-Origin','*');s.setHeader('Content-Type','application/json');let out=null;
    if(m==='get')out=D[p]??null;else if(m==='set'){D[p]=JSON.parse(b);out=true}else if(m==='merge'){D[p]=Object.assign(D[p]||{},JSON.parse(b));out=true}
    else if(m==='del'){delete D[p];out=true}else if(m==='list')out=Object.keys(D).filter(k=>k.startsWith(p+'/')&&!k.slice(p.length+1).includes('/')).map(k=>Object.assign({_id:k.split('/').pop()},D[k]));
    else if(m==='dump')out=D;s.end(JSON.stringify(out))})}).listen(port,()=>console.log('fakecloud on',port));
