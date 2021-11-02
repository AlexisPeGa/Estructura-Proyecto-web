window.onload = function () {
    //cargaXml();

    bGrabar.addEventListener("click", grabar, false);
    bModificar.addEventListener("click", modificar, false);
    bBorrar.addEventListener("click", borrar, false);
    bSiguiente.addEventListener("click", siguiente, false);
    bAnterior.addEventListener("click", anterior, false);
    bTabla.addEventListener("click", imprimirentabla, false);
    files.addEventListener("change", leeFicheroLocal, true);
}
var datos = new Array();

var contador = 0;
var pos = 0;
var gimnasio = new Object();

function datosgimnasio(NOMBRE, CALLE, TELEFONO, LATITUD, LONGITUD) {
    this.NOMBRE = NOMBRE;
    this.CALLE = CALLE;
    this.TELEFONO = TELEFONO;
    this.LATITUD = LATITUD;
    this.LONGITUD = LONGITUD;

    this.guarda = guardadatos;

}

function guardadatos() {
    alert(this.NOMBRE);
    datos[contador] = this;
    contador = contador + 1;
    pos = contador;
}


function leerdatos(c) {
    var da = new datosgimnasio();
    da = datos[c];
    document.write("<tr><td>" + da.NOMBRE + "</td><td>" + da.CALLE + "</td><td>" + da.TELEFONO + "</td><td>" + da.LATITUD + "</td><td>" + da.LONGITUD + "</td></tr>");

}


function grabar() {
    var NOMBRE = document.getElementById("Nombre").value;
    var CALLE = document.getElementById("Calle").value;
    var TELEFONO = document.getElementById("Telefono").value;
    var LATITUD = document.getElementById("Latitud").value;
    var LONGITUD = document.getElementById("Longitud").value;

    gimnasio = new datosgimnasio(NOMBRE, CALLE, TELEFONO, LATITUD, LONGITUD);
    gimnasio.guarda();


}

function modificar() {
    var NOMBRE = document.getElementById("Nombre").value;
    var CALLE = document.getElementById("Calle").value;
    var TELEFONO = document.getElementById("Telefono").value;
    var LATITUD = document.getElementById("Latitud").value;
    var LONGITUD = document.getElementById("Longitud").value;
    gimnasio = new datosgimnasio(NOMBRE, CALLE, TELEFONO, LATITUD, LONGITUD);
    datos[pos] = gimnasio;

}

function borrar() {
    datos.splice(pos, 1);
    contador--;
    pos = 0;
    visualiza(pos);
}

function imprimir() {
    document.write("<h1>Listado de Gimnasios</h1><table border='2'>");
    for (c = 0; c < contador; c++) {
        leerdatos(c);

    }
    document.write("</table>");
}


function siguiente() {
    if (pos + 1 < datos.length) {
        pos = pos + 1; visualiza(pos);
    }

}
function anterior() {
    if (pos - 1 >= 0) {
        pos = pos - 1; visualiza(pos);
    }

}
function visualiza(pos) {
    gimnasio = new datosgimnasio();
    gimnasio = datos[pos];
    if (gimnasio == undefined) { return; }

    document.getElementById("Nombre").value = gimnasio.NOMBRE;

    document.getElementById("Calle").value = gimnasio.CALLE;
    document.getElementById("Telefono").value = gimnasio.TELEFONO;
    document.getElementById("Latitud").value = gimnasio.LATITUD;
    document.getElementById("Longitud").value = gimnasio.LONGITUD;

}
function imprimirentabla() {
    document.getElementById("cuerpo").innerHTML = '<tr><td style="height: 25px">NOMBRE</td>' +
        '<td style="height: 25px">CALLE</td>' +
        '<td style="height: 25px">TELEFONO</td>' +
        '<td style=" height: 25px;">LATITUD</td>' +
        '<td style="height: 25px">LONGITUD</td>' +
        '</tr>';
    for (c = 0; c < contador; c++) {
        var da = new datosgimnasio();
        da = datos[c];
        var tabla = document.getElementById("tabla");
        var cuerpo = document.getElementById("cuerpo");
        linea = document.createElement("tr");
        parrafo = document.createElement("p");
        dato = document.createTextNode(da.NOMBRE);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna);

        parrafo = document.createElement("p");
        dato = document.createTextNode(da.CALLE);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)


        parrafo = document.createElement("p");
        dato = document.createTextNode(da.TELEFONO);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)
        parrafo = document.createElement("p");
        dato = document.createTextNode(da.LATITUD);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)

        parrafo = document.createElement("p");
        dato = document.createTextNode(da.LONGITUD);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)

        cuerpo.appendChild(linea);
    }

    tabla.appendChild(cuerpo);
}
/*function cargaXml() {




    var codigo = new DOMParser();
    var myXml = codigo.parseFromString(datosFichero, "text/xml");


    var aNombre = new Array();
    var aCalle = new Array();
    var aTelefono = new Array();
    var aLatitud = new Array();
    var aLongitud = new Array();

    aNombre = myXml.getElementsByTagName("nombre");
    aCalle = myXml.getElementsByTagName("calle");
    aTelefono = myXml.getElementsByTagName("telefono");
    aLatitud = myXml.getElementsByTagName("latitud");
    aLongitud = myXml.getElementsByTagName("longitud");
    //alert(aisbn.length);
    for (var i = 0; i < aNombre.length; i++) {
        // alert(aisbn);
        p = new datosgimnasio(aNombre.item(i).firstChild.nodeValue, aCalle.item(i).firstChild.nodeValue, aTelefono.item(i).firstChild.nodeValue, aLatitud.item(i).firstChild.nodeValue, aLongitud.item(i).firstChild.nodeValue);

        datos[i] = p;

    }
    c = i; contador = c;
    visualiza(0);
}*/


