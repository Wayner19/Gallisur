<?php
    require_once("conexion.php");

    $conn = new Conexion();
    $var = $_POST["datos"];


    if($var != null){
      $conn -> consulta("insert into tbl_login (id, user, contra, Privilegios) values('', '". $var[0] ."', '" . $var[1] . "','" . $var[2]. "')");
    }

      $respuesta["confirmacion"]="true";
          echo json_encode($respuesta);
    
?>
