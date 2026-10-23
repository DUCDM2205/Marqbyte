import { useEffect } from 'react';
export default function Motion(){
 useEffect(()=>{
  const root=document.getElementById('root');root.dataset.hydrated='true';
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;const running=new Set();
  function setup(){
   observer?.disconnect();running.forEach(a=>a.cancel());running.clear();
   document.documentElement.dataset.motion=preference.matches?'reduced':'enabled';
   if(preference.matches||!('IntersectionObserver' in window)||!Element.prototype.animate)return;
   observer=new IntersectionObserver(entries=>{
    entries.forEach(({target,isIntersecting})=>{
     if(!isIntersecting)return;
     const animation=target.animate([{opacity:0,translate:'0 18px'},{opacity:1,translate:'0 0'}],{duration:580,easing:'cubic-bezier(.2,.7,.2,1)',fill:'none'});
     running.add(animation);animation.finished.then(()=>running.delete(animation)).catch(()=>{});observer.unobserve(target);
    });
   },{threshold:.08});
   document.querySelectorAll('.hero-copy,.hero-art,.page-intro,.section-head,.service-card,.package-card,.directory-row,.scope-grid article,.steps article,.fit-card,.measurement-card,.cta-band,.editorial-figure').forEach(el=>observer.observe(el));
  }
  setup();preference.addEventListener('change',setup);
  return()=>{observer?.disconnect();running.forEach(a=>a.cancel());preference.removeEventListener('change',setup);delete document.documentElement.dataset.motion;};
 },[]);
 return null;
}
