// script.js
function togglePasswordVisibility(inputId, icon) {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        icon.innerHTML = '<i class="fas fa-eye"></i>';
    }
}
