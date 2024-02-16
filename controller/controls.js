const projeto = require('../models/Projeto')
const mongoose = require('mongoose')


const Projeto = mongoose.model('projetos')

const listar = async (req, res) => {
    try {
        const projetos = await Projeto.find({});
        res.json({ projetos: projetos });
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao buscar projetos");
    }
}

const adcionar = async(req, res)=>{
    console.log(req.body)
    
    let projeto = new Projeto({
        titulo: req.body.titulo,
        video: req.body.video,
        descricao: req.body.descricao,
        urlDoSite: req.body.urlDoSite,
        urlDoRepositorio: req.body.urlDoRepositorio
    });


    try{
        await projeto.save()
        
        res.send(projeto)
    }catch(err){
        res.status(400).send(err)
    }
}

const editar = async (req, res) => {
    try {
        const { titulo, video, descrição, urlDoSite, urlDoRepositorio } = req.body;

        const updatedProjeto = {
            titulo,
            video,
            descricao,
            urlDoSite,
            urlDoRepositorio
        };

        await Projeto.findByIdAndUpdate(req.params.id, updatedProjeto);
        const projetos = await Projeto.find({});

        res.status(201).json({projetos}); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar o projeto');
    }
}

const deletar = async (req, res) => {
    try {
        await Projeto.findByIdAndDelete(req.params.id);
        res.status(200).send({projeto});
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir o projeto');
    }
}

module.exports = {adcionar, listar,editar,deletar}


