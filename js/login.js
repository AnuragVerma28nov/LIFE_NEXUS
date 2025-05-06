const form = document.querySelector('.auth-form');
const emailInput = document.getElementById('email');
const mobileNumberInput = document.getElementById('number');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    const email = emailInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        alert('Invalid email address');
        e.preventDefault();
        return;
    }

    if (!validateMobileNumber(mobileNumber)) {
        alert('Invalid mobile number');
        e.preventDefault();
        return;
    }

    if (!validatePassword(password)) {
        alert('Password should be at least 8 characters long');
        e.preventDefault();
        return;
    }

    form.action = 'login&signinscuccesspage.html';
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validateMobileNumber(mobileNumber) {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
}

function validatePassword(password) {
    return password.length >= 8;
}

