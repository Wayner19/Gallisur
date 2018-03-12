<?php
session_start();
require_once("conexion.php");
$datos = new Conexion();

$datos->consulta("SELECT * FROM tbl_login where user='".$_POST['valor']."'");
$row=$datos->extraer_datos();

if($_POST['valor']==$row['user']){
  $contraseña="";
  for($x=0; $x<3; $x++){
      $contraseña=$contraseña.$letraAleatoria = chr(rand(ord("a"), ord("z"))).$numeroAleatorio = rand(0, 10);
  }

  $mail = $contraseña;
//Titulo
$titulo = "PRUEBA DE CONTRASEÑA";
//cabecera
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
//dirección del remitente
$headers .= "From: Geeky Theory < tu_dirección_email >\r\n";
//Enviamos el mensaje a tu_dirección_email
$bool = mail("zeta26@hotmail.es",$titulo,$mail,$headers);
$datos2 = new Conexion();
$datos2->consulta("UPDATE  `tbl_login` SET  `contra` =  '".$contraseña."' WHERE  `tbl_login`.`user` ='".$_POST['valor']."'");

  $respuesta["confirmacion"]="true";
      echo json_encode($respuesta);
}else{
$respuesta["confirmacion"]="false";
 echo json_encode($respuesta);
}

?>
