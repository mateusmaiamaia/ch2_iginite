const express = require('express');
const router = express.Router();
const PetController = require('../controllers/petController');
const petController = new PetController(); // Cria uma INSTÂNCIA do controller

router.post('/', (req, res) => petController.createPet(req, res));
router.get('/', (req, res) => petController.listPets(req, res));
router.get('/:id', (req, res) => petController.getPetById(req, res));

module.exports = router;