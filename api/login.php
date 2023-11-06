<?php

include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$user=$data["user"];
$pass=$data["pass"];
$type=$data["type"]; // step 1

if($type=='cust'){
    $result=mysqli_query($con,"select id from customers where user='$user' and pass='$pass'");
    if(mysqli_num_rows($result)==0){
        $resp["status"]=false;
    }
    else{
        $resp["status"]=true;
        $data=mysqli_fetch_all($result,MYSQLI_ASSOC); // [{id}]
        $resp["id"]=$data[0]["id"];
    }
}
else{
    $result=mysqli_query($con,"select id from company where user='$user' and pass='$pass'");
    if(mysqli_num_rows($result)==0){
        $resp["status"]=false;
    }
    else{
        $resp["status"]=true;
        $data=mysqli_fetch_all($result,MYSQLI_ASSOC); // [{id}]
        $resp["id"]=$data[0]["id"];
    }
} // step 2 & 3


echo json_encode($resp); // step 4   {status:false} or {status:true,id:8}



?>