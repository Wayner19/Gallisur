cargar_lista_despacho();
cargar_tabla_despacho(null, null);
var array=[];
var contador=0;
function cargar_lista_despacho(){  //Esto es como ejemplo para que vea como se debe de insertar cada línea!
  j$123("#txt_cantidad_tab3").val('');
  j$123("#txt_peso_tab3").val('');


if(array==null){

  array=[
  {"Tipo":"", "Condicion":"", "Pieza":"","Cantidad":"", "Peso":""}
  ];
}
  var texthtml="";

  for (var i = 0; i < array.length; i++) {

    texthtml += "<tr>" +
    "<td><input type='checkbox' value='" + array[i].id + "'></td>" +
    //"<td style='width: 20%;'><center><img src='images/eliminar.png' class='img_eliminar'id='num' onclick='EliminarD(j$123('#num').val())' data-valor='" + i + "'/></center></td>" +
    "<td>" + array[i].Tipo + "</td> " +
    "<td>" + array[i].Condicion + "</td> " +
    "<td>" + array[i].Pieza + "</td>" +
    "<td>" + array[i].Peso + "</td> " +
    "<td>" + array[i].Cantidad + "</td>" +
    "</tr>";
  }

  var datos = "<table id='tabla_3' cellspacing='1' class='tablesorter'>" +
 "<thead>" +
    "<tr>" +
    "<th>Quitar</th>" +
    "<th>Tipo</th>" +
    "<th>Condicion</th>" +
    "<th>Pieza</th>" +
    "<th>Peso</th>" +
    "<th>Cantidad</th>" +
    "</tr>" +
 "</thead>" +
"<tfoot>" +
    "<tr>" +
      "<th>Quitar</th>" +
      "<th>Tipo</th>" +
      "<th>Condicion</th>" +
      "<th>Pieza</th>" +
      "<th>Peso</th>" +
      "<th>Cantidad</th>" +
    "</tr>" +
  "</tfoot>" +
  "<tbody>" +
  texthtml +
 "</tbody>" +
 "</table>"+
 "<div style='padding-left: 62%'><button id='btn_eliminar_despacho2' class='boton-tab2'>Eliminar</button></div>";

 j$123('#div_tabla_3').html(datos);
 j$123( "#btn_eliminar_despacho2" ).button();
 $("#tabla_3").tablesorter({widthFixed: true, widgets: ['zebra']});
 j$123( "#btn_eliminar_despacho2" ).click(function(){
   id = [];
   j$123("#tabla_3 input[type=checkbox]:checked").each(function(){
       id.push(j$123(this).val());
   });

   if(id.length > 0){
     accion_dialogo(3, id, "Eliminar producto!");
     j$123( "#dialog" ).dialog( "open" );
     if(id.length >= 2){
       j$123( "#mensaje1" ).html("Se eliminarán " + id.length + " registros!");
     }else {
       j$123( "#mensaje1" ).html("Se eliminará " + id.length + " registro!");
     }
   }else{
     j$123( "#dialog_single_button" ).dialog( "open" );
     j$123( "#mensaje2" ).html('Debe de seleccionar al menos una fila!');
   }
 });
}

function EliminarD(parametro){

  for (x=0;x < parametro.length;x++) {
    var ind=parametro[x];
    array.splice(ind, 1);

  }
  cargar_lista_despacho();
}

function arrya(){
  if(contador==0){
    array.length=0;
  }
  var Tipo=j$123("#car-type2").val();
  var Pieza=j$123("#selectmenu_tab3").val();
  var Cantidad=j$123("#txt_cantidad_tab3").val();
  var Peso=j$123("#txt_peso_tab3").val();
  var radio= $('input:radio[name=transmission2]:checked').val();

  if(Tipo=="Gallinas"){
    if(radio!=null){
      if(radio=="Entero"){
        if(Cantidad!=0){
          Pieza="-";
          Peso=0;

          array.push({"id":contador, "Tipo":Tipo, "Condicion":radio, "Pieza":Pieza,"Cantidad":Cantidad, "Peso":Peso});
          cargar_lista_despacho();
          contador++;
        }else{
          j$123( "#message" ).html('   Verifique el campo de Cantidad esta vacio!');
          runEffect();
        }
      }
      if(radio=="Picado"){
        if(Peso!=0){
          Pieza="-";
          Cantidad=0;

          array.push({"id":contador, "Tipo":Tipo, "Condicion":radio, "Pieza":Pieza,"Cantidad":Cantidad, "Peso":Peso});
          cargar_lista_despacho();
          contador++;
        }else{
          j$123( "#message" ).html('   Verifique el campo de Peso esta vacio!');
          runEffect();
        }
      }
    }else{
      j$123( "#message" ).html('   Seleccione una Condicion!');
      runEffect();
    }
  }
  if(Tipo=="Pollos"){
    if(radio!=null){
      if(radio=="Entero"){
        if(Cantidad!=0 && Peso!=0){
          Pieza="-";

          array.push({"id":contador, "Tipo":Tipo, "Condicion":radio, "Pieza":Pieza,"Cantidad":Cantidad, "Peso":Peso});
          cargar_lista_despacho();
          contador++;
        }else{
          j$123( "#message" ).html('   Verifique los campos de Cantidad y Peso, estan vacios!');
          runEffect();
        }
      }
      if(radio=="Piezas"){
        if(Peso!=0){
          Cantidad=0;

          array.push({"id":contador, "Tipo":Tipo, "Condicion":radio, "Pieza":Pieza,"Cantidad":Cantidad, "Peso":Peso});
          cargar_lista_despacho();
          contador++;
        }else{
          j$123( "#message" ).html('   Verifique el campo de Peso esta vacio!');
          runEffect();
        }
      }
    }else{
      j$123( "#message" ).html('   Seleccione una Condicion!');
      runEffect();
    }
  }
  if(Tipo=="Gallos"){
    if(radio!=null){
      if(radio=="Entero"){
        if(Peso!=0){
          Pieza="-";
          Cantidad=0;

          array.push({"id":contador, "Tipo":Tipo, "Condicion":radio, "Pieza":Pieza,"Cantidad":Cantidad, "Peso":Peso});
          cargar_lista_despacho();
          contador++;
        }else{
          j$123( "#message" ).html('   Verifique el campo de Peso esta vacio!');
          runEffect();
        }
      }
    }else{
      j$123( "#message" ).html('   Seleccione una Condicion!');
      runEffect();
    }
  }
}
j$123( "#btn_agregar_despacho" ).click(function(){
  var Venta = $('input:radio[name=radio]:checked').val();
  var Fecha = j$123("#datepicker_tab2").datepicker('getDate');
  var array2 = [];
  array2[0] = Venta;
  array2[1] = Fecha;
  array2[2] = j$123("#sesion").text();
  if(Venta!=null){
    cargar_tabla_despacho(array, array2);
    array=null;
    array2=null;
    contador=0;
    cargar_lista_despacho();
  }else{
    j$123( "#message" ).html('   Seleccione el metodo de Venta!');
    runEffect();
  }
});

