
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resetButton = document.getElementById('clear-form-button');

    setFormDate();

    // Add an event listener to the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        handleFormSubmission();
    });

    // Add an event listener to the reset button
    resetButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        resetForm(form);
    });
});

function handleFormSubmission() {
    const name = document.getElementById('name').value; // Get the user's name
    const formValid = checkFormValidation();

    if (formValid) {
        // Display an alert thanking the user
        alert(`Thank you for joining, ${name}! We will keep you up to date with the latest in Kamloops.`);
    }

}

function checkFormValidation() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('start-date').value;
    let valid = true;
    let errorMessage = '';

    if (name === "") {
        errorMessage = "Please enter your name.";
        valid = false;
    }

    if (email === "") {
        errorMessage = "Please enter your email.";
        valid = false;
    }

    if (!validateEmail(email)) {
        errorMessage = "Please enter a valid email address.";
        valid = false;
    }

    if (date === "") {
        errorMessage = "Please select a start date.";
        valid = false;
    }

    if (!valid) {
        alert(errorMessage);
    }

    return valid;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function setFormDate() {
    // Get today's date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    // Set the value of the date input field to today's date
    document.getElementById('start-date').value = `${year}-${month}-${day}`;
}

function resetForm(form) {
    form.reset();
    setFormDate()
}
