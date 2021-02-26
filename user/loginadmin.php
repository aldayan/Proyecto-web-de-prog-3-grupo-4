<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Administrador</title>
    <link rel="stylesheet" href="assets/css/style2.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">




</head>

<body>

    <main>

        <form action="" class="caja_login">
            <h1>Inicio de seccion</h1>
            <label for="userName" class="sr-only">Nombre de usuario</label>
            <input type="text" id="userName" class="form-control" placeholder="Correo electronico" name="userName" required autofocus>
            <label for="contrasena" class="sr-only">Contraseña</label>
            <input type="password" id="contrasena" class="form-control" placeholder="Contraseña" name="contrasena" required>

            <button type="submit">Entrar</button>

        </form>

    </main>

    <script src="assets/js/login_admin.js"></script>

    <a href="index.html" class="btn btn-success" style=" text-align: center;
    border: 2px solid #3498db;
    padding: 20px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    background:#191919;">Volver</a>
</body>

</html>