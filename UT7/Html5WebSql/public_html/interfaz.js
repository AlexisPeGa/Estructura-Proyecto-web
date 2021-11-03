 
var nuevo = 0;
window.onload = function () {

    var porcampo = document.querySelector("#campos");
    porcampo.addEventListener("change", buscarPorIndices, false);
}
function buscarPorIndices() {
 
    var row = null;
    var porCampo = this.options[this.selectedIndex].value
    var dato = document.querySelector("#cdatoabuscar").value
    Videos.transaction(function (tx) {
        tx.executeSql("SELECT Id, Video, Descripcion, Busqueda1,Busqueda2,Busqueda3,InicioCorte,FinCorte  from registro  WHERE " + porCampo + "='" + dato + "'  LIMIT 1", [], function (tx, result) {
            var row = result.rows.item(0);
            visualizaRegistro(row);

        });
    });

    return row;
}
function NuevoRegistro() {
    nuevo = 1;
    document.getElementById("iID").value = "";
    document.getElementById("iID").value = "";
    document.getElementById("Video").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("ConceptoB1").value = "";
    document.getElementById("ConceptoB2").value = "";
    document.getElementById("ConceptoB3").value = "";
    document.getElementById("InicioCorte").value = "";
    document.getElementById("FinCorte").value = "";
}

function gabarRegistro() {


    var cId = document.getElementById("iID").value;
    var cVideo = document.getElementById("Video").value;
    var cDescripcion = document.getElementById("Descripcion").value;
    var cConceptoB1 = document.getElementById("ConceptoB1").value;
    var cConceptoB2 = document.getElementById("ConceptoB2").value;
    var cConceptoB3 = document.getElementById("ConceptoB3").value;
    var cInicioCorte = document.getElementById("InicioCorte").value;
    var cFinCorte = document.getElementById("FinCorte").value;


    Videos.transaction(
            function (tx) {
                //Starter data when page is initialized
               // var data = [cId, cVideo, cDescripcion, cConceptoB1, cConceptoB2, cConceptoB3, cInicioCorte, cFinCorte];
                if (nuevo == 1)
                {

                    tx.executeSql("INSERT INTO registro values( ?, ?, ?, ?, ?, ?, ?, ?)", [cId, cVideo, cDescripcion, cConceptoB1, cConceptoB2, cConceptoB3, cInicioCorte, cFinCorte]);
                } else
                {

                    tx.executeSql("UPDATE registro SET Id='" + cId + "', Video='" + cVideo + "', Descripcion='" + cDescripcion + "', Busqueda1='" + cConceptoB1 + "', Busqueda2='" + cConceptoB2 + "', Busqueda3='" + cConceptoB3 + "', InicioCorte=" + cInicioCorte + ", FinCorte=" + cFinCorte + "  WHERE Id ='" + cId + "'");


                }
            }
    );
}
function BorrarRegistro()
{

    var cId = document.getElementById("iID").value

    Videos.transaction(
            function (transaction) {

                transaction.executeSql("DELETE FROM registro  WHERE ID  ='" + cId + "'");
            }
    );
}
function inicioBasedeDatos() {

    try {
        if (!window.openDatabase) {
            alert('Local Databases are not supported by your browser. Please use a Webkit browser for this demo');
        } else {
            var shortName = 'Videos';
            var version = '1.0';
            var displayName = 'Videos base de datos WebSql';
            var maxSize = 100000; // in bytes
            Videos = openDatabase(shortName, version, displayName, maxSize);
            creaTablas();

            //	selectAll();
        }
    } catch (e) {
        if (e == 2) {
            // Version mismatch.
            console.log("Invalid database version.");
        } else {
            console.log("Unknown error " + e + ".");
        }
        return;
    }
}



/***
 **** CREATE TABLE ** 
 ***/
function creaTablas() {

    Videos.transaction(
            function (transaction) {
                transaction.executeSql('create table if not exists registro (Id  varchar(6), \n\
Video varchar(60), Descripcion varchar(60),Busqueda1 varchar(60),Busqueda2 varchar(60),Busqueda3 varchar(60),InicioCorte float, FinCorte float,   PRIMARY KEY(Id) );'
                        , [], nullDataHandler, errorHandler);
            }


    );

}

