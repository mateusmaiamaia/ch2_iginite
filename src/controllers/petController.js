const PetService = require('../services/petService');

class PetController {
  async createPet(req, res) {
    try {
      const pet = await PetService.createPet(req.body);
      return res.status(201).json(pet);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar pet.' });
    }
  }

  async listPets(req, res) {
    try {
      const pets = await PetService.listPets(req.query);
      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar pets.' });
    }
  }

  async getPetById(req, res) {
    const { id } = req.params;
    try {
      const pet = await PetService.getPetById(id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet não encontrado.' });
      }
      return res.status(200).json(pet);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pet.' });
    }
  }
}

module.exports = PetController; // Exporta a CLASSE