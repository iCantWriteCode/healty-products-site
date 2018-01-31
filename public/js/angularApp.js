const app = angular.module('healthy_product_app', [ 'ngRoute', 'slick' ]);

const url = 'http://localhost:4000';

if (!localStorage.cart) localStorage.setItem('cart', JSON.stringify([]));

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: './views/home.html'
		})
		.when('/products/:categories*/:page', {
			templateUrl: './views/product-listing.html',
			controller: 'products'
		})
		.when('/product/:slug', {
			templateUrl: './views/product-page.html',
			controller: 'product'
		})
		.when('/cart', {
			templateUrl: './views/cart.html',
			controller: 'cart'
		})
		.when('/checkout', {
			templateUrl: '../views/checkout.html',
			controller: 'checkout'
		})
		.when('/contact', {
			templateUrl: './views/contact.html'
		});
});
