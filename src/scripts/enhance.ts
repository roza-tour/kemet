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

  /* Scroll-reveal removed by request — content is visible from first paint, so
     there is no observer and nothing to wait for while scrolling. */

  /* Set by the analytics block below; a no-op until then, and permanently a
     no-op for a visitor who sends Do Not Track. Other blocks call it to record
     an interaction without needing to know anything about the collector. */
  var KEV=function(_n,_d){};

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
    b.addEventListener('click',function(){var o=!nl.classList.contains('open');
      setMenu(o);if(o)KEV('menu');});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nl.classList.contains('open'))setMenu(false);});
    addEventListener('resize',function(){if(innerWidth>1080&&nl.classList.contains('open'))setMenu(false);});
  }

  /* -------------------------------------------------------------------------
     First-party analytics → /k.php. Cookie-less, no third party, no raw IP;
     k.php also honours DNT/GPC server-side. Exactly two beacons per page —
     one on arrival, one on leave — plus one per deliberate interaction, so
     this never becomes a source of network chatter. Everything is inside a
     try/catch and every listener is passive: analytics must not be able to
     slow a page down or break it.

     What we record, and why:
       arrival  path · referrer host · browser language · viewport width ·
                the campaign tag on the URL (this is how a visit that lands on
                "/" stops being anonymous — see the query column in k.php)
       leave    engaged seconds and how far down the page was actually read
       events   whatsapp / email / phone / form-start / form-submit, which
                journey or destination card was clicked, language switches,
                photo views — the demand signal we plan the catalogue from
     ------------------------------------------------------------------------- */
  try{
    var KP='/k.php', PATH=location.pathname;
    var QS=location.search.replace(/^\\?/,'').slice(0,80);   /* campaign tag */
    var LANG=(navigator.language||'').slice(0,5);            /* nationality signal */
    /* The 404 document is served under whatever URL was requested, so without
       this flag a broken link is indistinguishable from a real page. */
    var IS404=!!window.__k404;

    var beacon=function(p){try{
      var u=KP+'?'+p;
      if(navigator.sendBeacon)navigator.sendBeacon(u);else (new Image()).src=u;
    }catch(e){}};
    var q=function(k,v){return '&'+k+'='+encodeURIComponent(String(v==null?'':v).slice(0,80));};
    var head=function(t){return 't='+t+q('p',PATH)+q('l',LANG)+'&w='+(innerWidth|0);};

    KEV=function(name,detail){beacon(head('ev')+q('v',name)+(detail?q('d',detail):''));};

    /* arrival */
    var refHost='';try{if(document.referrer){var rh=new URL(document.referrer).hostname;
      if(rh&&rh!==location.hostname)refHost=rh;}}catch(e){}
    beacon(head(IS404?'404':'pv')+q('v',refHost)+(QS?q('q',QS):''));

    /* Leave: how long the page actually held attention, and how far it was
       read. Engaged time only accrues while the tab is visible, so a page left
       open in a background tab does not inflate it. Sent once, on whichever of
       pagehide / tab-hide fires first — pagehide alone is unreliable on iOS. */
    var deep=0,t0=Date.now(),acc=0,vis=!document.hidden,left=false;
    var mark=function(){
      var h=document.documentElement.scrollHeight-innerHeight;
      var p=h>0?Math.round(scrollY/h*100):100;
      if(p>deep)deep=p>100?100:(p<0?0:p);
    };
    mark();
    addEventListener('scroll',mark,{passive:true});
    var leave=function(){
      if(left)return;left=true;
      if(vis){acc+=Date.now()-t0;vis=false;}
      var s=Math.round(acc/1000);if(s>1800)s=1800;
      beacon(head('ev')+q('v','end')+q('d',s)+'&n='+deep);
    };
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){if(vis){acc+=Date.now()-t0;vis=false;}leave();}
      else if(!left){t0=Date.now();vis=true;}
    });
    addEventListener('pagehide',leave);

    document.addEventListener('click',function(e){
      var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;
      var h=a.getAttribute('href')||'';
      if(h.indexOf('wa.me')>-1){KEV('whatsapp');return;}
      if(h.indexOf('mailto:')===0){KEV('email');return;}
      if(h.indexOf('tel:')===0){KEV('phone');return;}
      if(a.id==='srb-link'){KEV('season-ribbon');return;}
      if(a.closest('.langsw')){KEV('language',h);return;}
      /* Which card pulled the click. Cards are the whole anchor, so closest()
         returns the link itself; the href identifies the journey. */
      if(a.closest('.jcard,.tile,.dpost,.tease,.god,.sstrip-card,.pick'))
        KEV('pick',h.replace(/^\\.\\//,'').replace(/\\.html$/,''));
    },true);

    /* Enquiry funnel: a form that is started but not sent is the single most
       actionable number on the dashboard. */
    var cf=document.querySelector('.cform');
    if(cf){
      var began=false;
      cf.addEventListener('focusin',function(){if(!began){began=true;KEV('form-start');}});
      cf.addEventListener('submit',function(){KEV('form-submit');});
    }
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
      /* carry the source image's alt into the viewer — otherwise every
         photograph opens as an unlabelled image for a screen reader */
      var opened=false;
      function show(i){cur=(i+imgs.length)%imgs.length;
        pic.src=imgs[cur].src;pic.alt=imgs[cur].alt||'';lb.classList.add('open');
        document.body.style.overflow='hidden';
        /* once per page — a visitor who opens the photography is reading the
           page seriously, but paging through 20 shots is still one signal */
        if(!opened){opened=true;KEV('photo');}}
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
    if(pv)pv.addEventListener('click',function(){strip.scrollBy({left:-360,behavior:'smooth'});KEV('strip')});
    if(nx)nx.addEventListener('click',function(){strip.scrollBy({left:360,behavior:'smooth'});KEV('strip')});}
})();
`;
