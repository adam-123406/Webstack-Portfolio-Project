i<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$name=$data["name"];
$user=$data["user"];
$pass=$data["pass"];
$addr=$data["addr"];
$tel=$data["tel"];
$type=$data["type"]; // step 1

if($type=='cust'){
    $resp["status"]=mysqli_query($con,"insert into customers(name, tel, addr, user, pass) VALUES('$name','$tel','$addr','$user','$pass')");
}
else{
    $resp["status"]=mysqli_query($con,"insert into company(name, tel, addr, user, pass) VALUES('$name','$tel','$addr','$user','$pass')");
}   // step 2 & 3

if($resp["status"]){
    if($type=='cust'){
        $result=mysqli_query($con,"select id from customers where user='$user'");
        $data=mysqli_fetch_all($result,MYSQLI_ASSOC); // [{id}]
        $resp["id"]=$data[0]["id"];
    }
    else{
        $result=mysqli_query($con,"select id from company where user='$user'");
        $data=mysqli_fetch_all($result,MYSQLI_ASSOC); // [{id}]
        $resp["id"]=$data[0]["id"];
    }
}


echo json_encode($resp); // step 4  {status:false} or {status:true,id:8}


echo mysqli_error($con);
?>