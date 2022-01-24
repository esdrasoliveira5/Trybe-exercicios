const cepModel = require("../models/cepModel");

const getCep = async (cep) => {

  const endereco = await cepModel.getByCep(cep);
  
  return endereco;
};

const createCep = async (cep) => {
  await cepModel.createCep(cep);
}

module.exports = {
  getCep,
  createCep
}