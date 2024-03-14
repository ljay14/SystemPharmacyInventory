document.addEventListener("DOMContentLoaded", function () {

    var createButton = document.querySelector(".create-button button"); // Corrected selector

    // Add an event listener to the create button
    createButton.addEventListener("click", function () {
        var fullnameInput = document.getElementById("fullname");
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var ageInput = document.getElementById("age");

        var fullnameValue = fullnameInput.value.trim();
        var usernameValue = usernameInput.value.trim();
        var passwordValue = passwordInput.value.trim();
        var ageValue = ageInput.value.trim();

        if (fullnameValue === "" || usernameValue === "" || passwordValue === "" || ageValue === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Retrieve existing user data from localStorage
        var existingData = localStorage.getItem("users");

        // If no existing data, create a new array to store user data
        var users = existingData ? JSON.parse(existingData) : [];

        // Check if username is already taken
        var existingUser = users.find(function (user) {
            return user.username === usernameValue;
        });

        if (existingUser) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        // Add new user data to the array
        var userData = {
            fullname: fullnameValue,
            username: usernameValue,
            age: ageValue
        };

        // Save username and password separately
        localStorage.setItem(usernameValue, passwordValue); // Username as key, password as value

        users.push(userData);

        // Save the updated array back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account successfully created!");
        window.location.href = "index.html"; // Redirect to login page
    });
});
