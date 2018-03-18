function planilla(opt){
  switch (opt) {
    case 1:
    j$123( "#funcionarios" ).css('visibility', 'visible');
    j$123( "#pagos" ).css('visibility', 'collapse');
    j$123( "#vales" ).css('visibility', 'collapse');
      break;
      case 2:
      j$123( "#funcionarios" ).css('visibility', 'collapse');
      j$123( "#pagos" ).css('visibility', 'visible');
      j$123( "#vales" ).css('visibility', 'collapse');
        break;
        case 3:
        j$123( "#funcionarios" ).css('visibility', 'collapse');
        j$123( "#pagos" ).css('visibility', 'collapse');
        j$123( "#vales" ).css('visibility', 'visible');
          break;
  }
}
