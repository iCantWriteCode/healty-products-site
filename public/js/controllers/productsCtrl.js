app.controller('products', function($scope, $routeParams, $products, $slug, $cart, $anchorScroll) {
	const categories = $routeParams.categories.split('/');
	const searchCategory = categories[categories.length - 1];
	const page = $routeParams.page;
	$scope.url = url
	getProducts(page);
	$anchorScroll('')

	$scope.addToCart = (product) => {
		product.amount = 1;
		$cart.addProduct(product);
		$scope.successMsg = 'Το προϊόν προστέθηκε στο καλάθι';
	};

	function getProducts(page = 1) {
		$products
			.getByCategory(searchCategory, page)
			.then(({ products, pages }) => {
				$scope.products = products;
				createPagination(pages);
			})
			.catch((res) => console.warn(res));
	}

	function createPagination(totalPages) {
		$scope.categories = $routeParams.categories;
		$scope.totalPages = totalPages;
		$scope.pages = new Array(totalPages);
		$scope.currentPage = parseInt($routeParams.page);
	}
});
