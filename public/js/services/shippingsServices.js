app.service('$shippings', function($http) {
	return {
		getAll() {
			return $http
				.get(`${url}/shippings/all/admin`, {
					headers: {
						token: localStorage.token
					}
				})
				.then((res) => res.data);
		}
	};
});
