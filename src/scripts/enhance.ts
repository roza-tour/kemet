// ---------------------------------------------------------------------------
// Progressive-enhancement script, inlined once by Base.astro. Draws the golden
// dust starfield (canvas), toggles the sticky nav, drives the mobile menu,
// runs scroll-reveal and pointer tilt — all disabled under
// prefers-reduced-motion.
//
// Exported as a string so it can be emitted inline (no extra request) while the
// tunable values below stay named and editable.
// ---------------------------------------------------------------------------

const NAV_SCROLL_THRESHOLD = 40; // px scrolled before the nav gains its glass background
const MCB_SCROLL_THRESHOLD = 600; // px scrolled before the mobile conversion bar appears
const REVEAL_THRESHOLD = 0.08; // IntersectionObserver ratio for scroll-reveal
const TILT_DEG = 5; // max card tilt in degrees
const DUST_MAX = 220; // particle ceiling on large screens
const DUST_DENSITY = 9000; // px² of viewport per particle

export const enhanceScript = `
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* golden dust — drifting, twinkling gold stars with four-point glints */
  var cv=document.getElementById('dust');
  if(cv&&!reduce&&cv.getContext){var cx=cv.getContext('2d'),W,H,stars=[];
    var GOLD=['217,180,90','232,205,143','247,230,174'];
    function mk(y){var g=Math.random()<.12;return{x:Math.random()*W,y:y!=null?y:Math.random()*H,
      r:g?1.8+Math.random()*1.4:.7+Math.random()*1.5,c:GOLD[Math.random()*3|0],
      a:.4+Math.random()*.55,sp:.35+Math.random()*1.1,ph:Math.random()*6.283,
      vy:5+Math.random()*11,sw:6+Math.random()*18,so:Math.random()*6.283,g:g};}
    function sz(){var d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;
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
        if(s.r>1.2){cx.shadowColor='rgba('+s.c+',.85)';cx.shadowBlur=8*tw;}
        cx.beginPath();cx.arc(x,s.y,s.r,0,7);cx.fill();cx.shadowBlur=0;
        if(s.g&&tw>.7){var L=s.r*(4.5+7*(tw-.7)/.3);
          cx.strokeStyle='rgba('+s.c+','+Math.min(a*1.1,1)+')';cx.lineWidth=.9;
          cx.beginPath();cx.moveTo(x-L,s.y);cx.lineTo(x+L,s.y);
          cx.moveTo(x,s.y-L);cx.lineTo(x,s.y+L);cx.stroke();}}
      requestAnimationFrame(fr);})(last);}

  var nav=document.getElementById('nav');
  if(nav)addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>${NAV_SCROLL_THRESHOLD})},{passive:true});
  addEventListener('scroll',function(){document.body.classList.toggle('mcb-active',scrollY>${MCB_SCROLL_THRESHOLD})},{passive:true});
  var b=document.querySelector('.burger'),nl=document.getElementById('navlinks');
  if(b&&nl)b.addEventListener('click',function(){var open=nl.classList.toggle('open');
    nl.style.cssText=open?'display:flex;position:absolute;flex-direction:column;top:100%;right:18px;background:rgba(11,9,7,.97);padding:18px 26px;gap:16px;border:1px solid var(--line)':'';
    b.setAttribute('aria-expanded',open?'true':'false');});
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:${REVEAL_THRESHOLD}});
  var rvs=document.querySelectorAll('.reveal');
  rvs.forEach(function(el,i){el.style.transitionDelay=((i%4)*55)+'ms';io.observe(el);});
  /* fail-open sweep — content can never be stranded invisible */
  function sweep(){var lim=innerHeight*1.15;rvs.forEach(function(el){
    if(!el.classList.contains('in')&&el.getBoundingClientRect().top<lim)el.classList.add('in');});}
  addEventListener('load',sweep);addEventListener('scroll',sweep,{passive:true});
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
  else{var cio=new IntersectionObserver(function(es){es.forEach(function(x){
    if(x.isIntersecting){count(x.target);cio.unobserve(x.target);}})},{threshold:.5});
    nums.forEach(function(el){cio.observe(el);});
    addEventListener('scroll',function(){var lim=innerHeight*1.1;nums.forEach(function(el){
      if(el.getBoundingClientRect().top<lim)count(el);});},{passive:true});}
  if(!reduce){document.addEventListener('pointermove',function(e){
    if(e.pointerType==='touch')return;
    var g=e.target.closest('[data-tilt],[data-glare]');
    if(g){var gr=g.getBoundingClientRect();
      g.style.setProperty('--mx',((e.clientX-gr.left)/gr.width*100)+'%');
      g.style.setProperty('--my',((e.clientY-gr.top)/gr.height*100)+'%');}
    var el=e.target.closest('[data-tilt]');
    document.querySelectorAll('[data-tilt]').forEach(function(t){if(t!==el)t.style.transform='';});
    if(!el)return;var r=el.getBoundingClientRect();var px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
    el.style.transform='perspective(900px) rotateX('+(-py*${TILT_DEG})+'deg) rotateY('+(px*${TILT_DEG})+'deg) translateY(-6px)';});}

  if(!reduce){
    /* scroll progress hairline */
    var sp=document.createElement('div');sp.id='sprog';document.body.appendChild(sp);
    /* cursor light orb (desktop pointers only) */
    var orb=null,ox=0,oy=0,tx=0,ty=0;
    if(matchMedia('(pointer:fine)').matches){
      orb=document.createElement('div');orb.id='orb';document.body.appendChild(orb);
      document.addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;orb.classList.add('on');
        orb.classList.toggle('big',!!e.target.closest('a,button'));});
      document.addEventListener('pointerleave',function(){orb.classList.remove('on');});}
    /* magnetic buttons */
    document.querySelectorAll('.btn,.nav-cta').forEach(function(bt){
      bt.addEventListener('pointermove',function(e){var r=bt.getBoundingClientRect();
        bt.style.transform='translate('+((e.clientX-r.left-r.width/2)*.16)+'px,'+((e.clientY-r.top-r.height/2)*.22)+'px)';});
      bt.addEventListener('pointerleave',function(){bt.style.transform='';});});
    /* hero depth — scroll settle + pointer counter-parallax, composed via translate */
    var hbg=document.querySelector('.hero .bg img'),hin=document.querySelector('.hero .hero-inner');
    var hx=0,hy=0;
    if(hbg)document.addEventListener('pointermove',function(e){
      hx=(e.clientX/innerWidth-.5);hy=(e.clientY/innerHeight-.5);});
    /* one rAF loop drives orb lerp, progress and hero parallax */
    (function loop(){
      if(orb){ox+=(tx-ox)*.14;oy+=(ty-oy)*.14;
        orb.style.left=ox+'px';orb.style.top=oy+'px';}
      var dh=document.documentElement.scrollHeight-innerHeight;
      sp.style.transform='scaleX('+(dh>0?scrollY/dh:0)+')';
      if(hbg){var sy=Math.min(scrollY,900)*.14;
        hbg.style.translate=(hx*-18)+'px '+(sy+hy*-12)+'px';
        if(hin)hin.style.translate=(hx*8)+'px '+(hy*6)+'px';}
      requestAnimationFrame(loop);})();
  }
})();
`;
