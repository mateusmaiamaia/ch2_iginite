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
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Lógica de autenticação aqui (usando os estados de email e password)
    console.log('Botão de Login clicado');
    console.log('Email:', email);
    console.log('Senha:', password);
    navigate('/pagina-inicial');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
        <form className="login-form" onSubmit={e => e.preventDefault()}>
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
              value={email} // Campo agora controlado pelo estado
              onChange={handleEmailChange} // Atualiza o estado ao digitar
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
              value={password} // Campo agora controlado pelo estado
              onChange={handlePasswordChange} // Atualiza o estado ao digitar
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
          <button
            type="submit"
            className="login-button"
            onClick={handleLoginClick}
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