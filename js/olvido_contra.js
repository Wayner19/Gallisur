$(document).ready(function(){
  $('#olvido_contra').click(function() {
   comprobarCampos();
   });



function comprobarCampos() {
    //NO hay nada escrito
    if($('#login').val().length == 0){
      $( "#message" ).html('   Por favor, introduzca su nombre de usuario!');
      runEffect();
          return false;
    }else{// SI rellenado, SI email valido
      Proceso($('#login').val(), "$('#password').val()");
      return false;
    }
}

function Proceso(valor, valor2){

  var parametro = {
	  "valor" : valor,
    "valor2" : valor2
	};

	$.ajax({
	  data:  parametro,
	  url:   'correo.php',
	  type:  'post',
	beforeSend: function () {
    $("#login").html("espere...");
	  $("#password").html("espere...");
	},success:  function (respuesta) {
		var json = eval("(" + respuesta + ")");
		if((json.confirmacion).toString()== "true"){
      $("#message").html('   Su Contraseña temporal fue enviada al correo!');
      runEffect();
    }else{
      $("#message").html('   Sus credenciales son incorrectas!');
      runEffect();
    }
	}
	});
 }

 function runEffect() {
   $("#mensaje").show( 'drop', { to: { width: 280, height: 185 } }, 500, callback );
 }

 //callback function to bring a hidden box back
 function callback() {
   setTimeout(function() {
     $("#mensaje:visible").removeAttr( "style" ).fadeOut();
   }, 2500 );
 }

 $("#mensaje").hide();

});
