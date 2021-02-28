

<?php

require_once 'auth.php';
require_once 'admin.php';



?>
<?php printHeader(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Administracion</title>
</head>
<body>
<a href="../puesto de trabajo.html" class="btn btn-success" style="background-color:#46A2FD; font-size: 14px; text-align: center; color: white;padding-top:15px;
                            padding-bottom:5px;
                            padding-left:20px;
                            padding-right:20px;
                            border-color: #d8d8d8;
                            border-width: 3px;
                            border-style: solid;
                            border-radius:35px;">Agregar puesto de trabajo</a>

<button onclick="Mostu()" class="btn btn-primary">Mostrar</button>


<table class="table  table-striped">
    <thead class="thead">
        <tr>
            <th>ID</th>
            <th>UBICACION</th>
                    <th>POSICION</th>
                    <th>COMPAÑIA</th>
            <th>TIPO</th>
            <th>LOGO</th>
            <th>URL</th>
            <th>CATEGORIA</th>
            <th>DESCRIPCION</th>
            <th>COMO APLICAR</th>
            <th>EMAIL</th>
            <th></th>
        </tr>
    </thead>

    <tbody id="tabla">
    </tbody>
</table>
<script src="../assets/js/puestos.js">
    </script>
</body>
</html>
