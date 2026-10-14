import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
const root=resolve(import.meta.dirname,'..')
const vite=await createServer({root,server:{middlewareMode:true},appType:'custom',optimizeDeps:{noDiscovery:true,include:[]}})
try {
 const {default:App}=await vite.ssrLoadModule('/src/App.tsx')
 const {pages,origin,canonical,aliases}=await vite.ssrLoadModule('/src/site/meta.ts')
 const {homeFaqs}=await vite.ssrLoadModule('/src/site/Home.tsx')
 const template=readFileSync(resolve(root,'dist/index.html'),'utf8')
 const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
 const orgId=origin+'/#organization',authorId=origin+'/about/#sankalp'
 const organization={'@type':'Organization','@id':orgId,name:'Dockio',legalName:'Dockio Technosolutions Private Limited',url:origin+'/',logo:origin+'/dockio-mark.svg',email:'sankalp@dockio.in',address:{'@type':'PostalAddress',addressLocality:'Mumbai',addressCountry:'IN'},sameAs:['https://www.linkedin.com/company/dockio/'],founder:{'@id':authorId},memberOf:{'@type':'Organization',name:'OpenAI Partner Network'},contactPoint:{'@type':'ContactPoint',contactType:'Enterprise enquiries',email:'sankalp@dockio.in',availableLanguage:'English'}}
 const person={'@type':'Person','@id':authorId,name:'Sankalp Shirish More',jobTitle:'Founder & Director',worksFor:{'@id':orgId},url:origin+'/about/'}
 const website={'@type':'WebSite','@id':origin+'/#website',name:'Dockio',url:origin+'/',publisher:{'@id':orgId},inLanguage:'en-IN'}
 for(const page of [...pages,{path:'/404',title:'Page not found',description:'Explore Dockio enterprise AI transformation and systems-integration services.'}]) {
  const url=canonical(page.path), graph=[organization,person,website,{'@type':'WebPage','@id':url,name:page.title+' | Dockio',url,description:page.description,isPartOf:{'@id':origin+'/#website'},inLanguage:'en-IN'}]
  if(page.path.startsWith('/services/')) graph.push({'@type':'Service',name:page.title,description:page.description,url,provider:{'@id':orgId}})
  if(page.path.startsWith('/insights/')) graph.push({'@type':'Article',headline:page.title,description:page.description,url,author:{'@id':authorId},publisher:{'@id':orgId},datePublished:'2026-10-14',dateModified:'2026-10-14',image:origin+'/images/discussion-1536.webp',mainEntityOfPage:{'@id':url}})
  if(page.path==='/') graph.push({'@type':'FAQPage',mainEntity:homeFaqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))})
  if(page.path!=='/'&&page.path!=='/404') {
   const parts=page.path.split('/').filter(Boolean)
   const crumbs=[{'@type':'ListItem',position:1,name:'Home',item:origin+'/'}]
   if(parts.length>1) crumbs.push({'@type':'ListItem',position:2,name:parts[0][0].toUpperCase()+parts[0].slice(1),item:canonical('/'+parts[0])})
   crumbs.push({'@type':'ListItem',position:crumbs.length+1,name:page.title,item:url})
   graph.push({'@type':'BreadcrumbList',itemListElement:crumbs})
  }
  const image=origin+'/images/discussion-1536.webp'
  const meta=`<title>${esc(page.title)} | Dockio</title>\n<meta name="description" content="${esc(page.description)}"/>\n<meta name="robots" content="${page.path==='/404'?'noindex,follow':'index,follow,max-image-preview:large'}"/>\n<link rel="canonical" href="${url}"/>\n<meta property="og:type" content="${page.path.startsWith('/insights/')?'article':'website'}"/>\n<meta property="og:site_name" content="Dockio"/>\n<meta property="og:title" content="${esc(page.title)} | Dockio"/>\n<meta property="og:description" content="${esc(page.description)}"/>\n<meta property="og:url" content="${url}"/>\n<meta property="og:image" content="${image}"/>\n<meta property="og:image:alt" content="Illustrative enterprise collaboration scene"/>\n<meta property="og:locale" content="en_IN"/>\n<meta name="twitter:card" content="summary_large_image"/>\n<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script>`
  const rendered=template.replace('<!--head-meta-->',meta).replace('<!--app-html-->',renderToString(createElement(App,{initialPath:page.path})))
  const file=page.path==='/404'?resolve(root,'dist/404.html'):resolve(root,'dist',page.path.slice(1),'index.html')
  mkdirSync(resolve(file,'..'),{recursive:true});writeFileSync(file,rendered)
 }
 for(const [old,target] of Object.entries(aliases)) {
  const destination=canonical(target),file=resolve(root,'dist',old.slice(1),'index.html')
  mkdirSync(resolve(file,'..'),{recursive:true})
  writeFileSync(file,`<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page moved | Dockio</title><link rel="canonical" href="${destination}"><meta http-equiv="refresh" content="0;url=${target}/"></head><body><p>This page has moved. <a href="${target}/">Continue to Dockio</a>.</p><script>location.replace(${JSON.stringify(target+'/')}+location.search+location.hash)</script></body></html>`)
 }
 writeFileSync(resolve(root,'dist/sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>`  <url><loc>${canonical(p.path)}</loc><lastmod>2026-10-14</lastmod></url>`).join('\n')+'\n</urlset>\n')
 writeFileSync(resolve(root,'dist/.nojekyll'),'')
 console.log(`Prerendered ${pages.length} substantive pages, ${Object.keys(aliases).length} legacy handoffs and a 404.`)
} finally {await vite.close()}
