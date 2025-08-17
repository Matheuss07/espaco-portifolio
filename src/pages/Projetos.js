import React from 'react';
import './Projetos.css';
import NavBar from '../components/NavBar';
import Seguidor from '../components/Seguidor';
import SmartPlant from '../components/SmartPlant';
import Robo2Rodas from '../components/Robo2Rodas';
import BracoRobotico from '../components/BracoRobotico';

function Projetos() {

  return (
    <div className="projetos">
      <div className="Nav-bar">
        <NavBar />
      </div>

      <div className='projetos-container'>
        <div className="seguidorL">
          <Seguidor />
        </div>
        <div className="SmartP">
          <SmartPlant />
        </div>
        <div className="Robo2R">
          <Robo2Rodas />
        </div>
        <div className="BracoR">
          <BracoRobotico />
        </div>
      </div>
      {/*       <div className="grid">

        {projetos.map((nome, index) => (
          <div className="projeto" key={index}>
            <img src={bracoImg} alt={nome} className="projeto-img" />
            <p className="projeto-text">{nome}</p>
            <span>Projeto feito por ....</span>
          </div>
        ))}
      </div> */}

    </div>
  );
}

export default Projetos;