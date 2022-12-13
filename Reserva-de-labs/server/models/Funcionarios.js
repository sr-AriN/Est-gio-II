const mongoose = require('mongoose')

const FuncionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },

    matricula: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 999999
    },

    email: {
        type: String,
        uppercase: true,
        required: true,
        minlength: 10,
        maxlength: 100
    },

    // senha: {
    //     typer: String,
    //     required: true,
    //     unique: true,
    //     minlenght: 6,
    //     maxlength: 100
    // }

});

mongoose.models = {}

const Funcionario = mongoose.model("FuncionarioData", FuncionarioSchema)
module.exports = Funcionario