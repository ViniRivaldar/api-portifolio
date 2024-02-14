const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const admin = require('./routes/Admin')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

app.use(express.json())



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'))




mongoose.Promisse = global.Promisse
mongoose.connect('mongodb://127.0.0.1:27017/portifólio').then(()=>{
    console.log(`mongo connected...`)
}).catch((err)=>{
    console.log(`erro de ${err}`)
})



app.use('/', admin)



app.listen(port,() => {
    console.log(`server run on a port ${port}`)
})

