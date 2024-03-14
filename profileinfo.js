document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    var users = JSON.parse(localStorage.getItem('users'));

    // Check if user data exists
    if (userData) {
        // Populate HTML elements with user data
        document.getElementById('fullname').textContent = users.fullname || "";
        document.getElementById('age').textContent = users.age || "";
        document.getElementById('username').textContent = users.username || "";
        document.getElementById('password').textContent = users.password || "";
    } else {
        // Display an error message if user data is not found
        alert('User data not found. Please log in again.');
        // Redirect the user to the login page
        window.location.href = "index.html";
    }
});
