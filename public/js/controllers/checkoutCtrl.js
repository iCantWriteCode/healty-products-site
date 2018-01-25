app.controller('checkout', function($scope, $shippings) {
	initiateNewOrder();
	getShippings();

	function initiateNewOrder() {
		$scope.order = {
			customer: { firstname: '', lastname: '', phone: '', email: '' },
			shipping: { address: '', city: '', country: '', zip: '', company: '', price: '' },
			items: [],
			total: 0
		};
	}

	function getShippings() {
		$shippings.getAll().then((shippings) => ($scope.shippings = shippings)).catch((res) => console.warn(res.data));
	}
});
