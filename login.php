<?php
session_start();

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

// Retrieve user input from the login form
$username = $_POST['username'];
$password = $_POST['password'];

// Retrieve hashed password from the database based on the username
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        $_SESSION['username'] = $username;
        echo "Login successful!";
    } else {
        echo "Incorrect password!";
    }
} else {
    echo "User not found!";
}

$conn->close();
?>
