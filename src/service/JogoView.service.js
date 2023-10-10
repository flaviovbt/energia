import { TOKEN } from '@/config/configs.js';

export const getPerguntasRandom = async () => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://localhost:3000/pergunta/getRandom',
        params: {
            token: TOKEN
        },
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

export const createPartida = async (infos, userEmail) => {

    var axios = require('axios');

    var config = {
        method: 'post',
        url: 'http://localhost:3000/partida/create',
        params: {
            email: userEmail,
            token: TOKEN
        },
        data: infos
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