// matchaccount.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the login button and attach a click event listener
    const loginButton = document.querySelector('.login-button button');
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            // Get the username and password input values
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            // Perform a simple check (you might want to make an AJAX request to a backend for a more secure check)
            if (validateUser(usernameInput, passwordInput)) {
                alert('Login successful!'); // Replace this with your actual login logic
            } else {
                alert('Invalid username or password'); // Replace this with your actual error handling
            }
        });
    }
});

function validateUser(username, password) {
    // This is a basic example. You might want to make an AJAX request to your backend for authentication.
    // For now, let's assume the username and password are hardcoded for demonstration purposes.
    const validUsername = 'exampleUser';
    const validPassword = 'examplePassword';

    return username === validUsername && password === validPassword;
}
