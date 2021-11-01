'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const GimnasiosSchema = Schema({
nombre: String,
calle: String,
telefono: String,
latitud: String,
longitud:Number
})
module.exports = mongoose.model('Gimnasios',GimnasiosSchema)