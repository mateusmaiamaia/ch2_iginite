import React, { useState } from 'react';
import './adicionarPet.css';
import { FiUpload } from 'react-icons/fi';

function AdicionarPet() {
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [porte, setPorte] = useState('');
  const [energia, setEnergia] = useState(0);
  const [historicoSaude, setHistoricoSaude] = useState('');
  const [temperamento, setTemperamento] = useState('');
  const [castrado, setCastrado] = useState(false);
  const [vacinado, setVacinado] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [requisitosAdocao, setRequisitosAdocao] = useState('');
  const [cuidadosSaude, setCuidadosSaude] = useState('');

  const handleFotoChange = (event) => {
    setFoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você implementaria a lógica para adicionar o pet
    console.log('Dados do Pet:', {
      foto, nome, especie, raca, sexo, idade, porte, energia, historicoSaude,
      temperamento, castrado, vacinado, descricao, requisitosAdocao, cuidadosSaude
    });
  };

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