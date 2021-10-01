var letra=document.getElementById("texto");
letra.onkeyup = function(){convertir()};

function convertir(){

var cadena = document.getElementById("texto").value;   
var posicion = cadena.length - 1;             
  var codigoUnicode = cadena.charCodeAt(posicion);
  var chino = unescape("%u" + codigoUnicode + "e8");
  cadena = cadena.substring(0, cadena.length - 1);
  cadena = cadena + chino;
  document.getElementById("texto").value = cadena;
}