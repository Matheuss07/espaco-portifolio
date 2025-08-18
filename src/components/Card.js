import React from 'react';
import '../styles/Principal.css';
import container from '../img/foto-espaco-rl.jpg'
import { Link } from 'react-router-dom';

function Card() {
    return (
        <nav className='Card-container'>
            <div className="card-left">
                <img className='container' src={container} alt="Espaco Logo" />
            </div>
            <div className="card-text">
                <span className='text'>👋 Seja bem-vindo ao Espaço 4.0 de Rio Largo!
Um ambiente inovador criado para estimular a criatividade, o aprendizado prático e o desenvolvimento de novas habilidades. Aqui você encontra cursos, oficinas e projetos que unem tecnologia, inovação e empreendedorismo.</span>
                <button className='botao'><Link to="/projetos" className="link">Projetos</Link></button>
            </div>
        </nav>
    );
}



export default Card;