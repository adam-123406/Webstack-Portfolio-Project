<?php
include("config.php");
$data=json_decode(file_get_contents("php://input"),true);
$com_id=$data["com_id"];
$name=$data["name"];
$no_of_seats=$data["no_of_seats"];// step 1

$resp["status"]=mysqli_query($con,"INSERT INTO `plains`( `name`, `no_of_seats`, `com_id`) VALUES('$name','$no_of_seats','$com_id')"); // step 2 & 3

echo json_encode($resp); // step 4

echo mysqli_error($con)


?>