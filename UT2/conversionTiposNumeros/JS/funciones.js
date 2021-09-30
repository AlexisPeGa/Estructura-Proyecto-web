window.onload=function(){
    var opcion = document.getElementById("modo");
}

opcion.addEventListener("change", 
function(){
    var elemento=this.options[this.selectedIndex].value;
    var numero=document.getElementById("numero").value;
    var resultado=document.getElementById("resultado").value;
    switch(elemento){
        case"1":
            //codigo que pasa de decimal a binario
            nn=parseInt(numero)
            alert(nn);
        break;
        case"2":

        break;
        case"3":

        break;
        case"4":

        break;
    }
},false);