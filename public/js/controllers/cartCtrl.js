app.controller('cart', function($scope, $payment) {
	$scope.$on('cart changed', () => ($scope.cart = JSON.parse(localStorage.cart)));

	$scope.cart = JSON.parse(localStorage.cart);

	$scope.getSubTotal = (cart) => $payment.subTotal(cart);
});
