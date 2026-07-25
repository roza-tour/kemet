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

  /* scroll-reveal — reveal .reveal elements as they enter the viewport. Runs
     FIRST and defensively so content is never left hidden if anything below
     throws. Falls back to showing everything when reduced-motion or no IO. */
  try{
    var rev=document.querySelectorAll('.reveal');
    if(reduce||!('IntersectionObserver' in window)){
      for(var r=0;r<rev.length;r++)rev[r].classList.add('in');
    }else{
      var io=new IntersectionObserver(function(es){
        es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
      },{rootMargin:'240px 0px 240px 0px',threshold:0});
      for(var i=0;i<rev.length;i++)io.observe(rev[i]);
    }
  }catch(e){var a=document.querySelectorAll('.reveal');for(var k=0;k<a.length;k++)a[k].classList.add('in');}

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

  /* mobile menu — toggle, close on Escape, reset when resizing to desktop */
  var b=document.querySelector('.burger'),nl=document.getElementById('navlinks');
  if(b&&nl){
    var setMenu=function(open){
      nl.style.cssText=open?'display:flex;position:absolute;flex-direction:column;top:100%;right:18px;background:rgba(11,9,7,.97);padding:18px 26px;gap:16px;border:1px solid var(--line)':'';
      nl.classList.toggle('open',open);
      b.setAttribute('aria-expanded',open?'true':'false');
    };
    b.addEventListener('click',function(){setMenu(!nl.classList.contains('open'));});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nl.classList.contains('open'))setMenu(false);});
    addEventListener('resize',function(){if(innerWidth>1080&&nl.classList.contains('open'))setMenu(false);});
  }

  /* first-party analytics — pageview + conversion events to /k.php.
     Cookie-less; k.php also honours DNT/GPC server-side. Never blocks UI. */
  try{
    var KP='/k.php';
    var send=function(t,v){try{
      var u=KP+'?t='+t+'&p='+encodeURIComponent(location.pathname)+'&v='+encodeURIComponent(v||'');
      if(navigator.sendBeacon)navigator.sendBeacon(u);else (new Image()).src=u;
    }catch(e){}};
    var refHost='';try{if(document.referrer){var rh=new URL(document.referrer).hostname;
      if(rh&&rh!==location.hostname)refHost=rh;}}catch(e){}
    send('pv',refHost);
    document.addEventListener('click',function(ev){
      var a=ev.target&&ev.target.closest?ev.target.closest('a'):null;if(!a)return;
      var h=a.getAttribute('href')||'';
      if(h.indexOf('wa.me')>-1)send('ev','whatsapp');
      else if(h.indexOf('mailto:')===0)send('ev','email');
      else if(h.indexOf('tel:')===0)send('ev','phone');
      else if(a.id==='srb-link')send('ev','season-ribbon');
    },true);
    var cf=document.querySelector('.cform');
    if(cf)cf.addEventListener('submit',function(){send('ev','form-submit');});
  }catch(e){}

  /* lightbox — click any gallery/hero photo to view it full-screen.
     Builds one overlay per page, arrow keys + swipe-free prev/next, Esc/backdrop
     to close. Only binds to real photographs (.frame img inside .tgallery or
     .grid-2/.grid-3 galleries), never UI imagery. */
  try{
    var imgs=[].slice.call(document.querySelectorAll('.tgallery img, section .grid-2 .frame img'));
    if(imgs.length){
      var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');
      lb.setAttribute('aria-label','Image viewer');lb.innerHTML=
        '<button class="lb-x" aria-label="Close">×</button>'+
        '<button class="lb-p" aria-label="Previous">‹</button>'+
        '<img alt="">'+
        '<button class="lb-n" aria-label="Next">›</button>';
      document.body.appendChild(lb);
      var pic=lb.querySelector('img'),cur=0;
      function show(i){cur=(i+imgs.length)%imgs.length;
        pic.src=imgs[cur].src;pic.alt=imgs[cur].alt||'';lb.classList.add('open');
        document.body.style.overflow='hidden';}
      function hide(){lb.classList.remove('open');document.body.style.overflow='';}
      imgs.forEach(function(im,i){im.style.cursor='zoom-in';
        im.addEventListener('click',function(){show(i);});});
      lb.querySelector('.lb-x').addEventListener('click',hide);
      lb.querySelector('.lb-p').addEventListener('click',function(e){e.stopPropagation();show(cur-1);});
      lb.querySelector('.lb-n').addEventListener('click',function(e){e.stopPropagation();show(cur+1);});
      lb.addEventListener('click',function(e){if(e.target===lb)hide();});
      document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;
        if(e.key==='Escape')hide();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
      if(imgs.length<2){lb.querySelector('.lb-p').style.display='none';lb.querySelector('.lb-n').style.display='none';}
    }
  }catch(e){}

  /* destination strip arrows (homepage) */
  var strip=document.getElementById('dstrip');
  if(strip){var pv=document.getElementById('dprev'),nx=document.getElementById('dnext');
    if(pv)pv.addEventListener('click',function(){strip.scrollBy({left:-360,behavior:'smooth'})});
    if(nx)nx.addEventListener('click',function(){strip.scrollBy({left:360,behavior:'smooth'})});}
})();
`;
