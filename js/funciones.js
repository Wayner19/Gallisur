  cargar_tabla(null);

  j$123( "#btn_aceptar_ingreso" ).click(function(){
    if(j$123("#txt_origen").val() != ""){
      if(j$123("#txt_cantidad").val() != ""){
          if(j$123("#txt_camion").val() != ""){
            array = [];
            array[0] = j$123("#datepicker").datepicker('getDate');
            array[1] = j$123("#selectmenu").val();
            array[2] = j$123("#txt_origen").val();
            array[3] = j$123("#txt_cantidad").val();
            if(j$123("#txt_muertas").val() != ""){
              array[4] = j$123("#txt_muertas").val();
            }else{
              array[4] = 0;
            }
            array[5] = j$123("#txt_camion").val();
            cargar_tabla(array);
          }else{
            j$123( "#message" ).html('   El campo camión está vacío!');
            runEffect();
          }
        }else{
          j$123( "#message" ).html('   El campo cantidad está vacío!');
          runEffect();
        }
      }else{
        j$123( "#message" ).html('   El campo origen está vacío!');
        runEffect();
      }
  });

  function cargar_tabla(parametro){
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
      var tabla = "<table id='tabla_1' cellspacing='1' class='tablesorter'>" +
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
      "<div style='padding-left: 92%'><button id='btn_eliminar_ingreso' class='boton-tab2'>Eliminar</button></div>"+
  		"<div id='pager' class='pager'>"+
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
  	  j$123('#div_tabla_1').html(tabla);
      j$123( "#btn_eliminar_ingreso" ).button();
      if(texthtml != ""){
        $("#tabla_1").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager")});
      }

      j$123( "#btn_eliminar_ingreso" ).click(function(){
        id = [];

        j$123("#tabla_1 input[type=checkbox]:checked").each(function(){
            id.push(j$123(this).val());
        });
        if(id.length > 0){
          accion_dialogo(1, id, 'Eliminar ingresos a planta!');
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
      j$123("#txt_origen").val('');
      j$123("#txt_cantidad").val('');
      j$123("#txt_muertas").val('');
      j$123("#txt_camion").val('');
      }).fail(function( jqXHR, textStatus, errorThrown ) {
        alert(textStatus + "!!");
      });
  }

  function eliminar_ingreso(parametro){
    j$123.ajax({
        data: {"datos" :  parametro},
        type: "POST",
        url: "eliminar_ingreso.php"
      }).done(function( data, textStatus, jqXHR ) {
        cargar_tabla(null);
        j$123( "#message" ).html(data);
        runEffect();
      }).fail(function( jqXHR, textStatus, errorThrown ) {
        alert(textStatus + "!!");
      });
  }

    function runEffect() {
      j$123( "#mensaje" ).show( 'drop', { to: { width: 280, height: 185 } }, 500, callback );
    }

    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        j$123( "#mensaje:visible" ).removeAttr( "style" ).fadeOut();
      }, 2500 );
    }

    j$123( "#mensaje" ).hide();
