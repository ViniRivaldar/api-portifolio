require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const admin = require('./routes/Admin')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(express.json())

let corsOption = {
    origin:'http://127.0.0.1:5500',
    optionsSuccessStatus: 200 
}
app.use(cors(corsOption))


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())






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

