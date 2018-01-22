app.controller('products', function($scope, $routeParams, $products, $slug, $cart) {
	const categories = $routeParams.categories.split('/');
	const searchCategory = categories[categories.length - 1];

	getProducts();

	$scope.addToCart = (product) => $cart.addProduct(product);

	function getProducts() {
		$products
			.getByCategory(searchCategory)
			.then((products) => ($scope.products = products))
			.catch((res) => console.warn(res));
	}
});
