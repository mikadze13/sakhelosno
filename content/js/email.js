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


                console.log('SUCCESS!', response.status, response.text, response.email_id);
                document.getElementById('contact-form').reset();
                console.log("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
    });
});



 