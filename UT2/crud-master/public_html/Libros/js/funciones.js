window.onload=function()
{
    cargaXml();

bGrabar.addEventListener("click", grabar,false);
 bModificar.addEventListener("click", modificar,false); 
 bBorrar.addEventListener("click", grabar,false); 
 bSiguiente.addEventListener("click", siguiente,false); 
 bAnterior.addEventListener("click", anterior,false); 
 bTabla.addEventListener("click", imprimirentabla,false); 
}
datos = new Array();

var contador = 0; var pos = 0;
var libro= new Object();

		function datoslibro(ISBN, Autor, Titulo, Editorial, Paginas) {
			this.ISBN = ISBN;
			this.Autor = Autor;
			this.Titulo = Titulo;
			this.Editorial = Editorial;
			this.Paginas = Paginas;

			this.guarda = guardadatos;

		}

		function guardadatos() {
			alert(this.ISBN);
			datos[contador] = this;
			contador = contador + 1;
			pos = contador;
		}


		function leerdatos(c) {
			var da = new datoslibro();
			da = datos[c];
			document.write("<tr><td>" + da.ISBN + "</td><td>" + da.Titulo + "</td><td>" + da.Autor + "</td><td>" + da.Editorial + "</td><td>" + da.Paginas + "</td></tr>");

		}




		//////////////////////////////////// G R A B A R //////////////////////////////////
		function grabar() {
			var ISBN = document.getElementById("iISBN").value;
			var Autor = document.getElementById("Autor").value;
			var Titulo = document.getElementById("Titulo").value;
			var Editorial = document.getElementById("Editorial").value;
			var Paginas = document.getElementById("Paginas").value;

			libro = new datoslibro(ISBN, Autor, Titulo, Editorial, Paginas);
			libro.guarda();


		}
        
		//////////////////////////////////// G R A B A R //////////////////////////////////

	 //////////////////////////////////// modificar //////////////////////////////////
     function modificar() {
     }
    //////////////////////////////////// modificar //////////////////////////////////

		// //////////////////// i m p r i m i r /////////////////////////
		function imprimir() {
			document.write("<h1>Listado de Libros</h1><table border='2'>");
			for (c = 0; c < contador; c++) {
				leerdatos(c);

			}
			document.write("</table>");
		}
		// //////////////////// i m p r i m i r /////////////////////////

		function siguiente() {
			pos = pos + 1; visualiza(pos);
		}
		function anterior() {
			pos = pos - 1; visualiza(pos);
		}
		function visualiza(pos) {
			libro = new datoslibro();
			libro = datos[pos];
			if(libro==undefined){return;}
		
			document.getElementById("iISBN").value = libro.ISBN;

			document.getElementById("Autor").value = libro.Autor;
			document.getElementById("Titulo").value = libro.Titulo;
			document.getElementById("Editorial").value = libro.Editorial;
			document.getElementById("Paginas").value = libro.Paginas;

		}
		function imprimirentabla() {

			for (c = 0; c < contador; c++) {
				var da = new datoslibro();
				da = datos[c];
				var tabla = document.getElementById("tabla");
				var cuerpo = document.getElementById("cuerpo");
				linea = document.createElement("tr");
				parrafo = document.createElement("p");
				dato = document.createTextNode(da.ISBN);
				Columna = document.createElement("td");
				Columna.appendChild(dato);
				linea.appendChild(Columna);

				parrafo = document.createElement("p");
				dato = document.createTextNode(da.Titulo);
				Columna = document.createElement("td");
				Columna.appendChild(dato);
				linea.appendChild(Columna)


				parrafo = document.createElement("p");
				dato = document.createTextNode(da.Autor);
				Columna = document.createElement("td");
				Columna.appendChild(dato);
				linea.appendChild(Columna)
				parrafo = document.createElement("p");
				dato = document.createTextNode(da.Editorial);
				Columna = document.createElement("td");
				Columna.appendChild(dato);
				linea.appendChild(Columna)

				parrafo = document.createElement("p");
				dato = document.createTextNode(da.Paginas);
				Columna = document.createElement("td");
				Columna.appendChild(dato);
				linea.appendChild(Columna)

				cuerpo.appendChild(linea);
			}
			tabla.appendChild(cuerpo);
		}
		function cargaXml() {




			var codigo = new DOMParser();
			var myXml = codigo.parseFromString(datosFichero, "text/xml");


			var aisbn = new Array();
			var atitulo = new Array();
			var aautor = new Array();
			var aeditorial = new Array();
			var apaginas = new Array();

			aisbn = myXml.getElementsByTagName("isbn");
			atitulo = myXml.getElementsByTagName("titulo");
			aautor = myXml.getElementsByTagName("autor");
			aeditorial = myXml.getElementsByTagName("editorial");
			apaginas = myXml.getElementsByTagName("paginas");
			//alert(aisbn.length);
			for (var i = 0; i < aisbn.length; i++) {
				// alert(aisbn);
				p = new datoslibro(aisbn.item(i).firstChild.nodeValue, atitulo.item(i).firstChild.nodeValue, aautor.item(i).firstChild.nodeValue, aeditorial.item(i).firstChild.nodeValue, apaginas.item(i).firstChild.nodeValue);

				datos[i] = p;

			}
			c = i; contador = c;
			visualiza(0);
		}

