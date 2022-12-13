const mongoose = require('mongoose')

const ComponenteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlenght: 5,
        maxlenght: 100,
    },

    descricao: {
        type: String,
        required: false,
        uppercase: true,
        minlenght: 1,
        maxlenght: 200
    },

    quantidade: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 999,
    },

    local: {
        type: String,
        required: true,
        minlenght: 1,
        maxlenght: 100
    }
})

mongoose.models = {}

const Componente = mongoose.model("LaboratorioData", ComponenteSchema)
module.exports = Componente