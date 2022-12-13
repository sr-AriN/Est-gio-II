const express = require('express')
const mongoose = require('mongoose')
const app = express()

const ProfModels = require('./models/Professores')
const FuncModels = require('./models/Funcionarios')
const LabModels = require('./models/Laboratorios')
const SoftModels = require('./models/Softwares')
const CompModels = require('./models/Componentes')
const AgendModels = require('./models/Agendamentos')

app.use(express.json())

mongoose.connect('mongodb+srv://Ariel:12345@projetodb.bckjrnn.mongodb.net/ServidorDB?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.get("/professores", 
    async (req, res) => {
        const professor = new ProfModels({
            nome: "Ariel",
            matricula: 001701,
            email: "sr.arinegreiros@gmail.com"
        })
    try {
        await professor.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

app.get("/funcionarios", 
    async (req, res) => {
        const funcionario = new FuncModels({
        })
    try {
        await funcionario.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

app.get("/laboratorios", 
    async (req, res) => {
        const laboratorio = new LabModels({
        })
    try {
        await laboratorio.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

app.get("/softwares", 
    async (req, res) => {
        const softwares = new SoftModels({
        })
    try {
        await softwares.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

app.get("/componentes", 
    async (req, res) => {
        const componente = new CompModels({
        })
    try {
        await componente.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})

app.get("/agendamentos", 
    async (req, res) => {
        const agendamento = new AgendModels({
        })
    try {
        await agendamento.save()
        res.send("inserted data")
    } catch (err) {
        console.log(err)
    }
})


app.listen(3001,
    () => {
        console.log("Server running on port 3001")
})