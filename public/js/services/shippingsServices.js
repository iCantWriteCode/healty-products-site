app.service('$shippings', function($http) {
	return {
		getAll() {
			return $http
				.get(`${url}/shippings/all`, {
					headers: {
						token: localStorage.token
					}
				})
				.then((res) => res.data);
		}
	};
});
