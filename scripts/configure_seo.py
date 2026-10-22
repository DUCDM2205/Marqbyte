"""Set real deployment URLs after choosing the GitHub Pages URL or custom domain.
Usage: python scripts/configure_seo.py https://YOUR-ACCOUNT.github.io/YOUR-REPO/
"""
from pathlib import Path
from urllib.parse import urlsplit
from html import escape
import re, sys, json
from xml.etree.ElementTree import Element, SubElement, ElementTree
if len(sys.argv)!=2:
 raise SystemExit('Usage: python scripts/configure_seo.py https://your-real-domain-or-pages-url/')
base=sys.argv[1].rstrip('/')+'/'
u=urlsplit(base)
if u.scheme!='https' or not u.netloc or u.query or u.fragment or u.username or u.password:
 raise SystemExit('Use the real public HTTPS base URL with any repository path; no query or fragment.')
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'assets/service-content.json').read_text())
arts={'dich-vu-'+x['slug']+'.html':x['art'] for x in data}
ns='http://www.sitemaps.org/schemas/sitemap/0.9'
urls=Element('urlset',xmlns=ns)
for f in sorted(root.glob('*.html')):
 if f.name=='404.html':continue
 page=base+('' if f.name=='index.html' else f.name)
 html=f.read_text()
 html=re.sub(r'<link rel="canonical"[^>]*>','',html)
 html=re.sub(r'<meta property="og:(?:url|image|image:alt)"[^>]*>','',html)
 art=arts.get(f.name,'marketing')
 tags='<link rel="canonical" href="'+escape(page,quote=True)+'"><meta property="og:url" content="'+escape(page,quote=True)+'"><meta property="og:image" content="'+escape(base+'assets/dich-vu-'+art+'.webp',quote=True)+'"><meta property="og:image:alt" content="Minh họa dịch vụ Digital Marketing MarqByte">'
 f.write_text(html.replace('</head>',tags+'</head>'))
 SubElement(SubElement(urls,'url'),'loc').text=page
ElementTree(urls).write(root/'sitemap.xml',encoding='utf-8',xml_declaration=True)
(root/'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: '+base+'sitemap.xml\n')
print('Configured canonical, social image URLs, sitemap.xml and robots.txt for',base)
