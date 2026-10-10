// ---------------------------------------------------------------------------
// Progressive-enhancement script, bundled once by Base.astro.
//
// This used to be a template literal exported as a string and written into
// every page with `set:html`. It is identical on all 171 of them, so that
// shipped the same 12KB in 171 documents — about 2MB of duplicate bytes, and
// not one of them cacheable. As a real module Astro hoists it into
// /_astro/*.js: fetched once, cached for the visit, and the constants below
// are now referenced directly instead of interpolated into a string.
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
      var n=Math.min(DUST_MAX,Math.round(W*H/DUST_DENSITY));
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
    if(nav)nav.classList.toggle('scrolled',y>NAV_SCROLL_THRESHOLD);
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

  /* Nav dropdowns. Hover and keyboard focus are handled in CSS; this is only
     for touch, where neither exists — the chevron beside each group label
     toggles its panel, and opening one closes the others. */
  var ddws=document.querySelectorAll('.ddw');
  Array.prototype.forEach.call(ddws,function(w){
    var t=w.querySelector('.ddtoggle');if(!t)return;
    t.addEventListener('click',function(e){
      e.preventDefault();e.stopPropagation();
      var open=!w.classList.contains('open');
      Array.prototype.forEach.call(ddws,function(o){
        o.classList.remove('open');
        var b=o.querySelector('.ddtoggle');if(b)b.setAttribute('aria-expanded','false');
      });
      if(open){w.classList.add('open');t.setAttribute('aria-expanded','true');KEV('nav-menu');}
    });
  });
  document.addEventListener('click',function(e){
    Array.prototype.forEach.call(ddws,function(w){
      if(!w.contains(e.target)){
        w.classList.remove('open');
        var b=w.querySelector('.ddtoggle');if(b)b.setAttribute('aria-expanded','false');
      }
    });
  });

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
    /* The campaign tag on the landing URL. A Google Ads click arrives as
       ?gad_source=1&gad_campaignid=…&gclid=<~90 opaque chars>, which the
       80-character cut below used to slice through — and, read as-is, the
       visit came from google.com and was filed as unpaid Google search. So a
       paid click is reduced to what the dashboard needs: that it was paid,
       and which campaign. The click id itself is deliberately NOT written to
       the analytics log, which by design holds nothing that can be tied back
       to a person; it reaches the enquiry email instead, where the visitor
       has chosen to identify themselves (GoogleTag.astro → ContactForm). */
    var QS=(function(){
      var raw=location.search.replace(/^\?/,'');
      try{
        var u=new URLSearchParams(raw);
        if(u.get('gclid')||u.get('gbraid')||u.get('wbraid')||u.get('gad_source')){
          var cid=(u.get('gad_campaignid')||'').replace(/\D/g,'').slice(0,20);
          return 'src=google-ads'+(cid?'&cid='+cid:'');
        }
        if(u.get('msclkid'))return 'src=microsoft-ads';
      }catch(e){}
      return raw.slice(0,80);
    })();
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
        KEV('pick',h.replace(/^\.\//,'').replace(/\.html$/,''));
    },true);

    /* Enquiry funnel: a form that is started but not sent is the single most
       actionable number on the dashboard. */
    var cf=document.querySelector('.cform');
    if(cf){
      var began=false;
      cf.addEventListener('focusin',function(){if(!began){began=true;KEV('form-start');}});
    }
    /* The outcome, not the attempt. Listening on 'submit' counted a message
       the server rejected as a conversion, which made the funnel on the
       dashboard read better than reality. ContactForm dispatches this once it
       knows what actually happened. */
    document.addEventListener('kemet:enquiry',function(e){
      var ok=!!(e.detail&&e.detail.ok);
      KEV(ok?'form-submit':'form-failed');
      /* Google Ads hears about the same outcome, and only the good one. The
         form posts over fetch, so the URL never changes and Google has no
         page view to count — this event is the only signal it gets. */
      if(ok&&window.KEMET_ADS_SEND_TO&&typeof window.gtag==='function'){
        window.gtag('event','conversion',{send_to:window.KEMET_ADS_SEND_TO});
      }
    });

    /* Site search. A query that found nothing is recorded under its own event
       name: that list is visitors stating, in their own words, what they came
       for and did not find. */
    document.addEventListener('kemet:search',function(e){
      var d=e.detail||{};
      KEV(d.hits?'search':'search-none',d.q);
    });
  }catch(e){}

  /* Kemet Ultra's written brief (components/ultra/UltraBrief.astro). The same
     four behaviours as ContactForm's inline script — time on page, the ad
     click id, the outcome event, sending in place — kept here rather than in
     the page: inline, it pushed the heaviest Ultra page over the 30KB budget,
     and here it is fetched once and cached. Placed after the 'kemet:enquiry'
     listener above, so even the ?sent= fallback is counted. */
  try{
    var bf=document.querySelector('.vbrief-form');
    if(bf){
      var bbox=bf.parentNode,bok=bbox.querySelector('.cform-note--ok'),berr=bbox.querySelector('.cform-note--err');
      var breport=function(sent){document.dispatchEvent(new CustomEvent('kemet:enquiry',{detail:{ok:sent}}));};
      var bsent=new URLSearchParams(location.search).get('sent');
      if(bsent!==null){
        breport(bsent==='1');
        (bsent==='1'?bok:berr).hidden=false;
        var bt=document.getElementById('message-us');if(bt)bt.scrollIntoView({block:'start'});
      }
      var bt0=Date.now();
      bf.addEventListener('submit',function(){
        bf.kt.value=String(Math.round((Date.now()-bt0)/1000));
        try{var gid=sessionStorage.getItem('kemet_gclid');if(gid)bf.gclid.value=gid;}catch(e){}
      });
      if(window.fetch){
        var bbtn=bf.querySelector('.vbrief-send'),blab=bbtn.querySelector('span'),bidle=blab.textContent;
        bf.querySelectorAll('input[required], input[type=email]').forEach(function(el){
          el.addEventListener('blur',function(){el.classList.toggle('cform-bad',!el.checkValidity()&&el.value!=='');});
          el.addEventListener('input',function(){el.classList.remove('cform-bad');});
        });
        bf.addEventListener('submit',function(ev){
          if(!bf.checkValidity())return;
          ev.preventDefault();
          bbtn.disabled=true;blab.textContent=bbtn.dataset.sending||'Sending…';
          bok.hidden=true;berr.hidden=true;
          fetch(bf.action,{method:'POST',body:new FormData(bf),headers:{'X-Requested-With':'fetch'}})
            .then(function(r){return r.json();})
            .then(function(d){
              var good=!!(d&&d.ok);
              breport(good);
              if(good)bf.reset();
              var note=good?bok:berr;note.hidden=false;
              note.scrollIntoView({block:'center',behavior:'smooth'});
            })
            .catch(function(){bf.submit();})   /* network hiccup: the classic full-page send */
            .finally(function(){bbtn.disabled=false;blab.textContent=bidle;});
        });
      }
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
      /* Swipe between photographs on a phone, as the arrows do. */
      var tx=null;
      lb.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
      lb.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;tx=null;
        if(Math.abs(dx)>40&&imgs.length>1)show(cur+(dx<0?1:-1));});
    }
  }catch(e){}

  /* ---------------------------------------------------------------------
     Rails. global.css turns a crowded gallery or card grid into a sideways
     strip (see RAILS there); this adds two arrows, a count under cards, and,
     for photographs only, a slow advance every 4.5s — so a phone visitor
     sees the gallery move without having to ask for it.

     The advance is a courtesy, never a fight: it waits until the strip is
     mostly on screen, holds while a pointer or focus is on it, and stops for
     good the first time the visitor swipes, scrolls or presses an arrow —
     they have taken the wheel. It never starts for anyone who has asked for
     reduced motion. Cards (prices, routes) are never advanced for the
     reader: moving a card away while someone reads its price is the thing
     that makes a carousel infuriating.
     --------------------------------------------------------------------- */
  try{
    var reduceMo=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    var railed=false;
    [].forEach.call(document.querySelectorAll('.grid-2,.grid-3,.grid-4'),function(g){
      if(g.children.length<4||!g.querySelector(':scope > .tgallery, :scope > .jcard, :scope > .tease, :scope > .eat'))return;
      var photo=!!g.querySelector(':scope > .tgallery');
      var box=document.createElement('div');box.className='rail-box'+(photo?' rail-box--photo':'');
      g.parentNode.insertBefore(box,g);box.appendChild(g);
      var nav=document.createElement('div');nav.className='rail-nav';
      nav.innerHTML='<button type="button" class="rail-btn rail-prev" aria-label="Previous"><span>‹</span></button>'+
        '<span class="rail-count" aria-hidden="true"></span>'+
        '<button type="button" class="rail-btn rail-next" aria-label="Next"><span>›</span></button>';
      box.appendChild(nav);
      var prev=nav.querySelector('.rail-prev'),next=nav.querySelector('.rail-next'),count=nav.querySelector('.rail-count');
      var rtl=getComputedStyle(g).direction==='rtl';
      function on(){return getComputedStyle(g).overflowX==='auto'&&g.scrollWidth>g.clientWidth+4;}
      function step(){var a=g.children[0],b=g.children[1];
        return b?Math.abs(b.getBoundingClientRect().left-a.getBoundingClientRect().left):g.clientWidth;}
      function pos(){return Math.abs(g.scrollLeft);}
      function atEnd(){return pos()>g.scrollWidth-g.clientWidth-4;}
      function sync(){var r=on();box.classList.toggle('is-rail',r);if(!r)return;
        prev.disabled=pos()<4;next.disabled=atEnd();
        var n=g.children.length,st=step(),vis=Math.max(1,Math.round(g.clientWidth/st));
        count.textContent=(atEnd()?n:Math.min(n,Math.round(pos()/st)+vis))+' / '+n;}
      function go(d){g.scrollBy({left:(rtl?-d:d)*step(),behavior:reduceMo?'auto':'smooth'});}
      var stop=false,hold=false,seen=false,raf=0;
      function took(){stop=true;if(!railed){railed=true;KEV('rail');}}
      prev.addEventListener('click',function(){took();go(-1);});
      next.addEventListener('click',function(){took();go(1);});
      g.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(function(){raf=0;sync();});},{passive:true});
      window.addEventListener('resize',sync);
      sync();
      if(photo&&!reduceMo){
        /* Only a SIDEWAYS gesture counts as taking over: a thumb that lands
           on the gallery while scrolling down the page is not a choice. */
        var t0x=0,t0y=0;
        g.addEventListener('touchstart',function(e){t0x=e.touches[0].clientX;t0y=e.touches[0].clientY;},{passive:true});
        g.addEventListener('touchmove',function(e){var dx=Math.abs(e.touches[0].clientX-t0x),dy=Math.abs(e.touches[0].clientY-t0y);
          if(dx>10&&dx>dy)stop=true;},{passive:true});
        g.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY))stop=true;},{passive:true});
        g.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse')stop=true;});
        g.addEventListener('keydown',function(){stop=true;});
        g.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hold=true;});
        g.addEventListener('pointerleave',function(){hold=false;});
        box.addEventListener('focusin',function(){hold=true;});
        box.addEventListener('focusout',function(){hold=false;});
        if('IntersectionObserver' in window){
          new IntersectionObserver(function(es){seen=es[0].isIntersecting;},{threshold:.6}).observe(g);
        }else seen=true;
        setInterval(function(){
          if(stop||hold||!seen||document.hidden||!on()||document.querySelector('.lb.open'))return;
          if(atEnd())g.scrollTo({left:0,behavior:'smooth'});else go(1);
        },4500);
      }
    });
  }catch(e){}

  /* destination strip arrows (homepage) */
  var strip=document.getElementById('dstrip');
  if(strip){var pv=document.getElementById('dprev'),nx=document.getElementById('dnext');
    if(pv)pv.addEventListener('click',function(){strip.scrollBy({left:-360,behavior:'smooth'});KEV('strip')});
    if(nx)nx.addEventListener('click',function(){strip.scrollBy({left:360,behavior:'smooth'});KEV('strip')});}

  /* ---------------------------------------------------------------------
     Language hint (Oct 2026). Italian was the second language among the
     site's visitors in the 30 days to 10 Oct 2026 (46, ahead of German), yet
     the Italian home page had 9 views: Italian readers were landing on
     English pages and staying there. Where the page they are on HAS a
     version in the language their browser asks for first — its hreflang
     alternate — say so, once, in that language.

     Never a redirect: the page they asked for is the page they get, and a
     search engine sees exactly the same HTML, which is what Google asks of
     any language detection. Followed or dismissed, it does not come back,
     and it steps out of the way once the reader scrolls past the first
     screen.
     --------------------------------------------------------------------- */
  try{
    var LHK='kemet_langhint_v1';
    var LHT={
      it:['Questa pagina è disponibile anche in italiano.','Leggi in italiano'],
      de:['Diese Seite gibt es auch auf Deutsch.','Auf Deutsch lesen'],
      fr:['Cette page existe aussi en français.','Lire en français'],
      es:['Esta página también está en español.','Leer en español'],
      pt:['Esta página também está em português.','Ler em português'],
      ru:['Эта страница есть и на русском языке.','Читать на русском'],
      ar:['هذه الصفحة متاحة أيضًا باللغة العربية.','اقرأ بالعربية'],
      id:['Halaman ini juga tersedia dalam bahasa Indonesia.','Baca dalam bahasa Indonesia'],
      ms:['Halaman ini juga tersedia dalam bahasa Melayu.','Baca dalam bahasa Melayu']
    };
    var lhSeen=null;try{lhSeen=localStorage.getItem(LHK);}catch(e){}
    var lhPref=((navigator.languages&&navigator.languages[0])||navigator.language||'').slice(0,2).toLowerCase();
    var lhAlt=LHT[lhPref]&&document.querySelector('link[rel="alternate"][hreflang="'+lhPref+'"]');
    if(!lhSeen&&lhAlt&&/^en/i.test(document.documentElement.lang)){
      var lh=document.createElement('div');
      lh.className='lhint';lh.setAttribute('role','note');lh.lang=lhPref;if(lhPref==='ar')lh.dir='rtl';
      lh.innerHTML='<p></p><a></a><button type="button" aria-label="Close">×</button>';
      lh.querySelector('p').textContent=LHT[lhPref][0];
      var lhA=lh.querySelector('a');lhA.textContent=LHT[lhPref][1]+(lhPref==='ar'?' ←':' →');
      lhA.href=lhAlt.getAttribute('href');lhA.hreflang=lhPref;
      document.body.appendChild(lh);
      var lhKeep=function(){try{localStorage.setItem(LHK,'1');}catch(e){}};
      lhA.addEventListener('click',function(){lhKeep();KEV('lang-switch',lhPref);});
      lh.querySelector('button').addEventListener('click',function(){lhKeep();lh.remove();});
      window.addEventListener('scroll',function(){lh.classList.toggle('lhint--away',scrollY>innerHeight*.8);},{passive:true});
      KEV('lang-hint',lhPref);
    }
  }catch(e){}

  /* ---------------------------------------------------------------------
     Consent bar. Markup and styling are in components/ConsentBanner.astro;
     this is here rather than inline on the page because the zone list, sent
     with all 282 pages, pushed the heaviest of them past the audit's budget.

     Which zones. Everything under Europe/ counts as "ask", minus the ones
     outside the EEA, plus the handful of EEA places filed elsewhere in the
     tz database. The list that must be right is the SUBTRACTION, because a
     name missing from it only means someone is asked who need not have been
     — a shrug. Getting the addition wrong is the one that silently loses an
     EEA visitor's consent prompt, so the broad Europe/ prefix carries it.
     --------------------------------------------------------------------- */
  try{
    var KEY='kemet_consent_v1';
    /* European, but not EEA/UK/CH. */
    var NOT_EEA={'Europe/Moscow':1,'Europe/Istanbul':1,'Europe/Kiev':1,'Europe/Kyiv':1,
      'Europe/Minsk':1,'Europe/Belgrade':1,'Europe/Sarajevo':1,'Europe/Skopje':1,
      'Europe/Tirane':1,'Europe/Podgorica':1,'Europe/Chisinau':1,'Europe/Kaliningrad':1,
      'Europe/Samara':1,'Europe/Simferopol':1,'Europe/Volgograd':1,'Europe/Saratov':1,
      'Europe/Astrakhan':1,'Europe/Ulyanovsk':1,'Europe/Kirov':1,'Europe/Uzhgorod':1,
      'Europe/Zaporozhye':1};
    /* EEA, but not filed under Europe/. */
    var ALSO={'Atlantic/Azores':1,'Atlantic/Madeira':1,'Atlantic/Canary':1,
      'Atlantic/Reykjavik':1,'Africa/Ceuta':1,'Asia/Nicosia':1,'Arctic/Longyearbyen':1};

    var bar=document.getElementById('cbar');
    if(bar){
      var tell=function(state){
        if(typeof window.gtag==='function'){
          window.gtag('consent','update',{ad_storage:state,ad_user_data:state,
            ad_personalization:state,analytics_storage:state});
        }
      };
      var saved=null;
      try{saved=localStorage.getItem(KEY)}catch(e){}
      if(saved==='granted'||saved==='denied'){ tell(saved); }
      else{
        var tz='';
        try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
        var ask=(tz.indexOf('Europe/')===0&&!NOT_EEA[tz])||!!ALSO[tz];
        if(ask){
          /* Clear the seasonal ribbon. It is position:fixed, so offsetParent
             is null even when plainly on screen — measure the box instead. */
          var lift=function(){
            var rb=document.querySelector('.srb'),h=0;
            if(rb&&!rb.hidden&&getComputedStyle(rb).display!=='none')
              h=Math.round(rb.getBoundingClientRect().height);
            bar.style.setProperty('--cbar-lift',h+'px');
          };
          lift();
          addEventListener('resize',lift,{passive:true});
          addEventListener('load',lift);
          setTimeout(lift,1200);
          var rbEl=document.querySelector('.srb');
          if(rbEl)rbEl.addEventListener('click',function(){setTimeout(lift,50)});

          bar.hidden=false;
          bar.addEventListener('click',function(ev){
            var btn=ev.target.closest('[data-consent]');
            if(!btn)return;
            var state=btn.getAttribute('data-consent');
            try{localStorage.setItem(KEY,state)}catch(e){}
            tell(state);
            bar.hidden=true;
            KEV(state==='granted'?'consent-yes':'consent-no');
          });
        }
      }
    }
  }catch(e){}
})();
