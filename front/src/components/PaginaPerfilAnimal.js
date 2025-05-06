import React from 'react';
import './paginaPerfilPet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBolt, faExpand, faCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importação corrigida do faWhatsapp

function PaginaPetPerfil() {
  return (
    <div className="pagina-pet-perfil-container">
      <div className="card-perfil">
        {/* Left sidebar */}
        <aside className="sidebar-perfil">
          <img src="https://storage.googleapis.com/a1aa/image/c32d48c7-5323-4b4c-f79b-087a579256c3.jpg" alt="Ícone branco de pata" className="pata-icon" height={32} width={32} />
          <button aria-label="Voltar" className="botao-voltar">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </aside>
        {/* Main content */}
        <main className="main-content-perfil">
          <p className="amigo-text">
            Seu novo amigo
          </p>
          <img src="https://storage.googleapis.com/a1aa/image/fdca8024-2c84-48eb-0705-43e5ae79aed8.jpg" alt="Filhote de buldogue francês" className="foto-principal" height={250} width={600} />
          <div className="miniaturas-container">
            <button aria-label="Imagem 1 selecionada" className="miniatura selecionada">
              <img src="https://storage.googleapis.com/a1aa/image/7687cc48-1e52-4573-a1ff-bd7e664db33f.jpg" alt="Miniatura 1" height={56} width={56} />
            </button>
            <button aria-label="Imagem 2" className="miniatura">
              <img src="https://storage.googleapis.com/a1aa/image/c811921f-e0b8-4eb7-c768-e66062210afd.jpg" alt="Miniatura 2" height={56} width={56} />
            </button>
            <button aria-label="Imagem 3" className="miniatura">
              <img src="https://storage.googleapis.com/a1aa/image/c811921f-e0b8-4eb7-c768-e66062210afd.jpg" alt="Miniatura 3" height={56} width={56} />
            </button>
            <button aria-label="Imagem 4" className="miniatura">
              <img src="https://storage.googleapis.com/a1aa/image/36724975-b4ae-47b4-25d0-5c67ea4f38d6.jpg" alt="Miniatura 4" height={56} width={56} />
            </button>
            <button aria-label="Imagem 5" className="miniatura">
              <img src="https://storage.googleapis.com/a1aa/image/c811921f-e0b8-4eb7-c768-e66062210afd.jpg" alt="Miniatura 5" height={56} width={56} />
            </button>
            <button aria-label="Imagem 6" className="miniatura">
              <img src="https://storage.googleapis.com/a1aa/image/6d5b921a-0436-499a-fad6-0e100bb8426e.jpg" alt="Miniatura 6" height={56} width={56} />
            </button>
          </div>
          <h1 className="nome-pet">
            Alfredo
          </h1>
          <p className="descricao-pet">
            Eu sou um lindo doguinho de 3 anos, um jovem brincalhão que adora fazer
            companhia, uma bagunça mas também ama uma soneca.
          </p>
          <div className="atributos-container">
            <div className="atributo">
              <div className="icone-energia">
                <FontAwesomeIcon icon={faBolt} />
                <FontAwesomeIcon icon={faBolt} />
                <FontAwesomeIcon icon={faBolt} />
                <FontAwesomeIcon icon={faBolt} />
                <FontAwesomeIcon icon={faBolt} className="icone-inativo" />
              </div>
              <span className="texto-atributo">
                Muita energia
              </span>
            </div>
            <div className="atributo">
              <div className="icone-ambiente">
                <FontAwesomeIcon icon={faExpand} />
              </div>
              <span className="texto-atributo">
                Ambiente amplo
              </span>
            </div>
            <div className="atributo">
              <div className="icone-porte">
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} className="icone-inativo" />
                <FontAwesomeIcon icon={faCircle} className="icone-inativo" />
              </div>
              <span className="texto-atributo">
                Pequenino
              </span>
            </div>
          </div>
          <div className="mapa-container">
            <img src="https://storage.googleapis.com/a1aa/image/162dac50-b566-4ed2-c83d-cb93f20b0786.jpg" alt="Mapa de Rio do Sul" className="mapa-imagem" height={180} width={600} />
            <div className="ver-rotas">
              Ver rotas no Google Maps
            </div>
          </div>
          <hr className="divisor" />
          <div className="organizacao-info">
            <div className="organizacao-icone">
              <img src="https://storage.googleapis.com/a1aa/image/a2899c58-fa9e-4e93-983c-d3e5c8fb2848.jpg" alt="Ícone da organização" height={24} width={24} />
            </div>
            <div className="organizacao-detalhes">
              <span className="organizacao-nome">
                Seu Cãopanheiro
              </span>
              <span className="organizacao-endereco">
                Rua do meio, 123 , Boa viagem, Recife - PE
              </span>
            </div>
          </div>
          <button className="botao-whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            81 1234.4567
          </button>
          <hr className="divisor" />
          <h2 className="requisitos-titulo">
            Requesitos para adoção
          </h2>
          <div className="requisitos-lista">
            <div className="requisito-item">
              <FontAwesomeIcon icon={faInfoCircle} className="requisito-icone" />
              Local grande para o animal correr e brincar.
            </div>
            <div className="requisito-item">
              <FontAwesomeIcon icon={faInfoCircle} className="requisito-icone" />
              Proibido apartamento
            </div>
            <div className="requisito-item">
              <FontAwesomeIcon icon={faInfoCircle} className="requisito-icone" />
              Ambiente frio, pois possui muito pelo.
            </div>
            <div className="requisito-item">
              <FontAwesomeIcon icon={faInfoCircle} className="requisito-icone" />
              Cão com intolerância a lactose.
            </div>
          </div>
          <button className="botao-contato">
            <FontAwesomeIcon icon={faWhatsapp} />
            Entrar em contato
          </button>
        </main>
      </div>
    </div>
  );
}

export default PaginaPetPerfil;