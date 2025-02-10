const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculateStrength(password);
    updateStrengthIndicator(strength);
});

function calculateStrength(password) {
    if (password.length === 0) return 0;
    let strength = 0;
    if (password.length >= 5) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-5]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
}

function updateStrengthIndicator(strength) {
    const width = strength * 25;
    strengthBar.style.width = `${width}%`;
    if (strength <= 1) {
        strengthBar.style.backgroundColor = 'red';
        strengthText.textContent = 'Weak';
    } else if (strength === 2) {
        strengthBar.style.backgroundColor = 'orange';
        strengthText.textContent = 'Medium';
    } else if (strength >= 3) {
        strengthBar.style.backgroundColor = 'green';
        strengthText.textContent = 'Strong';
    }
}