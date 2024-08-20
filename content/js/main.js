
// script.js

window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    loader.style.display = 'none';
    content.style.display = 'block';
});

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
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        dots: false,

    });
});

function counter() {
    $('.count').each(function () {
        if ($(this).hasClass('start')) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                if (($(this).text()) % 1 === 0) {
                    var decimalpoint = 0;
                } else {
                    var decimalpoint = ($(this).text()).toString().split(".")[1].length;
                }
                $(this).removeClass('start');
                $(this).animate({
                    Counter: $(this).text()
                }, {
                    duration: 6000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(now.toFixed(decimalpoint).toLocaleString('en'));
                    }
                });
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('.counter_number');
    const target = +counter.getAttribute('data-target');

    const updateCounter = () => {
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    const onScroll = () => {
        const rect = counter.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            updateCounter();
            window.removeEventListener('scroll', onScroll);
        }
    };

    window.addEventListener('scroll', onScroll);
});

// FAQ function
document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');


        question.addEventListener('click', function () {
            item.classList.toggle('active');

            var answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.height = 'auto';
            } else {
                answer.style.height = '0';
            }
        });
    });
});
// Close navbar
$(".close").on("click", function () {
    $('.mobile_navbar').css('display', 'none')
})
$(".burgerMenu").on("click", function () { 
    $('.mobile_navbar').css('display', 'flex')
})
$(".mobile_service").on("click", function () {
    $('.mobile_navbar').css('display', 'none')
})
$(".FAQ").on("click",function(){
    $('.mobile_navbar').css('display','none');
})
// function calculateTotal() {
//     const msdMaterial = document.getElementById('msd-material').value * 25;
//     const otherColor = document.getElementById('other-color').value * 27;
//     const lightCutout = document.getElementById('light-cutout').value * 15;
//     const cloudGalaxy = document.getElementById('cloud-galaxy').value * 35;
//     const chandelier = document.getElementById('chandelier').value * 30;

//     const total = msdMaterial + otherColor + lightCutout + cloudGalaxy + chandelier;

//     document.getElementById('total').textContent = total;

//     // Show contact modal
//     document.getElementById('contactModal').style.display = 'block';
// }

// function closeModal() {
//     document.getElementById('contactModal').style.display = 'none';
// }