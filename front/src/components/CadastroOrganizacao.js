import React, { useState } from 'react';
import './cadastroOrg.css';
import LogoIcon from '../assets/logo_completa.svg';
import DogsIllustration from '../assets/dogs_illustration.svg';
import MapaSimples from './MapaSimples'; // Importe o componente MapaSimples

function CadastroOrganizacao() {
  const [responsavel, setResponsavel] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mapCenter, setMapCenter] = useState(null); // Estado para o centro do mapa

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'responsavel':
        setResponsavel(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'cep':
        setCep(value);
        break;
      case 'endereco':
        setEndereco(value);
        // Simulação de geocodificação ao mudar o endereço
        // Em um cenário real, você chamaria um serviço de geocodificação aqui
        setEndereco(value);
        if (value === 'Rua Exemplo, 123') {
          setMapCenter({ lat: -23.5505, lng: -46.6333 });
        } else if (value === 'Outro Endereço, 456') {
          setMapCenter({ lat: -22.9068, lng: -43.1729 });
        } else {
          setMapCenter(null); // Limpa o centro se o endereço não corresponder
        }
        break;
      case 'whatsapp':
        setWhatsapp(value);
        break;
      case 'senha':
        setSenha(value);
        break;
      case 'confirmarSenha':
        setConfirmarSenha(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({
      responsavel,
      email,
      cep,
      endereco,
      whatsapp,
      senha,
      confirmarSenha,
      mapCenter,
    });
  };

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
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="responsavel" className="form-label">
              Nome do responsável
            </label>
            <input
              type="text"
              id="responsavel"
              className="form-input"
              value={responsavel}
              onChange={handleInputChange}
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
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              className="form-input"
              value={cep}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endereco" className="form-label">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              className="form-input"
              value={endereco}
              onChange={handleInputChange}
            />
          </div>
          <div className="map-placeholder">
            {/* Substituímos a imagem pelo componente MapaSimples */}
            <MapaSimples center={mapCenter} zoom={15} />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp" className="form-label">
              Whatsapp
            </label>
            <input
              type="tel"
              id="whatsapp"
              className="form-input"
              value={whatsapp}
              onChange={handleInputChange}
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
              value={senha}
              onChange={handleInputChange}
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
              value={confirmarSenha}
              onChange={handleInputChange}
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