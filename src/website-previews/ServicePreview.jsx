import React,{useEffect,useRef,useState} from 'react';
import './website-demo.css';
export const websiteHref=(path='')=>'#/websites'+(path?'/'+path:'');
import img0 from './images/giao-duc-0.jpg';
import img1 from './images/giao-duc-1.jpg';
import img2 from './images/giao-duc-2.jpg';
import img3 from './images/ban-le-0.jpg';
import img4 from './images/ban-le-1.jpg';
import img5 from './images/ban-le-2.jpg';
import img6 from './images/du-lich-0.jpg';
import img7 from './images/du-lich-1.jpg';
import img8 from './images/du-lich-2.jpg';
import img9 from './images/bat-dong-san-0.jpg';
import img10 from './images/bat-dong-san-1.jpg';
import img11 from './images/bat-dong-san-2.jpg';
import img12 from './images/cong-nghe-0.jpg';
import img13 from './images/cong-nghe-1.jpg';
import img14 from './images/cong-nghe-2.jpg';
const photos={"images/giao-duc-0.jpg":img0,"images/giao-duc-1.jpg":img1,"images/giao-duc-2.jpg":img2,"images/ban-le-0.jpg":img3,"images/ban-le-1.jpg":img4,"images/ban-le-2.jpg":img5,"images/du-lich-0.jpg":img6,"images/du-lich-1.jpg":img7,"images/du-lich-2.jpg":img8,"images/bat-dong-san-0.jpg":img9,"images/bat-dong-san-1.jpg":img10,"images/bat-dong-san-2.jpg":img11,"images/cong-nghe-0.jpg":img12,"images/cong-nghe-1.jpg":img13,"images/cong-nghe-2.jpg":img14};
function Picture({t,n=0,className='',...props}){return <img src={photos[t.images[n%t.images.length]].replace(/^\/assets\//,'assets/')} alt={`Minh họa ${t.niche.toLowerCase()}`} className={className} width="1200" height="800" loading="lazy" decoding="async" {...props}/>}
function Mark({t}){return <span className="wd-mark" aria-hidden="true">{t.name.slice(0,1)}<sup>↗</sup></span>}
function Copy({t,compact=false,preview=false}){const Heading=preview?'div':'h1';return <div className="wd-copy"><span className="wd-kicker">{t.industry} / {t.focus}</span><Heading className={preview?'wd-mini-heading':undefined}>{t.title}</Heading>{!compact&&<p>{t.description}</p>}<a className="wd-button" href="#wd-offers">{t.cta} <span>↗</span></a></div>}
function Caption({t}){return <div className="wd-caption"><span>{t.niche}</span><span>Khám phá theo nhịp của bạn ↗</span></div>}
function Stamp({t}){return <div className="wd-stamp" aria-hidden="true">{t.id}<br/><span>COLLECTION<br/>MARQBYTE</span></div>}
function Mosaic({t}){return <div className="wd-mosaic"><Picture t={t}/><Picture t={t} n={1}/><span>{t.tagline}</span><Picture t={t} n={2}/></div>}
function Stats({t}){return <div className="wd-values">{t.offers.map((s,i)=><span key={s}><b>0{i+1}</b>{s}</span>)}</div>}
export function WebsiteHero({t,preview=false}){
 const h=t.recipe.hero;
 const photo=<Picture t={t}/>;const copy=<Copy t={t} preview={preview}/>;
 const secondary=<Picture t={t} n={1}/>;
 const small=<div className="wd-hero-aside"><span>ĐIỀU GÌ QUAN TRỌNG VỚI BẠN?</span><p>{t.tagline}</p><a href="#wd-story">Câu chuyện của chúng tôi ↗</a></div>;
 const variations=[
 <>{copy}<div className="wd-hero-media">{photo}<Stamp t={t}/></div><Caption t={t}/></>,
 <><div className="wd-full-image">{photo}</div><div className="wd-overlay-copy">{copy}</div><span className="wd-hero-index">01 / KHÁM PHÁ</span></>,
 <><div className="wd-topline">{t.niche}<span>{t.id}</span></div>{copy}<div className="wd-duo">{photo}{secondary}</div></>,
 <><div className="wd-vertical-label">THE NEXT CHAPTER / {t.id}</div><div className="wd-portrait">{photo}</div>{copy}<div className="wd-bottom-note">{t.tagline}</div></>,
 <>{copy}<Mosaic t={t}/><Stats t={t}/></>,
 <><div className="wd-display-title">{t.name.split(' ')[0]}<span>↗</span></div><div className="wd-wide-photo">{photo}</div>{copy}</>,
 <><div className="wd-arch-photo">{photo}</div>{copy}<Stamp t={t}/><div className="wd-floating-small">{secondary}</div></>,
 <><div className="wd-ticker">{t.focus} ✳ {t.industry} ✳ {t.name} ✳</div>{copy}<div className="wd-circle-photo">{photo}</div><Caption t={t}/></>,
 <><div className="wd-filmstrip">{photo}{secondary}<Picture t={t} n={2}/></div>{copy}<span className="wd-film-label">MỘT CÂU CHUYỆN ĐƯỢC MỞ RA</span></>,
 <>{small}{copy}<div className="wd-square-photo">{photo}</div><Stats t={t}/></>,
 <><div className="wd-newspaper-heading">{t.name}<small>CHUYÊN ĐỀ / {t.industry}</small></div>{copy}<div className="wd-paper-photo">{photo}<Caption t={t}/></div>{small}</>,
 <><div className="wd-poster-photo">{photo}</div><span className="wd-poster-symbol">✳</span>{copy}<div className="wd-poster-caption">{t.tagline}</div></>,
 <>{copy}<div className="wd-angle-photo">{photo}</div><div className="wd-outline-word">{t.id.slice(-3)}</div><Caption t={t}/></>,
 <><div className="wd-triptych">{secondary}<Picture t={t}/><Picture t={t} n={2}/></div>{copy}<div className="wd-side-sign">{t.focus}</div></>,
 <><div className="wd-window">{photo}<div className="wd-window-top"><i/><i/><i/><span>{t.niche}</span></div></div>{copy}<Stats t={t}/></>,
 <>{copy}<div className="wd-steps-photos"><figure>{photo}<figcaption>01 / Khám phá</figcaption></figure><figure>{secondary}<figcaption>02 / Cảm nhận</figcaption></figure></div><Stamp t={t}/></>,
 <><span className="wd-huge-number">{t.id.slice(-3)}</span>{copy}<div className="wd-right-strip">{photo}</div><Caption t={t}/></>,
 <><div className="wd-oval-photo">{photo}</div>{copy}<div className="wd-tiny-photo">{secondary}<span>{t.focus}</span></div></>,
 <><div className="wd-frame-photo">{photo}<span>GÓC NHÌN MỚI</span></div><div className="wd-editor-letter">{copy}<p className="wd-signed">Từ {t.name} — dành cho bạn.</p></div></>,
 <><div className="wd-stack-photos">{secondary}{photo}<Picture t={t} n={2}/></div>{copy}<div className="wd-bottom-rule">CHỌN CẢM HỨNG / CHỌN KHỞI ĐẦU</div></>,
 <><div className="wd-grid-board"><span>EXPLORE</span>{photo}<p>{t.tagline}</p>{secondary}</div>{copy}</>,
 <>{copy}<div className="wd-cutout-photo">{photo}<span className="wd-cutout-badge">↗</span></div><div className="wd-inline-label">{t.niche} · {t.focus}</div></>,
 <><div className="wd-landscape-photo">{photo}<span>{t.industry}</span></div><div className="wd-lower-copy">{copy}{small}</div></>,
 <><div className="wd-center-mark"><Mark t={t}/></div>{copy}<div className="wd-left-fragment">{secondary}</div><div className="wd-right-fragment">{photo}</div></>,
 <><div className="wd-border-frame"><div>{copy}</div><div>{photo}<Caption t={t}/></div></div><Stats t={t}/></>,
 <><div className="wd-circle-word">✳</div><div className="wd-front-photo">{photo}</div>{copy}<div className="wd-end-label">{t.tagline}</div></>,
 <><div className="wd-collage-board"><Picture t={t}/><Picture t={t} n={1}/><span>{t.name}</span></div>{copy}<Stamp t={t}/></>,
 <><div className="wd-thin-image">{photo}</div>{copy}<div className="wd-thin-image wd-last">{secondary}</div><span className="wd-bottom-note">{t.tagline}</span></>,
 <>{copy}<div className="wd-grid-photo">{photo}<div className="wd-image-label">{t.niche}<br/>TỪ MỘT GÓC NHÌN MỚI ↗</div></div>{small}</>,
 <><div className="wd-diagonal-board">{photo}<span>{t.focus}</span></div>{copy}<Stats t={t}/></>
 ];
 return <section id={preview?undefined:"wd-top"} className={`wd-hero wh-${h} wg-${t.recipe.geometry}`} style={{'--geometry':t.recipe.geometry,'--split':`${40+(t.recipe.geometry%7)*3}%`,'--offset':`${(t.recipe.geometry%5)*14}px`}}>{variations[h]}</section>;
}

export default function ServicePreview({t}) {
 const ref=useRef(null);const[width,setWidth]=useState(360);
 useEffect(()=>{if(!ref.current)return;const ro=new ResizeObserver(([e])=>setWidth(e.contentRect.width));ro.observe(ref.current);return()=>ro.disconnect()},[]);
 return <div ref={ref} className="wl-mini" aria-hidden="true" style={{height:width*.66}}><div className="wl-mini-inner" inert={true} style={{width:1200,transform:`scale(${width/1200})`}}><div className={`wd-site wt-${t.style.toLowerCase().replaceAll(' ','-')} wtheme-${t.theme} wnav-${t.recipe.nav}`} style={{'--wa':t.accent,'--wr':t.recipe.radius+'px','--body-font':t.recipe.type%3===0?'Georgia,serif':'Arial,sans-serif','--heading-font':t.recipe.type%2===0?'Georgia,serif':'Arial,sans-serif'}}><div className="wd-nav"><span className="wd-brand"><Mark t={t}/>{t.name}</span><nav><span>Câu chuyện</span><span>Khám phá</span><span>Liên hệ</span></nav><span className="wd-nav-cta">{t.contact} ↗</span></div><WebsiteHero t={t} preview/></div></div></div>;
}
