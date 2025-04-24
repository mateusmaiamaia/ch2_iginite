const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Rota para cadastrar um novo pet
router.post('/', petController.cadastrarPet);

// Rota para listar todos os pets disponíveis em uma cidade
router.get('/', petController.listarPetsPorCidade);

// Rota para filtrar pets por características (query params opcionais)
router.get('/filter', petController.filtrarPets);

// Rota para visualizar detalhes de um pet específico
router.get('/:id', petController.detalharPet);

module.exports = router;