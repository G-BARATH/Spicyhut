<?php

$con = mysqli_connect("localhost", "root", "", "restaurant");
if(!$con)
{
    die('Connection failed');
}

if(isset($_POST[ ' book now' ]))
{
$fullname = $_POST['fullname'];
$email address = $_POST['email address'];
$phone number = $_POST['phone number'];
$reservation date = $_POST['reservation date'];
$reservation time = $_POST['reservation time'];
$number of guests = $_POST['number of guests'];
$special requests = $_POST['special requests'];

$sql_query = "insert into user_details(fullname,email address,phone number,reservation date,reservation time,number of guests,special requests) values('$fullname', '$email address', '$phone number', '$reservation date', '$reservation time', '$number of guests', 'special requests);";
if(mysqli_query($con, $sql_query))
{
echo "success";
}
else{
echo "error";
}
mysqli_close($con);
}
?>

