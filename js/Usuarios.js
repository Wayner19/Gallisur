cargar_tabla(null);




function mostrar(){
document.getElementById('Usuario').style.display = 'block';
document.getElementById('Contra').style.display = 'none';
document.getElementById('Eliminar').style.display = 'none';
}
function mostrar2(){
  cargar_user();
document.getElementById('Contra').style.display = 'block';
document.getElementById('Usuario').style.display = 'none';
document.getElementById('Eliminar').style.display = 'none';
}
function Eli(){
cargar_user2();
document.getElementById('Eliminar').style.display = 'block';
document.getElementById('Contra').style.display = 'none';
document.getElementById('Usuario').style.display = 'none';
}
function ja(){
alert( "Handler for .change() called." );
}

  j$123( "#agregarusuario" ).click(function(){

    if(j$123("#usua").val() != ""){
      if(j$123("#contra").val() != ""){
            array = [];
            var pri = Privilegios.options[Privilegios.selectedIndex].value;
            array[0] = j$123("#usua").val();
            array[1] = j$123("#contra").val();
            array[2] = pri;

            AgregarU(array);
            Limpiar();
        }else{
          j$123( "#message" ).html('   El campo contraseña está vacío!');
          runEffect();
        }
      }else{

        j$123( "#message" ).html('   El campo usuario está vacío!');
        runEffect();
      };
  });
  j$123( "#cambiarcontra" ).click(function(){
    if ($('#Usu').val().trim() === '') {
        j$123( "#message" ).html('   Debe seleccionar un Usuario');
        runEffect();
    } else {
      if(j$123("#contra2").val() != ""){
            array = [];
            var usu = Usu.options[Usu.selectedIndex].value;
            array[0] = usu;
            array[1] = j$123("#contra2").val();
            ModificarU(array);
            Limpiar();
        }else{
          j$123( "#message" ).html('   El campo contraseña está vacío!');
          runEffect();
        }
    }

  });
  j$123( "#eliminar" ).click(function(){
    if ($('#EUsu').val().trim() === '') {
        j$123( "#message" ).html('   Debe seleccionar un Usuario');
        runEffect();
    } else {
      array = [];
      var usu = EUsu.options[EUsu.selectedIndex].value;
      array[0] = usu;
                  EliminarU(array);
                  Limpiar();
                  cargar_user2();
    }

  });
function Limpiar(){
 $('#usua').val('');
 $('#contra').val('');
  $('#contra2').val('');
 };


  function cargar_user(){
    j$123.ajax({
      type: "POST",
      dataType: "json",
        url: "CargarUser.php"
      }).done(function( data, textStatus, jqXHR ) {
        var opciones = "<option value='' selected='selected'>Seleccione...</option>";
        for(i = 0; i < data.length; i++){
          opciones += "<option>"+ data[i].user +"</option>";
        }
          j$123( "#Usu" ).html(opciones);
      }).fail(function( jqXHR, textStatus, errorThrown ) {
        alert(textStatus + "!!");
      });
    };

    function cargar_user2(){
      j$123.ajax({
        type: "POST",
        dataType: "json",
          url: "CargarUser2.php"
        }).done(function( data, textStatus, jqXHR ) {
          var opciones = "<option value='' selected='selected'>Seleccione</option>";
          for(i = 0; i < data.length; i++){
            opciones += "<option>"+ data[i].user +"</option>";
          }
            j$123( "#EUsu" ).html(opciones);

        }).fail(function( jqXHR, textStatus, errorThrown ) {
          alert(textStatus + "!!");
        });
      };

  function AgregarU(parametro){
    j$123.ajax({
        data: {"datos" :  parametro},
        type: "POST",
        dataType: "json",
        url: "AgregarUsuario.php",
      }).done(function( data, textStatus, jqXHR ) {


      if(parametro != null){
        j$123( "#message" ).html('   Se agregó un Usuario exitosamente!');
        runEffect();
      }
      }).fail(function( jqXHR, textStatus, errorThrown ) {
        alert(textStatus + "!!");
      });
  }

  function ModificarU(parametro){
    j$123.ajax({
        data: {"datos" :  parametro},
        type: "POST",
        url: "ModificarContra.php"
      }).done(function( data, textStatus, jqXHR ) {
        cargar_tabla(null);
        j$123( "#message" ).html('   Se modifico un Usuario exitosamente!');
        runEffect();
      }).fail(function( jqXHR, textStatus, errorThrown ) {
        alert(textStatus + "!!");
      });
  }

    function runEffect() {
      j$123( "#mensaje" ).show( 'drop', { to: { width: 280, height: 185 } }, 500, callback );
    }

    function EliminarU(parametro){

      j$123.ajax({
          data: {"datos" :  parametro},
          type: "POST",
          url: "EliminarUsuario.php"
        }).done(function( data, textStatus, jqXHR ) {
          cargar_tabla(null);
          j$123( "#message" ).html(data);
          runEffect();

        }).fail(function( jqXHR, textStatus, errorThrown ) {
          alert(textStatus + "!!");
        });
    }

    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        j$123( "#mensaje:visible" ).removeAttr( "style" ).fadeOut();
      }, 2500 );
    }

    j$123( "#mensaje" ).hide();
