var palabra=document.getElementById("palabra");
var letra=document.getElementById("letra");
var aciertos=document.getElementById("aciertos");
var fallos=document.getElementById("fallos");
letra.addEventListener("keyup",buscarLetra,false);
var imagenes;
var guiones;
var palabraImg;
function crearGuiones(){
    guiones=palabra.value;

    //reemplaza cualquier carácter entre a-z , 
    //g hace que se repita con todos los caracateres del string
    //i que no diferencie entre mayúsculas y minúsculas

    guiones=guiones.replace(/[a-z]/gi,"-");
    aciertos.value=guiones;
}

function buscarLetra(){
    if(letra.value==""){
        return;
    }
    var letraBuscar=letra.value.toUpperCase();
    var palabraMayus = palabra.value.toUpperCase().toString();
    var posicion = palabraMayus.indexOf(letraBuscar);
    var esAcierto=false;
    while(posicion>-1){
        console.log(posicion);
        guiones=guiones.substring(0,posicion)+letraBuscar+guiones.substr(posicion+1,guiones.length);
        aciertos.value=guiones;
        posicion=palabraMayus.indexOf(letraBuscar,posicion+1);
        console.log(posicion);
        esAcierto = true;
    }
    if(!esAcierto){
        fallos.innerHTML=fallos.innerHTML+"<b>"+letraBuscar+"</b>";
    }
    letra.value=""; 
}


// Leer ficheros del directorio seleccioando
function SeleccionImagenes(evt) {
                       
    var files = evt.target.files; // FileList object
   
    // Bucle que recorre las imagenes obtenidos de la carpeta seleccionada.
    var columnas = 0;
    for (var i = 0, f; f = files[i]; i++) {

// Si f no es de type image , no continua y vuelve al inicio del bucle(continue)
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

// Function(Clousure) que obtiene la información de cada archivo. la funcion 
// se ejecuta al cargar (load) cada unop de los archivos seleccionadso
        
        reader.onload = (function (ElFichero) {
            return function (e) {
               
               
              
                //ElFichero.name contiene el nombre de los ficheros seleccionados
                // e.target.result contiene el Data de la imagen,que asigándo el mismo
                // a la prpiedad src de un elemento html img, sevisualiza en el mismo
                             var cadena = escape(ElFichero.name);
                var ppunto = cadena.indexOf(".");
                var nimagen = cadena.substring(0, ppunto)
                //  Creamos la IMAGEN
                imm = document.createElement("img");
                imm.src = e.target.result;
                imm.alt = ElFichero.name;
//Podemos guardar el nombre de la imagen  a adivinar 
                                         //en esta propiedad alt
                imm.title = nimagen;

                // Programamos en  evento clic sobre la imagen para jugar con ella
                
                
                    document.getElementById('contenedorImagen').insertBefore(imm, null);
                    imagenes = [...document.querySelectorAll("#contenedorImagen img")];
                    imm.setAttribute("onclick","cogerIndice("+(imagenes.length-1)+");");      
                    
                }
                                               
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
        

    }

}
document.getElementById('files').addEventListener('change', SeleccionImagenes, false);


function cogerIndice(indice){
    palabra.value=imagenes[indice].title;
    crearGuiones();
}