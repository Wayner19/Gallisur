<?php
require_once("conexion.php");

$conn = new Conexion();
$var = $_POST["datos"];

  $conn -> consulta("DELETE FROM `tbl_login` WHERE `user`='".$var[0]."'");

  $respuesta="Se elimino el Usuario exitosamente";
  echo json_encode($respuesta);

?>
