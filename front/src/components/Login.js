import React, { useState } from 'react';
import './login.css';
import LogoIcon from '../assets/logo_completa.svg';
import DogsIllustration from '../assets/dogs_illustration.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Lógica de autenticação aqui (simulada para navegação)
    console.log('Botão de Login clicado');
    navigate('/pagina-inicial');
  };

  return (
    <main className="login-container">
      <section className="left-section">
        <div className="logo-container">
          <img
            src={LogoIcon}
            alt="FindAFriend logo icon with a dog's face in white circle"
            className="logo-icon"
            width={40} // Aumentei o tamanho da logo conforme solicitado
            height={40} // Aumentei o tamanho da logo conforme solicitado
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
              defaultValue="**********"
              className="form-input"
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
            onClick={handleLoginClick} // Adicionei o evento onClick para navegar
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