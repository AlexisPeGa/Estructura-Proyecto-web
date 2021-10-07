
// Array donde guardamos la información leida del fichero datos.js
var aIsbn = new Array();
var aTitulo = new Array();
var aAutor = new Array();
var aEditorial = new Array();
var aPaginas = new Array();
var posicion = 0;
cargarXml();
bSiguiente.addEventListener("click", registroSiguiente, false);
bAnterior.addEventListener("click", registroAnterior, false);
bModificar.addEventListener("click", modificarRegistro, false);
bBorrar.addEventListener("click", borrarRegistro, false);
function cargarXml() {
    // En esta función leemos los datos del fichero dato.js 
    // en formato xmy y lo tranformamoes en una coleción de array
    var codigo = new DOMParser();
    var myXml = codigo.parseFromString(datosFichero, "text/xml");



    aIsbn = myXml.getElementsByTagName("isbn");
    aTitulo = myXml.getElementsByTagName("titulo");
    aAutor = myXml.getElementsByTagName("autor");
    aEditorial = myXml.getElementsByTagName("editorial");
    aPaginas = myXml.getElementsByTagName("paginas");

    mostrarRegistro(1)

}

function registroSiguiente() {
    posicion++;
    if (posicion >= aIsbn.length) {
        posicion = 0;
    }
    mostrarRegistro()
}
function registroAnterior() {
    posicion--;
    /*if (posicion <= aIsbn.length) {
        posicion--;
    }*/
    mostrarRegistro()
}

function mostrarRegistro() {
    // Visualizar el registrto correspondiente a la posición
    document.getElementById("iISBN").value = aIsbn[posicion].firstChild.nodeValue;
    document.getElementById("Titulo").value = aTitulo[posicion].firstChild.nodeValue;
    document.getElementById("Autor").value = aAutor[posicion].firstChild.nodeValue;
    document.getElementById("Editorial").value = aEditorial[posicion].firstChild.nodeValue;
    document.getElementById("Paginas").value = aPaginas[posicion].firstChild.nodeValue;

}

function modificarRegistro() {
    aIsbn[posicion].firstChild.nodeValue= iISBN.value;
    aTitulo[posicion].firstChild.nodeValue=Titulo.value;
    aAutor[posicion].firstChild.nodeValue=Autor.value;
    aEditorial[posicion].firstChild.nodeValue=Editorial.value;
    aPaginas[posicion].firstChild.nodeValue=Paginas.value;
}

function borrarRegistro(){
  
   /* aIsbn.splice(posicion,1);
    aTitulo.splice(posicion,1);
    aAutor.splice(posicion,1);
    aEditorial.splice(posicion,1);
    aPaginas.splice(posicion,1);
    */
    posicion=0;

    visualiza(posicion);
}