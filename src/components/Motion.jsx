import { useEffect } from 'react';

const revealSelector = '.hero-copy,.hero-art,.page-intro,.section-head,.service-card,.package-card,.directory-row,.scope-grid article,.steps article,.fit-card,.measurement-card,.cta-band,.editorial-figure';

export default function Motion() {
 useEffect(() => {
  document.getElementById('root').dataset.hydrated = 'true';
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const running = new Set();
  const revealed = new WeakSet();
  let observer;

  function setup() {
   observer?.disconnect();
   running.forEach(animation => animation.cancel());
   running.clear();
   document.documentElement.dataset.motion = preference.matches ? 'reduced' : 'enabled';
   if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

   // Do not fade out server-rendered content already visible at hydration.
   // Only animate outermost candidates so parent/child motion never doubles up.
   const candidates = [...document.querySelectorAll(revealSelector)]
    .filter(element => !element.parentElement?.closest(revealSelector));
   observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
     if (!isIntersecting) return;
     observer.unobserve(target);
     if (revealed.has(target)) return;
     revealed.add(target);
     const animation = target.animate(
      [{ opacity: 0.35, translate: '0 10px' }, { opacity: 1, translate: '0 0' }],
      { duration: 1000, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'none' }
     );
     running.add(animation);
     animation.finished.then(() => running.delete(animation)).catch(() => {});
    });
   }, { threshold: 0, rootMargin: '0px 0px 48px 0px' });
   candidates.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight + 48) revealed.add(element);
    if (!revealed.has(element)) observer.observe(element);
   });
  }

  setup();
  preference.addEventListener('change', setup);
  return () => {
   observer?.disconnect();
   running.forEach(animation => animation.cancel());
   preference.removeEventListener('change', setup);
   delete document.documentElement.dataset.motion;
  };
 }, []);
 return null;
}
