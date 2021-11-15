//usamos let en vez de var
let cajaChequeo = null;

function elementoSeleccionado(caja) {

    console.log(caja.id)
    // caja.style.color="black"
    cajaChequeo = caja.id


}
function eevaluaPatron() {

    // console.log("cajaChequeo "+cajaChequeo)
    if (cajaChequeo == "cId") {
        var patron = /^[0-9]+$/
        var resultado = patron.test(cId.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cId").style.color = "red"
            document.getElementById("cId").focus()
        } else { document.getElementById("cId").style.color = "black" }
    }
    if (cajaChequeo == "cTipo") {
        var patron = /^Temperatura$|^Luminosidad$|^Caudal$|^Viento$|^Contaminacion$|^Polucion$/; //Temperatura-luminosidad-caudal-viento-contaminacion(co2)-polucion
        var resultado = patron.test(cTipo.value);
        console.log("Resultado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cTipo").style.color = "red"
            document.getElementById("cTipo").focus()
        } else { document.getElementById("cTipo").style.color = "black" }
    }
    if (cajaChequeo == "cCantidad") {
        var patron =/^[0-9]+$/;
        var resultado = patron.test(cCantidad.value);
        console.log("Resultado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cCantidad").style.color = "red"
            document.getElementById("cCantidad").focus()
        } else { document.getElementById("cCantidad").style.color = "black" }
    }
    if (cajaChequeo == "cHora") {
        var patron =/^[0-9]{2}[:][0-9]{2}$/;
        var resultado = patron.test(cHora.value);
        console.log("Resultado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cHora").style.color = "red"
            document.getElementById("cHora").focus()
        } else { document.getElementById("cHora").style.color = "black" }
    }
    if (cajaChequeo == "cFecha") {

        var patron =/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;

        var resultado = patron.test(cFecha.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cFecha").style.color = "red"
            document.getElementById("cFecha").focus()
        } else { document.getElementById("cFecha").style.color = "black" }
    }
    if (cajaChequeo == "cLatitud") {
        /* Tiene que comenzar por - */
        var patron = /^[0-9.]*$/

        var resultado = patron.test(cLatitud.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cLatitud").style.color = "red"
            document.getElementById("cLatitud").focus()
        } else { document.getElementById("cLatitud").style.color = "black" }
    }
    if (cajaChequeo == "cLongitud") {
        /* Tiene que comenzar por - */
        var patron = /^[-][0-9.]*$/

        var resultado = patron.test(cLongitud.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cLongitud").style.color = "red"
            document.getElementById("cLongitud").focus()
        } else { document.getElementById("cLongitud").style.color = "black" }
    }

    if (cajaChequeo == "cDireccion") {
        /* Tiene que comenzar por - */
        var patron = /(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;

        var resultado = patron.test(cDireccion.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cDireccion").style.color = "red"
            document.getElementById("cDireccion").focus()
        } else { document.getElementById("cDireccion").style.color = "black" }
    }
    if (cajaChequeo == "cDescripcion") {
        /* Tiene que comenzar por - */
        var patron = /(?=^.{1,300}$)[a-zA-Z0-9áéíóú]+/;
    
        var resultado = patron.test(cDireccion.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cDescripcion").style.color = "red"
            document.getElementById("cDescripcion").focus()
        } else { document.getElementById("cDescripcion").style.color = "black" }
    }
}




let cajas = document.querySelectorAll("form input");
/*
for (i=0; i<cajas.length;i++){
 
    cajas[i].addEventListener('focus',elementoSeleccionado,false);
}*/


cajas.forEach(caja => {
    caja.addEventListener('focus', () => {
        elementoSeleccionado(caja)
    });
});
cajas.forEach(caja => {
    caja.addEventListener('blur', () => {

        eevaluaPatron(caja)
    });
});