const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Projeto')
const {adcionar,listar, listarId, editar,deletar} = require('../controller/controls')






router.get('/',listar);
router.get('/:id',listarId);

router.post('/add', adcionar)

router.post('/edit/:id',editar);
router.post('/delet/:id', deletar);


module.exports = router