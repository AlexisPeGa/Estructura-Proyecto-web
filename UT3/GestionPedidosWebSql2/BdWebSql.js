var myDBInstance = openDatabase('dbArtiulos', '1.0', 'Venta de articulos por pedido', 7 * 1024 * 1024);
/*Nombre de la base de datos  ,Número de versión,Descripción,Tamaño*/
//check whether the database is created or not.
if (!myDBInstance) {
    alert('La base de Datos no se ha creado');
}
else {
    var version = myDBInstance.version;

    myDBInstance.transaction(function (tran) {
        
        //   tran.executeSql('CREATE TABLE IF NOT EXISTS articulos (id unique, Nombre, Familia, Stock, Precio,Imagen)');
        tran.executeSql('create table if not exists articulos (id  varchar(6), \n\
        Nombre varchar(60), Familia varchar(15),Stock int,Precio float,Imagen varchar(100),   PRIMARY KEY(Id) );'
            , [], nullDataHandler, errorHandler);


        grabarRegistros();
    }

    );
    myDBInstance.transaction(function (tran) {
      
        tran.executeSql('SELECT * FROM articulos', [], function (tran, data) {
            for (i = 0; i < data.rows.length; i++) {
               
            console.log(data.rows[i].Nombre);

            };

        });
    });

}
function grabarRegistros() {

    myDBInstance.transaction(
        function (tran) {
            //Starter data when page is initialized
            // var data = [cId, cVideo, cDescripcion, cConceptoB1, cConceptoB2, cConceptoB3, cInicioCorte, cFinCorte];
          
            tran.executeSql('INSERT INTO  articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (1, "Gayo","Aves",17,123,"./imagenes/GALLO.jpg")');

            tran.executeSql('INSERT INTO  articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (2, "Loro","Aves",3,456,"./imagenes/LORO.jpg")');

            tran.executeSql('INSERT INTO articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (3, "Aguila","Aves",6,789,"./imagenes/aguila.jpg")');
            tran.executeSql('INSERT INTO  articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (4, "Ballena","Mamifero",1,189,"./imagenes/ballena.jpg")');
            tran.executeSql('INSERT INTO  articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (5, "Caballo","Mamifero",67,739,"./imagenes/caballo.jpg")');
            tran.executeSql('INSERT INTO  articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (6, "Cebra","Mamifero",12,589,"./imagenes/cebra.jpg")');
            tran.executeSql('INSERT INTO  articulos (id,  Nombre, Familia, Stock, Precio,Imagen) values (7, "Conejo","Mamifero",1200,12,"./imagenes/conejo.jpg")');


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

}