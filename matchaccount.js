document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButton = document.getElementById('togglePassword');
    const loginButton = document.querySelector('.login-button button');
    const createButton = document.querySelector('.createaccount button');

    // Function to toggle password visibility
    togglePasswordButton.addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.classList.toggle('fa-eye-slash');
    });

    // Function to handle account creation
    createButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if username or password is empty
        if (!username || !password) {
            alert('Username and password are required.');
            return;
        }

        // Check if the account already exists
        const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const existingAccount = existingAccounts.find(account => account.username === username);

        if (existingAccount) {
            alert('Account with this username already exists. Please choose a different username.');
            return;
        }

        // Save the new account
        const newAccount = { username, password };
        existingAccounts.push(newAccount);
        localStorage.setItem('accounts', JSON.stringify(existingAccounts));

        alert('Account created successfully!');
    });

    // Function to handle login
    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the account exists and password matches
        const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const matchedAccount = existingAccounts.find(account => account.username === username && account.password === password);

        if (matchedAccount) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