function errorHandler(transaction, error) {

    if (error.code == 1) {
        // DB Table already exists
    } else {
        alert("Error " + error.code + error.message);
        // Error is a human-readable string.
        //   console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');
    }
    return false;
}


function nullDataHandler() {

    console.log("SQL Query Succeeded");


    document.getElementById("iID").value = "";
    LeerSiguiente();
}


function LeerSiguiente()
{

   
    Videos.transaction(function (tx) {

        var cc = document.getElementById("iID").value

        tx.executeSql("SELECT Id, Video, Descripcion,Busqueda1,Busqueda2,Busqueda3,InicioCorte,FinCorte  FROM registro where Id > '" + cc + "'", [], function (tx, result) {

            if (result.rows.length > 0) {
                // for (var i = 0; i < result.rows.length; ++i) {
                var row = result.rows.item(0);
                visualizaRegistro(row)

            } else {
                mensaje.value = "Ultimo Registro"
            }
        });
    });
}
function LeerAnterior()
{


    Videos.transaction(function (tx) {

        var cc = document.getElementById("iID").value

        tx.executeSql("SELECT Id, Video, Descripcion,Busqueda1,Busqueda2,Busqueda3,InicioCorte,FinCorte  FROM registro where Id < '" + cc + "'", [], function (tx, result) {

            if (result.rows.length > 0) {
                // for (var i = 0; i < result.rows.length; ++i) {
                var nregistro = result.rows.length - 1;
                var row = result.rows.item(nregistro);
                visualizaRegistro(row)


            } else {
                mensaje.value = "Primer Registro"
            }
        });
    });



}
function visualizaRegistro(fila)
{   nuevo = 0;
    var cId = document.getElementById("iID");
    cId.value = fila['Id'];
    var cVideo = document.getElementById("Video");
    cVideo.value = fila['Video'];

    var cDescripcion = document.getElementById("Descripcion");
    cDescripcion.value = fila['Descripcion'];


    document.getElementById("ConceptoB1").value = fila['Busqueda1'];
    document.getElementById("ConceptoB2").value = fila['Busqueda2'];
    document.getElementById("ConceptoB3").value = fila['Busqueda3'];

    document.getElementById("InicioCorte").value = fila['InicioCorte'];
    document.getElementById("FinCorte").value = fila['FinCorte'];


    mensaje.value = ""
}
function listaDatos()
{

    var ordenlistado = "ASC";
    if (document.getElementById('asc').checked) {
        ordenlistado = "ASC";
    } else if (document.getElementById('des').checked) {
        ordenlistado = "DESC";
    }
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";
    Videos.transaction(function (tx) {
        var cc = document.getElementById("iID").value

        tx.executeSql("SELECT Id, Video, Descripcion,Busqueda1,Busqueda2,Busqueda3,InicioCorte,FinCorte  FROM registro ORDER BY Video " + ordenlistado, [], function (tx, rs) {


            for (var i = 0; i < rs.rows.length; ++i) {
                var row = rs.rows.item(i);

                linea = document.createElement("tr");

                dato = document.createTextNode(row['Id']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);



                dato = document.createTextNode(row['Video']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);



                dato = document.createTextNode(row['Descripcion']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);

                dato = document.createTextNode(row['Busqueda1']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);

                dato = document.createTextNode(row['Busqueda2']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);

                dato = document.createTextNode(row['Busqueda3']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);


                dato = document.createTextNode(row['InicioCorte']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);

                dato = document.createTextNode(row['FinCorte']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);
                cuerpo.appendChild(linea);

                /* document.write("<b>  Codigo Alumnos</b>" + row['Codigo']);
                 document.write("<b>  Nombre</b>" + row['Nombre']);
                 document.write("<b>  Edad</b>" + row['Edad'] + "</br>");*/
            }

        });
    });

}





/***
 **** DELETE DB TABLE ** 
 ***/
function borrarTodosRegistros() {
    Videos.transaction(function (t) {
        t.executeSql("DROP TABLE registro", [],
                function (t, results) {
                    console.log("Tabla Eliminada")
                },
                function (t, error) {
                    console.log("Error: " + error.message)
                }
        )
    });


    // location.reload();
}



