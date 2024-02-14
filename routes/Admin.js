const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Projeto')




const Projeto = mongoose.model('projetos')


router.get('/index',async(req,res) => {
    try{
        const projetos = await Projeto.find({});

        res.render('../views/index', { projetos: projetos })
    }catch(err){
        res.status(500).send("Erro ao buscar projeto");
    }
})
router.get('/add',(req,res) => res.render('../views/add'))

router.get('/edit/:id', async (req, res) => {
    try {
        const projeto = await Projeto.findById(req.params.id);
        res.render('../views/edit', { projeto: projeto });
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao buscar projeto");
    }
});

router.get('/', async (req, res) => {
    try {
        const projetos = await Projeto.find({});
        res.json({ projetos: projetos });
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao buscar projetos");
    }
});

router.post('/add', async(req, res)=>{
    
    let projeto = new Projeto(req.body)

    try{
        await projeto.save()
        
        res.redirect('/index')
    }catch(err){
        res.send(err)
    }
    
})

router.post('/edit/:id', async (req, res) => {
    try {
        const { titulo, video, descrição, urlDoSite, urlDoRepositorio } = req.body;

        const updatedProjeto = {
            titulo,
            video,
            descrição,
            urlDoSite,
            urlDoRepositorio
        };

        await Projeto.findByIdAndUpdate(req.params.id, updatedProjeto);
        const projetos = await Projeto.find({});

        res.redirect('/index'); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar o projeto');
    }
});
router.post('/:id', async (req, res) => {
    try {
        await Projeto.findByIdAndDelete(req.params.id);
        res.redirect('/index');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir o projeto');
    }
});


module.exports = router