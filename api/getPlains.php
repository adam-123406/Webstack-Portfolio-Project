<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$com_id=$data["com_id"]; // step 1

$result=mysqli_query($con,"select * from plains where com_id='$com_id'"); // step 2
$resp=mysqli_fetch_all($result,MYSQLI_ASSOC); // step 3   [{},{},{}]


echo json_encode($resp); // step 4



?>