<?php
header('content-type:text/html;charset=utf-8');
include("inc/dbconn.php");
include("init.inc.php");
$sql = "select * from shangpinlist";
$result = $conn->query($sql);
$page=$_GET['page'];

// $len=count($data);
// for ($i=0; $i < 6; $i++) { 
    if ($result->num_rows>0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;

        }
    } 
    // $page=$_GET['page'];
    // for($i=0;$i<6;$i++){
    //    $data[]=$arr[$i]; 
    // }
    $len=count($data);
    for($i=($page-1)*16;$i<(16*$page);$i++){
        //判断数据存不存在
        if($len>$i){
            $data2[]=$data[$i]; 
        }
        
     }
// }
$res=array('data'=>$data2,'length'=>$len);
// print_r($res);
echo json_encode($res);



?>