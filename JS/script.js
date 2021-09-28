
window.onload=function (){
alert("load")
}

nombre.addEventListener("mouseover", function () {

    nombre.style.color = "green";
    nombre.innerText = (nombre.innerText).toUpperCase();

}, false)
nombre.addEventListener("mouseout", function () {
    nombre.style.color = "black";
    nombre.innerText = (nombre.innerText).toLowerCase();

}, false)