cargar_tabla_cuarto_frio(null);

j$123( "#btn_aceptar_ingreso_cuarto_frio" ).click(function(){
  inventario = [];
  var radio= $('input:radio[name=transmission]:checked').val();
  var tipo=j$123("#car-type").val();
  var peso = j$123("#txt_peso_tab2").val();
  var deco=j$123("#txt_decomiso_tab2").val();
  var cant=j$123("#txt_cantidad_tab2").val();
  var corte= j$123("#selectmenu_tab2").val();
  var utilizadas=j$123("#txt_cantidad_utilizadas").val();
  if(peso == ""){
      peso="0";
  }
  if(deco == ""){
      deco="0";
  }
  if(cant == ""){
      cant="0";
  }
  if(radio!=null){

    if(radio=="Entero"){
      if(cant != "" && cant!="0"){

        if(peso!="" || tipo!="Pollos"){
          array = [];
          array[0] = j$123("#datepicker_tab2").datepicker('getDate');
          array[1] = tipo;
          array[2] = radio;
          array[3] = "-";
          array[4] = "0";
          array[5] = cant;
          array[6] = peso;
          array[7] = j$123("#sesion").text();
          cargar_tabla_cuarto_frio(array);
          inventario[0] = tipo;
          inventario[1] = radio;
          inventario[2] = "-";
          inventario[3] = cant;
          inventario[4] = peso;

          Agregar_Inventario(inventario);
        }else {
          j$123( "#message" ).html('   El campo de Peso está vacío!');
          runEffect();
        }

      }else {
        j$123( "#message" ).html('   El campo de Cantidad está vacío!');
        runEffect();
      }
    }
    if(radio=="Piezas"){
      if(tipo=="Pollos"){
        if(utilizadas!="" && peso!=""){
          array = [];
          array[0] = j$123("#datepicker_tab2").datepicker('getDate');
          array[1] = tipo;
          array[2] = radio;
          array[3] = corte;
          array[4] = deco;
          array[5] = cant;
          array[6] = peso;
          array[7] = j$123("#sesion").text();
          cargar_tabla_cuarto_frio(array);
          inventario[0] = tipo;
          inventario[1] = radio;
          inventario[2] = corte;
          inventario[3] = cant;
          inventario[4] = peso;
          inventario[5] = utilizadas;

          Agregar_Inventario(inventario);
        }else{
          j$123( "#message" ).html('    Se encuentran campos vacíos!');
          runEffect();
        }
      }else {
        j$123( "#message" ).html('   Elija un producto que corresponda a la condicion!');
        runEffect();
      }
    }

    if(radio=="Picado"){
      if(tipo=="Gallinas"){
        if (peso!="" && peso!="0" && j$123("#txt_cantidad_utilizadas").val()!="") {
          array = [];
          array[0] = j$123("#datepicker_tab2").datepicker('getDate');
          array[1] = tipo;
          array[2] = radio;
          array[3] = "Gallina Picada";
          array[4] = deco;
          array[5] = cant;
          array[6] = peso;
          array[7] = j$123("#sesion").text();
          cargar_tabla_cuarto_frio(array);
          inventario[0] = tipo;
          inventario[1] = radio;
          inventario[2] = "-";
          inventario[3] = cant;
          inventario[4] = peso;
          inventario[5] = utilizadas;
          Agregar_Inventario(inventario);
        }else {
          j$123( "#message" ).html('   Se encuentran campos vacíos!!!');
          runEffect();
        }
      }else {
        j$123( "#message" ).html('   Elija un producto que corresponda a la condicion!');
        runEffect();
      }

    }
  }else{
    j$123( "#message" ).html('   Elija una Condicion!');
    runEffect();
  }

});




function cargar_tabla_cuarto_frio(parametro){

  j$123.ajax({
      data: {"datos" :  parametro},
      type: "POST",
      dataType: "json",
      url: "RegistroCuarto.php",
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
      "<td>" + data[i].Decomiso + "</td> " +
      "<td>" + data[i].Cantidad + "</td> " +
      "<td>" + data[i].Peso + "</td> " +
      "<td>" + data[i].Usuario + "</td> " +

      "</tr>";
    }
    var tabla = "<table id='tabla_2' cellspacing='1' class='tablesorter'>" +
      "<thead>" +
        "<tr>" +
        "<th>Check</th>" +
          "<th>N°</th>" +
          "<th>Fecha</th>"+
          "<th>Tipo ave</th>"+
          "<th>Condicion</th>"+
          "<th>Pieza</th>"+
          "<th>Decomiso</th>"+
          "<th>Cantidad</th>"+
          "<th>Peso</th>"+
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
          "<th>Decomiso</th>"+
          "<th>Cantidad</th>"+
          "<th>Peso</th>"+
          "<th>Usuario</th>"+
        "</tr>"+
      "</tfoot>"+
      "<tbody>"+
         texthtml +
      "</tbody>"+
    "</table>"+
    "<div style='padding-left: 92%'><button id='btn_eliminar_ingreso_cuarto_frio' class='boton-tab2'>Eliminar</button></div>"+
    "<div id='pager2' class='pager'>"+
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
    j$123('#div_tabla_2').html(tabla);
    j$123( "#btn_eliminar_ingreso_cuarto_frio" ).button();
    if(texthtml != ""){
      $("#tabla_2").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager2")});
    }

    j$123( "#btn_eliminar_ingreso_cuarto_frio" ).click(function(){
      id = [];
      j$123("#tabla_2 input[type=checkbox]:checked").each(function(){
          id.push(j$123(this).val());
      });
      if(id.length > 0){
        accion_dialogo(2, id, "Eliminar ingresos a cuarto frío!");
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
    j$123("#txt_cantidad_tab2").val('');
    j$123("#txt_cantidad_utilizadas").val('');
    j$123("#txt_peso_tab2").val('');
    j$123("#txt_decomiso_tab2").val('');
    }).fail(function( jqXHR, textStatus, errorThrown ) {
      alert(textStatus + "!!");
    });
}

function eliminar_ingreso_Cuarto(parametro){

  j$123.ajax({
      data: {"datos" :  parametro},
      type: "POST",
      url: "eliminar_ingreso_Cuarto.php"
    }).done(function( data, textStatus, jqXHR ) {
      cargar_tabla_cuarto_frio(null);
      j$123( "#message" ).html(data);
      runEffect();
    }).fail(function( jqXHR, textStatus, errorThrown ) {
      alert(textStatus + "!!");
    });
}
function Agregar_Inventario(parametro){

  j$123.ajax({
      data: {"datos" :  parametro},
      type: "POST",
      url: "Inventario.php"
    }).done(function( data, textStatus, jqXHR ) {
      // j$123( "#message" ).html('   Inventario Actualizado!');
      // runEffect();
    }).fail(function( jqXHR, textStatus, errorThrown ) {
      alert(textStatus + "!!");
    });
}
