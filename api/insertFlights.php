<?php
include("config.php");
$data=json_decode(file_get_contents("php://input"),true);
$plain_id=$data["plain_id"];
$froms=$data["froms"];
$too=$data["too"];
$price=$data["price"];
$time_of_takeoff=$data["time_of_takeoff"];
$date_of_takeoff=$data["date_of_takeoff"]; // step 1

$resp["status"]=mysqli_query($con,"INSERT INTO `flights`( `plain_id`, `froms`, `too`, `price`, `time_of_takeoff`, `date_of_takeoff`) VALUES('$plain_id','$froms','$too','$price','$time_of_takeoff','$date_of_takeoff')"); // step 2 & 3

echo json_encode($resp); // step 4




?>