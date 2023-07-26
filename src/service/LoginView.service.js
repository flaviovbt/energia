export const setUser = async (email, nome) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://localhost:3000/createuser',
        params: {
        email: email,
        nome: nome
        }
    };

    return await axios(config)
        .then(function (response) {
        console.log(response.data);
        return response.data;
        })
        .catch(function (error) {
        console.log(error);
        });
};