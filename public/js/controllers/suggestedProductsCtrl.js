app.controller('suggestedProducts', function($scope, $http) {
	$http.get(`${url}/products/featured`).then((res) => {
        $scope.featuredProducts = res.data
        console.log($scope.featuredProducts)
    });
});
