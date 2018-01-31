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
		},
		costDescriptor(shipping, weight) {
			if (!shipping.company || !shipping.defaultPrice)
				return function() {
					return 0;
				};

			if (weight < shipping.maxWeight)
				return function(itemsTotal) {
					if (itemsTotal < shipping.upToSubtotal || !shipping.upToSubtotal) return shipping.defaultPrice;
					return 0;
				};

			return function(itemsTotal) {
				const weightDiff = weight - shipping.maxWeight;
				if (itemsTotal < shipping.upToSubtotal || !shipping.upToSubtotal) {
					const cost = Math.ceil(weightDiff) * shipping.priceAdded + shipping.defaultPrice;
					return cost;
				}

				const cost = Math.ceil(weightDiff) * shipping.priceAdded;
				return cost;
			};
		}
	};
});
