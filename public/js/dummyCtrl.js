app.controller('dummyCtrl', function ($scope, $location, anchorSmoothScroll, $routeParams, $timeout) {
    // $scope.itemsinCart = [];

    // $scope.products = [{
    //         title: 'test',
    //         description: 'desc'
    //     },
    //     {
    //         title: 'test2',
    //         description: 'desc'
    //     },
    // ]

    // $scope.addToCart = function () {
    //     $scope.product.push({
    //         title: $scope.productTitle,
    //         description: $scope.productDescription
    //     });

    //     localStorage.setItem('cart', JSON.stringify($scope.cart));
    // };
    $scope.products = [{
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            slug: "test",
            ml: "10kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "200,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "5kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "110,00",
            salesPrice: "100,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "4kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "90,00",
            salesPrice: ""
        },

        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "3kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "70,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "2kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "50,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "1,5kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "40,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "1kg",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "29,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "500g",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "15,00"
        },
        {
            title: "Γύρη Φρέσκια - Νωπή, 100% Ελληνική",
            ml: "250g",
            description: "Γύρη Μελισσών, Εντελώς Νωπή & Ανεπεξέργαστη Γύρη",
            price: "9,00"
        }
    ];
    console.log($scope.products)
    $scope.successMsg = ''
    $scope.successMsgClass === "hideMsg";

    $scope.productsDone = [];
    $scope.showMessage = false;
    $scope.addToCart = function (index) {
        $scope.productsDone.push($scope.products[index]);
        console.log($scope.productsDone)
        console.log('yo')

        test();
        $timeout(function () {
            test();
        }, 3000)
    }



    $scope.qty = 1;
    $scope.increment = function () {
        $scope.qty++;
    };
    $scope.decrement = function () {
        $scope.qty--;
    };

    function test() {
        $scope.showMessage = !$scope.showMessage;
    }
});