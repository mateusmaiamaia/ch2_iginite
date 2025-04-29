const ORGService = require('../services/orgService');

class ORGController {
  async criarORG(req, res) {
    try {
      const novaORG = await ORGService.criarORG(req.body);
      return res.status(201).json(novaORG);
    } catch (error) {
      return res.status(400).json({ error: error.message || 'Erro ao criar organização.' });
    }
  }

  async loginORG(req, res) {
    const { email, senha } = req.body;
    try {
      const token = await ORGService.loginORG(email, senha);
      if (token) {
        return res.status(200).json({ message: 'Login realizado com sucesso!', token });
      } else {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao realizar login.' });
    }
  }

  async listarORGs(req, res) {
    try {
      const orgs = await ORGService.listarORGs();
      return res.status(200).json(orgs);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar organizações.' });
    }
  }

  async buscarORGPorId(req, res) {
    const { id } = req.params;
    try {
      const org = await ORGService.buscarORGPorId(id);
      if (!org) {
        return res.status(404).json({ error: 'Organização não encontrada.' });
      }
      return res.status(200).json(org);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar organização.' });
    }
  }

  // Outros métodos para atualizar ou deletar ORGs podem ser adicionados aqui
}

module.exports = ORGController;