

<?php

require_once "../Filehandler/Ifilehandler.php";
require_once "../Filehandler/Jsonfhandler.php";
require_once "../database/context.php";
require_once "User.php";
require_once "UserService.php";

$result = null;
$message = "";

session_start();

$service = new UserService("../database");

if(isset($_POST['userName']) && isset($_POST['contraseña'])){

    $result = $service->Login($_POST['userName'],$_POST['contraseña']);

    if($result != null){

        $_SESSION['user'] = $result;
        header("Location: admin2.php");
        exit();

    }else{
        $message = "Usuario o contraseña incorrect@s";
    }

}

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Administrador</title>
    <link rel="stylesheet" href="../assets/css/style2.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">




</head>

<body>

<form action="loginadmin.php" class="caja_login" method="POST">

<?php if($message!=""): ?>
  <div class="alert alert-danger" role="alert">
      <?= $message ?>
  </div>
 <?php endif; ?>
    <main>

       
            <h1>Inicio de seccion</h1>
            <label for="userName" class="sr-only">Nombre de usuario</label>
            <input type="text" id="userName" class="form-control" placeholder="Correo electronico" name="userName" required autofocus>
            <label for="contraseña" class="sr-only">Contraseña</label>
            <input type="password" id="contraseña" class="form-control" placeholder="Contraseña" name="contraseña" required>
            <div class="checkbox mb-3">

</div>
            <button  type="submit" style="color: white;">Entrar</button>

        

    </main>

    <script src="../assets/js/login_admin.js"></script>

    <a href="../index.html" class="btn btn-success" style=" text-align: center;
    border: 2px solid #3498db;
    padding: 20px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    background:#191919;">Volver</a>

</form>
</body>

</html>