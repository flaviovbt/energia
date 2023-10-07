export const createPergunta = async (pergunta) => {

    var axios = require('axios');

    let perguntaList = [];
    perguntaList.push(pergunta);

    var config = {
        method: 'post',
        url: 'http://localhost:3000/pergunta/create',
        data: perguntaList
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