const sequelize = require('../database/database');
const ORG = require('./ORG');
const Pet = require('./Pet');

// Define associações
Pet.belongsTo(ORG, { foreignKey: 'org_id', as: 'organizacao' });
ORG.hasMany(Pet, { foreignKey: 'org_id', as: 'pets' });

module.exports = {
  sequelize,
  Pet,
  ORG
};
