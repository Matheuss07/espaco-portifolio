import React from 'react';
import '../styles/CasaInteligente.css';
import casaInteligente from '../img/espaco.png';
import { Link } from 'react-router-dom';

function CasaInteligente() {
  return (
    <Link to="/casainteligente" className="casa-link">
    <div className="casa">
      <div className="casaI-img">
        <img src={casaInteligente} alt="casaInteligente" />
      </div>
      <h3>Casa Inteligente</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
    </Link>
  );
}

export default CasaInteligente;