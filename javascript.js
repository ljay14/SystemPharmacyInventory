// matchaccount.js

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button button');

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            if (validateUser(usernameInput, passwordInput)) {
                alert('Login successful!');
            } else {
                alert('Login successful!');
                window.location.href = "productinventory.html";
            }
        });
    }

});

function validateUser(username, password) {
    // Retrieve stored user credentials (for demonstration purposes)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    return username === storedUsername && password === storedPassword;
}
