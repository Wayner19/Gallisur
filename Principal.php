<?php
session_start();
if (!empty($_SESSION['usuario'])){

?>
<!DOCTYPE html>
<html lang="us">
<head>
	<meta charset="utf-8">
	<title>Industrias GalliSur</title>
	<link href="css/jquery-ui.css" rel="stylesheet">
	<link rel="stylesheet" href="css/jq.css" type="text/css" media="print, projection, screen" />
	<link rel="stylesheet" href="css/style.css" type="text/css" media="print, projection, screen" />
	<script src="js/jquery-1.12.4.js"></script>
	<script src="js/external/jquery/jquery.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script type="text/javascript">
		var j$123 = $.noConflict(true);
	</script>
	<script type="text/javascript" src="js/jquery-latest.js"></script>
	<script type="text/javascript" src="js/jquery.tablesorter.js"></script>
	<script type="text/javascript" src="js/jquery.tablesorter.pager.js"></script>

</head>
<body>
	<!-- Tabs -->
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">Ingresar aves a planta</a></li>
		<li><a href="#tabs-2">Ingresar aves a cuarto frío</a></li>
		<li><a href="#tabs-3">Despachar</a></li>
		<li><a href="#tabs-4">Devoluciones</a></li>
		<li><a href="#tabs-5">Pedidos</a></li>
		<li><a href="#tabs-6">Decomisos</a></li>
    <li><a href="#tabs-7">Planilla</a></li>
		<li><a href="#tabs-8">Reportes</a></li>
		<li><a href="#tabs-9">Configuraci&oacute;n</a></li>
		<a>Usuario:</a>
		<a id="sesion"><?php
		echo $_SESSION['usuario'];?></a>
	</ul>
	<!------------------------------ingreso Planta ----------------------------->
	<div id="tabs-1">
		<div class="tab1-arriba">
			<img src="images/logo2.png" alt="" id="logo1">
			<div class="esp">
				<h3>Fecha de ingreso</h3>
		    <div id="datepicker"></div>
			</div>
		<div class="esp">
			<h3>Tipo de ave</h3>
	    <select id="selectmenu">
		   <option selected="selected">Pollos</option>
		   <option>Gallinas</option>
		   <option>Gallos</option>
	   </select>
		 <h3>Origen</h3>
		 <input type="text" id="txt_origen" name="" value="" class="caja-texto">

		 <h3>Cantidad</h3>
		 <input type="number" id="txt_cantidad" name="" value="" class="caja-texto">
		</div>
		<div class="">
		 <h3>Aves muertas</h3>
		 <input type="number" id="txt_muertas" name="" value="" class="caja-texto">

		 <h3>Camión</h3>
		 <input type="text" id="txt_camion" name="" value="" class="caja-texto">
		 <br>
		 <br>
		 <br>
		 <button id="btn_aceptar_ingreso" class="boton-tab1">Agregar registro</button>
		</div>
		<img src="images/logo1.png" alt="" id="logo2">
	</div>
	<br><br>
	<div class="tab1-abajo">
		<div style="width: 728px; margin: 10px auto;">
		</div>
		<div id="div_tabla_1"></div>
	</div>
	</div>
	<!------------------------------ingreso Cuarto ----------------------------->
	<div id="tabs-2">
			<div class="tab1-arriba">
				<img src="images/logo2.png" alt="" id="logo3">
				<div class="esp">
					<h3>Fecha ingreso a cuarto frío</h3>
			    <div id="datepicker_tab2"></div>
				</div>
			<div class="esp">
				<h3>Tipo de ave y condición</h3>
				<div id="controlgroup">
		<select id="car-type" >
			<option selected="selected" value="Pollos">Pollos</option>
			<option value="Gallinas">Gallinas</option>
			<option value="Gallos">Gallos</option>
		</select>
		<label for="radio_entero">Entero (a)</label>
		<input type="radio" name="transmission" id="radio_entero" value="Entero">
		<label for="radio_piezas">Piezas</label>
		<input type="radio" name="transmission" id="radio_piezas" value="Piezas">
		<label for="radio_picado">Picado (a)</label>
		<input type="radio" name="transmission" id="radio_picado" value="Picado">
	</div>
	<div class="no_enteras">
		<div class="">
			<h3>Cantidad de aves utilizadas</h3>
			<input type="text" id="txt_cantidad_utilizadas" name="" value="" class="caj">
		</div>
		<div class="uti">
			<h3>Tipo de pieza</h3>
			<select id="selectmenu_tab2">
			 <option selected="selected">Muslos</option>
			 <option>Alas</option>
			 <option>Pechugas</option>
			 <option>Patas</option>
			 <option>Pescuezo</option>
			 <option>Ante muslo</option>
			</select>
		</div>
	</div>
	<div class="no_enteras">
	<div class="">
		<h3>Cantidad</h3>
		<input type="number" id="txt_cantidad_tab2" name="" value="" class="caj">
	</div>
	<div class="uti">
		<h3>Peso (Kg)</h3>
		<input type="number" id="txt_peso_tab2" name="" value="" class="caj">
	</div>
			</div>
			</div>
			<div class="">
			 <h3>Decomiso</h3>
			 <input type="text" id="txt_decomiso_tab2" name="" value="" class="caja-texto">
			 <br>
			 <br>
			 <br>
			 <button id="btn_aceptar_ingreso_cuarto_frio" class="boton-tab1">Agregar registro</button>
			</div>
			<!--<img src="images/logo1.png" alt="" id="logo4">-->
		</div>
		<br><br>
		<div class="tab1-abajo">
			<div style="width: 728px; margin: 10px auto;">
			</div>
			 <div id="div_tabla_2"></div>
		</div>
	</div>
	<!------------------------------ Despacho ----------------------------->
	<div id="tabs-3">
		<div class="arriba_tab3">
				<div class="">
					<h3>Fecha despacho</h3>
					<div id="datepicker_tab3"></div>
				</div>
				<div class="">

					<h3>Tipo de ave y condición</h3>
					<div id="controlgroup2">
			<select id="car-type2">
				<option selected="selected">Pollos</option>
				<option>Gallinas</option>
				<option>Gallos</option>
			</select>
			<label for="radio_entero2">Entero (a)</label>
			<input type="radio" name="transmission2" id="radio_entero2" value="Entero">
			<label for="radio_piezas2">Piezas</label>
			<input type="radio" name="transmission2" id="radio_piezas2" value="Piezas">
			<label for="radio_picado2">Picado (a)</label>
			<input type="radio" name="transmission2" id="radio_picado2" value="Picado">
		</div>
		<div class="no_enteras">
			<div class="">
				<h3>Tipo de pieza</h3>
				<select id="selectmenu_tab3">
				 <option selected="selected">Muslos</option>
				 <option>Alas</option>
				 <option>Pechugas</option>
				 <option>Patas</option>
				 <option>Pescuezo</option>
				 <option>Ante muslo</option>
				</select>
			</div>

		</div>
				</div>
				<div class="">
					<h3>Cantidad</h3>
					<input type="text" id="txt_cantidad_tab3" name="" value="" class="caja-texto">
					<h3>Peso (Kg)</h3>
					<input type="text" id="txt_peso_tab3" name="" value="" class="caja-texto">
					<button id='btn_agregar_lista_despacho' onclick="arrya()"class='boton-tab2'><img src='images/flecha_derecha.png'/></button>
				</div>
				<div class="">
					<div style="width:300px;height:200px;overflow:scroll;overflow-y:scroll;overflow-x:hidden;">
						<div id="div_tabla_3"></div>
					</div>
					<div class="">
						<h3>Venta:</h3>
						<form style="margin-top: 1em;">
		<div id="radioset">
			<input type="radio" id="radio1_tab3" name="radio" value="Planta"><label for="radio1_tab3" >Planta</label>
			<input type="radio" id="radio2_tab3" name="radio" value="Camion 1"><label for="radio2_tab3" >Camión 1</label>
			<input type="radio" id="radio3_tab3" name="radio" value="Camion 2"><label for="radio3_tab3" >Camión 2</label>
		</div>
		</form>
					</div>
					<button id='btn_agregar_despacho' class='boton-tab3'>Agregar registro</button>
				</div>
		</div>
		<div class="abajo_tab3">
			<div id="div_tabla_4"></div>
		</div>
	</div>
	<!------------------------------ Devoluciones----------------------------->
	<div id="tabs-4">
		Devoluciones
	</div>
	<!------------------------------ Pedidos ----------------------------->
	<div id="tabs-5">
		Pedidos
	</div>
	<!------------------------------ Decomisos ----------------------------->
	<div id="tabs-6">
		Decomisos
	</div>
	<!------------------------------ Planilla ----------------------------->
	<div id="tabs-7">
		Planilla
	</div>
	<!------------------------------ Reportes ----------------------------->
	<div id="tabs-8">
		Reportes
	</div>
	<!------------------------------ Configuracion ----------------------------->
	<div id="tabs-9">

		<li><a href="#" style="color:#040404;" onclick="mostrar()"><B>Agregar Usuario</B></a></li>
		<li><a href="#" style="color:#040404;" onclick="mostrar2()"><B>Cambiar Contraseña</B></a></li>
		<li><a href="#" style="color:#040404;" onclick="Eli()"><B>Eliminar Usuario</B></a></li>
		<li><a href="cerrarsesion.php" style="color:#FF0000;"><B>Finalizar Sesión</B></a></li>
<div id="Usuario" style="display:none;">
	<h3>Usuario</h3>
	<input type="text" id="usua" name="" value="" class="caja-texto">
  <br>
	<h3>Contraseña</h3>
	<input type="text" id="contra" name="" value="" class="caja-texto">
	<br>
	<h3>Privilegios</h3>
	<select id="Privilegios">
  <option value="admin">Administrador</option>
  <option value="colaborador">Colaborador</option>
  </select>
	<br><br>
	<input type="button" id="agregarusuario" class="boton-tab3" name="" value="Agregar Usuario">
</div>
<div id="Contra" style="display:none;">
	<h3>Usuario</h3>
<div class="usu">
     Elige un Usuario
     <select id="Usu"></select>
</div>
  <br>
	<h3>Contraseña</h3>
	<input type="text" id="contra2" name="" value="" class="caja-texto">
	<br><br>
	<input type="button" id="cambiarcontra" name="" class="boton-tab3" value="Cambiar Contraseña">
</div>
<div id="Eliminar" style="display:none;">
	<h3>Usuario</h3>
<div class="Eusu">
     Elige un Usuario
     <select id="EUsu"></select>
</div>
  <br><br>
	<input type="button" id="eliminar" name="" class="boton-tab3"value="Eliminar Usuario">

</div>

	</div>


</div>
<!------------------------------ Mensaje ----------------------------->
<div id="mensaje" class="men">
	<div class="ui-widget">
	<div class="ui-state-highlight ui-corner-all" style="padding: 0 .7em;">
		<p><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span>
		<strong>Mensaje!</strong> <p id="message"></p> </p>
	</div>
</div>
</div>
<div id="dialog" title="Eliminar ingresos a planta!">
	<p id="mensaje1"></p>
</div>
<div id="dialog2" title="Eliminar ingresos a planta!">
	<p id="mensaje12"></p>
</div>
<div id="dialog3" title="Eliminar ingresos a planta!">
	<p id="mensaje123"></p>
</div>
<div id="dialog_single_button" title="Mensaje!">
	<p id="mensaje2"></p>
</div>
<div id="dialog_single_button2" title="Mensaje!">
	<p id="mensaje22"></p>
</div>
<div id="dialog_single_button3" title="Mensaje!">
	<p id="mensaje223"></p>
</div>
<script type="text/javascript" src="js/elementos.js"></script>
<script type="text/javascript" src="js/funciones.js"></script>
<script type="text/javascript" src="js/IngresoCuarto.js"></script>
<script type="text/javascript" src="js/despachar.js"></script>
<script type="text/javascript" src="js/Usuarios.js"></script>

</body>
</html>
<?php
}else{
header("Location: index.php");
}
?>