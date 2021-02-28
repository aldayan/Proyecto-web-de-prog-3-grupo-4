<?php

class UserService{

    private $utilities;
    private $context;
  

    public function __construct($directory){

        $this->context = new context($directory);

    }

    public function Login($email,$contraseña){

        $stmt = $this->context->db->prepare("select * from loginadmin where email = ? and contraseña = ?");
        $stmt->bind_param("ss",$email,$contraseña);
        $result = $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows === 0){
            return null;
        }else{
            $user = new User;

            while($row = $result->fetch_object()){

                $user->id = $row->id;
                $user->email = $row->email;
                $user->contraseña = $row->contraseña;
                $user->nombre = $row->nombre;
                $user->apellido = $row->apellido;
                $user->correo = $row->correo; 

            }

            $stmt->close();
            return $user;
        }
    }

}

?>