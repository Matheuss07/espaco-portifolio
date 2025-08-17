// src/pages/Home.js
import React from "react";
import NavBar from '../components/NavBar';
import "./Home.css";
import Card from '../components/Card'
import Card2 from '../components/Card2';

const Home = () => {
    return (
        <div className="home">
                <div className="nav-container">
                    <NavBar />
                </div>
                <div className="principal-container">
                    <Card />
                </div>
                <div className="card2-container">
                    <Card2 />
                </div>
            
        </div>
    );
};

export default Home;