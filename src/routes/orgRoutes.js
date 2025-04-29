const express = require('express');
const router = express.Router();
const ORGController = require('../controllers/orgController');
const orgController = new ORGController();

// Rota para cadastrar uma nova ORG
router.post('/', orgController.criarORG);

// Rota para realizar login como uma ORG
router.post('/login', orgController.loginORG);

// Rota para listar todas as ORGs (para fins administrativos)
router.get('/', orgController.listarORGs);

// Rota para buscar detalhes de uma ORG específica pelo ID
router.get('/:id', orgController.buscarORGPorId);

module.exports = router;