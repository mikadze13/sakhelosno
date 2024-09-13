$(document).ready(function () {
    const successfully = $('#checkmark-container');
    const contactForm = $('#contact-form');
    emailjs.init("rs57VJ9yW3AIw8Jfb");


    $("#contact-form").submit(function (event) {
        event.preventDefault();

        emailjs.sendForm('service_xh1df0r', 'template_mrgqubs', this)
            .then(function (response) {
                contactForm.css('display', 'none');
                successfully.css('display', 'flex')
                setTimeout(() => {
                    successfully.css('display', 'none')
                    contactForm.css('display', 'block');
                }, 2000);
 
                document.getElementById('contact-form').reset(); 
            }, function (error) { 
                alert("Form Submission Failed! Try Again");
            });
    });
});



 