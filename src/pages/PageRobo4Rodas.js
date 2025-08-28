import React from 'react';
import './StylePageRobo4Rodas.css'
import NavBar from '../components/NavBarProjeto';
import Robo4RodasImage from '../img/roboquadrado.jpg';
import ComponentesImg from '../img/componentes-robo4rodas.jpg'
import BalaoFica from '../img/BalaoFica.jpg'
import AgulhaFica from '../img/AgulhaFica.jpg'
import Batalha1 from '../img/batalha1.jpg'
import Batalha2 from '../img/batalha2.jpg'
import parede from '../img/parede.jpg'
import suportedeagulha from '../img/suportedeagulha.jpg'


const PageRobo4Roda = () => {
    return (
        <div className='Robo-container'>
            <div className='Robo-container-top'>
                <div className='Robo-nav'>
                    <NavBar />
                </div>
                <div className='Robo-content'>
                    <img className='robo-img' src={Robo4RodasImage} alt="Robo 4 Rodas" />
                    <span className='text'>O Robô 4 Rodas é um projeto desenvolvido com o objetivo de aplicar conceitos de mobilidade, controle e automação.</span>
                </div>
            </div>

            <div className='Robo-mid'>
                <iframe
                    width="750"
                    height="422"
                    src="https://www.youtube.com/embed/NBTvTPHecK8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className='Robo-passo-passo'>
                <div className='blocos1'>
                    <img className='foto-pequena' src={ComponentesImg} alt='Foto dos componentes' />
                    <p className='text'>Componentes </p>
                </div>

                <div className='blocos2'>
                    <h2 className='text'>Tecnologias Utilizadas</h2>
                    <p className='text'>A programação, realizada em C++, possibilita a definição de movimentos, velocidades e rotas específicas</p>
                </div>

                <div className='blocos3'>
                    <h2 className='text'>Funcionalidades</h2>
                    <div className='foto-container'>
                        <img className='foto-pequena' src={BalaoFica} alt='Foto dos componentes' />
                        <img className='foto-pequena' src={AgulhaFica} alt='Foto dos componentes' />
                        <img className='foto-pequena' src={suportedeagulha} alt='Foto dos componentes' />
                        <img className='foto-pequena' src={parede} alt='Foto dos componentes' />
                    </div>
                </div>
                <div className='blocos-container2'>
                    <h2 className='text'>Tecnologias Utilizadas</h2>
                    <p className='text'>Além disso, o robô pode ser adaptado para diferentes finalidades, como transporte de pequenas cargas, guerras de robo ou participação em competições de robótica.</p>
                </div>

                <div className='blocos-container3'>
                    <div className='praticas-container'>
                        <h2 className='text'>Práticas Realizadas com o Robo 4 Rodas</h2>
                        <div className='fotovideo-container'>
                            <div className='fotos1'>
                            <img className='foto-pequena' src={Batalha1} alt='Foto dos componentes' />
                            <img className='foto-pequena' src={Batalha2} alt='Foto dos componentes' />
                            </div>
                            <div className='video1'>
                                <iframe
                                    width="700"
                                    height="422"
                                    src="https://www.youtube.com/embed/M37qPGC8eg0 "
                                    title="Batalha do Robo de 4 Rodas"
                                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PageRobo4Roda;