app.controller('products', function($scope, $routeParams, $products, $slug, $cart) {
	const categories = $routeParams.categories.split('/');
	const searchCategory = categories[categories.length - 1];

	getProducts();

	$scope.addToCart = (product) => {
		product.amount = 1;
		$cart.addProduct(product);
		$scope.message = 'Το προϊόν προστέθηκε στο καλάθι';
	};

	function getProducts() {
		$products
			.getByCategory(searchCategory)
			.then((products) => ($scope.products = products))
			.catch((res) => console.warn(res));
	}
});
