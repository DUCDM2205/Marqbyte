import {readFile,access} from 'node:fs/promises';
import {join} from 'node:path';
const meta=JSON.parse(await readFile('src/page-meta.json','utf8'));
const failures=[];
let links=0,images=0;
for(const page of Object.keys(meta)){
 const html=await readFile(join('dist',page),'utf8');
 if((html.match(/<h1\b/g)||[]).length!==1)failures.push(page+': incorrect H1 count');
 if(!html.includes('data-page="'+page+'"')||!html.includes('<main id="main">'))failures.push(page+': missing prerendered content');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)failures.push(page+': duplicate IDs');
 for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const url=match[1].replaceAll('&amp;','&');
  if(/^(?:https?:|mailto:|tel:|data:|#)/.test(url))continue;
  const path=decodeURIComponent(url.split(/[?#]/)[0]);
  if(path.startsWith('/'))failures.push(page+': root-absolute asset/link '+path);
  try{await access(join('dist',path));links++;}catch{failures.push(page+': missing '+path);}
 }
 for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
 images+=(html.match(/<img\b/g)||[]).length;
 if(page.startsWith('dich-vu-')&&(html.match(/class="package-card/g)||[]).length!==3)failures.push(page+': package count');
}
if(failures.length)throw new Error(failures.join('\n'));
console.info(`PASS: ${Object.keys(meta).length} prerendered pages, ${links} local links/assets, ${images} image placements; heading, package and schema checks passed.`);
