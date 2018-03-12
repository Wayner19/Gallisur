j$123( "#accordion" ).accordion();
var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
j$123( "#autocomplete" ).autocomplete({
	source: availableTags
});

j$123( "#btn_aceptar_ingreso" ).button();


j$123( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});
j$123( "#radioset" ).buttonset();
j$123( "#controlgroup" ).controlgroup();
j$123( "#controlgroup2" ).controlgroup();
j$123( "#tabs" ).tabs();

function accion_dialogo(opt, parametro){

	j$123( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					switch (opt) {
						case 1:

							eliminar_ingreso(parametro);
							break;
						case 2:

						 break;
					}
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
}
function accion_dialogo2(opt, parametro){

j$123( "#dialog2" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					switch (opt) {
						case 1:

							eliminar_ingreso_Cuarto(parametro);
							break;
						case 2:

						 break;
					}
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
}
function accion_dialogo3(opt, parametro){

	j$123( "#dialog3" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					switch (opt) {
						case 1:

							EliminarD(parametro);
							break;
						case 2:

						 break;
					}
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
}
j$123( "#dialog_single_button" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				j$123( this ).dialog( "close" );
			}
		}
	]
});
j$123( "#dialog_single_button2" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				j$123( this ).dialog( "close" );
			}
		}
	]
});
j$123( "#dialog_single_button3" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				j$123( this ).dialog( "close" );
			}
		}
	]
});
// Link to open the dialog
j$123( "#datepicker" ).datepicker({
	inline: true
});
j$123( "#datepicker_tab2" ).datepicker({
	inline: true
});
j$123( "#datepicker_tab3" ).datepicker({
	inline: true
});
j$123( "#datepicker4" ).datepicker();
j$123( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});
j$123( "#progressbar" ).progressbar({
	value: 20
});
j$123( "#spinner" ).spinner();
j$123( "#menu" ).menu();
j$123( "#tooltip" ).tooltip();
j$123( "#selectmenu" ).selectmenu();
j$123( "#Usu" ).selectmenu();
j$123( "#EUsu" ).selectmenu();
j$123( "#Privilegios" ).selectmenu();
j$123( "#selectmenu_tab2" ).selectmenu();
j$123( "#selectmenu_tab3" ).selectmenu();
j$123( "#dialog-link, #icons li" ).hover(
	function() {
		j$123( this ).addClass( "ui-state-hover" );
	},
	function() {
		j$123( this ).removeClass( "ui-state-hover" );
	});
	j$123( "#dialog2-link, #icons li" ).hover(
		function() {
			j$123( this ).addClass( "ui-state-hover" );
		},
		function() {
			j$123( this ).removeClass( "ui-state-hover" );
		});
		j$123( "#dialog3-link, #icons li" ).hover(
			function() {
				j$123( this ).addClass( "ui-state-hover" );
			},
			function() {
				j$123( this ).removeClass( "ui-state-hover" );
			});

	j$123( "#btn_aceptar_ingreso_cuarto_frio" ).button();
	j$123( "#btn_eliminar_ingreso_cuarto_frio" ).button();
	j$123( "#btn_eliminar_despacho" ).button();
	j$123( "#btn_eliminar_despacho2" ).button();
	j$123( "#btn_agregar_lista_despacho" ).button();
	j$123( "#btn_agregar_despacho" ).button();
	j$123( "#agregarusuario" ).button();
	j$123( "#cambiarcontra" ).button();
	j$123( "#eliminar" ).button();