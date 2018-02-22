app.controller('suggestedProducts', function($scope, $http, $anchorScroll) {
	$http.get(`${url}/products/featured`).then((res) => {
        $scope.featuredProducts = res.data
        console.log($scope.featuredProducts)
    });

    $scope.onSuggestedProductClick = () => {
        $anchorScroll('')
    }
});
