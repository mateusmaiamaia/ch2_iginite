const express = require('express');
const router = express.Router();
const PetController = require('../controllers/petController');
const petController = new PetController(); // Crie uma instância do controller

router.post('/', petController.cadastrarPet);

router.get('/', petController.listarPetsPorCidade);

router.get('/filter', petController.filtrarPets);

router.get('/:id', petController.detalharPet);

module.exports = router;