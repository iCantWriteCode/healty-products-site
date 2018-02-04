app.controller('checkout', function ($scope, $products, $shippings, $payment, $cart) {
	const cart = JSON.parse(localStorage.cart);
	$scope.cart = JSON.parse(localStorage.cart);
	$scope.$on('cart changed', () => ($scope.cart = JSON.parse(localStorage.cart)));

	const subTotal = $payment.subTotal(cart);
	const totalWeight = $products.totalWeight(cart);

	initiateNewOrder();
	$shippings
		.getAll()
		.then((shippings) => {
			shippings.forEach((shipping) => calculateShippingCost(shipping));

			$scope.shippings = shippings;
			$scope.total = $payment.total(subTotal, shippings[0].price);

			configOrder($scope.shippings[0], $scope.total);
		})
		.catch((res) => console.warn(res));

	function calculateShippingCost(shipping) {
		const shippingCostCalculator = $shippings.costDescriptor(shipping, totalWeight);
		shipping.price = shippingCostCalculator(subTotal);
	}

	function configOrder(shipping, total) {
		$scope.order.shipping.company = shipping.company;
		$scope.order.shipping.price = shipping.price;
		$scope.order.items = cart.map((item) => ({
			id: item._id,
			name: item.name,
			amount: item.amount
		}));
		$scope.order.total = total;
	}

	function initiateNewOrder() {
		$scope.order = {
			customer: {
				firstname: '',
				lastname: '',
				phone: '',
				email: ''
			},
			shipping: {
				address: '',
				city: '',
				country: '',
				zip: '',
				company: '',
				price: ''
			},
			items: [],
			total: 0
		};
	}

	$scope.changeShippingMethod = (shipping) => {
		$scope.total = $payment.total(subTotal, shipping.price);
		configOrder(shipping, $scope.total);
	};

	$scope.removeFromCart = (product) => $cart.removeProduct(product);
	$scope.submitOrder = (order) => console.log(order);
});