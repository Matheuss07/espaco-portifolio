import React from 'react';
import '../styles/BracoRobotico.css';
import braco from '../img/Braco.jpg';

function BracoRobotico() {
  return (
    <div className="braco">
      <div className="bracoR-img">
        <img src={braco} alt="bracorobotico" />
      </div>
      <h3>Braco Robotico</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
  );
}

export default BracoRobotico;