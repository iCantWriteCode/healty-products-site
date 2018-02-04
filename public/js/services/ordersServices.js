app.service('$orders', function($http) {
	return {
		submit(order) {
			return $http.post(`${url}/orders/new`, order).then((res) => res.data);
		}
	};
});
