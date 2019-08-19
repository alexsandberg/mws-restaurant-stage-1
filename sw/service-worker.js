// listens for service worker to finish installing
self.addEventListener('install', (event) => {
	// pages to cache
	const urls = [
		'/',
		'/index.html',
		'/restaurant.html',
		'/css/styles.css',
		'/css/responsive.css',
		'/js/dbhelper.js',
		'/js/main.js',
		'/js/restaurant_info.js'
	];

	// caches the pages once service worker finishes installing
	event.waitUntil(
		caches.open('page-cache').then( (cache) => {
			return cache.addAll(urls);
		})			
	)
})

// listens for fetch events
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
		.then( (response) => {
			if(response) {
				return response; // get page from network if possible
			}
			// return the matching response from cache if not connected to network
			return fetch(event.response); 
		})
	)
})