const mongoose = require('mongoose')

const AgendamentoSchema = new mongoose.Schema({
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
        required: true,
        minlenght: 1,
        maxlenght: 100
    }
})

mongoose.models = {}

const Agendamento = mongoose.model("LaboratorioData", AgendamentoSchema)
module.exports = Agendamento