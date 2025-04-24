const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'seu_banco_de_dados',
  process.env.DB_USER || 'seu_usuario',
  process.env.DB_PASSWORD || 'sua_senha',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

// Importa os modelos
const Pet = require('../models/Pet');
const ORG = require('../models/ORG');

// Define as associações (relacionamento entre Pet e ORG)
Pet.belongsTo(ORG, { foreignKey: 'org_id', as: 'organizacao' });
ORG.hasMany(Pet, { foreignKey: 'org_id', as: 'pets' });

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');

    // Sincroniza os modelos com o banco de dados (cria as tabelas se não existirem)
    await sequelize.sync({ force: false }); // 'force: true' recria as tabelas (use com cuidado em produção)
    console.log('Modelos sincronizados com o banco de dados.');

  } catch (error) {
    console.error('Não foi possível conectar e sincronizar com o banco de dados:', error);
  }
}

testConnection();

module.exports = sequelize;