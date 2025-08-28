import React from 'react';
import '../styles/SmartPlant.css';
import smartPlant from '../img/espaco.png';
import { Link } from 'react-router-dom';

function SmartPlant() {
  return (
    <Link to="/smart" className="smart-link">
    <div className="smart">
      <div className="smartP-img">
        <img src={smartPlant} alt="smartplant" />
      </div>
      <h3>Smart Plant</h3>
      <p>Projeto de não sei o que sei lá</p>
    </div>
    </Link>
  );
}

export default SmartPlant;