function cargar_tabla_despacho(parametro, parametro2){
  j$123.ajax({
      data: {"datos" :  parametro, "datos2" :  parametro2},
      type: "POST",
      dataType: "json",
      url: "Despacho.php",
    }).done(function( data, textStatus, jqXHR ) {
      var texthtml="";
      for(i = 0; i < data.length; i++){
      var f = new Date(data[i].Fecha);
      texthtml += "<tr>" +
      "<td><input type='checkbox' value='" + data[i].id + "'></td>" +
      "<td>" + (i + 1) + "</td> " +
      "<td>" + f.getDate() + " - " + (f.getMonth() + 1) + " - " + (f.getYear() + 1900) + "</td>" +
      "<td>" + data[i].Tipo + "</td> " +
      "<td>" + data[i].Condicion + "</td> " +
      "<td>" + data[i].Pieza + "</td> " +
      "<td>" + data[i].Peso + "</td> " +
      "<td>" + data[i].Cantidad + "</td> " +
      "<td>" + data[i].Venta + "</td> " +
      "<td>" + data[i].Usuario + "</td> " +
      "</tr>";
    }
    var tabla = "<table id='tabla_4' cellspacing='1' class='tablesorter'>" +
      "<thead>" +
        "<tr>" +
        "<th>Check</th>" +
          "<th>N°</th>" +
          "<th>Fecha</th>"+
          "<th>Tipo ave</th>"+
          "<th>Condicion</th>"+
          "<th>Pieza</th>"+
          "<th>Peso</th>"+
          "<th>Cantidad</th>"+
          "<th>Venta</th>"+
          "<th>Usuario</th>"+
        "</tr>"+
      "</thead>"+
      "<tfoot>"+
        "<tr>"+
        "<th>Check</th>" +
          "<th>N°</th>"+
          "<th>Fecha</th>"+
          "<th>Tipo ave</th>"+
          "<th>Condicion</th>"+
          "<th>Pieza</th>"+
          "<th>Peso</th>"+
          "<th>Cantidad</th>"+
          "<th>Venta</th>"+
          "<th>Usuario</th>"+
        "</tr>"+
      "</tfoot>"+
      "<tbody>"+
         texthtml +
      "</tbody>"+
    "</table>"+
    //"<div style='padding-left: 92%'><button id='btn_eliminar_despacho' class='boton-tab2'>Eliminar</button></div>"+
    "<div id='pager4' class='pager'>"+
      "<form>"+
        "<img src='images/f1.png' class='first'/>"+
        "<img src='images/f2.png' class='prev'/>"+
        "<input type='text' class='pagedisplay'/>"+
        "<img src='images/f3.png' class='next'/>"+
        "<img src='images/f4.png' class='last'/>"+
        "<select class='pagesize'>"+
          "<option selected='selected'  value='10'>10</option>"+
          "<option value='20'>20</option>"+
          "<option value='30'>30</option>"+
          "<option  value='40'>40</option>"+
        "</select>"+
      "</form>"+
    "</div>";
    j$123('#div_tabla_4').html(tabla);
    j$123( "#btn_eliminar_despacho" ).button();
    if(texthtml != ""){
      $("#tabla_4").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager4")});
    }

    j$123( "#btn_eliminar_despacho" ).click(function(){
      id = [];
      j$123("#tabla_4 input[type=checkbox]:checked").each(function(){
          id.push(j$123(this).val());
      });
      if(id.length > 0){
        accion_dialogo(4, id, 'Eliminar despacho!');
        j$123( "#dialog" ).dialog( "open" );
        if(id.length >= 2){
          j$123( "#mensaje1" ).html("Se eliminarán " + id.length + " registros!");
        }else {
          j$123( "#mensaje1" ).html("Se eliminará " + id.length + " registro!");
        }
      }else{
        j$123( "#dialog_single_button" ).dialog( "open" );
        j$123( "#mensaje2" ).html('Debe de seleccionar al menos una fila!');
      }
    });
    if(parametro != null){
      j$123( "#message" ).html('   Se agregó un registro exitosamente!');
      runEffect();
    }
    }).fail(function( jqXHR, textStatus, errorThrown ) {
      alert(textStatus + "!!");
    });
    contador=0;
}
