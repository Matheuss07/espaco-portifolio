import React from 'react';
import '../styles/Robo2Rodas.css';
import robo2Rodas from '../img/robo2rodas.jpg';
import { Link } from 'react-router-dom';

function Robo2Rodas() {
  return (
    <Link to="/robo4rodas" className="roboroda-link">
    <div className="robo">
      <div className="robo-img">
        <img src={robo2Rodas} alt="Robo2-Rodas" />
      </div>
      <h3>Robo 2 Rodas</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
    </Link>
  );
}

export default Robo2Rodas;