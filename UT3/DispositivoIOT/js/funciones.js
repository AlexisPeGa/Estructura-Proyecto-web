var map;

var fecha = 41.67097948393865;
var latitud = -3.6769259916763985;
function inicio()
{

map = new google.maps.Map(
    document.getElementById('map_canvas'), {
    // En el mapa se visualiza el mapa correspondiente a esta fecha, latitud
        center: new google.maps.LatLng(fecha,latitud),//fecha,latitud),//
       // center: new google.maps.LatLng(41.6685198,-3.6886618),//fecha,latitud),//
    zoom: 18, // zoom del mapa
    draggableCursor: 'auto', // forma del cursor
    draggingCursor: 'crosshair',
    mapTypeId: google.maps.MapTypeId.SATELLITE // hora de mama
});
}
inicio();