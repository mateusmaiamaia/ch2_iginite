const { Pet, ORG } = require('../models');
const { Op } = require('sequelize');

class PetService {
  async createPet(data) {
    try {
      const pet = await Pet.create(data);
      return pet;
    } catch (error) {
      console.error('Erro ao criar pet:', error);
      throw error;
    }
  }

  async listPets(query) {
    try {
      const whereClause = {};
      const includeOptions = [{
        model: ORG,
        as: 'organizacao',
        attributes: ['id', 'nome_responsavel', 'whatsapp', 'cidade', 'estado'],
      }];

      if (query.cidade) {
        whereClause['$organizacao.cidade$'] = query.cidade;
      }
      if (query.disponivel_adocao) {
        whereClause.disponivel_adocao = query.disponivel_adocao === 'true';
      }
      // Adicione outros filtros conforme necessário (especie, raca, porte, etc.)
      if (query.especie) {
        whereClause.especie = query.especie;
      }
      if (query.raca) {
        whereClause.raca = query.raca;
      }
      if (query.porte) {
        whereClause.porte = query.porte;
      }

      const pets = await Pet.findAll({
        where: whereClause,
        include: includeOptions,
      });
      return pets;
    } catch (error) {
      console.error('Erro ao listar pets:', error);
      throw error;
    }
  }

  async getPetById(id) {
    try {
      const pet = await Pet.findByPk(id, {
        include: [{
          model: ORG,
          as: 'organizacao',
          attributes: ['id', 'nome_responsavel', 'email', 'cep', 'endereco', 'cidade', 'estado', 'whatsapp'],
        }],
      });
      return pet;
    } catch (error) {
      console.error('Erro ao buscar pet por ID:', error);
      throw error;
    }
  }
}

module.exports = new PetService();