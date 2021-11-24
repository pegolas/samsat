var CACHE_NAME = 'cache-version-1';

var REQUIRED_FILES = [
  'index.html',
  '/',
  'assets/font/GoogleSans-Regular.woff',
  'assets/font/GoogleSans-Regular.woff2',
  'assets/font/GoogleSans-Medium.woff',
  'assets/font/GoogleSans-Medium.woff2',
  'assets/font/GoogleSans-Bold.woff',
  'assets/font/GoogleSans-Bold.woff2',
  'assets/js/lib/jquery-3.6.0.min.js',
  'assets/js/lib/popper.min.js',
  'assets/js/lib/bootstrap.min.js',
  'assets/js/base.js',
  'assets/css/inc/bootstrap/bootstrap.min.css',
  'assets/css/style.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(REQUIRED_FILES);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        };
        if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
          return;
        };
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});