// ---------------------------------------------------------------------------
// Progressive-enhancement script, inlined once by Base.astro.
//
// RC7 performance discipline: only effects that earn their cost survive.
// - golden dust: fewer particles, no per-frame shadow blur, DPR capped
// - reveals: IntersectionObserver + a single fail-open sweep on load
// - tilt/glare: hover-scoped only; tracks the last element (no per-move
//   document-wide queries)
// - scroll progress: passive scroll listener, transform-only
// - customer slider: discrete, timed page transitions (no continuous loop)
// Removed: cursor orb, magnetic buttons, hero parallax/drift (hero is static).
// Everything is disabled under prefers-reduced-motion.
// ---------------------------------------------------------------------------

const NAV_SCROLL_THRESHOLD = 40; // px scrolled before the nav gains its glass background
const MCB_SCROLL_THRESHOLD = 600; // px scrolled before the mobile conversion bar appears
const REVEAL_THRESHOLD = 0.08; // IntersectionObserver ratio for scroll-reveal
const DUST_MAX = 120; // particle ceiling on large screens
const DUST_DENSITY = 15000; // px² of viewport per particle
const SLIDER_INTERVAL_MS = 6000; // customer slider auto-advance cadence (slow & calm)

export const enhanceScript = `
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* golden dust — lightweight: no shadow blur, capped DPR, modest count */
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
    var last=performance.now();
    (function fr(t){var dt=Math.min((t-last)/1000,.05);last=t;
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
      requestAnimationFrame(fr);})(last);}

  /* nav glass + mobile conversion bar + scroll progress — one passive listener */
  var nav=document.getElementById('nav'),sp=null;
  if(!reduce){sp=document.createElement('div');sp.id='sprog';document.body.appendChild(sp);}
  var dh=0;function measure(){dh=document.documentElement.scrollHeight-innerHeight;}
  measure();addEventListener('resize',measure);
  addEventListener('scroll',function(){var y=scrollY;
    if(nav)nav.classList.toggle('scrolled',y>${NAV_SCROLL_THRESHOLD});
    document.body.classList.toggle('mcb-active',y>${MCB_SCROLL_THRESHOLD});
    if(sp)sp.style.transform='scaleX('+(dh>0?y/dh:0)+')';
  },{passive:true});

  /* mobile menu */
  var b=document.querySelector('.burger'),nl=document.getElementById('navlinks');
  if(b&&nl)b.addEventListener('click',function(){var open=nl.classList.toggle('open');
    nl.style.cssText=open?'display:flex;position:absolute;flex-direction:column;top:100%;right:18px;background:rgba(11,9,7,.97);padding:18px 26px;gap:16px;border:1px solid var(--line)':'';
    b.setAttribute('aria-expanded',open?'true':'false');});

  /* scroll reveal — IO plus ONE fail-open sweep after load */
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:${REVEAL_THRESHOLD}});
  var rvs=document.querySelectorAll('.reveal');
  rvs.forEach(function(el,i){el.style.transitionDelay=((i%4)*55)+'ms';io.observe(el);});
  addEventListener('load',function(){var lim=innerHeight*1.15;rvs.forEach(function(el){
    if(!el.classList.contains('in')&&el.getBoundingClientRect().top<lim)el.classList.add('in');});measure();});

  /* destination strip arrows (homepage) */
  var strip=document.getElementById('dstrip');
  if(strip){var pv=document.getElementById('dprev'),nx=document.getElementById('dnext');
    if(pv)pv.addEventListener('click',function(){strip.scrollBy({left:-360,behavior:'smooth'})});
    if(nx)nx.addEventListener('click',function(){strip.scrollBy({left:360,behavior:'smooth'})});}

  /* stat counters (homepage) */
  var nums=document.querySelectorAll('.num[data-count]');
  function count(el){if(el.dataset.done)return;el.dataset.done=1;
    var end=+el.dataset.count,t0=performance.now(),D=1600;
    (function tick(t){var p=Math.min((t-t0)/D,1),v=Math.round(end*(1-Math.pow(1-p,3)));
      el.firstChild.textContent=v;if(p<1)requestAnimationFrame(tick);})(t0);}
  if(reduce){nums.forEach(function(el){el.firstChild.textContent=el.dataset.count;});}
  else if(nums.length){var cio=new IntersectionObserver(function(es){es.forEach(function(x){
    if(x.isIntersecting){count(x.target);cio.unobserve(x.target);}})},{threshold:.5});
    nums.forEach(function(el){cio.observe(el);});}

  /* customer slider — uniform squares, discrete sliding-window pager.
     Advances one image at a time and loops cleanly at the end; no clones. */
  var cs=document.getElementById('cslider');
  if(cs){var tr=cs.querySelector('.cslider-track'),items=tr.children,
    N=+cs.dataset.count,idx=0,timer=null,cnt=document.getElementById('cscount');
    function per(){return Math.max(1,Math.round(+getComputedStyle(cs).getPropertyValue('--per')||4));}
    function maxIdx(){return Math.max(0,N-per());}
    function step(){var st=getComputedStyle(tr);
      return items[0].getBoundingClientRect().width+parseFloat(st.gap||0);}
    function label(){if(cnt)cnt.textContent=('0'+(idx+1)).slice(-2)+' / '+N;}
    function go(n,instant){idx=Math.max(0,Math.min(n,maxIdx()));
      tr.style.transition=instant?'none':'transform 1.1s cubic-bezier(.22,.61,.36,1)';
      tr.style.transform='translateX('+(-idx*step())+'px)';label();}
    function next(){go(idx>=maxIdx()?0:idx+1);}
    function prev(){go(idx<=0?maxIdx():idx-1);}
    function play(){if(!reduce&&!timer)timer=setInterval(next,${SLIDER_INTERVAL_MS});}
    function stop(){clearInterval(timer);timer=null;}
    var p2=document.getElementById('csprev'),n2=document.getElementById('csnext');
    if(p2)p2.addEventListener('click',function(){stop();prev();play();});
    if(n2)n2.addEventListener('click',function(){stop();next();play();});
    cs.addEventListener('pointerenter',stop);
    cs.addEventListener('pointerleave',play);
    addEventListener('resize',function(){go(idx,true);});
    go(0,true);play();}
})();
`;
