const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const estadosCompleto = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

const selectEstados = document.querySelector('#estados-input')

for(let i = 0; i < estados.length; i += 1) {
  const options = document.createElement('option');
  selectEstados.appendChild(options);
  options.innerText = estadosCompleto[i];
  options.value = estados[i];
}

const dataInput = document.querySelector('#dataInput');

function dataFormat() {
  const datanumber = dataInput.value.split('/');
  if (datanumber.length <= 1 || datanumber[0] < 0 || datanumber[0] > 31 || datanumber[1] < 0 || datanumber[1] > 12 || datanumber[2] < 0) {
    alert('Data Incorreta');
  };
};

dataInput.addEventListener('change', dataFormat)

function nameValidation() {
  const nameImput = document.querySelector('#name-input')
  if (nameImput.value.length <= 1) {
    console.log('Erro NOme');
  };

};

function emailValidation() {
  const emailInput = document.querySelector('#email-input')
  if (emailInput.value.length <= 1) {
    console.log('Erro email');
  };
};

function cpfValidation() {
  const cpfInput = document.querySelector('#cpf-input')
  if (cpfInput.value.length <= 1) {
    console.log('Erro CPF');
  };
}

function cpfValidation() {
  const adressInput = document.querySelector('#endereco-input')
  if (adressInput.value.length <= 1) {
    console.log('Erro Endereco');
  };
}

function cityValidation() {
  const cityInput = document.querySelector('#cidade-input')
  if (cityInput.value.length <= 1) {
    console.log('Erro Cidade');
  };
}

function cityValidation() {
  const cityInput = document.querySelector('#cidade-input')
  if (cityInput.value.length <= 1) {
    console.log('Erro Cidade');
  };
}

function experienceValidation() {
  const experienceInput = document.querySelector('#textarea')
  if (experienceInput.value.length <= 1) {
    console.log('Erro Resumo de Experiencia');
  };
}

function cargoValidation() {
  const cargoInput = document.querySelector('#cargo-input')
  if (cargoInput.value.length <= 1) {
    console.log('Erro cargo');
  };
}

function descricaoValidation() {
  const descricaoInput = document.querySelector('#descricao-input')
  if (descricaoInput.value.length <= 1) {
    console.log('Erro Descricao do Cargo');
  };
}

function submit(event) {
  event.preventDefault()
  dataFormat();
  nameValidation();
  emailValidation();
  cpfValidation();
  cpfValidation();
  cityValidation();
  experienceValidation();
  cargoValidation();
  descricaoValidation();
}

const buttonSubmit = document.querySelector('#buttonSubmit');
buttonSubmit.addEventListener('click', submit);


