const connection = require("../models/connections");

const getByCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  
  const [endereco] = await connection.execute(query ,[cep]); 

  return endereco;
};

const createCep = async (endereco) => {
  const { cep, logradouro, bairro, localidade, uf } = endereco;

  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf ) VALUES (?,?,?,?,?)';
  await connection.execute(query, [20100, logradouro, bairro, localidade, uf]); 

}

module.exports = {
  getByCep,
  createCep,
}