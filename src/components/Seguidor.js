import React from 'react';
import '../styles/Seguidor.css';
import seguidor from '../img/followline.jpg';

function Seguidor() {
  return (
    <div className="seguidor">
      <div className="seguidor-img">
        <img src={seguidor} alt="Seguidor" />
      </div>
      <h3>Seguidor</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
  );
}

export default Seguidor;