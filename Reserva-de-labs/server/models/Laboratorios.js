const mongoose = require('mongoose')

const LaboratorioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlenght: 5,
        maxlenght: 100,
    },

    numero: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 999,
    },

    so: {
        type: String,
        uppercase: true,
        required: true,
        minlength: 1,
        maxlength: 100
    },

})

mongoose.models = {}

const Laboratorio = mongoose.model("LaboratorioData", LaboratorioSchema)
module.exports = Laboratorio