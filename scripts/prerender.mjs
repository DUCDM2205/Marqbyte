import {readFile,writeFile} from 'node:fs/promises';
import {render} from '../.ssr/entry-server.js';
const metas=JSON.parse(await readFile('src/page-meta.json','utf8'));
const built=await readFile('dist/index.html','utf8');
const runtime=[...(built.matchAll(/<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>/g)),...(built.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g))].map(m=>m[0]).join('');
if(!runtime.includes('.js')||!runtime.includes('.css'))throw new Error('Missing client runtime or stylesheet in Vite output.');
let base=process.env.SITE_URL?.trim();
if(base){const u=new URL(base);if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash)throw new Error('SITE_URL must be a public HTTPS base URL.');base=base.replace(/\/+$/,'')+'/';}
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const services=JSON.parse(await readFile('src/services.json','utf8'));
const sitemap=[];
for(const [page,originalHead] of Object.entries(metas)){
 let head=originalHead.replace(/<link rel="canonical"[^>]*>/g,'').replace(/<meta property="og:(?:url|image|image:alt)"[^>]*>/g,'');
 if(base&&page!=='404.html'){
  const url=base+(page==='index.html'?'':page);
  const service=services.find(s=>'dich-vu-'+s.slug+'.html'===page);
  const image=base+'assets/dich-vu-'+(service?.art||'marketing')+'.webp';
  head+=`<link rel="canonical" href="${esc(url)}"><meta property="og:url" content="${esc(url)}"><meta property="og:image" content="${esc(image)}"><meta property="og:image:alt" content="Minh họa dịch vụ MarqByte">`;
  sitemap.push(url);
 }
 const html='<!doctype html><html lang="vi"><head>'+head+runtime+'</head><body><div id="root" data-page="'+page+'">'+render(page)+'</div></body></html>';
 await writeFile('dist/'+page,html);
}
if(base){
 const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+sitemap.map(s=>'<url><loc>'+esc(s)+'</loc></url>').join('')+'</urlset>';
 await writeFile('dist/sitemap.xml',xml);
 await writeFile('dist/robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+base+'sitemap.xml\n');
}else{
 await writeFile('dist/robots.txt','User-agent: *\nAllow: /\n');
 console.info('SITE_URL is not set: canonical, absolute sharing image URLs and sitemap will be added when built by GitHub Actions.');
}
await writeFile('dist/.nojekyll','');
console.info('Prerendered '+Object.keys(metas).length+' React pages to dist/.');
