document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    var userDataString = localStorage.getItem("currentUser");
    
    if (userDataString) {
        var userData = JSON.parse(userDataString);
        
        // Display user information on profile page
        var fullNameElement = document.getElementById("fullname");
        var usernameElement = document.getElementById("username");
        var ageElement = document.getElementById("age");
        var genderElement = document.getElementById("gender");

        fullNameElement.textContent = userData.fullname;
        usernameElement.textContent = userData.username;
        ageElement.textContent = userData.age;
        genderElement.textContent = userData.gender;
    } else {
        alert("User Not Found");
    }
});
