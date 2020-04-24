import React from 'react';

import './styles.css';
import {FiLogIn} from 'react-icons/fi';


export default function Login() {
    return(
        <div className="logon-container">
            <section className="form">
                <h1>Faça seu login</h1>
                <form>
                    <input placeholder="Nome de usuario"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                    <a href="/register"><FiLogIn size={16}/> Nao tenho cadastro</a>
                </form>
            </section>
        </div>
    );
}