<?php

include ("conet.php");

$usuario = $_POST["usuario"];
$pass= $_POST["pass"];
$nombre = $_POST["nombre"];
$correo= $_POST["correo"];

if(isset($_POST['inpi'])){


$query = mysqli_query($conn,"select * from usuarios where usuario = '$usuario' and pass = '$pass'");
$nr = mysqli_num_rows($query);

if($nr==1)
{
    echo "<script> alert('Bienvenido $usuario'); window.location='../puesto de trabajo.html'</script>";
} else
{
   
     echo "<script> alert('Usuario no existe'); window.location='LoginUsuario.html'</script>";
}
}

    
if(isset($_POST['inpim']))
{
$sqlgrabar = "INSERT INTO usuarios(usuario,pass,nombre,correo) values ('$usuario','$pass','$correo','$nombre')";


if(mysqli_query($conn,$sqlgrabar)){

    echo "<script> alert('Usuario registrado: $usuario'); window.location='LoginUsuario.html'</script>";
}else {
    
    echo "Error;".$sql."<br>".mysqli_error($conn);

}
    
}



 ?>



