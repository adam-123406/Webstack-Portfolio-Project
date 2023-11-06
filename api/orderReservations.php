<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$cust_id=$data["cust_id"];
$flight_id=$data["flight_id"];
$date_of_reservation=$data["date_of_reservation"];
$price=$data["price"]; // step 1

$resp["status"]=mysqli_query($con,"insert into `reservations`(cust_id`, `flight_id`, `price`, `date_of_reservation` VALUES('$cust_id','$flight_id','$price','$date_of_reservation')"); // step 2 & 3

echo json_encode($resp); // step 4


echo mysqli_error($con);


?>