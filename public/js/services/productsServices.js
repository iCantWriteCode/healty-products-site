app.service('$products', function($http) {
	return {
		getAll() {
			return $http.get('${url}/products/all').then((res) => res.data);
		},
		getOneBySlug(slug) {
			return $http.get(`${url}/products/one-slug/${slug}`).then((res) => res.data);
		},
		getByCategory(category) {
			return $http.post(`${url}/products/by-category/${category}/`).then((res) => res.data);
		}
	};
});
