const cacheName = 'golu-store-v1';
const assets = ['./', './index.html']; // Apni main file ka naam check karlein

self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
