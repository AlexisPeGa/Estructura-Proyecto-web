<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
mysql_connect("localhost","s022045b_ci_it","luangalv14");
mysql_select_db("s022045b_ci_it");
$vv1=$_POST['idNegocio'];
$vv2=$_POST['Nombre'];
$vv3=$_POST['Descripcion'];
$vv4=$_POST['Latitud'];
$vv5=$_POST['Longitud'];
$vv6=$_POST['Imagen'];
if($vv1==0){
$consulta =stripslashes( "insert into Negocios values(0,$vv2,$vv3,$vv4,$vv5,$vv6)");
}
else
{
$consulta = "update Negocios set idNegocio=$vv1,Nombre=$vv2,Descripcion=$vv3,Latitud=$vv4,Longitud=$vv5,Imagen=$vv6 where idNegocio=$vv1";
}
$sql= mysql_query($consulta);
echo " ".$vv1." ".$vv2." ".$vv3." ".$vv4." ".$vv5." ".$vv6;
echo "insercion creada ".$consulta;
mysql_close();
?>