app.service('$products', function($http) {
	return {
		getAll() {
			return $http.get('${url}/products/all').then((res) => res.data);
		},
		getOneBySlug(slug) {
			return $http.get(`${url}/products/one-slug/${slug}`).then((res) => res.data);
		},
		getByCategory(category, page) {
			return $http.post(`${url}/products/by-category/${category}/`, { page }).then((res) => res.data);
		},

		totalWeight: (cart) => {
			let totalWeight = 0;
			cart.forEach((product) => (totalWeight += product.weight * product.amount));

			return totalWeight;
		}
	};
});
