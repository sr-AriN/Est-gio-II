const mongoose = require('mongoose')

const SoftwareSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },

    so: {
        type: String,
        uppercase: true,
        required: true,
        minlength: 1,
        maxlength: 100
    },

    // licenca: {
    //     typer: String,
    //     required: true,
    //     unique: true,
    //     minlenght: 1,
    //     maxlength: 100
    // },

    status: {
        type: Boolean,
        required: true
    }

});

mongoose.models = {}

const Software = mongoose.model("SoftwareData", SoftwareSchema)
module.exports = Software