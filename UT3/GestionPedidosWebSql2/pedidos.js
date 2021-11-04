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
    cuerpoa.innerHTML = "";

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
                linea = document.createElement("tr");


                //id articulo
                botonId = document.createElement("button");
                // En el atributo  del button creado paso el artículo seleccionado pedido  
                botonId.registro = registroArticulo;
                //evento para seleccionar el producto a vender
                botonId.addEventListener("click", VentaArticulo, false);
                botonId.style.width="50px";
                dato = document.createTextNode(registroArticulo.codigo);
                botonId.appendChild(dato);

                casilla = document.createElement("td");
                casilla.appendChild(botonId);
                linea.appendChild(casilla);
                cuerpoa.appendChild(linea);

                //nombre del articulo
                var pnombre = document.createElement("p");
                dato = document.createTextNode(registroArticulo.nombre);
                pnombre.appendChild(dato);
                casilla = document.createElement("td");
                casilla.appendChild(pnombre);
                linea.appendChild(casilla);

                //stock del articulo
                var pstock = document.createElement("p");
                dato = document.createTextNode(registroArticulo.stock);
                pstock.appendChild(dato);
                casilla = document.createElement("td");
                casilla.appendChild(dato);
                linea.appendChild(casilla);

                //precio del articulo
                var pprecio = document.createElement("p");
                dato = document.createTextNode(registroArticulo.precio);
                pprecio.appendChild(dato);
                casilla = document.createElement("td");
                casilla.appendChild(dato);
                linea.appendChild(casilla);

                //imagen
                var pimagen=document.createElement("img");
                pimagen.src=registroArticulo.imagen;
                casilla = document.createElement("td");
                casilla.appendChild(pimagen);
                linea.appendChild(casilla);

                //añadimos la linea tr al cuerpo
                cuerpoa.appendChild(linea);
            }
        });
    });


}
function VentaArticulo(){
    var registro=this.registro;
    alert(this.registro.nombre);
    var cuerpop = document.querySelector("#cuerpopedido");
  

    //nombre del articulo
    linea=document.createElement("tr");
    var pnombre = document.createElement("p");
    dato = document.createTextNode(registro.nombre);    
    pnombre.appendChild(dato);
    casilla = document.createElement("td");
    casilla.appendChild(pnombre);
    linea.appendChild(casilla);
    cuerpop.appendChild(linea);

    //cantidad del articulo, sera input
    ccantidad = document.createElement("input");
    ccantidad.registro = registro;
    ccantidad.id = "c";
    casilla = document.createElement("td");
    casilla.appendChild(ccantidad);
    ccantidad.addEventListener("keyup", calculo, false)
    linea.appendChild(casilla);
    
    parrafo = document.createElement("p");
    dato = document.createTextNode(registro.precio);
    casilla = document.createElement("td");
    casilla.appendChild(dato);
    linea.appendChild(casilla);

    pimporte = document.createElement("input");   
    pimporte.value = 0;
    casilla = document.createElement("td");
    casilla.appendChild(pimporte);
    linea.appendChild(casilla);


    imagenl = document.createElement("img");
    imagenl.src = registro.imagen;
    imagenl.Title = registro.imagen;
    casilla = document.createElement("td");
    casilla.appendChild(imagenl);
    imagenl.addEventListener("click", VentaArticulo, false)
    linea.appendChild(casilla);

    cuerpop.appendChild(linea);
}

function calculo() {

    registro = this.registro;
    var precio = registro.precio;
    var cantidad = this.value
    var importeLinea = parseFloat(precio) * parseFloat(cantidad);

    var lineaPadre = this.parentElement.parentElement;
   
    var hijosVentaPedido = lineaPadre.childNodes;
   
    var importelinea = hijosVentaPedido[3].firstChild;

    var importeAnterior = parseFloat(importelinea.value);
    importelinea.value = importeLinea
    if (isNaN(importelinea.value)) {
        importelinea.value = '0';
    }
    if (isNaN(totalpedido)) {
        totalpedido = 0;
    }
    totalpedido = totalpedido + importeLinea - importeAnterior;
    var ctotal = document.querySelector("#total");
    ctotal.value = totalpedido;
}