document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button button');

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            if (validateUser(usernameInput, passwordInput)) {
                alert('Login successful!');
                window.location.href = "productinventory.html";
            } else {
                alert('Invalid Username or Password. Please try again!');
            }
        });
    }
});

function validateUser(username, password) {

    const storedPassword = localStorage.getItem(username);

    return storedPassword === password;
}
