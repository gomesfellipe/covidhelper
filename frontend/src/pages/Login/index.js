import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

//import {FiLogIn} from 'react-icons/fi';

import logoOrangeImg from '../../assets/logo-orange.png'

import Flyer from '../../components/Flyer';
import Box from '../../components/Box';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Image from '../../components/Image';

export default function Login() {
    return(
        <div>
            
            <Flyer background="white">
                
                <Box>
                <Image src={logoOrangeImg} size="big" alt="indicAI"/>
                <Title color="black">Faça seu login</Title>
                
                    
                </Box>
                <Box>
                    <form>
                        <input placeholder="Nome de usuario"/>
                        <input type="password" placeholder="Senha"/>
                        <button type="submit" className="button">Entrar</button>
                        <Link to="/register"><Text size="small">Não tenho cadastro</Text></Link>
                        
                    </form>
                </Box>
            </Flyer>
        </div>
    );
}