var validationFields = {
    name: {
        shouldValidate:  false,
        valid: false
    },
    email: {
        shouldValidate:  false,
        valid: false
    },
    subject: {
        shouldValidate:  false,
        valid: false
    },
    message: {
        shouldValidate:  false,
        valid: false
    }
};

var errorElement = document.getElementById('contact-us-error');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(allFieldsValid()) {
        alert('Form is missing information. Please fill the form and submit again.');
    } else {
        // Display a confirmation message to the user
        alert('Thank you for contacting us, ' + name + '! Your message has been received.');
    }

}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function() {
    setupFormListeners();
});

function allFieldsValid() {
    return validationFields.name.valid &&
        validationFields.email.valid &&
        validationFields.subject.valid &&
        validationFields.message.valid;
}

function setupFormListeners() {
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var subjectElement = document.getElementById('subject');
    var messageElement = document.getElementById('message');
    var form = document.querySelector('form');

    form.addEventListener('submit', handleFormSubmit);

    nameElement.addEventListener('keyup', validateNameField);
    emailElement.addEventListener('keyup', validateEmailField);
    subjectElement.addEventListener('keyup', validateSubjectField);
    messageElement.addEventListener('keyup', validateMessageField);

    nameElement.addEventListener('change', enableValidateField);
    emailElement.addEventListener('change', enableValidateField);
    subjectElement.addEventListener('change', enableValidateField);
    messageElement.addEventListener('change', enableValidateField);
}

function enableValidateField(event) {
    console.log(event.target.id);
    validationFields[event.target.id].shouldValidate = true;
}

function validateNameField(event) {
    console.log(validationFields);
    var nameElement = document.getElementById('name');
    clearError();

    // check if can validate and then validate field is not empty
    if(validationFields['name'].shouldValidate && nameElement.value !== '') {
        validationFields['name'].valid = true;
    } else {
        validationFields['name'].valid = false;
        setError('Name is a required field');
    }
}

function validateEmailField(event) {
    var emailElement = document.getElementById('email');
    clearError();

    // check if can validate and then validate field is not empty
    if(validationFields['email'].shouldValidate && emailElement.value !== '' && (emailElement.value.includes('@') && emailElement.value.includes('.'))) {
        validationFields['email'].valid = true;
    } else {
        if (emailElement.value == '') {
            setError('Email is required field');
        } else if (!emailElement.value.includes('@') || !emailElement.value.includes('.')) {
            setError('Email is not in correct format');
        }

        validationFields['email'].valid = false;
    }
}

function validateSubjectField(event) {
    var nameElement = document.getElementById('subject');
    clearError();

    // check if can validate and then validate field is not empty
    if(validationFields['subject'].shouldValidate && nameElement.value !== '') {
        validationFields['subject'].valid = true;
    } else {
        validationFields['subject'].valid = false;
        setError('Subject is required field');
    }
}

function validateMessageField(event) {
    var nameElement = document.getElementById('message');
    clearError();

    // check if can validate and then validate field is not empty
    if(validationFields['message'].shouldValidate && nameElement.value !== '') {
        validationFields['message'].valid = true;
    } else {
        validationFields['message'].valid = false;
        setError('Message is required field');
    }
}

function setError(errorMessage) {
    errorElement.innerHTML = errorMessage;
}

function clearError() {
    errorElement.innerHTML = '';
}