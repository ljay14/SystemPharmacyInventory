document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    const currentUserData = localStorage.getItem('currentUser');
    
    // Check if user data exists
    if (currentUserData) {
        // Parse user data from JSON
        const userData = JSON.parse(currentUserData);
        
        // Display user data on the profile page
        document.getElementById('fullname').textContent = userData.fullname;
        document.getElementById('age').textContent = userData.age;
        document.getElementById('username').textContent = userData.username;
        document.getElementById('password').textContent = userData.password; // Only for debugging, remove in production
        
    } else {
        // If user data doesn't exist, display a message or handle accordingly
        console.log('User data not found.');
    }
});
