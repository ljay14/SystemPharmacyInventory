// ...

// Function to handle login
loginButton.addEventListener('click', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the account exists and password matches
    const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const matchedAccount = existingAccounts.find(account => account.username === username && account.password === password);

    if (matchedAccount) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear the input fields
        usernameInput.value = '';
        passwordInput.value = '';
    }
});
