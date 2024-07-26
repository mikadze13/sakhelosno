$(document).ready(function () {
    $('#owl-demo').owlCarousel({
        items: 4,
        loop: true, 
        margin: 18,
        nav: true,
        autoplay: true,  
        dots: true,
        autoplayTimeout: 1800,
        responsive: {
            0: {
                items: 1
            },
            450:{
                items:2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        } ,
        navText:["<i class='fa-solid fa-arrow-right fa-flip-horizontal'></i>","<i class='fa-solid fa-arrow-right'></i>"]
    })
})