var cajaChequeo = null;

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
    if (cajaChequeo == "cNombre") {
        var patron = /(?=^.{1,50}$)[a-zA-Záéíóú]+/;
        var resultado = patron.test(cNombre.value);
        console.log("Resultado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cNombre").style.color = "red"
            document.getElementById("cNombre").focus()
        } else { document.getElementById("cNombre").style.color = "black" }
    }
    if (cajaChequeo == "cDescripcion") {
        var patron = /(?=^.{1,150}$)[a-zA-Záéíóú]+/;
        var resultado = patron.test(cDescripcion.value);
        console.log("Resultado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cDescripcion").style.color = "red"
            document.getElementById("cDescripcion").focus()
        } else { document.getElementById("cDescripcion").style.color = "black" }
    }
    if (cajaChequeo == "cTipo") {
        var patron = /^Alcantarilla$|^Sucia$|^Limpia$|^Farola$|^Papelera$|^Jardin$|^Datos$|^Eléctrica$/;
        var resultado = patron.test(cTipo.value);
        console.log("Resultado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cTipo").style.color = "red"
            document.getElementById("cTipo").focus()
        } else { document.getElementById("cTipo").style.color = "black" }
    }
    if (cajaChequeo == "cLatitud") {

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
    if (cajaChequeo == "cFecahac") {
        /* Tiene que comenzar por - */
        var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/

        var resultado = patron.test(cFecahac.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cFecahac").style.color = "red"
            document.getElementById("cFecahac").focus()
        } else { document.getElementById("cFecahac").style.color = "black" }
    }

    if (cajaChequeo == "cFecaham") {
        /* Tiene que comenzar por - */
        var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/

        var resultado = patron.test(cFecaham.value);
        console.log("Resltado Chequeo:" + resultado)
        if (!resultado) {
            document.getElementById("cFecaham").style.color = "red"
            document.getElementById("cFecaham").focus()
        } else { document.getElementById("cFecaham").style.color = "black" }
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