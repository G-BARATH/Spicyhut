<?php
// Step 1: Connect to MySQL Database
$servername = "localhost"; // or 127.0.0.1
$username = "root";        // default XAMPP user
$password = "";            // default XAMPP password is empty
$dbname = "restaurant";    // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 2: Get data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$food = $_POST['food'];
$guests = $_POST['guests'];
$message = $_POST['message'];

// Step 3: Insert into database
$sql = "INSERT INTO bookings (name, email, phone, reservation_date, reservation_time, food, guests, message)
        VALUES ('$name', '$email', '$phone', '$date', '$time', '$food', '$guests', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
            alert('Table booked successfully!');
            window.location.href='table.html'; // or any confirmation page
          </script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
