app.service('$payment', function() {
	return {
		subTotal(cart) {
			let total = 0;
			cart.forEach((product) => (total += product.amount * (product.salesPrice || product.price)));
			return total;
		}
	};
});
