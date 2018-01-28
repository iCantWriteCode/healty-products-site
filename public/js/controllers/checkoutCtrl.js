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

	function mapOrderShipping(shipping) {
		$scope.order.shipping.company = shipping.company;
	}

	function getShippings() {
		$shippings
			.getAll()
			.then((shippings) => {
				$scope.shippings = shippings;

				mapOrderShipping(shippings[0]);
			})
			.catch((res) => console.warn(res.data));
	}
});
