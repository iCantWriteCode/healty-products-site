app.controller('navBar', function($scope, $slug) {
	$scope.getSlug = (word) => $slug(word);

	$scope.$on('cart changed', () => ($scope.cart = JSON.parse(localStorage.cart)));
	$scope.cart = JSON.parse(localStorage.cart);
});
