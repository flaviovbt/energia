import { TOKEN } from '@/config/configs.js';

export const getUser = async (userEmail) => {

    var axios = require('axios');

    var config = {
        method: 'post',
        url: 'http://localhost:3000/user/get',
        params: {
            email: userEmail,
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

export const updateUser = async (userEmail, user) => {

    var axios = require('axios');

    var config = {
        method: 'post',
        url: 'http://localhost:3000/user/update',
        params: {
            email: userEmail,
            token: TOKEN
        },
        data: user
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