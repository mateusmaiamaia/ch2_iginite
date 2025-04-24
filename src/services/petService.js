const { Pet } = require('../models');
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

  async listAvailablePets(cidade, filtros = {}) {
    try {
      const whereClause = {
        disponivel_adocao: true,
        '$organizacao.cidade$': cidade, // Acessa a cidade através da associação
        ...filtros,
      };

      const pets = await Pet.findAll({
        where: whereClause,
        include: [{
          model: require('../models/ORG'), // Importa o modelo ORG aqui para evitar dependência circular imediata
          as: 'organizacao',
          attributes: ['id', 'nome_responsavel', 'whatsapp', 'cidade', 'estado'], // Seleciona atributos da ORG
        }],
      });
      return pets;
    } catch (error) {
      console.error('Erro ao listar pets disponíveis:', error);
      throw error;
    }
  }

  async getPetDetails(petId) {
    try {
      const pet = await Pet.findByPk(petId, {
        include: [{
          model: require('../models/ORG'),
          as: 'organizacao',
          attributes: ['id', 'nome_responsavel', 'email', 'cep', 'endereco', 'cidade', 'estado', 'whatsapp'],
        }],
      });
      return pet;
    } catch (error) {
      console.error('Erro ao buscar detalhes do pet:', error);
      throw error;
    }
  }
}

module.exports = new PetService();