import { useEffect, useRef, useState } from 'react';
const links = [
  ['index.html','Trang chủ'],['gioi-thieu.html','Về MarqByte'],['dich-vu.html','Dịch vụ'],
  ['bang-gia.html','Bảng giá'],['giai-phap.html','Giải pháp'],['tin-tuc.html','Tin tức'],['lien-he.html','Liên hệ'],
];
export function Brand(){
  return <><span className="brand-icon" aria-hidden="true">m<span>↗</span></span><span>Marq<span className="brand-byte">Byte</span><span className="brand-dot">.</span></span></>;
}
export default function Header({ page }) {
  const [open,setOpen]=useState(false);
  const header=useRef(null),button=useRef(null);
  useEffect(()=>{
    function key(event){if(event.key==='Escape'&&open){setOpen(false);button.current?.focus();}}
    function outside(event){if(!header.current?.contains(event.target))setOpen(false);}
    function resize(){if(innerWidth>760)setOpen(false);}
    document.addEventListener('keydown',key);document.addEventListener('click',outside);window.addEventListener('resize',resize);
    return()=>{document.removeEventListener('keydown',key);document.removeEventListener('click',outside);window.removeEventListener('resize',resize);};
  },[open]);
  const active=page.startsWith('tin-tuc-')?'tin-tuc.html':page.startsWith('dich-vu-')?'dich-vu.html':page;
  return <header ref={header}><div className="container header-inner">
    <a className="brand" href="index.html" aria-label="MarqByte — Trang chủ"><Brand /></a>
    <button ref={button} className="menu-toggle" aria-label={open?'Đóng menu':'Mở menu'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(v=>!v)}>☰</button>
    <nav id="main-nav" className={open?'open':undefined}>
      {links.map(([href,label])=><a key={href} href={href} aria-current={active===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</a>)}
    </nav>
    <a className="button small header-cta" href="lien-he.html">Kết nối với MarqByte <span>↗</span></a>
  </div></header>;
}
