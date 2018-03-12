<?php
session_start();
    require_once("conexion.php");

    $conn = new Conexion();
    $var = $_POST["datos"];
    $cant=0;
    $peso=0;
    $pesop=0;

//--------------------Gallina --------------------------------------
    if($var[0]=="Gallinas"){
      if($var[1]=="Entero"){
        $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallinas' AND Condicion='Entero' ");
        while($rows= $resultado -> fetch_array()){
          $cant = $rows[4];
        }
        if($cant == 0){
          $conn -> consulta("INSERT INTO `tbl_inventario`(`id`, `Tipo`, `Condicion`, `Pieza`, `Cantidad`, `Peso`) VALUES ('','". $var[0]. "', '". $var[1]. "','". $var[2]. "','". $var[3]. "',". $var[4]. ")");
        }else{
          $cant= $cant + $var[3];
          $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.' WHERE  `Tipo`='Gallinas' and `Condicion`='Entero'");
        }
      }
      if($var[1]=="Picado"){
        $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallinas' AND Condicion='Entero' ");
        while($rows= $resultado -> fetch_array()){
          $cant = $rows[4];
        }
        $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallinas' AND Condicion='Picado' ");
        while($rows= $resultado -> fetch_array()){
          $peso = $rows[5];
        }
        if($peso == 0){
          $conn -> consulta("INSERT INTO `tbl_inventario`(`id`, `Tipo`, `Condicion`, `Pieza`, `Cantidad`, `Peso`) VALUES ('','". $var[0]. "', '". $var[1]. "','". $var[2]. "','". $var[3]. "',". $var[4]. ")");
        }else{
          $cant= $cant - $var[5];
          $peso= $peso + $var[4];
          $conn->consulta("UPDATE tbl_inventario SET Peso= '.$peso.' WHERE  `Tipo`='Gallinas' and `Condicion`='Picado'");
          $conn = new Conexion();
          $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.' WHERE  `Tipo`='Gallinas' and `Condicion`='Entero'");
        }
      }
    }
//--------------------Pollos --------------------------------------
  if($var[0]=="Pollos"){
    if($var[1]=="Entero"){
      $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Pollos' AND Condicion='Entero' ");
      while($rows= $resultado -> fetch_array()){
        $cant = $rows[4];
        $peso = $rows[5];
      }
      if($cant == 0){
        $conn -> consulta("INSERT INTO `tbl_inventario`(`id`, `Tipo`, `Condicion`, `Pieza`, `Cantidad`, `Peso`) VALUES ('','". $var[0]. "', '". $var[1]. "','". $var[2]. "','". $var[3]. "',". $var[4]. ")");
      }else{
        $cant= $cant + $var[3];
        $peso= $peso + $var[4];
        $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.', Peso='.$peso.' WHERE  `Tipo`='Pollos' and `Condicion`='Entero'");
      }
    }
    if($var[1]=="Piezas"){
      $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Pollos' AND Condicion='Piezas' AND Pieza= '". $var[2]. "'");
      while($rows= $resultado -> fetch_array()){
        $pesop = $rows[5];
      }
      $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Pollos' AND Condicion='Entero' ");
      while($rows= $resultado -> fetch_array()){
        $cant= $rows[4];
        $peso = $rows[5];
      }
      if($pesop == 0){
        $cant= $cant - $var[5];
        $peso= $peso - $var[4];
        $conn -> consulta("INSERT INTO `tbl_inventario`(`id`, `Tipo`, `Condicion`, `Pieza`, `Cantidad`, `Peso`) VALUES ('','". $var[0]. "', '". $var[1]. "','". $var[2]. "','". $var[3]. "',". $var[4]. ")");
        $conn = new Conexion();
        $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.', Peso='.$peso.' WHERE  `Tipo`='Pollos' and `Condicion`='Entero'");
      }else{
        $cant= $cant - $var[5];
        $peso= $peso - $var[4];
        $pesop= $pesop + $var[4];
        $conn->consulta("UPDATE tbl_inventario SET Peso= '.$pesop.' WHERE Tipo='Pollos' AND Condicion='Piezas' AND Pieza= '". $var[2]. "'");
        $conn = new Conexion();
        $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.', Peso='.$peso.' WHERE  `Tipo`='Pollos' and `Condicion`='Entero'");
      }
    }
  }
  //----------------------------- Gallos --------------------------------------
  if($var[0]=="Gallos"){
    if($var[1]=="Entero"){
      $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallos' AND Condicion='Entero' ");
      while($rows= $resultado -> fetch_array()){
        $cant = $rows[4];
      }
      if($cant == 0){
        $conn -> consulta("INSERT INTO `tbl_inventario`(`id`, `Tipo`, `Condicion`, `Pieza`, `Cantidad`, `Peso`) VALUES ('','". $var[0]. "', '". $var[1]. "','". $var[2]. "','". $var[3]. "',". $var[4]. ")");
      }else {
        $cant= $cant - $var[3];
        $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.' WHERE  `Tipo`='Gallos' and `Condicion`='Entero'");
      }


    }
  }

?>
