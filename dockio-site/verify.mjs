import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { aliases, address } from './search-metadata.mjs';

const root = path.resolve(process.argv[2] || 'dist');
const config = JSON.parse(fs.readFileSync(new URL('./site.config.json', import.meta.url), 'utf8'));
const origin = (process.env.SITE_URL || config.origin).replace(/\/$/, '');
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const files = walk(root).filter(p=>p.endsWith('.html'));
const read = file => fs.readFileSync(file, 'utf8');
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || '');
const meta = (html, name) => [...html.matchAll(/<meta\b[^>]*>/g)].map(m=>m[0]).filter(tag=>attr(tag,'name')===name||attr(tag,'property')===name).map(tag=>attr(tag,'content'));
const localFile = pathname => path.join(root, decodeURIComponent(pathname), pathname.endsWith('/') ? 'index.html' : '');
const titles = new Set(), descriptions = new Set(), canonicals = new Set();
let checked = 0, fragments = 0, canonicalPages = 0;

for (const file of files) {
  const html = read(file);
  const pathname = '/' + path.relative(root,file).split(path.sep).join('/');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title, `Missing title: ${file}`);
  const redirect = /<meta http-equiv="refresh"/.test(html);
  const notFound = pathname === '/404.html';
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]);
  const canonical = links.filter(t=>attr(t,'rel')==='canonical').map(t=>attr(t,'href'));
  if (!redirect && !notFound) {
    canonicalPages++;
    const url = origin + pathname.replace(/index\.html$/, '');
    assert.deepEqual(canonical, [url], `Canonical mismatch: ${file}`);
    assert(!canonicals.has(url), `Duplicate canonical: ${url}`); canonicals.add(url);
    assert(!titles.has(title), `Duplicate page title: ${title}`); titles.add(title);
    const description = meta(html,'description');
    assert.equal(description.length, 1, `Description count: ${file}`);
    assert(description[0].length > 30 && description[0].length < 200, `Unhelpful description: ${file}`);
    assert(!descriptions.has(description[0]), `Duplicate description: ${file}`); descriptions.add(description[0]);
    assert.equal((html.match(/<h1\b/g)||[]).length, 1, `H1 count: ${file}`);
    assert(!meta(html,'robots').some(m=>m.includes('noindex')), `Accidental noindex: ${file}`);
    assert.deepEqual(meta(html,'og:url'), [url], `OG URL mismatch: ${file}`);
    for (const key of ['og:title','og:description','og:image','og:image:alt','twitter:title','twitter:description','twitter:image','twitter:image:alt']) {
      const value = meta(html,key); assert(value.length===1 && value[0], `Missing or duplicate ${key}: ${file}`);
    }
    assert.deepEqual(meta(html,'twitter:card'), ['summary_large_image']);
    const image = new URL(meta(html,'og:image')[0]);
    assert.equal(image.origin, origin);
    const png = fs.readFileSync(localFile(image.pathname));
    assert.equal(png.readUInt32BE(16), 1200); assert.equal(png.readUInt32BE(20), 630);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    assert.equal(schemas.length, 1, `Schema count: ${file}`);
    const graph = JSON.parse(schemas[0][1])['@graph'];
    const page = graph.find(node=>node['@id']===url+'#webpage');
    assert.equal(page?.url, url); assert.equal(page?.description, description[0]);
    assert(graph.some(node=>node['@type']==='Organization' && node.legalName==='Dockio Technosolutions Private Limited'));
    assert(graph.some(node=>node['@type']==='WebSite'));
    if (pathname.startsWith('/services/') && pathname !== '/services/index.html') assert(graph.some(node=>node['@type']==='Service'));
    if (pathname !== '/index.html') {
      const breadcrumb = graph.find(node=>node['@type']==='BreadcrumbList');
      assert(breadcrumb && html.includes('aria-label="Breadcrumb"'), `Missing matching breadcrumbs: ${file}`);
      assert.equal(breadcrumb.itemListElement.at(-1).item, url);
    }
  }
  if (notFound) {
    assert.equal(canonical.length, 0);
    assert(meta(html,'robots').some(m=>m.includes('noindex')));
    assert(!html.includes('application/ld+json'), '404 must not claim homepage structured data');
  }
  for (const match of html.matchAll(/<a\b[^>]*>/g)) {
    const tag = match[0], href = attr(tag,'href');
    assert(href, `Empty anchor destination: ${file}`);
    if (attr(tag,'target')==='_blank') assert(attr(tag,'rel').includes('noopener'), `Unsafe new tab: ${file}`);
    if (tag.includes('data-booking')) assert.equal(href, config.bookingUrl, `Changed booking destination: ${file}`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = decode(match[1]);
    const url = new URL(value, origin + pathname.replace(/index\.html$/, ''));
    if (url.origin !== origin) continue;
    assert(!url.pathname.endsWith('/index.html'), `Internal links must use canonical directory URLs: ${file} -> ${value}`);
    const target = localFile(url.pathname);
    assert(target===root||target.startsWith(root+path.sep), `Outside site: ${value}`);
    assert(fs.existsSync(target) && fs.statSync(target).isFile(), `Broken reference: ${file} -> ${value}`);
    if (url.hash) {
      const fragment = decodeURIComponent(url.hash.slice(1));
      const targetHtml = read(target);
      assert([...targetHtml.matchAll(/\bid="([^"]+)"/g)].some(m=>decode(m[1])===fragment), `Broken fragment: ${file} -> ${value}`);
      fragments++;
    }
    checked++;
  }
}
const sitemap = read(path.join(root,'sitemap.xml'));
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>decode(m[1]));
assert.deepEqual(new Set(listed), canonicals, 'Sitemap must contain canonical pages only');
assert.equal(listed.length, canonicals.size, 'Duplicate sitemap entries');
for (const [alias,target] of Object.entries(aliases)) {
  const html = read(localFile(address(alias)));
  assert(html.includes('http-equiv="refresh"'));
  assert(html.includes(`href="${origin}${address(target)}"`), `Wrong alias canonical: ${alias}`);
  assert(!listed.includes(origin+address(alias)));
}
const robots = read(path.join(root,'robots.txt'));
assert(robots.includes('User-agent: OAI-SearchBot\nAllow: /'));
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const guide = read(path.join(root,'llms.txt'));
for (const match of guide.matchAll(/https:\/\/www\.dockio\.in\/[^\s)]*/g)) assert(canonicals.has(match[0]), `Noncanonical llms guide link: ${match[0]}`);
const home = read(path.join(root,'index.html'));
assert(home.includes('Make AI work.')); assert(home.includes('openai-select-partner.svg'));
const contact = read(path.join(root,'contact/index.html'));
assert(contact.includes('id="release-enquiry"'));
assert(contact.includes('Nothing is sent or stored by Dockio until you send the email.'));
console.log(`Verified ${canonicalPages} canonical pages, ${files.length} HTML outputs, ${checked} local references and ${fragments} fragments; metadata, schema, redirects and sitemap agree.`);
