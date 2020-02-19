<?php
    include("../connection.php");
    $query = "SELECT * FROM users WHERE id BETWEEN 1 AND 100";
    $users = array();
    $result = $connection->query($query);
    while($res = $result->fetch_assoc()){
        array_push($users, $res);
    }
    echo json_encode($users);
?>