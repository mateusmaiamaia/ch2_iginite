const { sequelize, Pet, ORG } = require('./models');

async function startApp() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');

    // Sincroniza o modelo ORG primeiro
    await ORG.sync({ force: false });
    console.log('Tabela ORGs sincronizada.');

    // Depois, sincroniza o modelo Pet
    await Pet.sync({ force: false });
    console.log('Tabela Pets sincronizada.');

    console.log('Banco de dados sincronizado com sucesso!');
    // Aqui você pode iniciar o restante da sua aplicação
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
}

startApp();