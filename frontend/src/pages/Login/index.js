import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

//import {FiLogIn} from 'react-icons/fi';

import logoOrangeImg from '../../assets/logo-orange.png';

import Flyer from '../../components/Flyer';
import Box from '../../components/Box';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Image from '../../components/Image';

export default function Login() {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        const auth = (
            { 
                auth: 
                {
                    username:userid, 
                    password:password
                }
            }
        );

        try {
            const response = await api.post('tokens', {}, auth);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
            history.push('/dashboard');
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
                            placeholder="ID do usuario"
                            value={userid}
                            onChange={e => setUserid(e.target.value)}
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