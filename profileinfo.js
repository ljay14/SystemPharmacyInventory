document.addEventListener('DOMContentLoaded', function () {
    // Check if 'currentUser' exists in localStorage
    if (localStorage.getItem('currentUser')) {
        // Retrieve the username of the currently logged-in user from localStorage
        const currentUsername = JSON.parse(localStorage.getItem('currentUser')).username;

        // Check if user data exists in localStorage for the current user
        if (localStorage.getItem(currentUsername)) {
            // Retrieve the full name and age of the user from localStorage using the username
            const userData = JSON.parse(localStorage.getItem(currentUsername));
            const userFullname = userData.fullname;
            const userAge = userData.age;

            // Update the corresponding HTML elements with the retrieved user information
            document.getElementById('fullname').textContent = userFullname;
            document.getElementById('age').textContent = userAge;
            document.getElementById('username').textContent = currentUsername;
        } else {
            // Handle case where user data is not found
            console.error('User data not found in localStorage.');
        }
    } else {
        // Handle case where currentUser is not found in localStorage
        console.error('Current user not found in localStorage.');
    }
});
