import React from 'react';
import '../styles/CasaInteligente.css';
import casaInteligente from '../img/espaco.png';

function CasaInteligente() {
  return (
    <div className="casa">
      <div className="casaI-img">
        <img src={casaInteligente} alt="casaInteligente" />
      </div>
      <h3>Casa Inteligente</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
  );
}

export default CasaInteligente;