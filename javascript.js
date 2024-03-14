document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button button');

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            if (validateUser(usernameInput, passwordInput)) {
                const userDataString = localStorage.getItem(usernameInput);
                if (userDataString) {
                    const userData = JSON.parse(userDataString);
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                    console.log("User data stored:", userData);

                    alert('Login successful!');
                    window.location.href = "productinventory.html";
                } else {
                    alert('User data not found. Please try again.');
                }
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
