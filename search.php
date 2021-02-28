<?php 
    $posicion = $_POST['posicion'];

    $con = mysqli_connect("127.0.0.1","root","","base de datos");

    if ($con == null){

    } else{
        $query = "SELECT * FROM puestos WHERE posicion like '%$posicion%' ";
        $result = mysqli_query($con,$query);
        
        while ($fila = mysqli_fetch_row($result)) {
            echo $fila[5];
            
        }
    }


?>