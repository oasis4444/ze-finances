// Service worker Z&E : application utilisable hors ligne, mises à jour automatiques.
const CACHE = 'ze-v5';
const SHELL = ['./', './index.html', './firebase-config.js', './i18n.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/favicon.ico'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
const save = (req, res) => { if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return res; };
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  // Firebase (données, connexion) : toujours en direct, jamais en cache.
  if (/firestore|identitytoolkit|securetoken|firebaseinstallations/.test(u.hostname)) return;
  if (u.origin === location.origin) {
    // Fichiers de l'application : réseau d'abord (mises à jour), cache si hors ligne.
    e.respondWith(fetch(r).then(res => save(r, res)).catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
    return;
  }
  // Bibliothèques et polices : cache d'abord.
  if (/gstatic\.com|googleapis\.com|cdnjs\.cloudflare\.com/.test(u.hostname)) {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => save(r, res))));
  }
});
