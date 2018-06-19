const axios = require('axios');

exports.getNamePromise = () => {
  return axios.get('https://swapi.co/api/planets/1')
    .then(response => response.data.name);
}