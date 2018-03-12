<?php
session_start();
require_once("conexion.php");
$datos = new Conexion();
$var = $_POST["datos"];
$datos->consulta("UPDATE  `tbl_login` SET  `contra` =  '".$var[1]."' WHERE  `tbl_login`.`user` ='".$var[0]."'");

if($datos){
  $respuesta="La Contrasena se modifico exitosamente";
      echo json_encode($respuesta);
}else{
$respuesta="Error";
 echo json_encode($respuesta);
}

?>
