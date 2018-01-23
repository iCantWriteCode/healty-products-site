app.controller('product', function($scope, $routeParams, $products, $cart) {
	getProductInfo();

	$scope.increaseAmount = () => $scope.amount++;
	$scope.decreaseAmount = () => ($scope.amount > 1 ? $scope.amount-- : null);

	$scope.addToCart = (product) => {
		product.amount = $scope.amount;
		$cart.addProduct(product);

		$scope.message = `Προστέθηκαν ${product.amount} τεμάχια προϊόντος στο καλάθι`;
	};

	function getProductInfo() {
		$products.getOneBySlug($routeParams.slug).then((product) => {
			$scope.product = product;
			$scope.amount = 1;
		});
	}
});
