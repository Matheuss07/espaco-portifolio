import React from 'react';
import './StyleSeguidor.css';
import NavBar from '../components/NavBarProjeto';
import followlineImg from '../img/FollolineQuadrado.png';
import { Link } from 'react-router-dom';


function SeguidorPage() {
    return (
        <div className='Seguidor-page'>
            <div> 
                <NavBar />
            </div>
            <div className='CardSeguidor-container'>
                <div className="cardSeguidor-left">
                    <img className='container' src={followlineImg} alt="Espaco Logo" />
                </div>
                <div className="cardSeguidor-text">
                    <span className='text'>O Seguidor de Linha é um clássico da robótica educacional e um dos nossos orgulhos.Diferente do modelo mais simples, o nosso foi desenvolvido com 8 sensores. </span>
                </div>
            </div>
            <div className='CardSeguidor-container'>
                <div className="cardSeguidor-text">
                    <span className='text'>
                        A PÁGINA SEGUE EM MANUTENÇÃO POR TEMPO INDEFINIDO
                        </span>
                </div>
                <div className="cardSeguidor-left">
                    <img className='container' src={followlineImg} alt="Espaco Logo" />
                </div>
            </div>
        </div>
    );
}



export default SeguidorPage;