const express = require('express');
const petRoutes = require('./routes/petRoutes');
const orgRoutes = require('./routes/orgRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Usando as rotas de pets no caminho /api/pets
app.use('/api/pets', petRoutes);

// Usando as rotas de ONGs no caminho /api/orgs
app.use('/api/orgs', orgRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à FindAFriend API!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});