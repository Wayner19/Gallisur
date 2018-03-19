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
		<div class="user"><h1><b><a>Usuario:</a>
		<a id="sesion"><?php
		echo $_SESSION['usuario'];?></a></h1><b></div>

	</ul>
	<!---ingreso Planta ----------------------------->
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
	<!---ingreso Cuarto ----------------------------->
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
	<!--- Despacho ----------------------------->
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
	<!--- Devoluciones----------------------------->
	<div id="tabs-4">
		<div class="arriba_tab4">
			<div class="">
			<h3>Fecha devolución</h3>
			<div id="datepicker_tab4"></div>
		</div>
				<div class="espacio">
						<h3>Tipo de ave y condición</h3>
						<div id="controlgroup4">
				<select id="car-type4">
					<option selected="selected">Pollos</option>
					<option>Gallinas</option>
					<option>Gallos</option>
				</select>
				<label for="radio_entero4">Entero (a)</label>
				<input type="radio" name="transmission4" id="radio_entero4" value="Entero">
				<label for="radio_piezas4">Piezas</label>
				<input type="radio" name="transmission4" id="radio_piezas4" value="Piezas">
				<label for="radio_picado4">Picado (a)</label>
				<input type="radio" name="transmission4" id="radio_picado4" value="Picado">
			</div>
				<div class="">
					<h3>Tipo de pieza</h3>
					<select id="selectmenu_tab4">
					 <option selected="selected">Muslos</option>
					 <option>Alas</option>
					 <option>Pechugas</option>
					 <option>Patas</option>
					 <option>Pescuezo</option>
					 <option>Ante muslo</option>
					</select>
				</div>
			<h3>Cantidad</h3>
			<input type="text" id="txt_cantidad_tab4" name="" value="" class="caja_texto3">
		</div>
		<div class="espacio">
			<h3>Peso</h3>
			<input type="text" id="txt_peso_tab4" name="" value="" class="caja_texto3">
			<h3>Vendedor</h3>
			<input type="text" id="txt_vendedor_tab4" name="" value="" class="caja_texto3">
			<h3>Lote</h3>
			<input type="text" id="txt_lote_tab4" name="" value="" class="caja_texto3">
			</div>
			<div class="espacio">
			<button id='btn_agregar_devolucion' class='boton-tab4'>Registrar devolución</button>
			</div>
			</div>
			<div class="abajo_tab3">
				<div id="div_tabla_5"></div>
			</div>
	</div>
	<!--- Pedidos ----------------------------->
	<div id="tabs-5">
		<div class="arriba_tab4">
				<div class="">
					<h3>Fecha pedido</h3>
					<div id="datepicker_tab5"></div>
				</div>
				<div class="espacio">
					<h3>Cliente: </h3>
					<input type="text" id="txt_cliente_tab5" name="" value="" class="caja_texto5">
					<h3>Tipo de ave y condición</h3>
					<div id="controlgroup5">
			<select id="car-type5">
				<option selected="selected">Pollos</option>
				<option>Gallinas</option>
				<option>Gallos</option>
			</select>
			<label for="radio_entero5">Entero (a)</label>
			<input type="radio" name="transmission5" id="radio_entero5" value="Entero">
			<label for="radio_piezas5">Piezas</label>
			<input type="radio" name="transmission5" id="radio_piezas5" value="Piezas">
			<label for="radio_picado5">Picado (a)</label>
			<input type="radio" name="transmission5" id="radio_picado5" value="Picado">
		</div>
		<div class="no_enteras">
			<div class="">
				<h3>Tipo de pieza</h3>
				<select id="selectmenu_tab5">
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
				<div class="espacio">
					<h3>Cantidad</h3>
					<input type="text" id="txt_cantidad_tab5" name="" value="" class="caja-texto">
					<h3>Peso (Kg)</h3>
					<input type="text" id="txt_peso_tab5" name="" value="" class="caja-texto">
					<button id='btn_agregar_lista_pedido' onclick="arrya()"class='boton-tab2'><img src='images/flecha_derecha.png'/></button>
				</div>
				<div class="">
					<div style="width:350px;height:200px;overflow:scroll;overflow-y:scroll;overflow-x:hidden;">
						<div id="div_tabla_6"></div>
					</div>
					<button id='btn_agregar_pedido' class='boton-tab3'>Agregar pedido</button>
				</div>
		</div>
		<div class="abajo_tab3">
			<div id="div_tabla_7"></div>
		</div>
	</div>
	<!--- Decomisos ----------------------------->
	<div id="tabs-6">
		<div class="arriba_tab4">
		<div class="">
			<h3>Fecha Decomiso</h3>
			<div id="datepicker_tab6"></div>
		</div>
		<div class="espacio">
		<h3>Encargado</h3>
		<input type="text" id="txt_encargado_tab6" name="" value="" class="caja-texto">
		<h3>Lugar</h3>
		<input type="text" id="txt_lugar_tab6" name="" value="" class="caja-texto">
	</div>
	<div class="espacio">
			<h3>Pollos (peso)</h3>
			<input type="text" id="txt_cantidad_1_tab8" name="" value="" class="caja-texto espacio">
			<h3>Gallinas (cantidad)</h3>
			<input type="text" id="txt_cantidad_2_tab8" name="" value="" class="caja-texto espacio">
			<h3>Gallos (cantidad)</h3>
			<input type="text" id="txt_cantidad_3_tab8" name="" value="" class="caja-texto espacio">
	</div>
	<div class="espacio">
	<h3>Estado del producto:</h3>
	<div id="controlgroup1_8">
	<label for="transmission-standard">Vencido</label>
	<input type="radio" name="transmission" id="transmission-standard">
	<label for="transmission-automatic">Mal estado</label>
	<input type="radio" name="transmission" id="transmission-automatic">
	<label for="transmission-standard1">Baja calidad</label>
	<input type="radio" name="transmission" id="transmission-standard1">
