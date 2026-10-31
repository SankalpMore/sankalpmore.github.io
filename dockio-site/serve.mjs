import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import './build.mjs';
import {handleEnquiry} from './enquiry-worker.mjs';
import {PreviewBucket} from './enquiry-preview.mjs';
const previewEnv={BUCKET:new PreviewBucket(path.resolve('.sites-runtime/enquiries')),INBOX_OWNER_EMAIL:'preview-only@example.invalid',PREVIEW_MODE:true};

const root = path.dirname(fileURLToPath(import.meta.url));
const outputArg = process.argv.indexOf('--output');
const directory = outputArg === -1 ? path.join(root, 'dist') : path.resolve(process.argv[outputArg + 1]);
const portArg = process.argv.indexOf('--port');
const hostArg = process.argv.indexOf('--host');
const port = Number(portArg === -1 ? process.env.PORT || 5173 : process.argv[portArg + 1]);
const host = hostArg === -1 ? '127.0.0.1' : process.argv[hostArg + 1];
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.pdf':'application/pdf'};
http.createServer(async (request, response) => {
  try {
    if(request.url.startsWith('/api/enquiries')||request.url.startsWith('/admin/enquiries')){
      const headers=new Headers();for(const[k,v]of Object.entries(request.headers))if(!k.startsWith('oai-')&&v)headers.set(k,String(v));headers.set('CF-Connecting-IP','127.0.0.1');
      const req=new Request('http://'+request.headers.host+request.url,{method:request.method,headers,...(['GET','HEAD'].includes(request.method)?{}:{body:request,duplex:'half'})});
      const result=await handleEnquiry(req,previewEnv);response.writeHead(result.status,Object.fromEntries(result.headers));response.end(Buffer.from(await result.arrayBuffer()));return;
    }
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = path.resolve(directory, '.' + pathname);
    if (file !== directory && !file.startsWith(directory + path.sep)) {response.writeHead(403);response.end();return;}
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      if (!pathname.endsWith('/')) {response.writeHead(301, {Location:pathname + '/'});response.end();return;}
      file = path.join(file, 'index.html');
    }
    let status = 200;
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {file = path.join(directory, '404.html');status = 404;}
    response.writeHead(status, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store'});
    if (request.method === 'HEAD') response.end();
    else fs.createReadStream(file).pipe(response);
  } catch {response.writeHead(400);response.end('Bad request');}
}).listen(port, host, () => console.log(`Local: http://${host}:${port}/`));
