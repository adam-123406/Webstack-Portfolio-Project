<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$plain_id=$data["plain_id"]; // step 1

$result=mysqli_query($con,"select * from `flights` where plain_id=$plain_id"); // step 2
$resp=mysqli_fetch_all($result,MYSQL_ASSOC); // step 3   [{},{},{}]
echo json_encode($resp); // step 4



?>