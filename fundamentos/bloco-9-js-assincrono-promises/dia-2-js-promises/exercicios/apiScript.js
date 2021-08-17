// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  let h1 = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => h1.innerText = data.joke);
};

window.onload = () => fetchJoke();