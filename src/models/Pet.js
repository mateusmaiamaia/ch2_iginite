const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobre: {
    type: DataTypes.STRING(300),
  },
  idade: {
    type: DataTypes.ENUM('filhote', 'adulto', 'idoso'),
    allowNull: false,
  },
  porte: {
    type: DataTypes.ENUM('pequenino', 'pequeno', 'médio', 'grande'),
    allowNull: false,
  },
  nivel_energia: {
    type: DataTypes.ENUM('baixa', 'média', 'alta', 'muito alta'),
    allowNull: false,
  },
  nivel_independencia: {
    type: DataTypes.ENUM('baixa', 'média', 'alta'),
    allowNull: false,
  },
  ambiente: {
    type: DataTypes.STRING,
  },
  fotos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  requisitos_adocao: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  org_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orgs', // Nome da tabela de ONGs (será pluralizado pelo Sequelize)
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  disponivel_adocao: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  data_cadastro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'pets', // Define o nome da tabela explicitamente
  timestamps: false, // Desativa os campos createdAt e updatedAt automáticos
});

module.exports = Pet;