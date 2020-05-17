import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import logoImg from '../../assets/logo.png'

export default function Header() {
    return (
        <div className="header-container sticky lower-opacity">
            <div className="header-container-item">
                <div className="header-link">
                    <img src={logoImg} className="header-img" alt="indicAI" />
                </div>
                {/* <div className="header-link">
                    Problema
                </div>
                <div className="header-link">
                    Soluçao
                </div>
                <div className="header-link">
                    Equipe
                </div> */}
            </div>
            <div className="header-container-item">
                <div className="header-link">
                    <button className="button-full-width">
                        <Link to="/register" className="header-link">Cadastro</Link>
                    </button>
                </div>
                <div className="header-link">
                    <Link to="/login" className="header-link">Login</Link>
                </div>
            </div>
        </div>
    );
}