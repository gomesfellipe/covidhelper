import React from 'react';
import { useHistory } from 'react-router-dom';


export default function() {
    const token = localStorage.getItem('token');
    const history = useHistory();

    function isTokenValid(token) {

        const data = (
            {
                token:token
            });
    
    
    
            try {
                const response = await api.post('tokens', data);
                alert(`Id do novo usuario: ${response.data.id}`);
                history.push('/login');
            } catch {
                alert('Erro ao criar usuario');
            }

    }

    if (token) {
        if (isTokenValid(token)) {

        } else {
            history.push('/login');
        }
    } else {
        history.push('/login');
    }
    return(
         <h1>{token}</h1>
    )
}