const { ORG } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  async criarORG(data) {
    try {
      if (!data.endereco || !data.whatsapp) {
        throw new Error('O endereço e o número de WhatsApp são obrigatórios.');
      }

      // Gere o hash da senha antes de salvar
      const saltRounds = 10; // Número de rounds de salt para bcrypt
      const hashedPassword = await bcrypt.hash(data.senha, saltRounds);
      data.senha = hashedPassword; // Substitua a senha em texto plano pelo hash

      const org = await ORG.create(data);
      return org;
    } catch (error) {
      console.error('Erro ao cadastrar ORG:', error);
      throw error;
    }
  },

  async loginORG(email, senha) {
    try {
      const org = await ORG.findOne({ where: { email } });
      if (!org) {
        return null; // ORG não encontrada
      }
      const isPasswordValid = await bcrypt.compare(senha, org.senha);
      if (!isPasswordValid) {
        return null; // Senha inválida
      }
      return org; // Retorna a ORG autenticada
    } catch (error) {
      console.error('Erro ao fazer login da ORG:', error);
      throw error;
    }
  },

  async listarORGs() {
    try {
      const orgs = await ORG.findAll();
      return orgs;
    } catch (error) {
      console.error('Erro ao listar ORGs:', error);
      throw error;
    }
  },

  async buscarORGPorId(id) {
    try {
      const org = await ORG.findByPk(id);
      return org;
    } catch (error) {
      console.error('Erro ao buscar ORG por ID:', error);
      throw error;
    }
  }
};