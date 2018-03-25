cargar_lista_pedidos();
cargar_tabla_pedidos(null, null);
var array=[];
var contador=0;
function cargar_lista_pedidos(){

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

  var datos = "<table id='tabla_6' cellspacing='1' class='tablesorter'>" +
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
 "<div style='padding-left: 62%'><button id='btn_eliminar_pedido' class='boton-tab2'>Eliminar</button></div>";

 j$123('#div_tabla_6').html(datos);
 j$123( "#btn_eliminar_pedido" ).button();
 $("#tabla_6").tablesorter({widthFixed: true, widgets: ['zebra']});
 j$123( "#btn_eliminar_pedido" ).click(function(){
   id = [];
   j$123("#tabla_6 input[type=checkbox]:checked").each(function(){
       id.push(j$123(this).val());
   });
 });
}

function cargar_tabla_pedidos(parametro, parametro2){
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
    var tabla = "<table id='tabla_7' cellspacing='1' class='tablesorter'>" +
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
    "<div style='padding-left: 92%'><button id='btn_eliminar_pedido2' class='boton-tab2'>Eliminar</button></div>"+
    "<div id='pager7' class='pager'>"+
      "<form>"+
        "<img src='images/f1.png' class='first'/>"+
        "<img src='images/f2.png' class='prev'/>"+
        "<input type='text' class='pagedisplay'/>"+
        "<img src='images/f3.png' class='next'/>"+
        "<img src='images/f4.png' class='last'/>"+
        "<select class='pagesize'>"+
          "<option selected='selected'  value='7'>7</option>"+
          "<option value='20'>20</option>"+
          "<option value='30'>30</option>"+
          "<option  value='40'>40</option>"+
        "</select>"+
      "</form>"+
    "</div>";
    j$123('#div_tabla_7').html(tabla);
    j$123( "#btn_eliminar_pedido2" ).button();
    if(texthtml != ""){
      $("#tabla_7").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager7")});
    }

    j$123( "#btn_eliminar_pedido2" ).click(function(){
      id = [];
      j$123("#tabla_7 input[type=checkbox]:checked").each(function(){
          id.push(j$123(this).val());
      });
      if(id.length > 0){
        accion_dialogo(2, id);
        if(id.length >= 2){
          j$123( "#dialog" ).dialog( "open" );
          j$123( "#mensaje1" ).html("Se eliminarán " + id.length + " registros!");
        }else {
          j$123( "#dialog" ).dialog( "open" );
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
