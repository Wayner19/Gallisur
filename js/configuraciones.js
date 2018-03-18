function configuracion(opt){
  switch (opt) {
    case 1:
    j$123( "#titulo_ventana2" ).html('	Agregar Usuario');
    j$123( "#usuarios" ).css('visibility', 'visible');
    j$123( "#pass" ).css('visibility', 'collapse');
    j$123( "#eliminar_usuario" ).css('visibility', 'collapse');
      break;
      case 2:
      cargar_user();
      j$123( "#titulo_ventana2" ).html('	Cambiar Contraseña');
      j$123( "#usuarios" ).css('visibility', 'collapse');
      j$123( "#pass" ).css('visibility', 'visible');
      j$123( "#eliminar_usuario" ).css('visibility', 'collapse');
        break;
        case 3:
        cargar_user2();
        j$123( "#titulo_ventana2" ).html('	Eliminar Usuario');
        j$123( "#usuarios" ).css('visibility', 'collapse');
        j$123( "#pass" ).css('visibility', 'collapse');
        j$123( "#eliminar_usuario" ).css('visibility', 'visible');
          break;
          case 4:
            j$123( "#mensaje1" ).html("Realmente desea cerrar la sesión?");
          j$123( "#dialog" ).dialog({
        		autoOpen: true,
        		width: 400,
        		title: "Cerrar Sesión",
        		buttons: [
        			{
        				text: "Ok",
        				click: function() {
        					window.location.href = 'cerrarsesion.php';
        					j$123( this ).dialog( "close" );
        				}
        			},
        			{
        				text: "Cancel",
        				click: function() {
        					j$123( this ).dialog( "close" );
        				}
        			}
        		]
        	});
            break;
  }
}
