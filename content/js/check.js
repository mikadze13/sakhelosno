document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Assume the form is successfully connected
    formSuccess();
});

function formSuccess() {
    const checkmarkContainer = document.getElementById('checkmark-container');
    checkmarkContainer.classList.remove('hidden');
    
    setTimeout(function() {
        checkmarkContainer.classList.add('hidden');
    }, 2000); // Hide after 2 seconds
}