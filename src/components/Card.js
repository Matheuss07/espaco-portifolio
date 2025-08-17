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
                <span className='text'>O Espaço 4.0 do Campus Rio Largo é um lugar de aprendizado, onde o lema é just do it</span>
                <button className='botao'><Link to="/projetos" className="link">Projetos</Link></button>
            </div>
        </nav>
    );
}



export default Card;