if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('ServiceWorker.js')
		.then(function () {
			console.log('Registration succeed!');
		})
		.catch(function () {
			console.log('Registration failed!');
		});
}