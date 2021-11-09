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
            map: map,
            nombre: 'marcador'
        });

        //Centrar el mapa en el marcador
        map.setCenter(marker.getPosition())

        // Almacena el marcador, sustituyendo los anteriores para evitar duplicados
        marcadores[i] = marker;

       
    }
}


