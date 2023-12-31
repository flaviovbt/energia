import { TOKEN } from '@/config/configs.js';

export const setUser = async (email, nome) => {

    var axios = require('axios');

    var config = {
        method: 'post',
        url: 'http://localhost:3000/user/create',
        params: {
        email: email,
        nome: nome,
        token: TOKEN
        }
    };

    return await axios(config)
        .then(function (response) {
        //console.log(response.data);
        return response.data;
        })
        .catch(function (error) {
        console.log(error);
        });
};