app.controller('checkout', function($scope, $products, $shippings, $orders, $payment, $cart) {
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
		})
		.catch((res) => console.warn(res));

	function calculateShippingCost(shipping) {
		const shippingCostCalculator = $shippings.costDescriptor(shipping, totalWeight);
		shipping.price = shippingCostCalculator(subTotal);
	}

	function configOrder(shipping, payment, total) {
		$scope.order.shipping.company = shipping.company;
		$scope.order.shipping.price = shipping.price;
		$scope.order.payment.method = payment.method;
		$scope.order.payment.cost = payment.cost;
		$scope.order.items = cart.map((item) => ({
			id: item._id,
			name: item.name,
			amount: item.amount,
			price: item.salesPrice || item.price
		}));
		$scope.order.total = total;
	}

	function initiateNewOrder() {
		$scope.order = {
			customer: { firstname: '', lastname: '', phone: '', email: '' },
			shipping: { address: '', city: '', country: '', zip: '', company: '', price: undefined },
			payment: { method: '', cost: undefined, bank: '' },
			items: [],
			total: 0
		};
	}

	$scope.changeShippingMethod = (shipping) => {
		$scope.total = $payment.total(subTotal, shipping.price, $scope.order.payment.cost);
		configOrder(shipping, $scope.order.payment, $scope.total);
	};

	$scope.changePaymentMethod = (payment) => {
		$scope.total = $payment.total(subTotal, $scope.order.shipping.price, payment.cost);
		configOrder($scope.order.shipping, payment, $scope.total);
	};

	$scope.removeFromCart = (product) => $cart.removeProduct(product);
	$scope.submitOrder = (order) => {
		console.log(order);
		$orders.submit(order).then((res) => console.log(res));
	};

	$scope.payments = [
		{ method: 'Αντικαταβολή', cost: 3.0, bank: '' },
		{ method: 'Τραπεζική Κατάθεση', cost: 0, bank: '' }
	];
});
