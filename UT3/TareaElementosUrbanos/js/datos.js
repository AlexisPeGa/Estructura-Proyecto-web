var cajaChequeo=null;
 
function elementoSeleccionado(caja){
 
    console.log(caja.id)
    // caja.style.color="black"
    cajaChequeo=caja.id
 
    
}
function eevaluaPatron(){
 
   // console.log("cajaChequeo "+cajaChequeo)
    if(cajaChequeo=="cId"){
        var patron =/^[0-9]+$/
        var resultado =patron.test(cId.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cId").style.color="red"
            document.getElementById("cId").focus()
        }  else{document.getElementById("cId").style.color="black"}
    }
    if(cajaChequeo=="cNombre"){
        var patron=/^[A-Za-z]+$/ ;
        var resultado =patron.test(cNombre.value);
        console.log("Resultado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cNombre").style.color="red"
            document.getElementById("cNombre").focus()
        }  else{document.getElementById("cNombre").style.color="black"} 
        
 
    }
}
let  cajas =document.querySelectorAll("form input");
/*
for (i=0; i<cajas.length;i++){
 
    cajas[i].addEventListener('focus',elementoSeleccionado,false);
}*/
 
 
cajas.forEach(caja => {
    caja.addEventListener('focus', () => {        
        elementoSeleccionado(caja)
    } );
  });
  cajas.forEach(caja => {
    caja.addEventListener('blur', () => {
        
        eevaluaPatron(caja)
    } );
  });