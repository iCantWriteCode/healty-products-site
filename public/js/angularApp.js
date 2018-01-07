const app = angular.module('healthy_product_app', ['ngRoute', 'slick']);

var cart = [];
if (!localStorage.cart) localStorage.setItem('cart', JSON.stringify(cart)); // Init Empty cart if not defined

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: '../views/home.html'
		})
		.when('/product-listing', {
			templateUrl: '../views/product-listing.html'
		})
		.when('/product-page', {
			templateUrl: '../views/product-page.html'
		})
		.when('/cart', {
			templateUrl: '../views/cart.html'
		})
		.when('/checkout', {
			templateUrl: '../views/checkout.html'
		})
		.when('/contact', {
			templateUrl: '../views/contact.html'
		});
});