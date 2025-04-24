const { ORG } = require('../models');
const bcrypt = require('bcryptjs');

class ORGService {
  async createORG(data) {
    try {
      if (!data.endereco || !data.whatsapp) {
        throw new Error('O endereço e o número de WhatsApp são obrigatórios.');
      }
      const org = await ORG.create(data);
      return org;
    } catch (error) {
      console.error('Erro ao cadastrar ORG:', error);
      throw error;
    }
  }

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
  }
}

module.exports = new ORGService();