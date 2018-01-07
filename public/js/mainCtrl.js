app.controller('mainCtrl', function ($scope, $location, anchorSmoothScroll) {

    $scope.gotoElement = function (eID) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('ask_us');

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);

    };
});