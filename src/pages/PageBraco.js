import React from 'react';
import './StyleSeguidor.css';
import NavBar from '../components/NavBarProjeto';
import bracoimg from '../img/BracoQuadrado.png';



function pageBraco() {
    return (
        <div className='Seguidor-page'>
            <div> 
                <NavBar />
            </div>
            <div className='CardSeguidor-container'>
                <div className="cardSeguidor-left">
                    <img className='containerbraco' src={bracoimg} alt="Espaco Logo" />
                </div>
                <div className="cardSeguidor-text">
                    <span className='text'>A Garra Robótica é um projeto desenvolvido para explorar os princípios da mecânica, eletrônica e programação. Construída com peças produzidas em impressora 3D.</span>
                </div>
            </div>
            <div className='CardSeguidor-container'>
                <div className="cardSeguidor-text">
                    <span className='text'>
                        A PÁGINA SEGUE EM MANUTENÇÃO POR TEMPO INDEFINIDO
                        </span>
                </div>
                <div className="cardSeguidor-left">
                    <img className='container' src={bracoimg} alt="Espaco Logo" />
                </div>
            </div>
        </div>
    );
}



export default pageBraco;