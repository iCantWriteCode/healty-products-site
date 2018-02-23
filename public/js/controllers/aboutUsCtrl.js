app.controller('aboutUs', function ($scope, $http) {
    console.log('hi')
    $scope.sliderImages = [
        {
            url: 'http://via.placeholder.com/350x150'
        },
        {
            url: 'http://via.placeholder.com/350x150'
        },
        {
            url: 'http://via.placeholder.com/350x150'
        },
        {
            url: 'http://via.placeholder.com/350x150'
        }
    ]
    console.log($scope.sliderImages)
    $scope.slickConfig = {
        autoplay: false,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        // centerPadding: "10px",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        vertical: true,
        speed: 1000,
        autoplaySpeed: 2000,
        // useTransform: true,
        // cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) { },
            afterChange: function (event, slick, currentSlide, nextSlide) { }
        }
    };
});