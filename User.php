<?php
    include 'conn.php';
    header("Access-Control-Allow_Origin: *");
    
    $sql = $conn->query("SELECT * FROM user");
    $resutlt = array();

    while ($data = $sql->fetch_assoc()){
        $result[]=$data;
    }

    echo json_encode($result);

    mysqli_close($conn);
?>
