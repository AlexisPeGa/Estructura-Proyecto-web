'use static'
const express= require('express')
//const bodyParser = require('body-parser')
const bodyParser = require('body-parser')
const mongose= require('mongoose')
const Gimnasios= require('./models/gimnasio')

const app = express()

const port = process.env.PORT || 3000


const cors = require('cors'); 
app.use(cors());
//https://stackoverflow.com/questions/36878255/allow-access-control-allow-origin-header-using-html5-fetch-api

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
/*
app.get('/hola/:nombre',(req,res) =>
{
    res.send(  "Mensaje : Hola soy "+ req.params.nombre)
})
*/
app.get('/api/gimnasio',(req,res)=>{
    
    Gimnasios.find({},(err,gimnasio) =>{
        if(err) res.status(500).send('message : Error al leer: '+err)
        if(!gimnasio) return res.status(404).send('No existen gimnasios')
        //res.send(200, {products:products})
         res.status(200).send(gimnasio)
    })

})
app.get('/api/gimnasio/:gimnasioId',(req,res)=>{
    let gimnasioId=req.params.gimnasioId
    Gimnasios.findById(nombre,(err, gimnasio)=>{
        if(err) res.status(500).send('message : Error al leer: '+err)
        if(!gimnasio) return res.status(404).send('No existe')
        res.status(200).send({gimnasio})
    })
}) 
app.post('/api/gimnasio',(req,res)=>{
    //console.log(req.body)
   // res.send({message : 'Producto recibido'})
    console.log('POST /api/gimnasio')
    console.log(req.body)
   
    let gimnasio = new  Gimnasios()
    gimnasio.nombre= req.body.nombre
    gimnasio.calle= req.body.calle
    gimnasio.telefono= req.body.telefono
    gimnasio.latitud= req.body.latitud
    gimnasio.longitud= req.body.longitud
   
    
    gimnasio.save((err,gimnasioStored)=>{
        if(err) res.status(500).send('message : Error al grabar: '+err)
        res.status(200).send({gimnasio:gimnasioStored})
    })

    
})

app.delete('/api/gimnasio/:gimnasioId',(req,res)=>{

    let gimnasioId=req.params.gimnasioId
    Gimnasios.findById(gimnasioId,(err, gimnasio)=>{
        if(err) res.status(500).send({message:'Error al borrar : ${err}'})
        gimnasio.remove(err =>{
            if(err) res.status(500).send('message : Error al borrar : '+err)  
            res.status(200).send({message: 'Regsitro borrdo : '})
        })
      //  if(!product) return res.status(404).send('No existe')
       
    })
})


app.put('/api/gimnasio/:gimnasioId',(req,res)=>{
    let gimnasioId = req.params.gimnasioId
    let registroModificado= req.body;
    Gimnasios.findByIdAndUpdate(gimnasioId,registroModificado, (err,gimnasioUpdated) => {
        if(err) res.status(500).send({message: 'Error al modificar: ${err}'})
        res.status(200).send({gimnasio:gimnasioUpdated})
    })
    
})
 

//mongose.connect('mongodb://localhost:58140/mydatabase',(err,res)=>{
mongose.connect('mongodb://localhost:27017/mydb',(err,res)=>{
    if(err) {
        return console.log("Erroe de conexion ${}")
    }
    console.log('Conexión establecida')

    app.listen(port,()=>{
        console.log(`Api Rest ejecutandose en http:/localhost:${port}`)
    })

})