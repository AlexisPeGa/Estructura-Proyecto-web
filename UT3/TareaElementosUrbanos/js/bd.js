

var bGrabar = document.getElementById("grabarRegistro");
bGrabar.addEventListener("click", grabar, false);
function grabar() {
    grabarRegistro = true;
    nuevo = true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'
    cfc = cFecahac.value.split("-");
    cFecahac.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0]

    cfc = cFecaham.value.split("-");
    cFecaham.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0]
    var datosElementoUrbano = '"' + "Nombre" + '":' + '"' + cNombre.value + '",'
        + '"' + "Descripcion" + '":' + '"' + cDescripcion.value + '",'
        + '"' + "Tipo" + '":' + '"' + cTipo.value + '",'
        + '"' + "Latitud" + '":' + '"' + cLatitud.value + '",'
        + '"' + "Longitud" + '":' + '"' + cLongitud.value + '",'
        + '"' + "FechaConstruccion" + '":' + '"' + cFecahac.value + '",'
        + '"' + "FechaMantenimiento" + '":' + '"' + cFecaham.value + '"';

    alert(datosElementoUrbano)
    var ajaxrequest = new XMLHttpRequest();
    /*if (grabarRegistro === true) {
        if (nuevo === true) {*/
    var jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;

    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/grabarElementoUrbano.php", true);
    /*} else
    {
        datosElementoUrbano = '"' + "Id" + '":' + '"' + cId.value + '",' + datosElementoUrbano;
        var jdatoselemento = "{" + datosElementoUrbano + "}";
        var envio = "Todo=" + jdatoselemento;
        ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/grabarElementoUrbano.php", true);
    }
} else
{
    datosElementoUrbano = '"' + "Id" + '":' + '"' + cId.value + '"';
    var jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;
    //    alert(envio)
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/borraElementoUrbano.php", true);
}*/

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function () {
        alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            //resultado que devuelve el servidor
            var datosLeidos = ajaxrequest.responseText;
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //alert(envio)
    ajaxrequest.send(envio);
}