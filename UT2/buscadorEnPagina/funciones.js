var buscador = document.getElementById("buscador");
var textoOriginal = document.getElementById("texto").innerHTML;
var palabra;

document.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        buscar();
    }
})

function recargar() {
    document.getElementById("texto").innerHTML = textoOriginal;

}

function buscar() {
    recargar();
    palabra = buscador.value;
    //expresion que cambia el texto original de busqueda por otro con las letras o palabras buscadas
    document.getElementById("texto").innerHTML = document.getElementById("texto").innerHTML.replace(new RegExp(palabra, 'ig'), "<b><u><mark>" + palabra + "</mark></u></b>");
    }



