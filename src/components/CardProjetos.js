import React from 'react';
import '../styles/CardProjetos.css';
import NavBar from './NavBarProjeto';
import Seguidor from '../components/Seguidor';
import SmartPlant from '../components/SmartPlant';
import Robo2Rodas from '../components/Robo2Rodas';
import BracoRobotico from '../components/BracoRobotico';
import CasaInteligente from '../components/CasaInteligente';



function CardProjetos() {

  return (
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
        <div className="CasaI">
          <CasaInteligente />
        </div>
      </div>
  );
}

export default CardProjetos;