import React from 'react';
import '../styles/Robo2Rodas.css';
import robo2Rodas from '../img/robo2rodas.jpg';

function Robo2Rodas() {
  return (
    <div className="robo">
      <div className="robo-img">
        <img src={robo2Rodas} alt="Robo2-Rodas" />
      </div>
      <h3>Robo 2 Rodas</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
  );
}

export default Robo2Rodas;