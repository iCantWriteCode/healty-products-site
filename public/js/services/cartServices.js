app.service('$cart', function($rootScope) {
	const productExistsInCart = (cart, product) => !!cart.find((productInCart) => productInCart._id === product._id);
	const increaseProductAmount = (cart, product) => {
		const i = cart.findIndex((productInCart) => productInCart._id === product._id);
		cart[i].amount += product.amount;

		localStorage.setItem('cart', JSON.stringify(cart));
		$rootScope.$broadcast('cart changed');
	};

	return {
		addProduct(product) {
			const cart = JSON.parse(localStorage.cart);

			if (productExistsInCart(cart, product)) {
				increaseProductAmount(cart, product);
				return;
			}

			if (!product.amount) product.amount = 1; // Assume 1 piece of product
			cart.push(product);
			localStorage.setItem('cart', JSON.stringify(cart));
		},
		increaseProductAmount
	};
});
