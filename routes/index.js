const express = require('express');
const itens = require( '../controllers/index' );
const router = express.Router();

router.get('/itens', itens.creatItens)
router.post('/itens', itens.creatItens)
router.delete('/itens', itens.creatItens)

module.exports = router;