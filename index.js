require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const admin = require('./routes/Admin')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const cors = require('cors')


app.use(express.json())
app.use(cors())


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'))




mongoose.Promisse = global.Promisse
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log(`mongo connected...`)
}).catch((err)=>{
    console.log(`erro de ${err}`)
})



app.use('/', admin)



app.listen(process.env.PORT ,() => {
    console.log(`server run on a port ${process.env.PORT }`)
})

