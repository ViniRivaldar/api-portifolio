const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const admin = require('./routes/Admin')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const db = require('./.config/db')

app.use(express.json())



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'))




mongoose.Promisse = global.Promisse
mongoose.connect( "mongodb+srv://ViniRiva:134679.Vrdss@protifolio-adm.tq9y79v.mongodb.net/portifólio").then(()=>{
    console.log(`mongo connected...`)
}).catch((err)=>{
    console.log(`erro de ${err}`)
})



app.use('/', admin)



app.listen(port,() => {
    console.log(`server run on a port ${port}`)
})

