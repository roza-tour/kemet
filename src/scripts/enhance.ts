// ---------------------------------------------------------------------------
// Progressive-enhancement script, inlined once by Base.astro.
//
// Deliberately minimal (RC9). Pages render fully without JS — there are no
// loading or scroll-reveal animations. This script only:
//   - draws the ambient golden-dust background (canvas)
//   - toggles the nav's glass background past a scroll threshold
//   - drives the mobile menu button
//   - wires the destination strip's prev/next arrows
// The WhatsApp button is a pure-CSS floating affordance — no JS needed.
// All motion is disabled under prefers-reduced-motion.
// ---------------------------------------------------------------------------

const NAV_SCROLL_THRESHOLD = 40; // px before the nav gains its glass background
const DUST_MAX = 120; // particle ceiling on large screens
const DUST_DENSITY = 15000; // px² of viewport per particle

export const enhanceScript = `
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ambient golden dust — lightweight background canvas */
  var cv=document.getElementById('dust');
  if(cv&&!reduce&&cv.getContext){var cx=cv.getContext('2d'),W,H,stars=[];
    var GOLD=['217,180,90','232,205,143','247,230,174'];
    function mk(y){var g=Math.random()<.1;return{x:Math.random()*W,y:y!=null?y:Math.random()*H,
      r:g?1.7+Math.random()*1.2:.7+Math.random()*1.3,c:GOLD[Math.random()*3|0],
      a:.35+Math.random()*.5,sp:.35+Math.random()*1,ph:Math.random()*6.283,
      vy:4+Math.random()*8,sw:6+Math.random()*16,so:Math.random()*6.283,g:g};}
    function sz(){var d=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;
      cv.width=W*d;cv.height=H*d;cv.style.width=W+'px';cv.style.height=H+'px';
      cx.setTransform(d,0,0,d,0,0);
      var n=Math.min(${DUST_MAX},Math.round(W*H/${DUST_DENSITY}));
      stars=[];for(var i=0;i<n;i++)stars.push(mk());}
    sz();addEventListener('resize',sz);
    var last=performance.now(),running=true;
    function fr(t){if(document.hidden){running=false;return;}var dt=Math.min((t-last)/1000,.05);last=t;
      cx.clearRect(0,0,W,H);
      for(var i=0;i<stars.length;i++){var s=stars[i];
        s.y-=s.vy*dt;if(s.y<-8){stars[i]=mk(H+8);s=stars[i];}
        var x=s.x+Math.sin(t/1000*.4+s.so)*s.sw*.15;
        var tw=.35+.65*(.5+.5*Math.sin(t/1000*s.sp*2+s.ph));
        var a=s.a*tw;
        cx.fillStyle='rgba('+s.c+','+a+')';
        cx.beginPath();cx.arc(x,s.y,s.r,0,7);cx.fill();
        if(s.g&&tw>.72){var L=s.r*(4+6*(tw-.72)/.28);
          cx.strokeStyle='rgba('+s.c+','+Math.min(a*1.1,1)+')';cx.lineWidth=.9;
          cx.beginPath();cx.moveTo(x-L,s.y);cx.lineTo(x+L,s.y);
          cx.moveTo(x,s.y-L);cx.lineTo(x,s.y+L);cx.stroke();}}
      requestAnimationFrame(fr);}
    requestAnimationFrame(fr);
    document.addEventListener('visibilitychange',function(){if(!document.hidden&&!running){running=true;last=performance.now();requestAnimationFrame(fr);}});}

  /* nav glass — one passive scroll listener */
  var nav=document.getElementById('nav');
  addEventListener('scroll',function(){var y=scrollY;
    if(nav)nav.classList.toggle('scrolled',y>${NAV_SCROLL_THRESHOLD});
  },{passive:true});

  /* mobile menu */
  var b=document.querySelector('.burger'),nl=document.getElementById('navlinks');
  if(b&&nl)b.addEventListener('click',function(){var open=nl.classList.toggle('open');
    nl.style.cssText=open?'display:flex;position:absolute;flex-direction:column;top:100%;right:18px;background:rgba(11,9,7,.97);padding:18px 26px;gap:16px;border:1px solid var(--line)':'';
    b.setAttribute('aria-expanded',open?'true':'false');});

  /* destination strip arrows (homepage) */
  var strip=document.getElementById('dstrip');
  if(strip){var pv=document.getElementById('dprev'),nx=document.getElementById('dnext');
    if(pv)pv.addEventListener('click',function(){strip.scrollBy({left:-360,behavior:'smooth'})});
    if(nx)nx.addEventListener('click',function(){strip.scrollBy({left:360,behavior:'smooth'})});}
})();
`;
