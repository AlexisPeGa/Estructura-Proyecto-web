////////////////////MAPA/////////////////




//Cargo las variables del mapa
var map;
var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;
var infowindow = new google.maps.InfoWindow();

//Cargo el mapa
inicioMapa();

//Separo el mapa en iniciar
function inicioMapa() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 16,
        center: new google.maps.LatLng(latitud, longitud),
        draggableCursor: 'auto', // forma del cursor
        draggingCursor: 'crosshair',
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
}

//Función para definir la calle en cuestión según la latitud y la longitud
function recuperarCalle(lat, lng, i) {
    var latlng = new google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, (results, status) => {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
            //Coge todos los componentes de la calle
            var address_components = results[0].address_components;
            //Devuelve un array con todos los parametros de la calle
            const calle = address_components.reduce((seed, { long_name, types }) => (types.forEach(t => seed[t] = long_name), seed), {});
            console.log(calle)
            /*Cogemos de la calle lo que nos interesa, que es la dirección, el número, y la localidad y lo almacenamos
            en un array de calles*/
            arrayC[i] = calle.route + " " + calle.street_number + ", " + calle.locality
        }
    });
}

function crearMarcador(arrayS) {

    //Recorre el arrayServicios
    for (i = 0; i < arrayS.length; i++) {
        //Carga el icono
        var icono = {
            url: "imagenes/curso.png", // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        //Crea el marker con todos los atributos
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(arrayS[i].Latitud, arrayS[i].Longitud),
            icon: icono,
            id: arrayS[i].id,
            descripcion: arrayS[i].Descripcion,
            latitud: arrayS[i].Latitud,
            longitud: arrayS[i].Longitud,
            tipo: arrayS[i].Tipo,
            precio: arrayS[i].Precio,
            duracion: arrayS[i].Duracion,
            calle: arrayS[i].CalleMaps,
            map: map,
            nombre: 'marcador'
        });

        //Centrar el mapa en el marcador
        map.setCenter(marker.getPosition())

        // Almacena el marcador, sustituyendo los anteriores para evitar duplicados
        marcadores[i] = marker;

       
    }
}


