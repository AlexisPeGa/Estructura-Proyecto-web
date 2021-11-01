var horarioMap = new Map();



var profesores = new Array("Fernando", "Ana Gloria", "Marian", "Daniel");
var asignaturas = new Array("DWEC", "DI", "DWES", "DAW");
var cNombre = document.getElementById("cNombre").value;
var cAsignatura = document.getElementById("cAsignatura").value;
var cHora = document.getElementById("cHora");
var cDia = document.getElementById("cDia");



bGrabar.addEventListener("click", grabar, false);

function horario(){
    this.profesores=profesores;
    this.asignaturas=asignaturas;
    this.cHora=cHora;
    this.cDia=cDia;
}


function grabar(){

}

/*function comparar() {
    var bool1 = false;
    var bool2 = false;
    for (i = 0; i < profesores.length; i++) {
        if (profesores[i] == cNombre) {
            bool1 = true;
        }
    }
    if(bool1=false){
        alert("Ese nombre no corresponde a ningun proofesor, introduce el nombre de un profesor");
    }
    for (i = 0; i < asignaturas.length; i++) {
        if (asignaturas[i] == cAsignatura) {
            bool2 = true;
        } 
    }
    if(bool2=false){
        alert("Ese nombre no corresponde a ninguna asignatura, introduce el nombre de una asignatura");
    }
}*/

