var horarioMap = new Map();

var profesores = new Array("Fernando", "Ana Gloria", "Marian", "Daniel");
var asignaturas = new Array("DWEC", "DI", "DWES", "DAW");
var cNombre = document.getElementById("cNombre");
var cAsignatura = document.getElementById("cAsignatura");
var cHora = document.getElementById("cHora");
var cDia = document.getElementById("cDias");



bGrabar.addEventListener("click", grabar, false);

function horario(profesores, asignaturas, cHora, cDia, indiceDia, indiceHora) {
    this.profesores = profesores;
    this.asignaturas = asignaturas;
    this.cHora = cHora;
    this.cDia = cDia;
    this.indiceDia = indiceDia;
    this.indiceHora = indiceHora;
}


function grabar() {
    var comprobacion = comprobar();
    console.log(comprobacion);
    if (comprobacion) {
        var localizacion = "c" + (cHora.selectedIndex + 1) + (cDia.selectedIndex + 1);
        horarioMap.set(localizacion, new horario(cNombre.value, cAsignatura.value, cHora.value, cDia.value, cDia.selectedIndex, cHora.selectedIndex));
        document.getElementById(localizacion).innerHTML = cAsignatura.value;
    }
}

function comprobar() {
    for (i = 0; i < profesores.length; i++) {
        if (cNombre.value.toUpperCase() == profesores[i].toUpperCase()) {
            for (i = 0; i < asignaturas.length; i++) {
                if (cAsignatura.value.toUpperCase() == asignaturas[i].toUpperCase()) {

                    return true;
                }
            }

        }
    }

    alert("Introduce el nombre y la asignatura correctamente")
    return false;
}


function visualizaMapa(id){
    document.getElementById("cNombre").value=horarioMap.get(id).profesores;
    document.getElementById("cAsignatura").value=horarioMap.get(id).asignaturas;
    document.getElementById("cHora").selectedIndex=horarioMap.get(id).indiceHora;
    document.getElementById("cDias").selectedIndex=horarioMap.get(id).indiceDia;
}