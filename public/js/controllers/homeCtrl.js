app.controller('homeCtrl', function ($http, $scope) {
    $http.get(`${url}/datum/intro`, {
            headers: {
                token: localStorage.token
            }
        })
        .then(function (response) {
            $scope.intoText = response.data.content
            // console.log($scope.intoText);

        });
});