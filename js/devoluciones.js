cargar_tabla_devouciones(null);

function cargar_tabla_devouciones(parametro){
  j$123.ajax({
      data: {"datos" :  parametro},
      type: "POST",
      dataType: "json",
      url: "registro_planta.php",
    }).done(function( data, textStatus, jqXHR ) {
      var texthtml="";
      for(i = 0; i < data.length; i++){
      var f = new Date(data[i].fecha);
      texthtml += "<tr>" +
      "<td><input type='checkbox' value='" + data[i].id + "'></td>" +
      "<td>" + (i + 1) + "</td> " +
      "<td>" + f.getDate() + " - " + (f.getMonth() + 1) + " - " + (f.getYear() + 1900) + "</td>" +
      "<td>" + data[i].tipo + "</td> " +
      "<td>" + data[i].origen + "</td> " +
      "<td>" + data[i].cantidad + "</td> " +
      "<td>" + data[i].muertas + "</td> " +
      "<td>" + data[i].camion + "</td> " +
      "</tr>";
    }
    var tabla = "<table id='tabla_5' cellspacing='1' class='tablesorter'>" +
      "<thead>" +
        "<tr>" +
        "<th>Check</th>" +
          "<th>N°</th>" +
          "<th>Fecha</th>"+
          "<th>Tipo ave</th>"+
          "<th>Origen</th>"+
          "<th>Cantidad</th>"+
          "<th>Aves muertas</th>"+
          "<th>Camión</th>"+
        "</tr>"+
      "</thead>"+
      "<tfoot>"+
        "<tr>"+
        "<th>Check</th>" +
          "<th>N°</th>"+
          "<th>Fecha</th>"+
          "<th>Tipo ave</th>"+
          "<th>Origen</th>"+
          "<th>Cantidad</th>"+
          "<th>Aves muertas</th>"+
          "<th>Camión</th>"+
        "</tr>"+
      "</tfoot>"+
      "<tbody>"+
         texthtml +
      "</tbody>"+
    "</table>"+
    "<div style='padding-left: 92%'><button id='btn_eliminar_devolucion' class='boton-tab2'>Eliminar</button></div>"+
    "<div id='pager5' class='pager'>"+
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
    j$123('#div_tabla_5').html(tabla);
    j$123( "#btn_eliminar_devolucion" ).button();
    if(texthtml != ""){
      $("#tabla_5").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager5")});
    }

    j$123( "#btn_eliminar_devolucion" ).click(function(){
      id = [];

      j$123("#tabla_5 input[type=checkbox]:checked").each(function(){
          id.push(j$123(this).val());
      });
      if(id.length > 0){
        accion_dialogo(5, id, 'Eliminar devolución!');
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
}
