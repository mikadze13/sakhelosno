$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        nav: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000,
        items: 1,

        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    $("#main__popular-games-container-carousel").owlCarousel({
        loop: true,
        dots: false,
        dots: false,
        items: 5,
        responsive: {
            0: {
                items: 2,
            },
            578: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }

    });
});