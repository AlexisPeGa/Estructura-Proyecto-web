/*
 Main JS for tutorial: "Getting Started with HTML5 Local Databases"
 Written by Ben Lister (darkcrimson.com) revised 12 May 2010
 Tutorial: http://blog.darkcrimson.com/2010/05/local-databases/
 
 Licensed under the MIT License:
 http://www.opensource.org/licenses/mit-license.php
 */
var nuevo = 0;
function leeRegistro() {
    var row = null;

    Tutorial.transaction(function (tx) {
        tx.executeSql("SELECT Codigo  , Nombre , Edad  from persona LIMIT 1", [], function (tx, result) {


            var row = result.rows.item(0);
            var ccodigo = document.getElementById("codigo");
            ccodigo.value = row['Codigo'];
            var cnombre = document.getElementById("nombre");
            cnombre.value = row['Nombre'];

            var cedad = document.getElementById("edad");
            cedad.value = row['Edad'];

        });
    });

    return row;
}
function NuevoRegistro() {
    nuevo = 1;
    document.getElementById("codigo").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("edad").value = ""
}
function gabarRegistro() {

    var ccodigo = document.getElementById("codigo").value;
    var cnombre = document.getElementById("nombre").value;
    var cedad = document.getElementById("edad").value;
    Tutorial.transaction(
            function (tx) {
                //Starter data when page is initialized
                var data = [ccodigo, cnombre, cedad];
                if (nuevo == 1)
                {

                    tx.executeSql("INSERT INTO persona values( ?, ?, ?)", [ccodigo, cnombre, cedad]);
                }
                else
                {
                    /* tx.executeSql("UPDATE persona SET Codigo=?, Nombre=?, Edad=?  WHERE Codigo =?)",  [ccodigo, cnombre, cedad,ccodigo]);*/
                    tx.executeSql("UPDATE persona SET Codigo='" + ccodigo + "', Nombre='" + cnombre + "', Edad=" + cedad + "  WHERE Codigo ='" + ccodigo + "'");


                }
            }
    );
}
function BorrarRegistro()
{

    var ccodigo = document.getElementById("codigo").value

    Tutorial.transaction(
            function (transaction) {

                transaction.executeSql("DELETE FROM persona  WHERE Codigo  ='" + ccodigo + "'");
            }
    );
}
function inicioBasedeDatos() {

    try {
        if (!window.openDatabase) {
            alert('Local Databases are not supported by your browser. Please use a Webkit browser for this demo');
        } else {
            var shortName = 'Tutorial';
            var version = '1.0';
            var displayName = 'Tutorial base de datos WebSql';
            var maxSize = 100000; // in bytes
            Tutorial = openDatabase(shortName, version, displayName, maxSize);
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

    Tutorial.transaction(
            function (transaction) {


                //transaction.executeSql('create table if not exists datosformulario (Codigo varchar(6)  NOT NULL PRIMARY KEY ,Nombre varchar(50),Edad varchar(3) );', [], nullDataHandler, errorHandler);
                transaction.executeSql('create table if not exists persona (Codigo  varchar(6), \n\
Nombre varchar(60), Edad float,    PRIMARY KEY(Codigo) );'
                , [], nullDataHandler, errorHandler);
                //   transaction.executeSql('create table if not exists mantenimiento (CodigoElemento varchar(6), DescripcionTrabajo varchar(300), Fecha Date,TiempoEmpleado float,Operario varchar(50),Productos varchar(100),Cantidad float,Precio float,TipoTrabajo varchar(45));', [], nullDataHandler, errorHandler);
            }


    );

}


function Leer()
{
 
    nuevo = 0;
    Tutorial.transaction(function (tx) {
        var cc = document.getElementById("codigo").value

        tx.executeSql("SELECT Codigo  ,Nombre  ,Edad FROM persona where Codigo = '" + cc + "'", [], function (tx, result) {

            for (var i = 0; i < result.rows.length; ++i) {
                var row = result.rows.item(i);

                var ccodigo = document.getElementById("codigo");
                ccodigo.value = row['Codigo'];
                var cnombre = document.getElementById("nombre");
                cnombre.value = row['Nombre'];

                var cedad = document.getElementById("edad");
                cedad.value = row['Edad'];
alert("Pausa")
            }
        });
    });


    /*
     var cc = document.getElementById("codigo").value;
     Tutorial.transaction(function (tx) {
     
     tx.executeSql("SELECT Codigo  , Nombre , Edad  from persona where Codigo >  '" + cc + "' ORDER BY CodigoElemento ASC LIMIT 1", [], function (tx, result) {
     alert("cc:" + cc);
     try {
     row = result.rows.item(0);
     alert("Registros :" + result.rows.length)
     } catch (error) {
     alert("Ultimo Registro");
     Tutorial.transaction(function (tx) {
     tx.executeSql("SELECT Codigo  , Nombre , Edad  from persona LIMIT 1", [], function (tx, result) {
     row = result.rows.item(0);
     
     
     });
     });
     }
     
     }
     );
     
     
     });*/



}
function listaDatos()
{
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";
    Tutorial.transaction(function (tx) {
        var cc = document.getElementById("codigo").value

        tx.executeSql("SELECT Codigo  ,Nombre  ,Edad FROM persona", [], function (tx, rs) {
            for (var i = 0; i < rs.rows.length; ++i) {
                var row = rs.rows.item(i);

                linea = document.createElement("tr");
                parrafo = document.createElement("p");
                dato = document.createTextNode(row['Codigo']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);


                parrafo = document.createElement("p");
                dato = document.createTextNode(row['Nombre']);
                Columna = document.createElement("td");
                Columna.appendChild(dato);
                linea.appendChild(Columna);


                parrafo = document.createElement("p");
                dato = document.createTextNode(row['Edad']);
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




function errorHandler(transaction, error) {

    if (error.code == 1) {
        // DB Table already exists
    } else {
        console.log("Error " + error.code);
        // Error is a human-readable string.
        //   console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');
    }
    return false;
}


function nullDataHandler() {

    console.log("SQL Query Succeeded");
}


/***
 **** DELETE DB TABLE ** 
 ***/
function dropTables() {



    Tutorial.transaction(function (t) {
        t.executeSql("DROP TABLE persona", [],
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

	