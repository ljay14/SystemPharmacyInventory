document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    var userData = JSON.parse(localStorage.getItem('currentUser'));

    // Check if user data exists
    if (userData) {
        // Populate profile fields with user data
        document.getElementById('fullname').textContent = userData.fullname || 'N/A';
        document.getElementById('username').textContent = userData.username || 'N/A';
        document.getElementById('age').textContent = userData.age || 'N/A';
        // Add more fields as needed
    } else {
        // Redirect to login page if user data is not found
        alert('User data not found. Please log in.');
        window.location.href = 'index.html'; // Adjust the URL accordingly
    }
});
