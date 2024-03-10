document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
    const createButton = document.querySelector('.login-button button');
    const fullnameInput = document.getElementById('fullname');
    const usernameInput = document.getElementById('username');
    const ageInput = document.getElementById('age');

    togglePasswordButton.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.classList.toggle('fa-eye-slash');
    });

    createButton.addEventListener('click', function () {
        const fullname = fullnameInput.value;
        const username = usernameInput.value;
        const password = passwordInput.value;
        const age = ageInput.value;

        // Store the account information in local storage
        const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        userAccounts.push({ fullname, username, password, age });
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));

        // You can redirect to the login page or perform other actions as needed
        alert('Account created successfully!');
    });
});


