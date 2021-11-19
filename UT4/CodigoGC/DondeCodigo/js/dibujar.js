var inicioDibujar = false;
var dibujando = false;
/* Seleccionar color */
var colorElegido = 'red';


window.onload = function () {


    /* cAPTURAR tECLA */
    document.body.addEventListener("keyup", function (evt) {
        teclado.value = evt.key + "-" + evt.altKey;
        /* Borra Pantalla al picar CTRL+B */
        if (evt.altKey == true && evt.key == "b") {
            lienzo.innerHTML = "";
        }
        if (evt.altKey == true && evt.key == "i") {
            colorElegido = 'whitesmoke';
        }
        //////////////////////// CERRAAR VENTANA
        if (evt.key == "F12") {

            if (confirm("Seguro que quieres terminar ??")) {
                window.close();
            }
        }

    }, false);
    /* cAPTURAR tECLA */

    lienzo.addEventListener("mousemove", dibujaCursor, false);
    lienzo.addEventListener("mousedown", configurar, false); 0
    /* Borra pantalla*/
    borraPantalla.addEventListener("click",
        function () {
            lienzo.innerHTML = "";
        }
        , false);

    /* Borra borrar  Pixel*/
    borrarPixel.addEventListener("click",
        function () {
            colorElegido = 'whitesmoke';
        }
        , false);


    /* Seleccionar color */
    colorDibujo.addEventListener("change", function () {
        colorElegido = colorDibujo.value;

    }, false);

    /* Seleccion de color al hazar */
    getRandomColor();




    
// ANULAR EL COMPORTAMIENTO PREDETERMINADO DE LOS EVENTOS-
//    <pre>Mas adelante para este tipo de ejercicio utilizaremos canvas </pre>
 //    <a href="https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutoria" id="enlaceCanvas">Canvas</a>
 // Antes de ejecucater el enlace vamos a confirmar que el usuario quiere cambiar

 /*enlaceCanvas.addEventListener('click',function (env){
    if(confirm("Seguro que quieres navegar al manual de canvas ??")){
       
        location="https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutoria";
    }

 },false)
 */

 // Aunque piquemos en CANCELAR , iremos  al tutorial, yq que por defecto se ejecuta el enlace , para anular esa funcionalidad 
 // tenemos que anular el evento por defeceto por medio de
 enlaceCanvas.addEventListener('click',function (env){
    if(!confirm("Seguro que quieres navegar al manual de canvas ??")){
        env.preventDefault();
        
    }

 },false)

 // Es esat forma la picar el el botón ACEPTAR de confirm,. cambiamos de página y si picamos en CANCELAR
 // permanecemos en la misma

}
function configurar(evt) {
    let botonPulsado = evt.button;
    if (botonPulsado == 1) {
        inicioDibujar = !inicioDibujar;
    }

}
function dibujaCursor(evt) {
    color = colorElegido;// getRandomColor(evt);
    let botonPulsado = evt.button;
    console.log("--Boton" + botonPulsado)
    if (inicioDibujar == true) {

        var pixel = document.createElement('div');
        pixel.style.height = ancho.value + 'px';
        pixel.style.width = ancho.value + 'px';
        pixel.style.position = 'absolute';
        pixel.style.left = evt.clientX + "px";// * self.pixelSize + 'px';
        pixel.style.top = evt.clientY + "px";//* self.pixelSize + 'px';
        pixel.style.backgroundColor = color;
        pixel.style.borderRadius="50%";
        lienzo.appendChild(pixel);


    }
    // console.log(evt.clientX + "--" + color + "--Boton" + botonPulsado)
}

function getRandomColor() {
    //return '#' + Math.random().toString(16).substr(-6);
    colorElegido = '#' + Math.random().toString(16).substr(-6);
}


