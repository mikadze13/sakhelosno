// $(document).ready(function () {
$("#owl-demo").owlCarousel({
    items: 4,
    loop: true,
    margin: 18,
    nav: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 1800,
    responsive: {
        0: {
            items: 1
        },
        350:{
            items:2
        },
        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    },
    navText: ["<i class='fa-solid fa-arrow-right fa-flip-horizontal'></i>", "<i class='fa-solid fa-arrow-right carousel_right'></i>"]
})
// })