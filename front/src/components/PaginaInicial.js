import React from 'react';
import './paginaInicial.css';
import DogIcon from '../assets/logo_completa.svg'; // Assumindo que você quer usar o logo completo aqui
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faDog, faCat } from '@fortawesome/free-solid-svg-icons';

function PaginaInicial() {
  return (
    <div className="pagina-inicial-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <img src={DogIcon} alt="Ícone branco de rosto de cachorro estilizado" className="logo-icon" width={40} height={40} />
        </div>
        <nav className="filter-nav">
          <button className="filter-button">
            PE
            <FontAwesomeIcon icon={faChevronDown} className="filter-icon" />
          </button>
          <button className="filter-button">
            Recife
            <FontAwesomeIcon icon={faChevronDown} className="filter-icon" />
          </button>
          <button className="search-button" aria-label="Buscar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </nav>
        <section className="filters-section">
          <h2 className="filters-title">
            Filtros
          </h2>
          <div className="filter-group">
            <label htmlFor="idade" className="filter-label">
              Idade
            </label>
            <button aria-expanded="false" aria-haspopup="listbox" className="filter-dropdown" id="idade">
              Filhote
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            </button>
          </div>
          <div className="filter-group">
            <label htmlFor="energia" className="filter-label">
              Nível de Energia
            </label>
            <button aria-expanded="false" aria-haspopup="listbox" className="filter-dropdown" id="energia">
              03
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            </button>
          </div>
          <div className="filter-group">
            <label htmlFor="porte" className="filter-label">
              Porte do animal
            </label>
            <button aria-expanded="false" aria-haspopup="listbox" className="filter-dropdown" id="porte">
              Pequenino
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            </button>
          </div>
          <div className="filter-group">
            <label htmlFor="independencia" className="filter-label">
              Nível de independência
            </label>
            <button aria-expanded="false" aria-haspopup="listbox" className="filter-dropdown" id="independencia">
              Médio
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            </button>
          </div>
        </section>
      </aside>
      {/* Main content */}
      <main className="main-content">
        <div className="header-content">
          <p className="search-results">
            Encontre
            <strong className="results-count">
              324 amigos
            </strong>
            na sua cidade
          </p>
          <button className="animal-type-button">
            Gatos e Cachorros
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </button>
        </div>
        <section className="pet-grid">
          {/* Card 1 */}
          <article className="pet-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/9f0197d3-aa2c-48b0-46ad-62f4949a7d33.jpg" alt="Cachorro deitado com fantasia de abacaxi" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background dog-bg">
                <FontAwesomeIcon icon={faDog} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Alfredo
              </h3>
            </div>
          </article>
          {/* Card 2 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/0fe2c063-5848-42a3-4860-cf2f05dd47bc.jpg" alt="Gato marrom olhando para cima" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background cat-bg">
                <FontAwesomeIcon icon={faCat} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Juscelino
              </h3>
            </div>
          </article>
          {/* Card 3 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/687c13c4-8f24-4fdb-39a5-f5f82fb07196.jpg" alt="Cachorro deitado com orelhas grandes" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background dog-bg">
                <FontAwesomeIcon icon={faDog} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Getúlio
              </h3>
            </div>
          </article>
          {/* Card 4 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/625f7893-fe75-4961-62b6-2d89b78c074e.jpg" alt="Gato preto e branco deitado" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background cat-bg">
                <FontAwesomeIcon icon={faCat} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Juscelino
              </h3>
            </div>
          </article>
          {/* Card 5 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/c5b6224b-02c8-48b3-5b6f-4e9ab7f347a2.jpg" alt="Cachorro preto olhando para frente" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background dog-bg">
                <FontAwesomeIcon icon={faDog} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Getúlio
              </h3>
            </div>
          </article>
          {/* Card 6 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/79b0024c-6b60-47ad-4f5f-1d48ce57d5e4.jpg" alt="Cachorro marrom claro com roupinha azul" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background dog-bg">
                <FontAwesomeIcon icon={faDog} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Alfredo
              </h3>
            </div>
          </article>
          {/* Card 7 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/79b0024c-6b60-47ad-4f5f-1d48ce57d5e4.jpg" alt="Cachorro marrom claro com roupinha azul" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background dog-bg">
                <FontAwesomeIcon icon={faDog} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Alfredo
              </h3>
            </div>
          </article>
          {/* Card 8 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/625f7893-fe75-4961-62b6-2d89b78c074e.jpg" alt="Gato preto e branco deitado" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background cat-bg">
                <FontAwesomeIcon icon={faCat} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Juscelino
              </h3>
            </div>
          </article>
          {/* Card 9 */}
          <article className="pet-card white-card">
            <div className="pet-image-container">
              <img src="https://storage.googleapis.com/a1aa/image/c5b6224b-02c8-48b3-5b6f-4e9ab7f347a2.jpg" alt="Cachorro preto olhando para frente" className="pet-image" width={320} height={160} />
              <div className="pet-icon-background dog-bg">
                <FontAwesomeIcon icon={faDog} className="pet-icon" />
              </div>
            </div>
            <div className="pet-info">
              <h3 className="pet-name">
                Getúlio
              </h3>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default PaginaInicial;