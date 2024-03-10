<?php
// Establish a connection to the MySQL database
$servername = "your_mysql_servername";
$username = "your_mysql_username";
$password = "your_mysql_password";
$dbname = "your_mysql_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user input from the registration form
$fullname = $_POST['fullname'];
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
$age = $_POST['age'];

// Insert user data into the database
$sql = "INSERT INTO users (fullname, username, password, age) VALUES ('$fullname', '$username', '$password', '$age')";

if ($conn->query($sql) === TRUE) {
    echo "Account created successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
