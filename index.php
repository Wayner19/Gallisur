<?php
session_start();
  unset($_SESSION['usuario']);
  session_destroy();
?>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta name="viewport" charset="UTF-8" content="width=device-width, initial-scale=1.0">
  <title>Industrias GalliSur</title>
  <link href="css/jquery-ui.css" rel="stylesheet">
  <link rel="stylesheet" href="css/stylelogin.css" type="text/css" media="print, projection, screen" />
  <script src="js/jquery-1.12.4.js"></script>
  <script src="js/external/jquery/jquery.js"></script>
  <script src="js/jquery-ui.js"></script>
    <script src="js/login.js"></script>
    <script src="js/olvido_contra.js" type="text/javascript"></script>
</head>
<body>
  <div class="imagen">
		<img src="images/fondo.png"/>
  </div>
  <div class="main-wrap">
        <div class="login-main">
		    <div class="title"><b>Iniciar sesión</b></div>
            <input id="login" type="text" placeholder="Ingrese el usuario" class="box1 border1">
            <input id="password" type="password" placeholder="Ingrese la contraseña" class="box1 border2">
            <input id="login_boton" type="submit" class="send" value="Entrar">
            <p>Olvidó su contraseña?   <a href="#" id="olvido_contra"><b>Click aquí!</b></a></p>
        </div>
  </div>
  <div class="about">© 2018 Hecho por FERMIR TECHNOLOGIES</div>
  <div id="mensaje" class="mensa">
  	<div class="ui-widget">
  	<div class="ui-state-highlight ui-corner-all" style="padding: 0 .7em;">
      <br>
  		<p><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span>
  		<strong>Mensaje!</strong><p id="message"></p> </p>
      <br>
  	</div>
  </div>
  </div>
  <img id="img_cargar" src="images/cargar.gif" alt="">
</body>
</html>
