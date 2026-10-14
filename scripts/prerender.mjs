import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
const root=resolve(import.meta.dirname,'..')
const vite=await createServer({root,server:{middlewareMode:true},appType:'custom',optimizeDeps:{noDiscovery:true,include:[]}})
try {
 const {default:App}=await vite.ssrLoadModule('/src/App.tsx')
 const {pages,origin,canonical,faqs}=await vite.ssrLoadModule('/src/brand/content.ts')
 const {detailContent}=await vite.ssrLoadModule('/src/brand/detailContent.ts')
 const template=readFileSync(resolve(root,'dist/index.html'),'utf8')
 const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
 for(const page of [...pages,{path:'/404',title:'Page not found',description:'Explore Dockio enterprise AI services.'}]) {
  const url=canonical(page.path)
  const scene=detailContent[page.path]?.image ?? (page.path==='/industries'?'finance':'collaboration')
  const graph=[{'@type':'Organization','@id':origin+'/#organization',name:'Dockio',legalName:'Dockio Technosolutions Private Limited',url:origin+'/',logo:origin+'/dockio-mark.svg',email:'sankalp@dockio.in',founder:{'@type':'Person',name:'Sankalp More'}},{'@type':'WebPage','@id':url,name:page.title+' | Dockio',url,description:page.description,isPartOf:{'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'Dockio'}}]
  if(page.path.startsWith('/services/')) graph.push({'@type':'Service',name:page.title,description:page.description,url,provider:{'@id':origin+'/#organization'}})
  if(page.path==='/')graph.push({'@type':'FAQPage',mainEntity:faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))})
  const meta=`<title>${esc(page.title)} | Dockio</title>\n<meta name="description" content="${esc(page.description)}"/>\n<meta name="robots" content="${page.path==='/404'?'noindex,follow':'index,follow,max-image-preview:large'}"/>\n<link rel="canonical" href="${url}"/>\n<meta property="og:type" content="website"/>\n<meta property="og:site_name" content="Dockio"/>\n<meta property="og:title" content="${esc(page.title)} | Dockio"/>\n<meta property="og:description" content="${esc(page.description)}"/>\n<meta property="og:url" content="${url}"/>\n<meta property="og:image" content="${origin}/images/dockio-${scene}-scene.webp"/>\n<meta name="twitter:card" content="summary_large_image"/>\n<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script>`
  const rendered=template.replace('<!--head-meta-->',meta).replace('<!--app-html-->',renderToString(createElement(App,{initialPath:page.path})))
  const file=page.path==='/404'?resolve(root,'dist/404.html'):resolve(root,'dist',page.path.slice(1),'index.html')
  mkdirSync(resolve(file,'..'),{recursive:true});writeFileSync(file,rendered)
 }
 writeFileSync(resolve(root,'dist/sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>`  <url><loc>${canonical(p.path)}</loc></url>`).join('\n')+'\n</urlset>\n')
 writeFileSync(resolve(root,'dist/.nojekyll'),'')
 console.log(`Prerendered ${pages.length} pages plus 404 with titles, descriptions, canonicals and structured data.`)
} finally {await vite.close()}
