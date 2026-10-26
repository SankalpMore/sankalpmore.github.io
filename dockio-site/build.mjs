import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applySelectRelease } from './finalize-release.mjs';
import { applySearchContent } from './seo-content.mjs';
import { aliases, address, escape, structuredData, socialImage, socialAlt } from './search-metadata.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, 'source');
const outputArg = process.argv.indexOf('--output');
const output = outputArg === -1 ? path.join(root, 'dist') : path.resolve(process.argv[outputArg + 1]);
const config = JSON.parse(fs.readFileSync(path.join(root, 'site.config.json'), 'utf8'));
const origin = (process.env.SITE_URL || config.origin).replace(/\/$/, '');
if (!/^https:\/\//.test(origin)) throw new Error('SITE_URL must be an HTTPS origin');
if (!/^https:\/\/outlook\.office\.com\/book\//.test(config.bookingUrl)) throw new Error('Expected the configured Microsoft Bookings destination');
const {routes,before,after} = applySearchContent(applySelectRelease({
  routes: JSON.parse(fs.readFileSync(path.join(source, 'routes.json'), 'utf8')),
  before: fs.readFileSync(path.join(source, 'before.html'), 'utf8'),
  after: fs.readFileSync(path.join(source, 'after.html'), 'utf8')
}));
for (const alias of Object.keys(aliases)) delete routes[alias];
function render(route, entry, { noindex = false } = {}) {
  const canonical = origin + address(route);
  const searchHead = noindex ? '<meta name="robots" content="noindex,follow">' : `
    <link rel="canonical" href="${canonical}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <meta property="og:url" content="${canonical}">
    <meta property="og:locale" content="en_IN">
    <meta property="og:image" content="${origin}${socialImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${escape(socialAlt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escape(entry.title)} | Dockio">
    <meta name="twitter:description" content="${escape(entry.description)}">
    <meta name="twitter:image" content="${origin}${socialImage}">
    <meta name="twitter:image:alt" content="${escape(socialAlt)}">
    <script type="application/ld+json">${structuredData(origin, route, entry)}</script>`;
  const head = before.replace(/<title>.*?<\/title>/, `<title>${escape(entry.title)} | Dockio</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, '$1' + escape(entry.description))
    .replace(/(<meta property="og:title" content=")[^"]*/, '$1' + escape(entry.title))
    .replace(/(<meta property="og:description" content=")[^"]*/, '$1' + escape(entry.description))
    .replace('</head>', searchHead + '</head>');
  let html = (head + '<main id="main" tabindex="-1">' + entry.body + '</main>' + after)
    .replaceAll('{{BASE}}', '/').replaceAll('{{PAGE}}', route);
  html = html.replace(/<a\b([^>]*?)data-route="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, left, target, right, label) => {
    const rawPath = target.split(/[?#]/)[0];
    const pathname = aliases[rawPath] || rawPath;
    const suffix = target.slice(rawPath.length);
    if (!routes[pathname]) throw new Error(`Unknown route ${target}`);
    let attrs = left + right;
    const isBooking = pathname === '/contact' && !attrs.includes('data-enquiry') && !['Contact', 'Home'].includes(label.replace(/<[^>]+>/g, '').trim()) && !attrs.includes('aria-current');
    if (isBooking) {
      attrs = attrs.replace(/\s*href="[^"]*"/, '');
      if (attrs.includes('nav-cta')) label = label.replace('Let’s talk', 'Book a meeting');
      return `<a${attrs} data-booking href="${escape(config.bookingUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    const href = address(pathname) + suffix;
    attrs = attrs.replace(/href="[^"]*"/, `href="${href}"`);
    return `<a${attrs} data-route="${pathname}${suffix}"${pathname === route ? ' aria-current="page"' : ''}>${label}</a>`;
  });
  return html.replace(/(<a\b[^>]*\bdata-booking\b[^>]*?\bhref=")[^"]*/g, '$1' + escape(config.bookingUrl));
}

// Only generated dist directories may be replaced. Do not remove source or arbitrary paths.
if (path.basename(output) !== 'dist' || output === root) throw new Error('Build output must be a dedicated dist directory');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
const publicDirectory = path.resolve(root, '..', 'public');
if (fs.existsSync(publicDirectory)) fs.cpSync(publicDirectory, output, { recursive: true });
for (const [route, entry] of Object.entries(routes)) {
  const directory = path.join(output, route.slice(1));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), render(route, entry));
}
const css = fs.readFileSync(path.join(source,'site.css'),'utf8') + '\n' + ['release.css','premium.css','delivery-demo.css','seo.css'].map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n');
fs.writeFileSync(path.join(output,'assets/site.css'),css);
fs.writeFileSync(path.join(output,'assets/site.js'),['release.js','premium.js','delivery-demo.js'].map(file=>fs.readFileSync(path.join(root,file),'utf8')).join('\n'));
for (const [alias, target] of Object.entries(aliases)) {
  const directory = path.join(output, alias.slice(1));
  fs.mkdirSync(directory, {recursive:true});
  const destination = address(target);
  fs.writeFileSync(path.join(directory, 'index.html'), `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="${origin}${destination}"><title>Continue to ${escape(routes[target].title)} | Dockio</title></head><body><p>This page has moved.</p><a href="${destination}">Continue to ${escape(routes[target].title)}</a><script>location.replace(${JSON.stringify(destination)} + location.search + location.hash);</script></body></html>`);
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
fs.writeFileSync(path.join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + Object.keys(routes).map(route => `<url><loc>${origin}${address(route)}</loc></url>`).join('') + '</urlset>\n');
fs.writeFileSync(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
const notFound = render('/404', {title:'Page not found',description:'Find your way back to Dockio.',body:'<section class="wrap error-page"><h1>That page isn’t here.</h1><p>Let’s get you back to the work.</p><a class="button primary" href="/">Back to Dockio</a></section>'}, { noindex: true });
fs.writeFileSync(path.join(output, '404.html'), notFound);
console.log(`Built ${Object.keys(routes).length} canonical pages and ${Object.keys(aliases).length} preserved URL redirects; search metadata, social cards and structured data.`);
