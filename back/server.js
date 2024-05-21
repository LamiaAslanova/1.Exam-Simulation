const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const practise4schema = mongoose.Schema ({
    title:{
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required:true
    }
})

const Practise4 = mongoose.model('Practise4', practise4schema)

app.get('/practise4', async (req, res) => {
    const response = await Practise4.find()
    res.send(response)
})

app.get('/practise4/:id', async (req, res) => {
    const {id} = req.params
    const target = await Practise4.findById(id)
    res.send(target)
})

app.post('/practise4', async (req, res) => {
    const {title, image, description} = req.body
    const newItem = new Practise4 ({title: title, image: image, description: description})
    await newItem.save()
    const allItems = await Practise4.find()
    res.send(allItems)
})

app.delete('/practise4/:id', async (req, res) => {
    const {id} = req.params
    await Practise4.findByIdAndDelete(id)
    const allItems = await Practise4.find()
    res.send(allItems)
})

mongoose.connect('mongodb+srv://lamia:lamia123@cluster0.wca8zcl.mongodb.net/')
.then(res => {
    console.log('connected');
})

app.listen(8080, (req, res) => {
    console.log('port connected');
})