function leeFicheroLocal(evt) {


    var ficheros = evt.target.files; // FileList object

    var file = ficheros[0];

    var reader = new FileReader();
    reader.onload = function (event) {
        datos = new Array();
        var contenido = event.target.result;
        //  alert("contenido" + contenido)
        parser = new DOMParser();
        myXml = parser.parseFromString(contenido, "text/xml");
        // alert("myXml" + myXml)

        var aNombre = new Array();
        var aCalle = new Array();
        var aTelefono = new Array();
        var aLatitud = new Array();
        var aLongitud = new Array();

        aNombre = myXml.getElementsByTagName("nombre");
        aCalle = myXml.getElementsByTagName("calle");
        aTelefono = myXml.getElementsByTagName("telefono");
        aLatitud = myXml.getElementsByTagName("latitud");
        aLongitud = myXml.getElementsByTagName("longitud");
        //alert(aindice.length);
        for (var i = 0; i < aNombre.length; i++) {
            // alert(aisbn);
            p = new datosgimnasio(aNombre.item(i).firstChild.nodeValue, aCalle.item(i).firstChild.nodeValue, aTelefono.item(i).firstChild.nodeValue, aLatitud.item(i).firstChild.nodeValue, aLongitud.item(i).firstChild.nodeValue);
            
            datos[i] = p;

        }
        c = i; contador = c;
        visualiza(0);

        // En esta fucntión generaTablaLocales es donde yo genero la tabla y los marcadores del mapa

        //generaTablaLocales();

        // Permite que se ejecute de nuevo el evento change, ya que siempre trabajamos con el mismo fichero xml
        evt.target.value = ''

    }

    reader.onerror = function (event) {
        console.error("Error de lectura del fichero" + event.target.error.code);
    };

    reader.readAsText(file);


}

//////////////////////////MAPA////////////////////////

var map;
var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;
function inicioMapa() {
    map = new google.maps.Map(
        document.getElementById('map_canvas'), {
        // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
        center: new google.maps.LatLng(latitud, longitud),//latitud,longitud),//
        // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
        zoom: 18, // zoom del mapa
        draggableCursor: 'auto', // forma del cursor
        draggingCursor: 'crosshair',
        mapTypeId: google.maps.MapTypeId.SATELLITE // tipo de mama
    });
    google.maps.event.addListener(map, 'click', function (event) {

        datolatitud_longitud = event.latLng.toString();



        var fileName = "./imagenes/Logo.png";

        var icono = {
            url: "./imagenes/curso.png", // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        /*marker = new google.maps.Marker({
            position: event.latLng,
            icon: icono,
            map: map,
            nombre: 'Marcador'
        });*/
        google.maps.event.addListener(marker, 'click', function () {
            //  alert("Click en marcador " + this.nombre+latitud_longitud.value);
        });
        //enviaLL(lineaAutobus,datolatitud_longitud);
        leeDireccion(event.latLng);
    });


}
// Obtiene la longitud y la latitud correspondiente al clic
// y copia los datos en cajas de texto. Tambien obtiene la
// dirección del lugar donde hacemos clic
function leeDireccion(latlng) {
    geocoder = new google.maps.Geocoder();
    if (latlng != null) {
        //    address = latlng;
        //    geocoder.getLocations(latlng, MuestraDireccion);

        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    //https://developers.google.com/maps/documentation/javascript/geocoding?hl=es
                    //  alert(results[1].formatted_address);
                    //  alert(results[0].formatted_address);
                    MuestraDireccion(latlng, results[0].formatted_address)
                } else {
                    alert('No results found');
                }
            } else {
                alert('Geocoder failed due to: ' + status);
            }
        });

    }
}

function MuestraDireccion(latlng, direccion) {

    document.getElementById('Calle').value = direccion;
    alert(direccion);
    document.getElementById('Latitud').value = latlng.lat();
    document.getElementById('Longitud').value = latlng.lng();
}

//carga el script de inicio del mapa
inicioMapa();
