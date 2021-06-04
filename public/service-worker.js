/////////////////////////////////////////////////////////////////////////////
// You can find dozens of practical, detailed, and working examples of 
// service worker usage on https://github.com/mozilla/serviceworker-cookbook
/////////////////////////////////////////////////////////////////////////////

// Cache name
var CACHE_NAME = 'cache-version-1';

var REQUIRED_FILES = [
  'index.html',
  '/',
  'https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap',
  'https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js',
  'assets/js/lib/jquery-3.6.0.min.js',
  'assets/js/lib/popper.min.js',
  'assets/js/lib/bootstrap.min.js',
  'assets/js/plugins/owl-carousel/owl.carousel.min.js',
  'assets/js/base.js',
  'assets/css/inc/owl-carousel/owl.carousel.min.css',
  'assets/css/inc/owl-carousel/owl.theme.default.css',
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