import React from 'react';
import './StyleSeguidor.css';
import NavBar from '../components/NavBarProjeto';
import followlineImg from '../img/FollolineQuadrado.png';
import seguidor_teste from '../img/seguidor_teste.png'
import video from '../img/cronometro seguidor de linha com arduino uno - vídeo.mp4'

function SeguidorPage() {
    return (
        <div className='Robo'>
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
                    <img className='container' src={seguidor_teste} alt="Espaco Logo" />
                </div>

            </div>
            <div className='CardSeguidor-last-container'>
                <div className='carseguidor-top'>
                    <span className='text-seguidor'>Ferramentas utilizadas</span>
                </div>
                <div className='agrupar-container'>
                    <div className="cardSeguidor-left">
                        <video width="640" height="360" controls>
                            <source src={video} type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>
                    <div className="cardSeguidor-text">
                        <span className='text'>
                            A PÁGINA SEGUE EM MANUTENÇÃO POR TEMPO INDEFINIDO
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default SeguidorPage;