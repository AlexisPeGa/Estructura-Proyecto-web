
var datos = new Array();
files.addEventListener("change", leeFicheroLocal, true);

function leeFicheroLocal(evt) {


    var ficheros = evt.target.files; // FileList object

    var file = ficheros[0];

    var reader = new FileReader();
    reader.onload = function (event) {
        var contenido = event.target.result;
        //  alert("contenido" + contenido)
        parser = new DOMParser();
        myXml = parser.parseFromString(contenido, "text/xml");
        // alert("myXml" + myXml)
        arrayId = myXml.getElementsByTagName("id");
        arrayNombre = myXml.getElementsByTagName("nombre");



        for (var i = 0; i < aid.length; i++) {
            var registro = new fdatos(arrayId.item(i).firstChild.nodeValue,
                arrayNombre.item(i).firstChild.nodeValue);
            registro.guarda();

        }

        // En esta fucntión generaTablaLocales es donde yo genero la tabla y los marcadores del mapa
        generaTablaLocales();

        // Permite que se ejecute de nuevo el evento change, ya que siempre trabajamos con el mismo fichero xml
        evt.target.value = ''
        datos = new Array();
    }

    reader.onerror = function (event) {
        console.error("Error de lectura del fichero" + event.target.error.code);
    };

    reader.readAsText(file);


}
