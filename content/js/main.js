$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        // nav: true,
        // slideSpeed: 300,
        // paginationSpeed: 400,
        // autoplay: true, // Enable autoplay
        // autoplayTimeout: 2000,
        // items: 1,
        // rewind: true,
        // autoplayHoverPause: true,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
        items: 1,
        loop: true,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,

    });
}); 
// Function to increment the counter
function incrementCounter() {
    // Retrieve the current counter value from storage or default to 0
    let currentValue = parseInt(localStorage.getItem('counterValue')) || 0;
    
    // Increment the counter value by 5
    currentValue += 5;
    
    // Update the HTML element with id 'counter'
    document.getElementById('counter').innerText = currentValue;
    
    // Store the updated counter value in localStorage
    localStorage.setItem('counterValue', currentValue);
}

// Function to increment the counter every 3 minutes (180000 milliseconds)
setInterval(incrementCounter, 1800);

// Initialize the counter value on page load
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the counter value from localStorage
    let storedValue = localStorage.getItem('counterValue');
    
    // Update the HTML element with id 'counter' with the stored value
    if (storedValue) {
        document.getElementById('counter').innerText = storedValue;
    }
}); 

// function counter() {
//     $('.count').each(function () {
//         if ($(this).hasClass('start')) {
//             var elementTop = $(this).offset().top;
//             var elementBottom = elementTop + $(this).outerHeight();
//             var viewportTop = $(window).scrollTop();
//             var viewportBottom = viewportTop + $(window).height();
//             if (elementBottom > viewportTop && elementTop < viewportBottom) {
//                 if (($(this).text()) % 1 === 0) {
//                     var decimalpoint = 0;
//                 } else {
//                     var decimalpoint = ($(this).text()).toString().split(".")[1].length;
//                 }
//                 $(this).removeClass('start');
//                 $(this).animate({
//                     Counter: $(this).text()
//                 }, {
//                     duration: 6000,
//                     easing: 'swing',
//                     step: function (now) {
//                         $(this).text(now.toFixed(decimalpoint).toLocaleString('en'));
//                     }
//                 });
//             }
//         }
//     });
// }
// const count = 5675

// $(document).ready(function () {
//     $('#count').text('')
//     setTimeout(() => {
//         count += 5
//         $('#count').text(count)
//     }, 3000);
//     // setInterval(() => {
            
//     // }, 3000);
     
//         $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         console.log(scroll)
//         if (scroll >= 500) {
//             $(document).on('ready', counter);
//             $(window).on('scroll', counter);
//             console.log("done");
//         } else {
//             console.log('false')
//         }
//     });
// });
