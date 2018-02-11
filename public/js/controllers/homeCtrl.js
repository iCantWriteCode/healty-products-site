app.controller('homeCtrl', function($http, $scope) {
	$http.get(`${url}/datum/intro`).then((res) => ($scope.intoText = res.data.content));

	$http.get(`${url}/images/slider`).then((res) => {
		$scope.slider = res.data[0];
		console.log($scope.slider.images);
	});

	$http.get(`${url}/products/featured`).then((res) => {
		$scope.featuredProducts = res.data;
		console.log($scope.featuredProducts);
	});

	$scope.slickConfig = {
		enabled: true,
		autoplay: true,
		draggable: false,
		autoplaySpeed: 3000,
		method: {},
		event: {
			beforeChange: function(event, slick, currentSlide, nextSlide) {},
			afterChange: function(event, slick, currentSlide, nextSlide) {}
		}
	};
});
