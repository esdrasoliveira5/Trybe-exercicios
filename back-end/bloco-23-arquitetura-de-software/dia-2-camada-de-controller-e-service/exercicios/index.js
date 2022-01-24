const express = require('express');

const bodyParser = require('body-parser'); 

const Ping = require('./controllers/PingController');

const CepController = require('./controllers/CepController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', Ping.ping);

app.get('/cep/:cep', CepController.findByCep);

app.post('/cep', CepController.createCep);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
