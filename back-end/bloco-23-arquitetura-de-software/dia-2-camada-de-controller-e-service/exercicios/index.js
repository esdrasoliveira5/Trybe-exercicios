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


// const Joi = require('joi');
// const { error } = Joi.object({
//   cep: Joi.string().not().empty().required(),
//   logradouro: Joi.string().not().empty().required(),
//   bairro: Joi.string().not().empty().required(),
//   localidade: Joi.string().not().empty().required(),
//   uf: Joi.string().not().empty().required(),
// }).validate(endereco);

// if(error) {
//   return 
// }