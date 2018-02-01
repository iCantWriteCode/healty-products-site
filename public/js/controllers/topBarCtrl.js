app.controller('topBarCtrl', function ($scope, $cart) {
    $scope.$on('cart changed', () => ($scope.cart = JSON.parse(localStorage.cart)));

    $scope.cart = JSON.parse(localStorage.cart);

    // $scope.getSubTotal = (cart) => $payment.subTotal(cart);
    // $scope.removeFromCart = (product) => $cart.removeProduct(product);
});