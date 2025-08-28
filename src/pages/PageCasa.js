import React from 'react';
import './StyleSeguidor.css';
import NavBar from '../components/NavBarProjeto';
import bracoimg from '../img/espaco.png';



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
                    <span className='text'>A casa inteligente é um espaço inteligente, projetado para oferecer experiencias criativas.</span>
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