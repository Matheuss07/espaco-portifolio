import React from 'react';
import './StyleSmartPlant.css'
import NavBar from '../components/NavBarProjeto';
import SmartPlantImage from '../img/espaco.png';

const PageSmartPlant = () => {
    return (
        <div className='Smart-container'>
            <div className='Smart-container-top'>
                <div className='Smart-nav'>
                    <NavBar />
                </div>
                <div className='Smart-content'>
                    <img className='smart-img' src={SmartPlantImage} alt="Smart Plant" />
                    <span className='text'>Smart Plant o projeto do futuro</span>
                </div>
            </div>

            <div className='Smart-mid'>
                <span className='text-big'>lablaablablablablaablablablablaablablablablaablablablablaablablablablaablablablablaablablabla</span>
            </div>

            <div className='Smart-passo-passo'>
                <div className='blocos1'>
                    <h2 className='text'>Sobre o Projeto</h2>
                    <p className='text'>blablabla</p>
                </div>

                <div className='blocos2'>
                    <h2 className='text'>Tecnologias Utilizadas</h2>
                    <p className='text'>blablabla</p>
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