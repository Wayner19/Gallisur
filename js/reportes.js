function reporte(opt){
  switch (opt) {
    case 1:
    j$123( ".titulo_ventana" ).html('	Ingresos a planta');
    j$123( "#ingresos" ).css('visibility', 'visible');
    j$123( "#cuarto" ).css('visibility', 'collapse');
    j$123( "#despacho" ).css('visibility', 'collapse');
    j$123( "#devoluciones" ).css('visibility', 'collapse');
    j$123( "#pedidos" ).css('visibility', 'collapse');
    j$123( "#decomisos" ).css('visibility', 'collapse');
    j$123( "#personal" ).css('visibility', 'collapse');
    cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_12", "btn_imprimir_1", "pager12", "#div_tabla_12");
      break;
      case 2:
      j$123( ".titulo_ventana" ).html('	Ingresos a cuarto frío');
      j$123( "#ingresos" ).css('visibility', 'collapse');
      j$123( "#cuarto" ).css('visibility', 'visible');
      j$123( "#despacho" ).css('visibility', 'collapse');
      j$123( "#devoluciones" ).css('visibility', 'collapse');
      j$123( "#pedidos" ).css('visibility', 'collapse');
      j$123( "#decomisos" ).css('visibility', 'collapse');
      j$123( "#personal" ).css('visibility', 'collapse');
      cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_13", "btn_imprimir_2", "pager13", "#div_tabla_13");
        break;
        case 3:
        j$123( ".titulo_ventana" ).html('	Reporte despachos');
        j$123( "#ingresos" ).css('visibility', 'collapse');
        j$123( "#cuarto" ).css('visibility', 'collapse');
        j$123( "#despacho" ).css('visibility', 'visible');
        j$123( "#devoluciones" ).css('visibility', 'collapse');
        j$123( "#pedidos" ).css('visibility', 'collapse');
        j$123( "#decomisos" ).css('visibility', 'collapse');
        j$123( "#personal" ).css('visibility', 'collapse');
        cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_14", "btn_imprimir_3", "pager14", "#div_tabla_14");
          break;
          case 4:
          j$123( ".titulo_ventana" ).html('	Reporte devoluciones');
          j$123( "#ingresos" ).css('visibility', 'collapse');
          j$123( "#cuarto" ).css('visibility', 'collapse');
          j$123( "#despacho" ).css('visibility', 'collapse');
          j$123( "#devoluciones" ).css('visibility', 'visible');
          j$123( "#pedidos" ).css('visibility', 'collapse');
          j$123( "#decomisos" ).css('visibility', 'collapse');
          j$123( "#personal" ).css('visibility', 'collapse');
          cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_15", "btn_imprimir_4", "pager15", "#div_tabla_15");
            break;
            case 5:
            j$123( ".titulo_ventana" ).html('	Reporte pedidos');
            j$123( "#ingresos" ).css('visibility', 'collapse');
            j$123( "#cuarto" ).css('visibility', 'collapse');
            j$123( "#despacho" ).css('visibility', 'collapse');
            j$123( "#devoluciones" ).css('visibility', 'collapse');
            j$123( "#pedidos" ).css('visibility', 'visible');
            j$123( "#decomisos" ).css('visibility', 'collapse');
            j$123( "#personal" ).css('visibility', 'collapse');
            cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_16", "btn_imprimir_5", "pager16", "#div_tabla_16");
              break;
              case 6:
              j$123( ".titulo_ventana" ).html('	Reporte decomisos');
              j$123( "#ingresos" ).css('visibility', 'collapse');
              j$123( "#cuarto" ).css('visibility', 'collapse');
              j$123( "#despacho" ).css('visibility', 'collapse');
              j$123( "#devoluciones" ).css('visibility', 'collapse');
              j$123( "#pedidos" ).css('visibility', 'collapse');
              j$123( "#decomisos" ).css('visibility', 'visible');
              j$123( "#personal" ).css('visibility', 'collapse');
              cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_17", "btn_imprimir_6", "pager17", "#div_tabla_17");
                break;
                case 7:
                j$123( ".titulo_ventana" ).html('	Reporte planilla');
                j$123( "#ingresos" ).css('visibility', 'collapse');
                j$123( "#cuarto" ).css('visibility', 'collapse');
                j$123( "#despacho" ).css('visibility', 'collapse');
                j$123( "#devoluciones" ).css('visibility', 'collapse');
                j$123( "#pedidos" ).css('visibility', 'collapse');
                j$123( "#decomisos" ).css('visibility', 'collapse');
                j$123( "#personal" ).css('visibility', 'visible');
                cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_18", "btn_imprimir_7", "pager18", "#div_tabla_18");
                  break;
  }
}

cargar_tabla_reporte_1(null, "registro_planta.php", "tabla_12", "btn_imprimir_1", "pager12", "#div_tabla_12");

function cargar_tabla_reporte_1(parametro, url_php, id_tabla, id_btn_eliminar, id_pager, div_tabla){
  j$123.ajax({
      data: {"datos" :  parametro},
      type: "POST",
      dataType: "json",
      url: url_php,
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
    var tabla = "<table id='" + id_tabla + "' cellspacing='1' class='tablesorter'>" +
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
    "<div style='padding-left: 85%; padding-right: 5%'><button id='"+id_btn_eliminar+"' class='boton-tab3'>Imprimir</button></div>"+
    "<div id='"+id_pager+"' class='pager'>"+
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
    j$123(div_tabla).html(tabla);
    j$123( "#" + id_btn_eliminar ).button();
    if(texthtml != ""){
      $("#"+id_tabla).tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#"+id_pager)});
    }
    }).fail(function( jqXHR, textStatus, errorThrown ) {
      alert(textStatus + "!!");
    });
}
