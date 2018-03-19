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


 $(function() {
  $('#file-input').change(function(e) {
      addImage(e);
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;

      if (!file.type.match(imageType))
       return;

      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }

     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr({"src":result,"width":"200px","height":"200px"});
     }
    });
