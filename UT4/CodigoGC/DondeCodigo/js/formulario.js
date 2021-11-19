
function controles()
{
    var formulario=document.getElementById("controles");

    console.log (" action :"+formulario.action)
    
    console.log(" Method :"+formulario.method)

    console.log(" enctype :"+formulario.enctype)

    console.log(" acceptCharset :"+formulario.acceptCharset)
    /*    El accept-charset atributo especifica la codificación de caracteres que se van a utilizar para el envío de formularios.
          El valor predeterminado es la cadena reservada "UNKNOWN" (indica que la codificación es igual a la codificación del documento que contiene el <form> elemento).
    */

          console.log(" nº de controles : "+formulario.length)

 var elementos=formulario.elements;
 console.log(" ID  0 de"+elementos.length + "  dato: "+elementos[0].value)
 console.log(" Nombre  1 de"+elementos.length + "  dato: "+elementos[1].value)
return false
}
 

var cajaNombre=window.document.getElementById("nombre");
cajaNombre.addEventListener("focus",()=>{

cajaNombre.value="Tego el foco"
},false);

cajaNombre.addEventListener("blur",()=>{

    cajaNombre.value="Perdi el foco"
    },false);

    
    ID.addEventListener("change",()=>{

        cajaNombre.value="ID tiene el valor :"+ ID.value
    },false);


    //////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    ///////////////// PORTAPAPELES ////////////////////////
    ////////////////////////////////////////////////////////
    bportapapeles.addEventListener("click",async function(){
        if (navigator.clipboard) {

            alert('Clipboard activo');
            await navigator.clipboard.readText()
            .then(text => {
                //  pastedContent.insertAdjacentHTML('afterbegin', `<li>${text}</li>`)
              console.log(text)
              cajaNombre.value=text;
            })
            .catch(err => {
              console.error(`Error pasting clipboard's content: ${err}`)
            })
          }
         //OTRA SOLUCION al problema de que el portapaeles se queda bloqueado
        /* setTimeout(async()=>console.log(
            await window.navigator.clipboard.readText()
            .then(text => {
                //  pastedContent.insertAdjacentHTML('afterbegin', `<li>${text}</li>`)
              console.log(text)
              cajaNombre.value=text;
            })
            .catch(err => {
              console.error(`Error pasting clipboard's content: ${err}`)
            })
            ), 3000)*/
         
       
           
          ID.focus();

    },false);

    bCopiarportapapeles.addEventListener("click", function() {
        navigator.clipboard.writeText(nombre.value)
       .then(() => {
         console.log(`"${nombre.value}" was copied to your clipboard.`)
       })
       .catch(err => {
         console.error(`Error copying text to clipboard: ${err}`)
       })
     })
     
  ;
