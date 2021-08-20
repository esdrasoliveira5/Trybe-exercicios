const fetch = require('node-fetch');

const urlDog = 'https://dog.ceo/api/breeds/image/random';

const fetchDog = async (url) => {
  try {
     fetch(url);
  } catch (error) {
     throw new Error(' ta errrado');
  }
};

fetchDog(urlDog);
