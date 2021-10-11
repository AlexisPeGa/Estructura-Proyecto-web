var palabra=document.getElementById("palabra");
var letra=document.getElementById("letra");
var aciertos=document.getElementById("aciertos");
var fallos=document.getElementById("fallos");
palabra.addEventListener("blur",crearGuiones,false);
letra.addEventListener("keyup",buscarLetra,false);

var guiones;

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
    console.log(palabraMayus)
    var posicion = palabraMayus.indexOf(letraBuscar);
    console.log(posicion)
    var esAcierto=false;
    while(posicion>-1){
        guiones=guiones.substring(0,posicion)+letraBuscar+guiones.substr(posicion+1,guiones.length);
        aciertos.value=guiones;
        posicion=palabraMayus.indexOf(letraBuscar,posicion+1);
        esAcierto = true;
    }
    if(!esAcierto){
        fallos.innerHTML=fallos.innerHTML+"<b>"+letraBuscar+"</b>";
    }
    letra.value="";
}