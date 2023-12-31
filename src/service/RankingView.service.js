import { TOKEN } from '@/config/configs.js';

export const getRanking = async () => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://localhost:3000/partida/getRanking',
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