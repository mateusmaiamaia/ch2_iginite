import React, { useState } from 'react';
import './AdicionarPet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCloudUploadAlt, faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

function AdicionarPet() {
  const [nome, setNome] = useState('');
  const [sobre, setSobre] = useState('');
  const [idade, setIdade] = useState('Filhote');
  const [porte, setPorte] = useState('Pequenino');
  const [nivelEnergia, setNivelEnergia] = useState('Baixa');
  const [nivelIndependencia, setNivelIndependencia] = useState('Baixo (precisa de companhia sempre)');
  const [ambiente, setAmbiente] = useState('Ambiente amplo');
  const [fotos, setFotos] = useState([]);
  const [requisito, setRequisito] = useState('');
  const [requisitos, setRequisitos] = useState([]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSobreChange = (event) => {
    setSobre(event.target.value);
  };

  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  };

  const handlePorteChange = (event) => {
    setPorte(event.target.value);
  };

  const handleNivelEnergiaChange = (event) => {
    setNivelEnergia(event.target.value);
  };

  const handleNivelIndependenciaChange = (event) => {
    setNivelIndependencia(event.target.value);
  };

  const handleAmbienteChange = (event) => {
    setAmbiente(event.target.value);
  };

  const handleFotoChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFotos = Array.from(files).map(file => ({
        id: Date.now() + Math.random(), // Gere um ID temporário
        file: file,
      }));
      setFotos([...fotos, ...newFotos]);
    }
  };

  const handleRemoverFoto = (idToRemove) => {
    setFotos(fotos.filter(foto => foto.id !== idToRemove));
  };

  const handleRequisitoChange = (event) => {
    setRequisito(event.target.value);
  };

  const handleAdicionarRequisito = () => {
    if (requisito.trim() !== '') {
      setRequisitos([...requisitos, { id: Date.now(), text: requisito }]);
      setRequisito('');
    }
  };

  const handleRemoverRequisito = (idToRemove) => {
    setRequisitos(requisitos.filter(req => req.id !== idToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', {
      nome,
      sobre,
      idade,
      porte,
      nivelEnergia,
      nivelIndependencia,
      ambiente,
      fotos: fotos.map(f => f.file.name), // Envie apenas os nomes dos arquivos
      requisitos: requisitos.map(r => r.text),
    });
    // Aqui você implementaria a lógica para enviar os dados do formulário
  };

  return (
    <div className="scroll-smooth">
      <title>Adicione um pet</title>
      <div className="bg-[#FAE6E6] min-h-screen flex">
        {/* Barra vertical esquerda */}
        <aside className="left-aside">
          <div className="org-icon">
            <img src="https://storage.googleapis.com/a1aa/image/168cacc8-da4b-4650-773f-2371c91471a9.jpg" alt="Ícone de cachorro" />
          </div>
          <button aria-label="Voltar" className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </aside>

        <main className="main-content">
          {/* Cabeçalho */}
          <section className="header-card">
            <div className="org-icon">
              <img src="https://storage.googleapis.com/a1aa/image/168cacc8-da4b-4650-773f-2371c91471a9.jpg" alt="Ícone de cachorro" />
            </div>
            <div className="org-info">
              <h1>Seu Cãopanheiro</h1>
              <p>Rua do meio, 123, Boa viagem, Recife - PE</p>
            </div>
            <button aria-label="Próximo" className="next-button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>

          {/* Formulário */}
          <form className="add-pet-form" onSubmit={handleSubmit}>
            <section>
              <h2>Adicione um pet</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" name="nome" value={nome} onChange={handleNomeChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="sobre">
                    Sobre
                    <span className="max-chars">Máximo de 300 caracteres</span>
                  </label>
                  <textarea id="sobre" name="sobre" rows="3" value={sobre} onChange={handleSobreChange}></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="idade">Idade</label>
                  <select id="idade" name="idade" value={idade} onChange={handleIdadeChange} className="form-select">
                    <option>Filhote</option>
                    <option>Adulto</option>
                    <option>Idoso</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="porte">Porte</label>
                  <select id="porte" name="porte" value={porte} onChange={handlePorteChange} className="form-select">
                    <option>Pequenino</option>
                    <option>Médio</option>
                    <option>Grande</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="nivel-energia">Nível de energia</label>
                  <select
                    id="nivel-energia"
                    name="nivel-energia"
                    value={nivelEnergia}
                    onChange={handleNivelEnergiaChange}
                    className="form-select"
                  >
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="nivel-independencia">Nível de independência</label>
                  <select
                    id="nivel-independencia"
                    name="nivel-independencia"
                    value={nivelIndependencia}
                    onChange={handleNivelIndependenciaChange}
                    className="form-select"
                  >
                    <option>Baixo (precisa de companhia sempre)</option>
                    <option>Médio</option>
                    <option>Alto (fica bem sozinho)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="ambiente">Ambiente</label>
                  <select
                    id="ambiente"
                    name="ambiente"
                    value={ambiente}
                    onChange={handleAmbienteChange}
                    className="form-select"
                  >
                    <option>Ambiente amplo</option>
                    <option>Apartamento</option>
                    <option>Casa com quintal</option>
                  </select>
                </div>

                <div className="form-group fotos-group">
                  <label className="form-label" htmlFor="fotos">
                    Fotos
                  </label>
                  <div className="upload-area">
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                    Arraste e solte o arquivo
                    <input type="file" id="fotos" name="fotos" multiple onChange={handleFotoChange} />
                  </div>
                  {fotos.length > 0 && (
                    <div className="file-preview-container">
                      {fotos.map((foto) => (
                        <div key={foto.id} className="file-preview">
                          <FontAwesomeIcon icon={faFileAlt} />
                          <span>{foto.file.name}</span>
                          <button type="button" onClick={() => handleRemoverFoto(foto.id)}>
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <button type="button" className="add-photo-button">
                    + Adicionar foto
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h2>Requisitos para adoção</h2>
              <div className="requisitos-group">
                <div className="form-group">
                  <label htmlFor="requisito">Requisito</label>
                  <input
                    type="text"
                    id="requisito"
                    name="requisito"
                    placeholder="Defina um requisito|"
                    value={requisito}
                    onChange={handleRequisitoChange}
                  />
                </div>
                <button type="button" className="add-requisito-button" onClick={handleAdicionarRequisito}>
                  + Adicionar
                </button>
              </div>
              {requisitos.length > 0 && (
                <ul className="requisitos-list">
                  {requisitos.map((req) => (
                    <li key={req.id} className="requisito-item">
                      <span>{req.text}</span>
                      <button type="button" onClick={() => handleRemoverRequisito(req.id)}>
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <button type="submit" className="confirm-button">
              Confirmar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AdicionarPet;