import React from 'react';
import './cadastroOrg.css';
import LogoIcon from '../assets/logo_completa.svg';
import DogsIllustration from '../assets/dogs_illustration.svg';

function CadastroOrganizacao() {
  return (
    <main className="cadastro-organizacao-container">
      <section className="left-section">
        <img
          src={LogoIcon}
          alt="Logotipo FindAFriend"
          className="logo-icon"
          width={120}
          height={120}
        />
        <img
          src={DogsIllustration}
          alt="Ilustração de seis cachorros lado a lado"
          className="dogs-illustration"
          width={320}
          height={200}
        />
      </section>
      <section className="right-section">
        <h1 className="cadastro-title">
          Cadastre sua
          <br />
          organização
        </h1>
        <form className="cadastro-form">
          <div className="form-group">
            <label htmlFor="responsavel" className="form-label">
              Nome do responsável
            </label>
            <input
              type="text"
              id="responsavel"
              className="form-input"
              value="Antônio Bandeira"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value="nome@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input type="text" id="cep" className="form-input" value="13254-000" />
          </div>
          <div className="form-group">
            <label htmlFor="endereco" className="form-label">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              className="form-input"
              value="rua do meio"
            />
          </div>
          <div className="map-placeholder">
            <img
              src="https://storage.googleapis.com/a1aa/image/987b6acd-c84d-4f01-c7f8-f34c5b55e0a1.jpg"
              alt="Placeholder do mapa mostrando a área de Rio do Sul"
              className="map-image"
              width={400}
              height={80}
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp" className="form-label">
              Whatsapp
            </label>
            <input
              type="tel"
              id="whatsapp"
              className="form-input"
              value="81 91234.5678"
            />
          </div>
          <div className="form-group password-group relative">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="form-input"
              value="***********"
              readOnly
            />
            <span className="password-toggle-icon">
              <i className="fas fa-eye-slash"></i>
            </span>
          </div>
          <div className="form-group password-group relative">
            <label htmlFor="confirmarSenha" className="form-label">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              className="form-input"
              value="***********"
              readOnly
            />
            <span className="password-toggle-icon">
              <i className="fas fa-eye-slash"></i>
            </span>
          </div>
          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
        <p className="login-link">
          Já possui conta?
        </p>
      </section>
    </main>
  );
}

export default CadastroOrganizacao;