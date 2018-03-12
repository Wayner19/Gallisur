<?php
    require_once("conexion.php");

    $conn = new Conexion();
    $var = $_POST["datos"];
    $var2 = $_POST["datos2"];


    if($var != null){
      foreach($var as $fila){
      $conn -> consulta("INSERT INTO tbl_despacho(id, Fecha, Tipo, Condicion, Pieza, Peso, Cantidad, Venta, Usuario)  values('','". $var2[1]. "', '". $fila["Tipo"]. "','". $fila["Condicion"]. "','". $fila["Pieza"]. "',". $fila["Peso"]. ",". $fila["Cantidad"]. ",'".$var2[0]."','".$var2[2]."')");
      //--------------------Gallina --------------------------------------
          if($fila["Tipo"]=="Gallinas"){
            if($fila["Condicion"]=="Entero"){
              $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallinas' AND Condicion='Entero' ");
              while($rows= $resultado -> fetch_array()){
                $cant = $rows[4];
              }

                $cant= $cant - $fila["Cantidad"];
                $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.' WHERE  `Tipo`='Gallinas' and `Condicion`='Entero'");

            }
            if($fila["Condicion"]=="Picado"){

              $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallinas' AND Condicion='Picado' ");
              while($rows= $resultado -> fetch_array()){
                $peso = $rows[5];
              }

                $peso= $peso - $fila["Peso"];
                $conn->consulta("UPDATE tbl_inventario SET Peso= '.$peso.' WHERE  `Tipo`='Gallinas' and `Condicion`='Picado'");

            }
          }
      //--------------------Pollos --------------------------------------
        if($fila["Tipo"]=="Pollos"){
          if($fila["Condicion"]=="Entero"){
            $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Pollos' AND Condicion='Entero' ");
            while($rows= $resultado -> fetch_array()){
              $cant = $rows[4];
              $peso = $rows[5];
            }

              $cant= $cant - $fila["Cantidad"];
              $peso= $peso - $fila["Peso"];
              $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.', Peso='.$peso.' WHERE  `Tipo`='Pollos' and `Condicion`='Entero'");

          }
          if($fila["Condicion"]=="Piezas"){
            $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Pollos' AND Condicion='Piezas' AND Pieza= '". $fila["Pieza"]. "'");
            while($rows= $resultado -> fetch_array()){
              $pesop = $rows[5];
            }

              $pesop= $pesop - $fila["Peso"];
              $conn->consulta("UPDATE tbl_inventario SET Peso= '.$pesop.' WHERE Tipo='Pollos' AND Condicion='Piezas' AND Pieza= '". $fila["Pieza"]. "'");

          }
        }
//----------------------------- Gallos --------------------------------------
if($fila["Tipo"]=="Gallos"){
  if($fila["Condicion"]=="Entero"){
    $resultado = $conn -> consulta("SELECT * FROM tbl_inventario WHERE Tipo='Gallos' AND Condicion='Entero' ");
    while($rows= $resultado -> fetch_array()){
      $cant = $rows[4];
    }

      $cant= $cant - $fila["Cantidad"];
      $conn->consulta("UPDATE tbl_inventario SET Cantidad='.$cant.' WHERE  `Tipo`='Gallos' and `Condicion`='Entero'");

  }
}
      }
    }
    $resultado = $conn -> consulta("SELECT * FROM tbl_despacho");

    $datos = array();

    while($fila = $resultado -> fetch_array())
      {
        $datos[] = $fila;
      }
    echo json_encode($datos);
?>
