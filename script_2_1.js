
// PRELOADER
window.addEventListener('load',()=>{document.getElementById('preloader').classList.add('hide')});

// HEADER SCROLL
window.addEventListener('scroll',()=>{
 document.querySelector('header').classList.toggle('scrolled', scrollY>20);
 document.getElementById('toTop').classList.toggle('show', scrollY>600);
});

// REVEAL ON SCROLL
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// HERO SLIDER AUTO SHUFFLE
const slides=document.querySelectorAll('.hero-slide');
const dots=document.querySelectorAll('.dot');
let cur=0, timer;
function go(i){slides[cur].classList.remove('active'); dots[cur].classList.remove('active'); cur=(i+slides.length)%slides.length; slides[cur].classList.add('active'); dots[cur].classList.add('active')}
function next(){go(cur+1)}
if(slides.length){timer=setInterval(next,4500); dots.forEach((d,i)=>d.addEventListener('click',()=>{go(i); clearInterval(timer); timer=setInterval(next,4500)}))}

// STATS MOUSE TRACK
document.querySelectorAll('.stat').forEach(s=>s.addEventListener('mousemove',e=>{const r=s.getBoundingClientRect(); s.style.setProperty('--x', (e.clientX-r.left)+'px'); s.style.setProperty('--y', (e.clientY-r.top)+'px')}))

// LIGHTBOX
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lbImg');
document.querySelectorAll('.g-item').forEach(it=>it.addEventListener('click',()=>{lbImg.src=it.querySelector('img').src; lb.classList.add('open')}));
lb?.addEventListener('click',()=>lb.classList.remove('open'));

// TO TOP
document.getElementById('toTop').addEventListener('click',()=>scrollTo({top:0, behavior:'smooth'}));

// COUNTER
const counters=document.querySelectorAll('[data-count]');
const io2=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){let el=e.target, t=+el.dataset.count, c=0; const step=t/60; const iv=setInterval(()=>{c+=step; if(c>=t){c=t; clearInterval(iv)} el.textContent=Math.round(c)},16); io2.unobserve(el)}})});
counters.forEach(c=>io2.observe(c));


// THEME
const themeBtn=document.getElementById('themeBtn');
const savedTheme=localStorage.getItem('marikopo-theme')||'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeBtn.textContent=savedTheme==='dark'?'☀️':'🌙';
themeBtn?.addEventListener('click',()=>{
 const cur=document.documentElement.getAttribute('data-theme');
 const next=cur==='dark'?'light':'dark';
 document.documentElement.setAttribute('data-theme', next);
 localStorage.setItem('marikopo-theme', next);
 themeBtn.textContent=next==='dark'?'☀️':'🌙';
});

// LANGUAGE SWITCHER - NO ERRORS, FALLBACK TO EN
let currentLang=localStorage.getItem('marikopo-lang')||'en';
const i18nData = {"en": {"home": "Home", "about": "About", "ethos": "Ethos", "staff": "Staff", "academics": "Academics", "admissions": "Admissions", "sports": "Sports", "gallery": "Gallery", "news": "News", "contact": "Contact", "badge": "Salvation Army Education • Marikopo Village", "hero_title": "Building Character, Academic Excellence & Christian Service", "hero_desc": "ZIMSEC success from the heart of Dema, Seke — where discipline meets compassion.", "apply_btn": "Apply for 2026 Intake →", "discover_btn": "Discover Our Story", "welcome_title": "Welcome from the Head", "welcome_p": "Welcome to Marikopo Secondary, a mission school where Truth, Service & Discipline is lived daily. We blend rigorous ZIMSEC academics, Christian formation, and practical skills for learners from Seke, Dema and beyond.", "why_title": "Why Marikopo Stands Out", "notice_title": "Notice Board", "stat_pass": "% Pass Target O-Level", "stat_learners": "+ Learners Enrolled", "stat_teachers": "Qualified Teachers", "stat_years": "Years of Service"}, "sn": {"home": "Musha", "about": "Nezvedu", "ethos": "Chitendero", "staff": "Vashandi", "academics": "Zvidzidzo", "admissions": "Kunyoresa", "sports": "Mitambo", "gallery": "Mifananidzo", "news": "Nhau", "contact": "Bata Nesu", "badge": "Dzidzo yeSalvation Army • Musha weMarikopo", "hero_title": "Kuvaka Hunhu, Kunaka Muzvidzidzo & Kushandira Mwari", "hero_desc": "Kubudirira muZIMSEC kubva pamwoyo weDema, Seke — panosangana chirango netsitsi.", "apply_btn": "Nyorera Gore ra2026 →", "discover_btn": "Ziva Nhoroondo Yedu", "welcome_title": "Kugamuchirwa kubva kuna Mukuru weChikoro", "welcome_p": "Mauya kuMarikopo Secondary, chikoro chehumishinari panorarama Chokwadi, Kushandira & Chirango zuva nezuva. Tinobatanidza zvidzidzo zvakasimba zveZIMSEC, kudzidziswa kwechiKristu, uye hunyanzvi hunoshanda kuvadzidzi vanobva kuSeke, Dema nekupfuura.", "why_title": "Nei Marikopo Yakasiyana", "notice_title": "Bhodhi reZviziviso", "stat_pass": "% Chinangwa cheKupasa O-Level", "stat_learners": "+ Vadzidzi Vakanyoresa", "stat_teachers": "Vadzidzisi Vane Hunyanzvi", "stat_years": "Makore Ebasa"}, "nd": {"home": "Ikhaya", "about": "Ngathi", "ethos": "Inkolo", "staff": "Abasebenzi", "academics": "Izifundo", "admissions": "Ukubhalisa", "sports": "Ezemidlalo", "gallery": "Izithombe", "news": "Izindaba", "contact": "Xhumana", "badge": "Imfundo yeSalvation Army • Isigodi seMarikopo", "hero_title": "Kwakha Isimilo, Ubunono Ezifundweni & Ukukhonza UNkulunkulu", "hero_desc": "Impumelelo yeZIMSEC esuka enhliziyweni yeDema, Seke — lapho kuhlangana khona isiyalo lomusa.", "apply_btn": "Faka Isicelo sika2026 →", "discover_btn": "Thola Umlando Wethu", "welcome_title": "Ukwamukela okuvela kuNhloko yesikole", "welcome_p": "Siyakwamukela eMarikopo Secondary, isikole se mission lapho iQiniso, Inkonzo & Isiyalo kuhlala khona nsuku zonke. Sihlanganisa izifundo eziqinileyo zeZIMSEC, ukwakheka kobuKristu, kanye lamakhono asebenzayo kubafundi abavela eSeke, Dema langale.", "why_title": "Kungani iMarikopo Ivehlukile", "notice_title": "Ibhodi Lezaziso", "stat_pass": "% Umgomo Wokuphasa O-Level", "stat_learners": "+ Abafundi Ababhalisiwe", "stat_teachers": "Othisha Abaqeqeshiweyo", "stat_years": "Iminyaka Yenkonzo"}};
function applyLang(lang){
 currentLang=lang;
 localStorage.setItem('marikopo-lang', lang);
 document.querySelectorAll('[data-i18n]').forEach(el=>{
   const key=el.getAttribute('data-i18n');
   const txt=i18nData[lang]?.[key] || i18nData['en'][key] || el.textContent;
   el.textContent=txt;
 });
 document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
 document.documentElement.lang=lang;
}
document.querySelectorAll('.lang-btn').forEach(btn=>{
 btn.addEventListener('click',()=>applyLang(btn.dataset.lang));
});
applyLang(currentLang);

// PWA REG
if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js'); }
