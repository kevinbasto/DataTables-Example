<?php
    // ESTAS CREDENCIALES LAS TIENES QUE CAMBIAR POR LAS DE TU LOCALHOST QUEDARIA EL TUYO ASI $conexion = new mysqli("localhost","root","","crm"); 
    $connection = new mysqli("localhost","root","","tobi");

    if ($connection) {
    	//echo "conectado";
    }else{
    	echo "conexion fallida";
    }
?>