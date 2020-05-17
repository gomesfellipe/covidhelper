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
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [access, setAccess] = useState(0);

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = (
            { 
                userid:userid, 
                password:password,
                gender:gender,
                name:name,
                access:access
            }
        );

        try {
            await api.post('users', data);
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
                            className="full-width"
                            placeholder="ID do usuario"
                            value={userid}
                            onChange={e => setUserid(e.target.value)}
                        />
                        <input
                            className="full-width"
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            className="full-width"
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <select 
                            className="full-width"
                            onChange={e => setGender(e.target.value)}>
                            <option value="indefinido">Genero Nao Informado</option>
                            <option value="feminino">Genero Feminino</option>
                            <option value="masculino">Genero Masculino</option>
                        </select>
                        <select 
                            className="full-width"
                            onChange={e => setAccess(e.target.value)}>
                            <option value={0}>Usuario</option>
                            <option value={1}>Paciente</option>
                            <option value={2}>Enfermeiro</option>
                            <option value={3}>Medico</option>
                            <option value={4}>Administrador</option>
                        </select>
                        <button type="submit" className="button-full-width">Cadastrar</button>
                        <Link to="/login"><Text size="small">Ja sou cadastrado</Text></Link>
                    </form>
                </Box>
            </Flyer>
        </div>
    );
}