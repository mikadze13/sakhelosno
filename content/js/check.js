document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    formSuccess();
});

function formSuccess() {
    const checkmarkContainer = document.getElementById('checkmark-container');
    checkmarkContainer.classList.remove('hidden');

    setTimeout(function () {
        checkmarkContainer.classList.add('hidden');
    }, 2000);
}