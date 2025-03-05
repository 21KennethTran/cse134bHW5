const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const errorMessage = document.getElementById('error-message');
const charCount = document.getElementById('charCount');
const formErrorsField = document.getElementById('formErrors');

const formErrors = [];

function showError(input, message) {
    input.classList.add('flash');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    formErrors.push({ field: input.name, message });
    formErrorsField.value = JSON.stringify(formErrors);

    setTimeout(() => {
        input.classList.remove('flash');
        errorMessage.style.display = 'none';
    }, 3000);
}

function validateInput(input) {
    if (!input.checkValidity()) {
        showError(input, input.validationMessage);
        return false;
    }
    return true;
}

function enforcePattern(input, pattern, errorMsg) {
    input.addEventListener('input', () => {
        const oldValue = input.value;
        input.value = input.value.replace(new RegExp(`[^${pattern}]`, 'g'), '');

        if (oldValue !== input.value) {
            showError(input, errorMsg);
        }
    });
}

enforcePattern(nameInput, 'a-zA-Z\\s', 'Only letters and spaces are allowed in Name.');
enforcePattern(emailInput, 'a-zA-Z0-9@._-', 'Invalid character in Email.');
// what should be allowed in comments?
enforcePattern(commentsInput, 'a-zA-Z0-9\\s.,!?', 'Invalid character in Comments.');

function updateCharCount() {
    const remaining = 500 - commentsInput.value.length;
    charCount.textContent = `${remaining} characters remaining`;
    charCount.className = remaining <= 50 ? 'warning' : '';
}
commentsInput.addEventListener('input', updateCharCount);
updateCharCount();

form.addEventListener('submit', (e) => {
    formErrors.length = 0;

    const isValid = [nameInput, emailInput, commentsInput].every(validateInput);
    if (!isValid) {
        e.preventDefault();
        errorMessage.textContent = 'Please fix the errors before submitting.';
        errorMessage.style.display = 'block';
    }
});
