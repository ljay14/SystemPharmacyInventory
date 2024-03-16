document.addEventListener("DOMContentLoaded", function () {
    var createButton = document.querySelector(".create-button button");

    // Add an event listener to the create button
    createButton.addEventListener("click", function () {
        var fullnameInput = document.getElementById("fullname").value;
        var usernameInput = document.getElementById("username").value;
        var passwordInput = document.getElementById("password").value;
        var ageInput = document.getElementById("age").value;
        var genderInput = document.getElementById("gender").value;

        


        if (fullnameInput === "" || usernameInput === "" || passwordInput === "" || ageInput === "" || genderInput === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Retrieve existing user data from localStorage
        var existingData = localStorage.getItem("users");

        // If no existing data, create a new array to store user data
        var users = existingData ? JSON.parse(existingData) : [];

        // Check if username is already taken
        var existingUser = users.find(function (user) {
            return user.username === usernameInput;
        });

        if (existingUser) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        // Add new user data to the array
        var userData = {
            fullname: fullnameInput,
            username: usernameInput,
            age: ageInput,
            gender: genderInput
        };

        // Save username and password separately (assuming this is still your desired behavior)
        localStorage.setItem(usernameInput, passwordInput); // Username as key, password as value

        users.push(userData);

        // Save the updated array back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account successfully created!");
        window.location.href = "index.html"; // Redirect to login page
    });
});
