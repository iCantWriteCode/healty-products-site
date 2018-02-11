app.controller('homeCtrl', function($http, $scope) {
	$http.get(`${url}/datum/intro`).then((res) => ($scope.intoText = res.data.content));

	$http.get(`${url}/products/featured`).then((res) => ($scope.featuredProducts = res.data));
});
