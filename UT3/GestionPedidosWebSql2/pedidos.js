var almacen = new Array();
var contador = 0;
var pos = 0;
var totalpedido = 0;
class articluoAlmacen {
    constructor(codigo, nombre, familia, stock, precio, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.familia = familia;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;

    }
    leerRegistro() {
        return this;
    }
}

function generarAlmacen(evt) {
    var cuerpoa = document.querySelector("#cuerpoarticulos");
    cuerpoa.innerHTML="";
   
    myDBInstance.transaction(function (tran) {

        tran.executeSql('SELECT * FROM articulos', [], function (tran, data) {
            for (i = 0; i < data.rows.length; i++) {

               // alert(data.rows[i].Nombre);
                registroArticulo = new articluoAlmacen(
                    data.rows[i].id,
                    data.rows[i].Nombre,
                    data.rows[i].Familia,
                    data.rows[i].Stock,
                    data.rows[i].Precio,
                    data.rows[i].Imagen);              
                   

               //crear lineas de arrticulos a vender
               linea=document.createElement("tr");

               //id articulo
               botonId=document.createElement("button");
               dato=document.createTextNode(registroArticulo.codigo);
               botonId.appendChild(dato);

               casilla=document.createElement("td");
               casilla.appendChild(botonId);
               linea.appendChild(casilla);
               cuerpoarticulos.appendChild(linea);
                

                
            }
        });
    });


}