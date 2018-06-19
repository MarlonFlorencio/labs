const axios = require('axios');

exports.getNameAsync = async () => {
  const response = await axios.get('https://swapi.co/api/planets/1', {timeout: 10});

  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);

  return response.data.name;
}