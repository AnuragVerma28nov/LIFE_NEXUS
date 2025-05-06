const form = document.querySelector('.auth-form');
const nameInput = document.getElementById('name');
const mobileNumberInput = document.getElementById('number');
const addressInput = document.getElementById('Address');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const termsCheckbox = document.getElementById('terms');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop form from auto-submitting

    const name = nameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const address = addressInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (name === '') {
        alert('Please enter your full name');
        return;
    }

    if (!validateMobileNumber(mobileNumber)) {
        alert('Invalid mobile number');
        return;
    }

    if (address === '') {
        alert('Please enter your full address');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password should be at least 8 characters long');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!termsCheckbox.checked) {
        alert('Please agree to the Terms of Service and Privacy Policy');
        return;
    }

    // All validations passed
    alert("Thank you for registering!");

    // Redirect after user confirms
    window.location.href = "login&signiscuccesspage.html";
});

function validateMobileNumber(mobileNumber) {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}
