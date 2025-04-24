const express = require('express');
const router = express.Router();
const orgController = require('../controllers/orgController');

// Rota para cadastrar uma nova ORG
router.post('/register', orgController.cadastrarOrg);

// Rota para realizar o login de uma ORG
router.post('/login', orgController.loginOrg);

module.exports = router;