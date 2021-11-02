//Array para los registros del fichero xml
var datos = new Array();
// Array de marcadores de Google Map para pòder borrarles
var marcadores = new Array();
var seleccion = document.getElementById("FamiliaSeleccionada");
var datosCopia = new Array();
///////// CREAR OBJETO//////////////
var mobiliario = new Object();
var aseleccion = false;

files.addEventListener("change", leeFicheroLocal, true);
seleccion.addEventListener("change", opcion, true);

function datosmobiliario(ID, DESCRIPCION, LATITUD, LONGITUD, IMAGEN, FECHAMANTENIMIENTO, FAMILIA) {
    this.ID = ID;
    this.DESCRIPCION = DESCRIPCION;
    this.LATITUD = LATITUD;
    this.LONGITUD = LONGITUD;
    this.IMAGEN = IMAGEN;
    this.FECHAMANTENIMIENTO = FECHAMANTENIMIENTO;
    this.FAMILIA = FAMILIA;

    this.guarda = guardadatos;

}
///////// CREAR OBJETO//////////////

function opcion() {
    datosCopia = new Array();

    for (i = 0; i < datos.length; i++) {

        if (datos[i].FAMILIA == seleccion.value) {

            datosCopia.push(datos[i]);
        }
        console.log(datosCopia[i]);

    }
    switch (seleccion.value) {
        case "defecto":
            aseleccion = false;
            imprimirentabla(datos);
            break;
        default:
            aseleccion = true;
            imprimirentabla(datosCopia);
            break;
    }
    inicio();
}



////////////REGOGER DATOS/////////
function guardadatos() {

    datos.push(this);
}
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

        var aId = new Array();
        var aDescripcion = new Array();
        var aLatitud = new Array();
        var aLongitud = new Array();
        var aImagen = new Array();
        var aFechaMantenimiento = new Array();
        var aFamilia = new Array();

        aId = myXml.getElementsByTagName("id");
        aDescripcion = myXml.getElementsByTagName("descripcion");
        aLatitud = myXml.getElementsByTagName("latitud");
        aLongitud = myXml.getElementsByTagName("longitud");
        aImagen = myXml.getElementsByTagName("imagen");
        aFechaMantenimiento = myXml.getElementsByTagName("fechaMantenimiento");
        aFamilia = myXml.getElementsByTagName("familia");
        //alert(aindice.length);
        for (var i = 0; i < aId.length; i++) {

            p = new datosmobiliario(aId.item(i).firstChild.nodeValue, aDescripcion.item(i).firstChild.nodeValue, aLatitud.item(i).firstChild.nodeValue, aLongitud.item(i).firstChild.nodeValue, aImagen.item(i).firstChild.nodeValue, aFechaMantenimiento.item(i).firstChild.nodeValue, aFamilia.item(i).firstChild.nodeValue);

            datos[i] = p;

        }


        // Permite que se ejecute de nuevo el evento change, ya que siempre trabajamos con el mismo fichero xml
        evt.target.value = ''
        //llmada de funciones
        opcion();


    }

    reader.onerror = function (event) {
        console.error("Error de lectura del fichero" + event.target.error.code);
    };

    reader.readAsText(file);


}

////////////REGOGER DATOS/////////

///////////VISUALIZAR EN TABLA/////////

function imprimirentabla(Arraydatos) {
    document.getElementById("cuerpo").innerHTML = "";
    for (c = 0; c < Arraydatos.length; c++) {
        var da = new datosmobiliario();
        da = Arraydatos[c];
        var tabla = document.getElementById("tabla");
        var cuerpo = document.getElementById("cuerpo");
        linea = document.createElement("tr");
        parrafo = document.createElement("p");
        dato = document.createTextNode(da.ID);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna);

        parrafo = document.createElement("p");
        dato = document.createTextNode(da.DESCRIPCION);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)


        parrafo = document.createElement("p");
        dato = document.createTextNode(da.FECHAMANTENIMIENTO);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)
        parrafo = document.createElement("p");
        dato = document.createTextNode(da.FAMILIA);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)

        cuerpo.appendChild(linea);
    }

    tabla.appendChild(cuerpo);
}

///////////VISUALIZAR EN TABLA/////////

/////////////MAPA//////////////
var map;
var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;

function inicio() {
    marcadores = new Array();
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
    var fileName = "./imagenes/Logo.png";


    if (aseleccion) {
        crearmarcador(datosCopia);
    } else {
        crearmarcador(datos);
    }
    google.maps.event.addListener(map, 'click', function (event) {


        datolatitud_longitud = event.latLng.toString();
        
        
        
        //leeDireccion(event.latLng);
    });
    

}
/*
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
*/
/*function MuestraDireccion(latlng, direccion) {

    direccionLocal.value = direccion;

    latitud_longitud.value = latlng.lat() + "," + latlng.lng();
}*/

// Para poder borrar los marcadores es necesario almacenarlos en un array
function borrarMarcadores() {
    // Elimina los marcadores de una consulta anterior
    for (var i = 0; i < marcadores.length; i++) {
        marcadores[i].setMap(null);
    }
    marcadores = new Array();
}

function crearmarcador(Arraydatos) {
    for (i = 0; i < Arraydatos.length; i++) {
        var icono = {
            url: Arraydatos[i].IMAGEN, // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
        marker = new google.maps.Marker({
            position: new google.maps.LatLng( Arraydatos[i].LATITUD,Arraydatos[i].LONGITUD),
            icon: icono,
            id: Arraydatos[i].ID,
            descripcion: Arraydatos[i].DESCRIPCION,
            latitud: Arraydatos[i].LATITUD,
            longitud: Arraydatos[i].LONGITUD,
            imagen: Arraydatos[i].IMAGEN,
            fechaMantenimiento: Arraydatos[i].FECHAMANTENIMIENTO,
            familia: Arraydatos[i].FAMILIA,
            map: map,
            nombre: 'Pepino'
        });
        // Almacena el marcador para después poder borrarles
        marcadores.push(marker);
        google.maps.event.addListener(marker, 'click', function () {
            document.getElementById("cId").value=this.id;
            document.getElementById("cDescripcion").value=this.descripcion;
            document.getElementById("cLatitud").value=this.latitud;
            document.getElementById("cLongitud").value=this.longitud;
            document.getElementById("cImagen").value=this.imagen;
            document.getElementById("cFechaMantenimiento").value=this.fechaMantenimiento;
            document.getElementById("cFamilia").value=this.familia;
        });
    }


}