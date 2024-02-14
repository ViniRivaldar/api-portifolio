const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Projeto = new Schema({
    titulo:{
        type: String,
        required: true
    },
    descrição:{
        type: String,
        required: true

    },
    video:{
        type: String,
        required: true
    },
    urlDoSite:{
        type: String,
        
    },
    urlDoRepositorio:{
        type: String,
        
    }

})

mongoose.model("projetos", Projeto)