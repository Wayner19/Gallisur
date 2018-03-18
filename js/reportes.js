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
                  break;
  }
}
