
var visualizarImagen =document.getElementById("VisualizaImagen");
visualizarImagen.addEventListener("click", visualizaLaImagen, false);

 window.onload= function()
 {

 var enlacepdf=document.getElementById("enlacedPdf") ;

 enlacepdf.onclick=visualizaPdf;


enlace.addEventListener("mouseover", MiFuncion, false);
 }

 function visualizaLaImagen()
 {  
    var imagen =document.getElementById("imagenjs");
    imagen.style.display="none"  
 }
 function ocultaImagen()
 {
    var imagen =document.getElementById("imagenjs");
    imagen.style.display="none"  
 }
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// E V E N T O S /////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

 function MiFuncion(){
   ocultaImagen();


   var destino = document.getElementById("enlace");
   alert(destino.tagName);
   
    alert("¿Vas a navegar a "+destino.href+"?");
    location.href=destino.href;
 }

 function visualizaPdf(){
   ocultaImagen();


   var destino = document.getElementById("enlace");
   alert(destino.tagName);
   
    alert("¿Vas a navegar al pdf "+destino.href+"?");
    location.href=destino.href;
 }

 //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// PROPAGACION DE EVENTOS   /////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
window.onload= function()
{
 
   document.getElementById("cajonera").addEventListener("click",()=>{alert("Cajoneara");console.log("Cajoneara")},true );
   document.getElementById("caja").addEventListener("click",()=>{alert("caja");console.log("caja") },true);
   document.getElementById("cajita").addEventListener("click",()=>{alert("cajita");console.log("cajita") },true ); 
//}
 //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// Anular  EVENTO /////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//window.onload= function()
// {
 ObtenerClave.addEventListener("click",visualizaContraseña);
   ObtenerClave.addEventListener("mouseout",ocultaaContraseña);

  function visualizaContraseña(){
     contraseña.value="SantaCatalina18";
    }
  function ocultaaContraseña(){
     contraseña.value=""; 
    ObtenerClave.removeEventListener("click",visualizaContraseña)
  }

////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////
   ////////////////// Lanzador de Eventos ///////////////////////////
  ///// CREAR OBJETO EVENTO Y LANZARLE DESDE CÓDIGO CUANDO INTERESE.///
  ///////////////////////////////////////////////////////////////////////
	//Suponemos que queremos ejecutar el evento “click” de un <button> cuando se haga “click” en otro botón.
	//Creamos un objeto evento: 
   let eventoLanzado = new Event("click");
	botonLanzador.addEventListener("click",
   ()=>{botonLanzador.style.color="red";botonLanzador.style.backgroundColor="black";
	 botonLanzado.dispatchEvent( eventoLanzado);
	} );

	botonLanzado.addEventListener("click",
  	()=>{botonLanzado.style.color="green";
     botonLanzado.style.backgroundColor="purple";} );

     botonLanzado.addEventListener("contextmenu",
  	()=>{botonLanzado.style.color="cyan";} );

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// AÑADIR  EVENTOS  EN TIEMPO DE EJECUCION////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
 /*  <ul>
   <li>En un elemento html</li>
   <li>En un script dento del fichero html</li>
   <li>En un fichero externo con la extensión js</li>
 </ul>*/
// Vamos a crear un evento que cambie la hoja de estios de los li


   let elementos=document.querySelectorAll("#columna ul li");
   for(let elemento of elementos){
      elemento.addEventListener("mouseover",cambiaColor)

      elemento.addEventListener("mouseout",function(evt){
         evt.target.style.color = 'black';       
      })

      elemento.addEventListener("click",(evt)=>{evt.target.style.color = 'green'; })
   }
   function cambiaColor(evt){
      evt.target.style.color = 'orange';
   }

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// Utilizar códio HTML ///////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
 
bCajahtml.addEventListener("click",()=>{
   let codigoHTML="<pre><b>negrita\n</b><i>Italic\n</i></pre>"  

   cajahtml.innerHTML=codigoHTML;  
   elementosHTML.innerText="Insertado" 

},false)

cCajahtml.addEventListener("click",()=>{
   let codigoHTML="<pre id='cajahtml'><b>Nuevo\n</b><i>texto\n</i></pre>"   
   
   cajahtml.outerHTML=codigoHTML; 
   elementosHTML.innerText="Cambiado" 
   elementosHTML.setAttribute("color","cyan");
   alert(elementosHTML.getAttribute("color"));
   elementosHTML.dataset.colorhtml="Yellow"
   alert(elementosHTML.dataset.colorhtml);
   
   
cajahtml.innerText="Añadido" 
},false)

aCajahtml.addEventListener("click",()=>{
  
 

  
 let codigoHTML="<pre><b>before\n</b><i>1Italic\n</i></pre>"
 cajahtml.insertAdjacentHTML('beforebegin',codigoHTML); 
//Ineserta el código como hermano del elemento y delante de el.

 codigoHTML="<pre><b>afterbegin\n</b><i>1Italic\n</i></pre>"
 
 cajahtml.insertAdjacentHTML('afterbegin',codigoHTML);
//Ineserta el código como primer hijo del elemento

  codigoHTML="<pre><b>beforeend\n</b><i>1Italic\n</i></pre>"
  
  cajahtml.insertAdjacentHTML('beforeend',codigoHTML);
//Ineserta el código como último hijo del elemento
   


},false)






// Obtetos contenos en body

}
