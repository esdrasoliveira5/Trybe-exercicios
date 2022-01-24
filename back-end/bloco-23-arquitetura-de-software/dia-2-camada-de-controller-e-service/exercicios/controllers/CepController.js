const CepServices = require("../services/CepServices");

const Joi = require('joi');

const validCep = /\d{5}-?\d{3}/;

const findByCep = async (req, resp) => {
  const { cep } = req.params;
  
  if (cep !== validCep) {
    return resp.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  }

  const findCep = await CepServices.getCep(cep);

  if(findCep.length === 0) {
    return resp.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
  }
  
  return resp.status(200).json(findCep);
};

const createCep = async (req, resp) => {
  const { cep , logradouro, bairro, localidade, uf} = req.body;
  
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep , logradouro, bairro, localidade, uf});
  
  if (error) {
    return resp.status(400).json({ "error": { "code": "invalidData", "message": error } });
  }

  if (cep === validCep) {
    return resp.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  }

  const findCep = await CepServices.getCep(cep);

  if (findCep.length === 1) {
    return resp.status(409).json({ "code": "alreadyExists", "message": "CEP já existente" })
  }
  const cepObj = {
    cep,
    logradouro, 
    bairro, 
    localidade,
    uf
  };

  await CepServices.createCep(cepObj);

  return resp.status(201).json(cepObj);
}

module.exports = {
  findByCep,
  createCep,
}