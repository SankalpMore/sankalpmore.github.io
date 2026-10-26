import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applySelectRelease } from './finalize-release.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, 'source');
const outputArg = process.argv.indexOf('--output');
const output = outputArg === -1 ? path.join(root, 'dist') : path.resolve(process.argv[outputArg + 1]);
const config = JSON.parse(fs.readFileSync(path.join(root, 'site.config.json'), 'utf8'));
const origin = (process.env.SITE_URL || config.origin).replace(/\/$/, '');
if (!/^https:\/\//.test(origin)) throw new Error('SITE_URL must be an HTTPS origin');
if (!/^https:\/\/outlook\.office\.com\/book\//.test(config.bookingUrl)) throw new Error('Expected the configured Microsoft Bookings destination');
const {routes,before,after} = applySelectRelease({
  routes: JSON.parse(fs.readFileSync(path.join(source, 'routes.json'), 'utf8')),
  before: fs.readFileSync(path.join(source, 'before.html'), 'utf8'),
  after: fs.readFileSync(path.join(source, 'after.html'), 'utf8')
});
const aliases = {'/case-studies':'/insights', '/partner-readiness':'/about'};
const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const address = route => route === '/' ? '/' : route + '/';

function render(route, entry) {
  const base = '../'.repeat(route.split('/').filter(Boolean).length);
  const schema = JSON.stringify({'@context':'https://schema.org','@graph':[
    {'@type':'Organization','@id':`${origin}/#organization`,name:'Dockio',legalName:'Dockio Technosolutions Private Limited',url:origin+'/',email:'sankalp@dockio.in'},
    {'@type':'WebPage','@id':origin+address(route),url:origin+address(route),name:entry.title,description:entry.description,publisher:{'@id':`${origin}/#organization`}}
  ]}).replace(/</g,'\\u003c');
  const head = before.replace(/<title>.*?<\/title>/, `<title>${escape(entry.title)} | Dockio</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, '$1' + escape(entry.description))
    .replace(/(<meta property="og:title" content=")[^"]*/, '$1' + escape(entry.title))
    .replace(/(<meta property="og:description" content=")[^"]*/, '$1' + escape(entry.description))
    .replace('</head>', `<link rel="canonical" href="${origin}${address(route)}"><meta property="og:url" content="${origin}${address(route)}"><script type="application/ld+json">${schema}</script></head>`);
  let html = (head + '<main id="main" tabindex="-1">' + entry.body + '</main>' + after)
    .replaceAll('{{BASE}}', base).replaceAll('{{PAGE}}', route);
  html = html.replace(/<a\b([^>]*?)data-route="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, left, target, right, label) => {
    const [pathname, query] = target.split('?');
    if (!routes[pathname]) throw new Error(`Unknown route ${target}`);
    let attrs = left + right;
    const isBooking = pathname === '/contact' && !attrs.includes('data-enquiry') && !['Contact', 'Home'].includes(label.replace(/<[^>]+>/g, '').trim()) && !attrs.includes('aria-current');
    if (isBooking) {
      attrs = attrs.replace(/\s*href="[^"]*"/, '');
      if (attrs.includes('nav-cta')) label = label.replace('Let’s talk', 'Book a meeting');
      return `<a${attrs} data-booking href="${escape(config.bookingUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    const href = base + (pathname === '/' ? '' : pathname.slice(1) + '/') + 'index.html' + (query ? '?' + query : '');
    attrs = attrs.replace(/href="[^"]*"/, `href="${href}"`);
    return `<a${attrs} data-route="${target}"${pathname === route ? ' aria-current="page"' : ''}>${label}</a>`;
  });
  return html.replace(/(<a\b[^>]*\bdata-booking\b[^>]*?\bhref=")[^"]*/g, '$1' + escape(config.bookingUrl));
}

fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
const publicDirectory = path.resolve(root, '..', 'public');
if (fs.existsSync(publicDirectory)) fs.cpSync(publicDirectory, output, { recursive: true });
for (const [route, entry] of Object.entries(routes)) {
  const directory = path.join(output, route.slice(1));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), render(route, entry));
}
const css = fs.readFileSync(path.join(source,'site.css'),'utf8') + '\n' + ['release.css','premium.css','delivery-demo.css'].map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n');
fs.writeFileSync(path.join(output,'assets/site.css'),css);
fs.writeFileSync(path.join(output,'assets/site.js'),['release.js','premium.js','delivery-demo.js'].map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n'));
for (const [alias, target] of Object.entries(aliases)) {
  const directory = path.join(output, alias.slice(1));
  fs.mkdirSync(directory, {recursive:true});
  fs.writeFileSync(path.join(directory, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=../${target.slice(1)}/"><link rel="canonical" href="${origin}${address(target)}"><title>Continue to Dockio</title></head><body><a href="../${target.slice(1)}/">Continue to Dockio</a></body></html>`);
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
fs.writeFileSync(path.join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + Object.keys(routes).map(route => `<url><loc>${origin}${address(route)}</loc></url>`).join('') + '</urlset>\n');
fs.writeFileSync(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
const notFound = render('/', {title:'Page not found',description:'Find your way back to Dockio.',body:'<section class="wrap error-page"><h1>That page isn’t here.</h1><p>Let’s get you back to the work.</p><a class="button primary" href="/">Back to Dockio</a></section>'})
 .replaceAll('href="assets/', 'href="/assets/').replaceAll('src="assets/', 'src="/assets/')
 .replace(/href="(?!https:|mailto:|data:|#|\/)([^"]+)"/g, 'href="/$1"')
 .replace(/<link rel="canonical"[^>]*>/,'').replace('</head>','<meta name="robots" content="noindex"></head>');
fs.writeFileSync(path.join(output, '404.html'), notFound);
console.log(`Built ${Object.keys(routes).length} pages; Select Partner branding, Microsoft Bookings and local enquiry drafts.`);
