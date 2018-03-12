$(document).ready(function(){
  $('#login').keydown(function (e){
    if(e.keyCode == 13){
      $("#login_boton").click();
    }
  });

$('#password').keydown(function (e){
    if(e.keyCode == 13){
        $("#login_boton").click();
    }
});

$('#login_boton').click(function(){
  comprobarCampos();
});

function comprobarCampos() {
    //NO hay nada escrito
    if($('#login').val().length == 0){
      $( "#message" ).html('   Por favor, introduzca su nombre de usuario!');
      runEffect();
          return false;
    }else{// SI rellenado, SI email valido
        validatePassword1();
          return false;
    }
}

function validatePassword1(){
  //NO tiene minimo de 5 caracteres o mas de 12 caracteres
  if($('#password').val().length == 0){
    $( "#message" ).html('   Por favor, introduzca su contraseña!');
    runEffect();
    return false;
  }else{  //NO tiene minimo de 5 caracteres o mas de 12 caracteres
    Proceso($('#login').val(), $('#password').val());
    return false;  
  }
}

function Proceso(valor, valor2){
$('#img_cargar').css("visibility", "visible");
  var parametro = {
	  "valor" : valor,
    "valor2" : valor2
	};

	$.ajax({
	  data:  parametro,
	  url:   'validacion.php',
	  type:  'post',
	beforeSend: function () {
    $("#login").html("espere...");
	  $("#password").html("espere...");
	},success:  function (respuesta) {
		var json = eval("(" + respuesta + ")");
		if((json.confirmacion).toString()== "true"){
		  $(location).attr('href',"Principal.php");
    }else{
      $('#img_cargar').css("visibility", "hidden");
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
