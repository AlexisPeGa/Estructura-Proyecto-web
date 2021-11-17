

var bGrabar = document.getElementById("grabarRegistro");
bGrabar.addEventListener("click", grabar, false);
function grabar() {
    grabarRegistro = true;
    nuevo = true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'
    /*cfc = cLongitud.value.split("-");
    cLongitud.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0]*/

    cfc = cFecha.value.split("-");
    cFecha.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0]
    var datosElementoUrbano = '"' + "Tipo" + '":' + '"' + cTipo.value + '",'
        + '"' + "Cantidad" + '":' + '"' + cCantidad.value + '",'
        + '"' + "Hora" + '":' + '"' + cHora.value + '",'
        + '"' + "Fecha" + '":' + '"' + cFecha.value + '",'
        + '"' + "Latitud" + '":' + '"' + cLatitud.value + '",'
        + '"' + "Longitud" + '":' + '"' + cLongitud.value + '",'
        + '"' + "Direccion" + '":' + '"' + cDireccion.value + '",'
        + '"' + "Descripcion" + '":' + '"' + cDescripcion.value + '"';

    alert(datosElementoUrbano)
    var ajaxrequest = new XMLHttpRequest();
    /*if (grabarRegistro === true) {
        if (nuevo === true) {*/
    var jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;

    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AlexisP/grabarElementoUrbano.php", true);
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