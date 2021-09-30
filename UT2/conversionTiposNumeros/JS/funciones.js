window.onload=function(){
    var opcion = document.getElementById("modo");
}

opcion.addEventListener("change", 
function(){
    var elemento=this.options[this.selectedIndex].value;
    var numero=document.getElementById("numero").value;
    var nn=parseInt(numero)
    var resultado=document.getElementById("resultado").value;
    
    switch(elemento){
        case"1":
            //codigo que pasa de decimal a binario
            
            resultado.value=nn.toString(2);
        break;
        case"2":

        break;
        case"3":

        break;
        case"4":

        break;
    }
},false);