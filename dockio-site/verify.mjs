import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve(process.argv[2] || 'dist');
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const files = walk(root).filter(p=>p.endsWith('.html'));
let checked=0;
for (const file of files) {
 const html=fs.readFileSync(file,'utf8');
 assert(html.includes('<title>'), `Missing title: ${file}`);
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
 for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const value=m[1].split(/[?#]/)[0];
  if(!value || /^(?:[a-z]+:|\/\/)/i.test(value))continue;
  const target=value.startsWith('/')?path.join(root,value):path.resolve(path.dirname(file),value);
  assert(target===root||target.startsWith(root+path.sep), `Outside site: ${value}`);
  assert(fs.existsSync(target), `Broken reference: ${file} -> ${value}`);
  checked++;
 }
}
for(const route of ['openai','services/implementation-sprint','industries/private-equity','budgetops','contact'])assert(fs.existsSync(path.join(root,route,'index.html')),`Missing route ${route}`);
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(home.includes('Make AI work.'));
assert(home.includes('openai-select-partner.svg'));
const contact=fs.readFileSync(path.join(root,'contact/index.html'),'utf8');
assert(contact.includes('id="release-enquiry"'));
assert(contact.includes('Nothing is sent or stored by Dockio until you send the email.'));
console.log(`Verified ${files.length} HTML outputs and ${checked} local references.`);
