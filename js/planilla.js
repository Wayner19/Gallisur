function planilla(opt){
  switch (opt) {
    case 1:
    j$123( "#funcionarios" ).css('visibility', 'visible');
    j$123( "#pagos" ).css('visibility', 'collapse');
    j$123( "#vales" ).css('visibility', 'collapse');
    j$123( "#labores" ).css('visibility', 'collapse');
      break;
      case 2:
      j$123( "#funcionarios" ).css('visibility', 'collapse');
      j$123( "#pagos" ).css('visibility', 'visible');
      j$123( "#vales" ).css('visibility', 'collapse');
      j$123( "#labores" ).css('visibility', 'collapse');
        break;
        case 3:
        j$123( "#funcionarios" ).css('visibility', 'collapse');
        j$123( "#pagos" ).css('visibility', 'collapse');
        j$123( "#vales" ).css('visibility', 'visible');
        j$123( "#labores" ).css('visibility', 'collapse');
          break;
          case 4:
          j$123( "#funcionarios" ).css('visibility', 'collapse');
          j$123( "#pagos" ).css('visibility', 'collapse');
          j$123( "#vales" ).css('visibility', 'collapse');
          j$123( "#labores" ).css('visibility', 'visible');
            break;
  }
}

  $('#file-input').change(function(e) {
      addImage(e);
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;

      if (!file.type.match(imageType))
       return;

      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }

     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr({"src":result,"width":"200px","height":"200px"});
     }

     cargar_tabla_pagos(null);

     function cargar_tabla_pagos(parametro){
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
         var tabla = "<table id='tabla_9' cellspacing='1' class='tablesorter'>" +
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
         "<div style='padding-left: 92%'><button id='btn_eliminar_pagos' class='boton-tab2'>Eliminar</button></div>"+
         "<div id='pager9' class='pager'>"+
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
         j$123('#div_tabla_9').html(tabla);
         j$123( "#btn_eliminar_pagos" ).button();
         if(texthtml != ""){
           $("#tabla_9").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager9")});
         }

         j$123( "#btn_eliminar_pagos" ).click(function(){
           id = [];

           j$123("#tabla_9 input[type=checkbox]:checked").each(function(){
               id.push(j$123(this).val());
           });
           if(id.length > 0){
             accion_dialogo(1, id);
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
     }

     cargar_tabla_vales(null);

     function cargar_tabla_vales(parametro){
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
         var tabla = "<table id='tabla_10' cellspacing='1' class='tablesorter'>" +
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
         "<div style='padding-left: 92%'><button id='btn_eliminar_vales' class='boton-tab2'>Eliminar</button></div>"+
         "<div id='pager10' class='pager'>"+
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
         j$123('#div_tabla_10').html(tabla);
         j$123( "#btn_eliminar_vales" ).button();
         if(texthtml != ""){
           $("#tabla_10").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager10")});
         }

         j$123( "#btn_eliminar_vales" ).click(function(){
           id = [];

           j$123("#tabla_10 input[type=checkbox]:checked").each(function(){
               id.push(j$123(this).val());
           });
           if(id.length > 0){
             accion_dialogo(1, id);
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
     }

     cargar_tabla_labores(null);

     function cargar_tabla_labores(parametro){
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
         var tabla = "<table id='tabla_11' cellspacing='1' class='tablesorter'>" +
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
         "<div style='padding-left: 92%'><button id='btn_eliminar_labores' class='boton-tab2'>Eliminar</button></div>"+
         "<div id='pager11' class='pager'>"+
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
         j$123('#div_tabla_11').html(tabla);
         j$123( "#btn_eliminar_labores" ).button();
         if(texthtml != ""){
           $("#tabla_11").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager11")});
         }

         j$123( "#btn_eliminar_labores" ).click(function(){
           id = [];

           j$123("#tabla_11 input[type=checkbox]:checked").each(function(){
               id.push(j$123(this).val());
           });
           if(id.length > 0){
             accion_dialogo(1, id);
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
     }
