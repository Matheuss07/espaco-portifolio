import React from 'react';
import '../styles/NavBarProjeto.css';
import logo from '../img/espacosf.png';
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoChatboxEllipses } from "react-icons/io5";


// import { MdAccountCircle } from "react-icons/md";

function NavBar() {
    return (
        <nav className='nav-bar'>
            <div className="nav-left">
                <img className='logotipo' src={logo} alt="Espaco Logo" />
            </div>
            
            <div className="nav-links">
                <Link to="/" className="link">Início <FaHouse /></Link>
                <Link to="/projetos" className="link selecionado">Projetos <GoProjectRoadmap /></Link>
                <Link to="/MaisSobre" className="link">Mais Sobre <IoChatboxEllipses /></Link>
            </div>

        </nav>
    );
}

export default NavBar;