"""Run after changing assets/style.css or assets/app.js, then upload HTML + assets together."""
from pathlib import Path
import hashlib,re,json
root=Path(__file__).resolve().parents[1]
versions={}
for name,prefix,ext in [('style.css','marqbyte-style','css'),('app.js','marqbyte-app','js')]:
 data=(root/'assets'/name).read_bytes()
 digest=hashlib.sha256(data).hexdigest()[:12]
 file=f'{prefix}-{digest}.{ext}'
 (root/'assets'/file).write_bytes(data)
 versions[name]=file
for f in root.glob('*.html'):
 html=f.read_text()
 html=re.sub(r'(<link rel="stylesheet" href=")assets/(?:style\.css|marqbyte-style-[a-f0-9]+\.css)(?:\?[^" ]*)?',lambda m:m.group(1)+'assets/'+versions['style.css'],html)
 html=re.sub(r'(<script src=")assets/(?:app\.js|marqbyte-app-[a-f0-9]+\.js)(?:\?[^" ]*)?',lambda m:m.group(1)+'assets/'+versions['app.js'],html)
 f.write_text(html)
(root/'assets/asset-versions.json').write_text(json.dumps(versions,indent=2))
print('Versioned assets:',versions)
