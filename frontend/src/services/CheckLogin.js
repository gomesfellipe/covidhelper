import api from './api';

const helpers = {
    isLoggedIn: async function(){
        const token = localStorage.getItem('token');

        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    
        await api.get('tokens', headers)
            .then(response => {
                console.log("true")
                return true
            })
            .catch(error => {
                console.log("false")
                return false
            })
    }
}

export default helpers;