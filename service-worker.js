const PRECACHE = 'PRECAHE-v1'

const PRECACHE_URLS = [
    'index.html',
    './', // Alias for index.html
    'demo.js',
    'app.js'
]

self.addEventListener('install', event => {
    event.waitUntil(caches.open(PRECACHE)
        .then(cache, addALL(PRECACHE_URLS))
        .then(self.skipWaiting()))


})
