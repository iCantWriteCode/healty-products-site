app.controller('navBar', function($scope, $http) {
	$scope.$on('cart changed', () => ($scope.cart = JSON.parse(localStorage.cart)));
	$scope.cart = JSON.parse(localStorage.cart);

	$http.get(`${url}/categories/navigation-bar`).then(({ data }) => ($scope.navBar = data));
	$http.get(`${url}/categories/otherProducts-dropdown`).then(({ data }) => {
		$scope.otherProductsDropdown = data
		console.log($scope.otherProductsDropdown)
	})
});
