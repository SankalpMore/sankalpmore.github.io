import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import './build.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const outputArg = process.argv.indexOf('--output');
const directory = outputArg === -1 ? path.join(root, 'dist') : path.resolve(process.argv[outputArg + 1]);
const port = Number(process.env.PORT || 5173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.pdf':'application/pdf'};
http.createServer((request, response) => {
  try {
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
}).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}/`));
