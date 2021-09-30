var opcion =document.getElementById("modo");

opcion.addEventListener("change",calcular,false);

function calcular(){
    var elemento=this.options[this.selectedIndex].value;
    var numero= document.getElementById("numero").value;
    var nn=parseInt(numero) 
    var resultado= document.getElementById("resultado") ;
    switch (elemento)
    {
        case "1":
            // Código que pasa de decimal a binario       
           resultado.value=nn.toString(2);           
         break;
         case "2":
            // Código que pasa de decimal a octal       
           resultado.value=nn.toString(8);
         break;
         case "3":
            // Código que pasa de decimal a hexadecimal       
           resultado.value=nn.toString(16);
         break;
         case "4":
            // Código que pasa de decimal a hexadecimal       
           resultado.value=nn.toString(16);
         break;
         case "5":
            // Código que pasa de decimal a hexadecimal       
           resultado.value=nn.toString(16);
         break;
         case "6":
            // Código que pasa de decimal a hexadecimal       
           resultado.value=nn.toString(16);
         break;
    }

}