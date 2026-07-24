
const CACHE='marikopo-v3';
const ASSETS=['index.html','about.html','ethos.html','staff.html','academics.html','admissions.html','sports.html','gallery.html','news.html','contact.html','style.css','script.js','manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