</div>
<button id='btn_agregar_decomiso' class='boton-tab6'>Registrar decomiso</button>
		</div>
		</div>
		<div class="abajo_tab3">
			<div id="div_tabla_8"></div>
		</div>
		</div>
	<!--- Planilla ----------------------------->
	<div id="tabs-7">
		<div class="lateral">
			<div class="titulo_menu">
				<b>PLANILLA</b>
			</div>
			<div onclick="planilla(1)" class="opt"><B>Registro funcionario</B></div>
			<div onclick="planilla(2)" class="opt"><B>Registro pagos</B></div>
			<div onclick="planilla(3)" class="opt"><B>Registro vales</B></div>
		</div>
		<div id="funcionarios" class="planilla2">
			<div class="titulo_ventana2">
				Registro funcionario
			</div>
			<div class="arriba_tab4">
				<div class="espacio">
					<h3>Fecha de ingreso</h3>
					<div id="datepicker_tab7"></div>
				</div>
				<div class="espacio">
						<h3>Nombre:</h3>
						<input type="text" id="txt_nombre_tab7" name="" value="" class="caja-texto7">
					<div class="datos">
						<div class="">
							<h3>Cédula:</h3>
							<input type="text" id="txt_cedula_tab7" name="" value="" class="caja-texto8">
						</div>
					<div class="">
						<h3>Teléfono:</h3>
						<input type="text" id="txt_telefono_tab7" name="" value="" class="caja-texto8">
					</div>
					</div>
					<h3>Cuenta bancaria:</h3>
					<input type="text" id="txt_cuenta_tab7" name="" value="" class="caja-texto">
				</div>
				<div class="">
					<h3>Foto</h3>
					<img id="imgSalida" src="images/user.jpg" alt="">
			   	<input name="file-input" id="file-input" type="file" />
				</div>
			</div>
				<button id='btn_agregar_funcionario' class='boton-tab7'>Agregar funcionario</button>
		</div>
		<div id="pagos" class="planilla2 visible">
			<div class="titulo_ventana2">
				Registro pagos
			</div>
		</div>
		<div id="vales" class="planilla2 visible">
			<div class="titulo_ventana2">
				Registro vales
			</div>
		</div>
	</div>
	<!--- Reportes ----------------------------->
	<div id="tabs-8">
		<div class="lateral">
			<div class="titulo_menu">
				<b>REPORTES</b>
			</div>
			<div onclick="reporte(1)" class="opt"><B>Ingresos a planta</B></div>
			<div onclick="reporte(2)" class="opt"><B>Ingresos a cuarto frío</B></div>
			<div onclick="reporte(3)" class="opt"><B>Reporte despachos</B></div>
			<div onclick="reporte(4)" class="opt"><B>Reporte devoluciones</B></div>
			<div onclick="reporte(5)" class="opt"><B>Reporte pedidos</B></div>
			<div onclick="reporte(6)" class="opt"><B>Reporte decomisos</B></div>
			<div onclick="reporte(7)" class="opt"><B>Reporte planilla</B></div>
		</div>
		<div class="titulo_ventana">
			Ingresos a planta
		</div>
		<div id="ingresos" class="planilla">

		</div>
		<div id="cuarto" class="planilla visible">

		</div>
		<div id="despacho" class="planilla visible">

		</div>
		<div id="devoluciones" class="planilla visible">

		</div>
		<div id="pedidos" class="planilla visible">

		</div>
		<div id="decomisos" class="planilla visible">

		</div>
		<div id="personal" class="planilla visible">

		</div>
	</div>
	<!--- Configuracion ----------------------------->
	<div id="tabs-9">
		<div class="lateral">
			<div class="titulo_menu">
				<b>CONFIGURACIONES</b>
			</div>
			<div onclick="configuracion(1)" class="opt"><B>Agregar Usuario</B></div>
			<div onclick="configuracion(2)" class="opt"><B>Cambiar Contraseña</B></div>
			<div onclick="configuracion(3)" class="opt"><B>Eliminar Usuario</B></div>
			<div onclick="configuracion(4)" class="opt"><B>Finalizar Sesión</B></div>
		</div>
		<div id="titulo_ventana2" class="titulo_ventana">
			Agregar Usuario
		</div>
		<div id="usuarios" class="planilla">

