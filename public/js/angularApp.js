const app = angular.module('healthy_product_app', [ 'ngRoute', 'slickCarousel', 'vcRecaptcha', 'ngSanitize' ]);

const url =  'http://178.62.198.41'
//'http://localhost:4000';

if (!localStorage.cart) localStorage.setItem('cart', JSON.stringify([]));

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
			controller: 'homeCtrl'
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
			templateUrl: './views/checkout.html',
			controller: 'checkout'
		})
		.when('/contact', {
			templateUrl: './views/contact.html'
		});
});
app.directive('failMessage', function($timeout) {
	return {
		restrict: 'E',
		scope: {
			dur: '=',
			failMsg: '=message'
		},
		templateUrl: '../views/template-components/fail-message.html',
		link(scope, element, attrs, controller, transcludeFn) {
			scope.$watch('failMsg', (oldValue, newValue) => {
				if (!!oldValue) $timeout(() => (scope.failMsg = ''), scope.dur);
			});
		}
	};
});
app.directive('successMessage', function($timeout) {
	return {
		restrict: 'E',
		scope: {
			dur: '=',
			successMsg: '=message'
		},
		templateUrl: '../views/template-components/success-message.html',
		link(scope, element, attrs, controller, transcludeFn) {
			scope.$watch('successMsg', (oldValue, newValue) => {
				if (!!oldValue) $timeout(() => (scope.successMsg = ''), scope.dur);
			});
		}
	};
});
