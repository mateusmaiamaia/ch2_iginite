import React, { useState } from 'react';
import './AdicionarPet.css';
import { FiUpload } from 'react-icons/fi';

function AdicionarPet() {
  const [foto, setFoto] = useState(null);
  // Outros estados para os campos do formulário

  const handleFotoChange = (event) => { /* ... */ };
  const handleSubmit = (event) => { /* ... */ };

  return (
    <div className="adicionar-pet-container">
      <div className="adicionar-pet-header">
        <h2>ADICIONAR</h2>
        <p>01. Dados</p>
      </div>

      <div className="organizacao-info">
        {/* Informações da organização */}
      </div>

      <form onSubmit={handleSubmit} className="adicionar-pet-form">
        {/* Vários campos do formulário para adicionar um pet */}
        <button type="submit" className="confirmar-button">Confirmar</button>
      </form>
    </div>
  );
}

export default AdicionarPet;