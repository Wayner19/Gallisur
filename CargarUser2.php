<?php
require_once("conexion.php");
$conn = new Conexion();

$resultado = $conn -> consulta("SELECT * FROM tbl_login");
$datos = array();

while($fila = $resultado -> fetch_array())
  {
    $datos[] = $fila;
  }
echo json_encode($datos);
?>
