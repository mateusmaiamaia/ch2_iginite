import React, { useState } from 'react';
import './CadastroOrganizacao.css';
import Logo from './assets/logo_cadastro.svg';
import MapaPlaceholder from './assets/mapa_placeholder.png';

function CadastroOrganizacao() {
  const [nomeOrganizacao, setNomeOrganizacao] = useState('');
  // Outros estados para os campos do formulário

  const handleSubmit = (event) => { /* ... */ };

  return (
    <div className="cadastro-organizacao-container">
      <div className="cadastro-organizacao-left">
        <img src={Logo} alt="FindAFriend" />
      </div>
      <div className="cadastro-organizacao-right">
        <h2>Cadastre sua organização</h2>
        <form onSubmit={handleSubmit} className="cadastro-organizacao-form">
          {/* Vários campos do formulário */}
          <button type="submit" className="cadastro-button">Cadastrar</button>
        </form>
        <p className="login-link">Já possui conta?</p>
      </div>
    </div>
  );
}

export default CadastroOrganizacao;