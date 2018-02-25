app.controller('aboutUs', function ($scope, $http, $anchorScroll) {
    $scope.aboutUs = {}
    $anchorScroll('')
    $scope.aboutUs.images = [
        {
            url: url + '/public/img/aboutUs/111.jpg'
        },
        {
            url: url + '/public/img/aboutUs/112.jpg'
        },
        {
            url: url + '/public/img/aboutUs/113.jpg'
        },
        {
            url: url + '/public/img/aboutUs/115.jpg'
        },
        {
            url: url + '/public/img/aboutUs/116.jpg'
        },
        {
            url: url + '/public/img/aboutUs/117.jpg'
        }
    ]
    //console.log($scope.sliderImages)
    $scope.slickConfig = {
        initOnLoad: true,
        enabled: true,
        autoplay: false,
        arrows: true,
        dots: false,
        slidesToShow: 4,
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