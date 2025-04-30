import React, { useState } from 'react';
import './Login.css';
import Logo from './assets/logo_login.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => { /* ... */ };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Logo} alt="FindAFriend" />
      </div>
      <div className="login-right">
        <h2>Boas-vindas!</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Campos de email e senha */}
          <button type="submit" className="login-button">Login</button>
        </form>
        <button className="cadastro-link">Cadastrar minha organização</button>
      </div>
    </div>
  );
}

export default Login;