<?php
include("config.php");

$result=mysqli_query($con,"select name,id from company"); // step 1
$resp=mysqli_fetch_all($result,MYSQL_ASSOC); // step 2
echo json_encode($resp); // step 3



?>