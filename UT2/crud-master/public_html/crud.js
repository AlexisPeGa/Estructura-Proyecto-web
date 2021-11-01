
//         window.load = function ()
//         {
//         
//         
//        
var alumnos = new Array();
var totalRegistros = 0;
var registroActual = 0;
var alumnoActual = null;
var accion="Siguiente";
function registro(cMatricula, cNombre, cCiclo, cModulo, cNota)
{
    this.Matricula = cMatricula;
    this.Nombre = cNombre;
    this.Ciclo = cCiclo;
    this.Modulo = cModulo;
    this.Nota = cNota;
    this.grabar = GrabarAlumno;
    this.borrar = BorrarAlumno;
    this.siguiente = SiguienteAlumno;
    this.anterior = AnteriorAlumno;
    this.listado = ListarAlumnos;
}
function GrabarAlumno()
{//alert('Grabar')
    var cMatricula = document.querySelector("#cMatricula").value;
    var cNombre = document.querySelector("#cNombre").value;
    var cCiclo = document.querySelector("#cCiclo").value;
    var cModulo = document.querySelector("#cModulo").value;
    var cNota = document.querySelector("#cNota").value;
    var alumno = new registro(cMatricula, cNombre, cCiclo, cModulo, cNota);

    alumnos.push(alumno);

    totalRegistros = alumnos.length - 1;
    registroActual = totalRegistros;
    //  alert(registroActual)
}
function SiguienteAlumno()
{accion="Siguiente";
    registroActual++;
    if (registroActual > totalRegistros)
    {
        registroActual = totalRegistros;
    }
    alumnoActual = alumnos[registroActual];
    visualiazaRegistro();
}
function AnteriorAlumno()
{accion="Anterior";
    registroActual--;
    //  alert(registroActual)
    if (registroActual < 0)
    {
        registroActual = 0;
    }
    alumnoActual = alumnos[registroActual];
    //    alert(alumnoActual.Matricula)
    visualiazaRegistro();
}
function  visualiazaRegistro()
{
    if (alumnoActual == undefined) {
        if (accion=="Siguiente"){SiguienteAlumno()}else{AnteriorAlumno()}
        return;
    }
    var cMatricula = document.querySelector("#cMatricula");
    cMatricula.value = alumnoActual.Matricula;
    var cNombre = document.querySelector("#cNombre");
    cNombre.value = alumnoActual.Nombre;
    var cCiclo = document.querySelector("#cCiclo");
    cCiclo.value = alumnoActual.Ciclo;
    var cModulo = document.querySelector("#cModulo");
    cModulo.value = alumnoActual.Modulo;
    var cNota = document.querySelector("#cNota");
    cNota.value = alumnoActual.Nota;
}
function BorrarAlumno()
{

    delete alumnos[registroActual];
}
function ListarAlumnos()
{
    alumnos[registroActual] = undefined;
}
var boGrabar = document.querySelector("#bGrabar");
boGrabar.addEventListener("click", GrabarAlumno, false);



var bBorrar = document.querySelector("#bBorrar");
bBorrar.addEventListener("click", BorrarAlumno, false);

var bSiguiente = document.querySelector("#bSiguiente");
bSiguiente.addEventListener("click", SiguienteAlumno, false);

var bAnterior = document.querySelector("#bAnterior");
bAnterior.addEventListener("click", AnteriorAlumno, false);

var bListado = document.querySelector("#bListado");
bListado.addEventListener("click", ListarAlumnos, false);


function ListarAlumnos()
{
    var salida = "<table><tr><td>Matricula</td><td>Nombre</td><td>Ciclo</td><td>Modulo</td><td>Nota</td></tr> "
    alumnos.forEach(function (alumno) {
        salida = salida + "<tr><td>" + alumno.Matricula + "</td><td>" + alumno.Nombre + "</td><td>" + alumno.Ciclo + "</td><td>" + alumno.Modulo + "</td><td>" + alumno.Nota + "</td></tr>";
    });
    salida = salida + "</table>";
    cSalida.innerHTML=salida;
}
//        }()