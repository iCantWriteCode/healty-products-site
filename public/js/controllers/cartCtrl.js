app.controller('cart', function($scope) {
	$scope.$on('cart changed', () => ($scope.cart = JSON.parse(localStorage.cart)));

	$scope.cart = JSON.parse(localStorage.cart);

	$scope.getTotal = (cart) => {
		let total = 0;
		cart.forEach((product) => (total += product.amount * (product.salesPrice || product.price)));
		return total;
	};
});
