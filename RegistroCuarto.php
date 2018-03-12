<?php
session_start();
    require_once("conexion.php");

    $conn = new Conexion();
    $var = $_POST["datos"];


    if($var != null){
      $conn -> consulta("INSERT INTO tbl_movimientocuarto(id, Fecha, Tipo, Condicion, Pieza, Decomiso, Cantidad, Peso, Usuario)  values('','". $var[0]. "', '". $var[1]. "','". $var[2]. "','". $var[3]. "',". $var[4]. ",". $var[5]. ",".$var[6].",'".$var[7]."')");
    }

    $resultado = $conn -> consulta("SELECT * FROM tbl_movimientocuarto");

    $datos = array();

    while($fila = $resultado -> fetch_array())
      {
        $datos[] = $fila;
      }
    echo json_encode($datos);
?>
