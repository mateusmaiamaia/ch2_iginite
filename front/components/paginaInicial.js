import React from 'react';
import './PaginaPerfilAnimal.css';

function CabecalhoPerfil() { /* ... */ }
function GaleriaFotos() { /* ... */ }
function InfoPrincipal() { /* ... */ }
function NomeAnimal({ nome }) { /* ... */ }
function DescricaoAnimal({ descricao }) { /* ... */ }
function CaracteristicasAnimal({ energia, ambiente, porte }) { /* ... */ }
function LocalizacaoAnimal() { /* ... */ }
function InfoContato() { /* ... */ }
function RequisitosAdocao() { /* ... */ }
function BotaoContato() { /* ... */ }

function PaginaPerfilAnimal() {
  return (
    <div className="pagina-perfil-animal">
      <CabecalhoPerfil />
      <InfoPrincipal />
      <InfoContato />
      <RequisitosAdocao />
      <BotaoContato />
    </div>
  );
}

export default PaginaPerfilAnimal;