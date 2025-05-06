import React, { useState } from 'react';
import './login.css';
import LogoIcon from '../assets/logo_completa.svg';
import DogsIllustration from '../assets/dogs_illustration.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); // Estado para exibir erros de login
  const navigate = useNavigate();

  const handleLoginClick = async () => { // Tornando a função assíncrona
    setLoginError(''); // Limpa qualquer erro anterior

    try {
      const apiUrl = 'http://localhost:3001/api/orgs/login'; // Sua rota de login no backend

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }), // Envia email e senha (corrigi para 'password')
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login realizado com sucesso!', data);
        // Aqui você pode salvar o token de autenticação (se estiver usando JWT)
        // em localStorage ou sessionStorage
        navigate('/pagina-inicial'); // Redirecionar para a página inicial
      } else {
        console.error('Erro ao fazer login:', data);
        setLoginError(data?.message || 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      setLoginError('Erro ao conectar com o servidor. Verifique sua conexão.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de submit do formulário
    handleLoginClick(); // Chama a função de login ao submeter o formulário
  };

  return (
    <main className="login-container">
      <section className="left-section">
        <div className="logo-container">
          <img
            src={LogoIcon}
            alt="FindAFriend logo icon with a dog's face in white circle"
            className="logo-icon"
            width={40}
            height={40}
          />
          <span className="logo-text">
            FindAFriend
          </span>
        </div>
        <img
          src={DogsIllustration}
          alt="Illustration of six dogs of different breeds and colors standing side by side, smiling and happy"
          className="dogs-illustration"
          width={400}
          height={200}
        />
      </section>
      <section className="right-section">
        <h1 className="welcome-title">
          Boas-vindas!
        </h1>
        <form className="login-form" onSubmit={handleSubmit}> {/* Alterei para usar handleSubmit */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="form-label"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="nome@email.com"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group password-input-wrapper">
            <label
              htmlFor="password"
              className="form-label"
            >
              Senha
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="form-input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-button"
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
          {loginError && <p className="error-message">{loginError}</p>} {/* Exibe a mensagem de erro */}
          <button
            type="submit" // Alterei o tipo para submit para acionar o handleSubmit
            className="login-button"
          >
            Login
          </button>
        </form>
        <Link to="/cadastro-organizacao" className="register-button">
          Cadastrar minha organização
        </Link>
      </section>
    </main>
  );
}

export default Login;