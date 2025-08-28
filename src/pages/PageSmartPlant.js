import React from 'react';
import './StyleSmartPlant.css'
import NavBar from '../components/NavBarProjeto';
import SmartPlantImage from '../img/espaco.png';
import SmartPlantSite from '../img/smartplant_page.png'

const PageSmartPlant = () => {
    return (
        <div className='Smart-container'>
            <div className='Smart-container-top'>
                <div className='Smart-nav'>
                    <NavBar />
                </div>
                <div className='Smart-content'>
                    <img className='smart-img' src={SmartPlantImage} alt="Smart Plant" />
                    <span className='text'>Smart Plant: inovação para quem cultiva. </span>
                </div>
            </div>

            <div className='Smart-mid'>
                <span className='text-big'>Smart Plant é um sistema que monitora a umidade do solo, temperatura do ar e outras variáveis para ajudar no cuidado eficiente das plantas.
Ele coleta dados em tempo real e pode alertar quando a planta precisa de água ou está em condições ambientais desfavoráveis.
Ideal para quem busca praticidade e saúde no cultivo, unindo tecnologia e sustentabilidade.</span>
            </div>

            <div className='Smart-passo-passo'>
                <div className='blocos1'>
                    <h2 className='text'>Sobre o Projeto</h2>
                    <p className='text'>blablabla</p>
                </div>

                <div className='blocos2'>
                    <h2 className='text'>Tecnologias Utilizadas</h2>
                    <p className='text'>pagina web</p>
                    <img className='smartsite-img' src={SmartPlantSite} alt="Smart Plant"/>
                </div>

                <div className='blocos3'>
                    <h2 className='text'>Funcionalidades</h2>
                    <p className='text'>blablabla</p>
                </div>
            </div>
        </div>

    );
}

export default PageSmartPlant;