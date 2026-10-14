import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'
const root=resolve(import.meta.dirname,'../dist')
const sitemap=readFileSync(resolve(root,'sitemap.xml'),'utf8')
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>match[1])
assert(urls.length>1,'Sitemap must include substantive routes')
const titles=new Set()
for(const canonical of urls){
 const path=new URL(canonical).pathname
 const file=resolve(root,'.'+path,'index.html')
 const html=readFileSync(file,'utf8')
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`One H1: ${path}`)
 assert(html.includes(`<link rel="canonical" href="${canonical}"`),`Canonical: ${path}`)
 assert(/<meta name="description" content=".{30,}"/.test(html),`Description: ${path}`)
 const title=html.match(/<title>(.*?)<\/title>/)?.[1]
 assert(title&&!titles.has(title),`Unique title: ${path}`);titles.add(title)
 const schema=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1]
 assert(schema,`Structured data: ${path}`);JSON.parse(schema)
 assert(!html.includes('<!--app-html-->'),`Rendered content: ${path}`)
 for(const match of html.matchAll(/<a [^>]*href="(\/[^\"]*)"/g)){
  const link=new URL(match[1].replaceAll('&amp;','&'),'https://www.dockio.in')
  assert(existsSync(resolve(root,'.'+link.pathname,'index.html')),`Internal link ${match[1]} on ${path}`)
 }
 for(const match of html.matchAll(/<img [^>]*src="(\/[^\"]*)"/g))assert(existsSync(resolve(root,'.'+match[1])),`Image ${match[1]} on ${path}`)
}
assert(readFileSync(resolve(root,'404.html'),'utf8').includes('noindex,follow'))
console.log(`Static checks passed: ${urls.length} crawlable pages, unique titles, canonicals, structured data, internal links, images and 404.`)
