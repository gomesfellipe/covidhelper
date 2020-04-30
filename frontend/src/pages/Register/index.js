import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

import logoOrangeImg from '../../assets/logo-orange.png'

import Flyer from '../../components/Flyer';
import Box from '../../components/Box';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Image from '../../components/Image';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [rg, setRg] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = (
            { 
                username:username, 
                password:password,
                email:email,
                name:name,
                rg:rg
            }
        );

        try {
            const response = await api.post('users', data);
            alert(`Id do novo usuario: ${response.data.id}`);
            history.push('/login');
        } catch {
            alert('Erro ao criar usuario');
        }
    }

    return (
        <div>
            <Flyer background="white">
                <Box>
                    <Image src={logoOrangeImg} size="big" alt="indicAI" />
                    <Title color="black">Faça seu cadastro</Title>
                </Box>
                <Box>
                    <form onSubmit={handleRegister}>
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
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="R.G."
                            value={rg}
                            onChange={e => setRg(e.target.value)}
                        />
                        <button type="submit" className="button">Cadastrar</button>
                        <Link to="/login"><Text size="small">Ja sou cadastrado</Text></Link>
                    </form>
                </Box>
            </Flyer>
        </div>
    );
}