<div id="Usuario" class="config">
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
		</div>
		<div id="pass" class="planilla visible">
<div id="Contra" class="config">
	<h3>Usuario</h3>
<div class="usu">
     Elige un Usuario
		 <br><br>
		 <div id="user" class="">

		 </div>
</div>
  <br>
	<h3>Contraseña</h3>
	<input type="text" id="contra2" name="" value="" class="caja-texto">
	<br><br>
	<input type="button" id="cambiarcontra" name="" class="boton-tab3" value="Cambiar Contraseña">
</div>
		</div>
		<div id="eliminar_usuario" class="planilla visible">
<div id="Eliminar" class="config">

<div class="Eusu">
    <h3>Elige un Usuario</h3>
<br>
		 <div id="user2" class="">

		 </div>
</div>
  <br><br>
	<input type="button" id="eliminar" name="" class="boton-tab3"value="Eliminar Usuario">

</div>
		</div>
	</div>


</div>
<!--- Mensaje ----------------------------->
<div id="mensaje" class="men">
	<div class="ui-widget">
	<div class="ui-state-highlight ui-corner-all" style="padding: 0 .7em;">
		<p><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span>
		<strong>Mensaje!</strong> <p id="message"></p> </p>
	</div>
</div>
</div>
<div id="dialog" title="">
	<p id="mensaje1"></p>
</div>
<div id="dialog_single_button" title="Mensaje!">
	<p id="mensaje2"></p>
</div>

<script type="text/javascript" src="js/elementos.js"></script>
<script type="text/javascript" src="js/funciones.js"></script>
<script type="text/javascript" src="js/IngresoCuarto.js"></script>
<script type="text/javascript" src="js/despachar.js"></script>
<script type="text/javascript" src="js/devoluciones.js"></script>
<script type="text/javascript" src="js/pedidos.js"></script>
<script type="text/javascript" src="js/decomisos.js"></script>
<script type="text/javascript" src="js/planilla.js"></script>
<script type="text/javascript" src="js/reportes.js"></script>
<script type="text/javascript" src="js/configuraciones.js"></script>
<script type="text/javascript" src="js/Usuarios.js"></script>
</body>
</html>
<?php
}else{
header("Location: index.php");
}
?>
