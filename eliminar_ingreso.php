<?php
require_once("conexion.php");

$conn = new Conexion();
$var = $_POST["datos"];

foreach ($var as $key => $value) {
  $conn -> consulta("delete from ingreso_a_planta where id = ".$value);
}
$ms = "";
if(count($var) > 1){
  $ms = "Se han eliminado '".count($var)."' registros!!";
}else{
  $ms = "Se ha eliminado '".count($var)."' registro!!";
}
echo $ms;
?>
