const ORGService = require('../services/ORGService');

class ORGController {
  async create(req, res) {
    try {
      const org = await ORGService.createORG(req.body);
      return res.status(201).json(org);
    } catch (error) {
      return res.status(400).json({ error: error.message || 'Erro ao cadastrar ORG.' });
    }
  }

  async login(req, res) {
    const { email, senha } = req.body;
    try {
      const org = await ORGService.loginORG(email, senha);
      if (org) {
        // Implementar lógica de sessão ou token aqui (ex: JWT)
        return res.status(200).json({ message: 'Login realizado com sucesso!', orgId: org.id });
      } else {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao realizar login.' });
    }
  }
}

module.exports = new ORGController();