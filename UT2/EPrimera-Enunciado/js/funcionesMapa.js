window.onload = function () {
   
    files.addEventListener("change", leeFicheroLocal, true);
    
}



//Array para los registros del fichero xml
var datos = new Array();
// Array de marcadores de Google Map para pòder borrarles
var marcadores =  new Array();

var contador = 0;
var pos = 0;
///////// CERAR OBJETO//////////////
var mobiliario = new Object();

function datosmobiliario(ID, DESCRIPCION, LATITUD, LONGITUD,IMAGEN,FECHAMANTENIMIENTO,FAMILIA) {
    this.ID = ID;
    this.DESCRIPCION = DESCRIPCION;
    this.LATITUD = LATITUD;
    this.LONGITUD = LONGITUD;
    this.IMAGEN = IMAGEN;
    this.FECHAMANTENIMIENTO = FECHAMANTENIMIENTO;
    this.FAMILIA = FAMILIA;

    this.guarda = guardadatos;

}
///////// CERAR OBJETO//////////////

////////////REGOGER DATOS/////////
function guardadatos() {
    /*alert(this.ID);
    datos[contador] = this;
    contador = contador + 1;
    pos = contador;*/
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
            
            p = new datosmobiliario(aId.item(i).firstChild.nodeValue, aDescripcion.item(i).firstChild.nodeValue,  aLatitud.item(i).firstChild.nodeValue, aLongitud.item(i).firstChild.nodeValue, aImagen.item(i).firstChild.nodeValue, aFechaMantenimiento.item(i).firstChild.nodeValue, aFamilia.item(i).firstChild.nodeValue);
            
            datos[i] = p;

        }
        c = i; contador = c;
        visualiza(0);

        // En esta fucntión generaTablaLocales es donde yo genero la tabla y los marcadores del mapa

        //generaTablaLocales();

        // Permite que se ejecute de nuevo el evento change, ya que siempre trabajamos con el mismo fichero xml
        evt.target.value = ''
        imprimirentabla();
        
        inicio();
        visualizaMarcador();
    }

    reader.onerror = function (event) {
        console.error("Error de lectura del fichero" + event.target.error.code);
    };

    reader.readAsText(file);


}

function visualiza(pos) {
    mobiliario = new datosmobiliario();
    mobiliario = datos[pos];
    if (mobiliario == undefined) { return; }

    document.getElementById("cId").value = mobiliario.ID;
    document.getElementById("cDescripcion").value = mobiliario.DESCRIPCION;
    document.getElementById("cLatitud").value = mobiliario.LATITUD;
    document.getElementById("cLongitud").value = mobiliario.LONGITUD;
    document.getElementById("cImagen").value = mobiliario.IMAGEN;
    document.getElementById("cFechaMantenimiento").value = mobiliario.FECHAMANTENIMIENTO;
    document.getElementById("cFamilia").value = mobiliario.FAMILIA;

}
////////////REGOGER DATOS/////////

///////////VISUALIZAR EN TABLA/////////
function imprimirentabla() {
   
    for (c = 0; c < contador; c++) {
        var da = new datosmobiliario();
        da = datos[c];
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
function inicio()
{
 
map = new google.maps.Map(
    document.getElementById('map_canvas'), {
    // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
        center: new google.maps.LatLng(latitud,longitud),//latitud,longitud),//
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

    leeDireccion(event.latLng);
});
}
// Obtiene la longitud y la latitud correspondiente al clic
// y copia los datos en cajas de texto. Tambien obtiene la
// dirección del lugar donde hacemos clic
function leeDireccion(latlng) {
    geocoder = new google.maps.Geocoder();
    if (latlng != null) {
    
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                   
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

function MuestraDireccion(id,descripcion,latlng, imagen,fechaMantenimiento,familia) {
    document.getElementById('cId').value = id;
    document.getElementById('cDescripcion').value = descripcion;
    document.getElementById('cLatitud').value = latlng.lat();
    document.getElementById('cLongitud').value = latlng.lng();
    document.getElementById('cImagen').value = imagen;
    document.getElementById('cFechaMantenimiento').value = fechaMantenimiento;
    document.getElementById('cFamilia').value = familia;
}





/////////////MAPA//////////////
///////////////MARCADORES///////
function visualizaMarcador(datos){

    //CREAMOS UN ICONO CON LA RUTA DE LA IMAGEN
    var icono = {
        //Es la imagen que cuando hacemos clic hacemos un marcador con la imagen
        url: "./imagenes/curso.png", // url
        //url: mobiliario.imagen,
        scaledSize: new google.maps.Size(25, 25), // scaled size TAMAÑO DE LA IMAGEN
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    //CREAMOS LA LATITUD Y LA LONGITUD
    var latlog = new google.maps.LatLng(datos.latitud, datos.longitud);

    //CREAMOS UN MARCADOR
    marker = new google.maps.Marker({
        //POSICION CON LATITUD Y LONGITUD
        position: latlog,
        icon: icono,
        map: map,
        nombre: datos
    });
    marker.addListener("click", function(){
        if(datos==undefined){return;}
            document.getElementById("cId").value = datos.id;
            document.getElementById("cDescripcion").value = datos.Descripcion;
            document.getElementById("cLatitud").value = datos.latitud;
            document.getElementById("cLongitud").value = datos.longitud;
            document.getElementById("cImagen").value = datos.imagen;
            document.getElementById("cFechaMantenimiento").value = datos.fechaMantenimiento;
            document.getElementById("cFamilia").value = datos.familia;
    });
    
}
///////////////MARCADORES///////