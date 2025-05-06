import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cadastroOrg.css';
import LogoIcon from '../assets/logo_completa.svg';
import DogsIllustration from '../assets/dogs_illustration.svg';
import MapaSimples from './MapaSimples';

function CadastroOrganizacao() {
  const [responsavel, setResponsavel] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mapCenter] = useState(null); // Removeu setMapCenter para evitar o warning
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

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
        break;
      case 'cidade':
        setCidade(value);
        break;
      case 'estado':
        setEstado(value.toUpperCase());
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegistrationError('');
    setRegistrationSuccess(false);

    if (senha !== confirmarSenha) {
      setRegistrationError('As senhas não coincidem.');
      return;
    }

    const userData = {
      nome_responsavel: responsavel,
      email,
      cep,
      endereco,
      cidade, 
      estado, 
      whatsapp,
      senha,
      latitude: mapCenter?.lat,
      longitude: mapCenter?.lng,
    };

    try {
      // Certifique-se de que a URL do backend está correta (incluindo a porta, se necessário)
      const apiUrl = 'http://localhost:3001/api/orgs/';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Cadastro de organização realizado com sucesso!', data);
        setRegistrationSuccess(true);
        navigate('/login');
      } else {
        console.error('Erro ao cadastrar organização:', data);
        setRegistrationError(data?.message || 'Ocorreu um erro ao realizar o cadastro. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      setRegistrationError('Erro ao conectar com o servidor. Verifique sua conexão.');
    }
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
          {/* Novos campos para Cidade e Estado */}
          <div className="form-group">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              className="form-input"
              value={cidade}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="estado" className="form-label">
              Estado (Sigla)
            </label>
            <input
              type="text"
              id="estado"
              className="form-input"
              value={estado}
              onChange={handleInputChange}
              maxLength="2" // Limita a 2 caracteres (sigla do estado)
            />
          </div>
          <div className="map-placeholder">
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
          {registrationError && <p className="error-message">{registrationError}</p>}
          {registrationSuccess && <p className="success-message">Cadastro realizado com sucesso!</p>}
          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
        <p className="login-link">
          <Link to="/login">
            Já possui conta?
          </Link>
        </p>
      </section>
    </main>
  );
}

export default CadastroOrganizacao;