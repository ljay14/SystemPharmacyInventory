document.addEventListener("DOMContentLoaded", function () {

    var fullnameInput = document.getElementById("fullname");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var ageInput = document.getElementById("age");
    var createButton = document.querySelector(".login-button button");

    // Add an event listener to the create button
    createButton.addEventListener("click", function () {

        var fullnameValue = fullnameInput.value.trim();
        var usernameValue = usernameInput.value.trim();
        var passwordValue = passwordInput.value.trim();
        var ageValue = ageInput.value.trim();


        if (fullnameValue === "" || usernameValue === "" || passwordValue === "" || ageValue === "") {
            alert("Please fill in all fields.");
            return;
        }else{
            window.alert("Successfully Created");
            window.location.href = "index.php";
        }

        console.log("Full Name: " + fullnameValue);
        console.log("Username: " + usernameValue);
        console.log("Password: " + passwordValue);
        console.log("Age: " + ageValue);
    });
});