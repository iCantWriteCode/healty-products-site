app.controller('navBar', function($scope, $slug) {
	$scope.getSlug = (word) => $slug(word);
});
