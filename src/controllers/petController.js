const PetService = require('../services/petService');

class PetController {
  async create(req, res) {
    try {
      const pet = await PetService.createPet(req.body);
      return res.status(201).json(pet);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar pet.' });
    }
  }

  async listAvailable(req, res) {
    const { cidade, ...filtros } = req.query;

    if (!cidade) {
      return res.status(400).json({ error: 'A cidade é obrigatória para listar os pets.' });
    }

    try {
      const pets = await PetService.listAvailablePets(cidade, filtros);
      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar pets disponíveis.' });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const pet = await PetService.getPetDetails(id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet não encontrado.' });
      }
      return res.status(200).json(pet);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar detalhes do pet.' });
    }
  }

  cadastrarPet(req, res) { // Adicione este método que chama o 'create'
    return this.create(req, res);
  }

  listarPetsPorCidade(req, res) { // Adicione este método que chama o 'listAvailable'
    return this.listAvailable(req, res);
  }

  filtrarPets(req, res) { // Adicione este método que chama o 'listAvailable' (com filtros)
    return this.listAvailable(req, res);
  }

  detalharPet(req, res) { // Adicione este método que chama o 'show'
    return this.show(req, res);
  }
}

console.log('PetController class:', PetController);
module.exports = PetController; // Exporte a classe, não a instância