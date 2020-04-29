import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

//import {FiLogIn} from 'react-icons/fi';

import logoOrangeImg from '../../assets/logo-orange.png'

import Flyer from '../../components/Flyer';
import Box from '../../components/Box';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Image from '../../components/Image';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        const auth = (
            { 
                auth: 
                {
                    username:username, 
                    password:password
                }
            }
        );

        try {
            const response = await api.post('tokens', {}, auth);
            alert(`Token de acesso: ${response.data.token}`);
        } catch {
            alert('Erro ao requisitar token');
        }
    }
    return (
        <div>
            <Flyer background="white">
                <Box>
                    <Image src={logoOrangeImg} size="big" alt="indicAI" />
                    <Title color="black">Faça seu login</Title>
                </Box>
                <Box>
                    <form onSubmit={handleLogin}>
                        <input
                            placeholder="Nome de usuario"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit" className="button">Entrar</button>
                        <Link to="/register"><Text size="small">Não tenho cadastro</Text></Link>
                    </form>
                </Box>
            </Flyer>
        </div>
    );
}