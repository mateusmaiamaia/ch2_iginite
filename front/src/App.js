import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './components/PaginaInicial';
import PaginaPerfilAnimal from './components/PaginaPerfilAnimal';
import Login from './components/Login';
import CadastroOrganizacao from './components/CadastroOrganizacao';
import AdicionarPet from './components/AdicionarPet';
import './App.css'; // Se você tiver estilos globais

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Agora a rota padrão é o Login */}
        <Route path="/pagina-inicial" element={<PaginaInicial />} /> {/* Renomeei para evitar conflito */}
        <Route path="/animal/:id" element={<PaginaPerfilAnimal />} />
        <Route path="/cadastro-organizacao" element={<CadastroOrganizacao />} />
        <Route path="/adicionar-pet" element={<AdicionarPet />} />
        <Route path="/login" element={<Login />} /> {/* Você pode manter essa rota para acesso direto */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;