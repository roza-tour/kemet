// ---------------------------------------------------------------------------
// Progressive-enhancement script, inlined once by Base.astro. Builds the
// starfield, toggles the sticky nav, drives the mobile menu, runs scroll-reveal
// and pointer tilt — all disabled under prefers-reduced-motion.
//
// Exported as a string so it can be emitted inline (no extra request) while the
// tunable values below stay named and editable.
// ---------------------------------------------------------------------------

const STAR_COUNT_DESKTOP = 120;
const STAR_COUNT_MOBILE = 60;
const STAR_MOBILE_BREAKPOINT = 700;
const NAV_SCROLL_THRESHOLD = 40; // px scrolled before the nav gains its solid background
const REVEAL_THRESHOLD = 0.08; // IntersectionObserver ratio for scroll-reveal
const TILT_DEG = 5; // max card tilt in degrees

export const enhanceScript = `
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sc=document.querySelector('.stars');
  if(sc&&!reduce){var n=innerWidth<${STAR_MOBILE_BREAKPOINT}?${STAR_COUNT_MOBILE}:${STAR_COUNT_DESKTOP};for(var i=0;i<n;i++){var d=document.createElement('i');
    var sz=(Math.random()<.16)?(2+Math.random()*1.6):(1+Math.random());
    d.style.left=(Math.random()*100)+'%';d.style.top=(Math.random()*100)+'%';
    d.style.width=sz.toFixed(1)+'px';d.style.height=sz.toFixed(1)+'px';
    d.style.animationDelay=(Math.random()*5).toFixed(2)+'s';d.style.animationDuration=(3.5+Math.random()*4).toFixed(2)+'s';sc.appendChild(d);}}
  var nav=document.getElementById('nav');
  if(nav)addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>${NAV_SCROLL_THRESHOLD})},{passive:true});
  var b=document.querySelector('.burger'),nl=document.getElementById('navlinks');
  if(b&&nl)b.addEventListener('click',function(){var open=nl.classList.toggle('open');
    nl.style.cssText=open?'display:flex;position:absolute;flex-direction:column;top:100%;right:18px;background:rgba(11,9,7,.97);padding:18px 26px;gap:16px;border:1px solid var(--line)':'';
    b.setAttribute('aria-expanded',open?'true':'false');});
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:${REVEAL_THRESHOLD}});
  document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=((i%4)*55)+'ms';io.observe(el);});
  if(!reduce){document.addEventListener('pointermove',function(e){
    if(e.pointerType==='touch')return;var el=e.target.closest('[data-tilt]');
    document.querySelectorAll('[data-tilt]').forEach(function(t){if(t!==el)t.style.transform='';});
    if(!el)return;var r=el.getBoundingClientRect();var px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
    el.style.transform='perspective(900px) rotateX('+(-py*${TILT_DEG})+'deg) rotateY('+(px*${TILT_DEG})+'deg) translateY(-6px)';});}
})();
`;
