const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert("You have successfully registered for the workshop!");

    form.reset();
});
