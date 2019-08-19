
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw/service-worker.js')
	.then(function() {
		console.log('registered!');
	})
	.catch(function() {
		console.log('failed!');
	})
}
