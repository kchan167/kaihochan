var staticCacheName = 'kai-site-v0';
var urlToCache = [
    '/',
    'views/aboutme.html',
    'views/contact.html',
    'views/details.html',
    'views/myapp.html',
    'index.html',
    'styles/main.css',
    'styles/icon/arcade-machine.png',
    'styles/icon/calculating.png',
    'styles/icon/chip.png',
    'styles/icon/dog.png',
    'styles/icon/doughnut.png',
    'styles/icon/flash.png',
    'styles/icon/github-logo.png',
    'styles/icon/itunes.png',
    'styles/icon/portfolio.png',
    'styles/icon/travel.png',
    'styles/icon/github-sign.png',
    'styles/icon/linkedin.png',
    'styles/icon/email-1.png',
    'styles/background/pexels-photo-323933.jpeg',
    'styles/background/computer.jpg',
    'styles/background/wood_pattern.png',
    'styles/background/phone-1.jpeg',
    'styles/background/light-1.jpeg',
    'styles/background/memphis-colorful.png',
    'images/animal_card.jpg',
    'images/arcade_game_1.jpg',
    'images/arcade_game_won.jpg',
    'images/calculator-1.png',
    'images/calculator.png',
    'images/feed-reader-testing.png',
    'images/itune_artist_search.jpg',
    'images/matching_game_won.jpg',
    'images/matching_game.jpg',
    'images/portrait.jpg',
    'images/portfolio_1.jpg',
    'images/portfolio_mobile.jpg',
    'images/restaurant-review-app-mobile.png',
    'images/restaurant-review-app-mobile-2.png',
    'images/restaurant-review-app-mobile-3.png',
    'images/restaurant-review-app.png',
    'images/yeoman.png',
    'data/animal_card.json',
    'data/calculator.json',
    'data/classic_arcade_game.json',
    'data/feed_reader_testing.json',
    'data/itunes_artist_search.json',
    'data/memory_game.json',
    'data/mws_restaurant_stage_1.json',
    'data/personal_info.json',
    'data/portfolio_site.json',
    'data/resume.pdf',
    'scripts/app.js',
    'scripts/controllers/aboutme.js',
    'scripts/controllers/contact.js',
    'scripts/controllers/details.js',
    'scripts/controllers/myapp.js',
    'scripts/controllers/time.js',
    'scripts/directives/bg-img.js',
    'scripts/directives/scroll.js',
    'scripts/services/infofinder.js'
];
/**
* @description Install service worker
* @param {string} 'install'
* @param {function} function(event){}
* @returns {cache} Return the given cache which is added a
*                  series of resulting response objects
*/
self.addEventListener('install', function(event) {
    console.log('service worker installed');
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log('Service worker is caching.');
            return cache.addAll(urlToCache);
        })
    );
});
/**
* @description Delete old cache
* @param {string} 'activate'
* @param {function} function(event){}
* @returns {caches} Return caches except the given cache
*                   that suppose to be deleted
*/
addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('kai-') &&
                           cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

/**
* @description Update new cache
* @param {request} request
* @returns {cache} Return an update cache
*/
function update(request) {
    return caches.open(staticCacheName).then(function(cache) {
        return fetch(request).then(function(response) {
            return cache.put(request, response);
        })
    });
}

/**
* @description Register service worker
* @param {string} 'fetch'
* @param {function} function(event){}
* @returns {Promise} Return a promise containing the response
*/
addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );
});

/**
* @description Ensure that updates to the underlying service
*              worker take effect immediately for both the current
*              client and all other active clients
* @param {string} 'message'
* @param {function} function(event){}
*/
addEventListener('message', function(event) {
    if(event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
