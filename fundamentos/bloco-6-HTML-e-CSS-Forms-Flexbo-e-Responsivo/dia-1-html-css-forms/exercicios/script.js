const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const estadosCompleto = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const selectEstados = document.querySelector('#estados-input');
const listDados = document.querySelector('#lista-dados');
const dataInput = document.querySelector('#dataInput');
const buttonSubmit = document.querySelector('#buttonSubmit');

for(let i = 0; i < estados.length; i += 1) {
  const options = document.createElement('option');
  selectEstados.appendChild(options);
  options.innerText = estadosCompleto[i];
  options.value = estados[i];
}

function nameValidation() {
  const nameImput = document.querySelector('#name-input')
  if (nameImput.value.length <= 1) {
    console.log('Erro Nome');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Nome : ' + nameImput.value;
  }
};

function emailValidation() {
  const emailInput = document.querySelector('#email-input')
  if (emailInput.value.length <= 1) {
    console.log('Erro email');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Email : ' + emailInput.value;
  }
};

function cpfValidation() {
  const cpfInput = document.querySelector('#cpf-input')
  if (cpfInput.value.length <= 1) {
    console.log('Erro CPF');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'CPF : ' + cpfInput.value;
  }
}

function adressValidation() {
  const adressInput = document.querySelector('#endereco-input')
  if (adressInput.value.length <= 1) {
    console.log('Erro Endereco');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Endereco : ' + adressInput.value;
  }
}


function cityValidation() {
  const cityInput = document.querySelector('#cidade-input')
  if (cityInput.value.length <= 1) {
    console.log('Erro Cidade');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Cidade : ' + cityInput.value;
  }
}

function estadoValidation() {
  const liDados = document.createElement('li');
  listDados.appendChild(liDados);
  liDados.innerText = 'Estado : ' + selectEstados.value;
}

function houseValidation() {
  const checkedHouse = document.querySelector('#casa');
  if(checkedHouse.checked === true) {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Moradia : Casa';
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Moradia : Apartamento';
  }

}

function experienceValidation() {
  const experienceInput = document.querySelector('#textarea')
  if (experienceInput.value.length <= 1) {
    console.log('Erro Resumo de Experiencia');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Resumo de Experiencia : ' + experienceInput.value;
  }
}

function cargoValidation() {
  const cargoInput = document.querySelector('#cargo-input')
  if (cargoInput.value.length <= 1) {
    console.log('Erro cargo');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Cargo : ' + cargoInput.value;
  }
}

function descricaoValidation() {
  const descricaoInput = document.querySelector('#descricao-input')
  if (descricaoInput.value.length <= 1) {
    console.log('Erro Descricao do Cargo');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Descricao do Cargo : ' + descricaoInput.value;
  }
}

function dataFormat() {
  const datanumber = dataInput.value.split('/');
  if (datanumber.length <= 1 || datanumber[0] < 0 || datanumber[0] > 31 || datanumber[1] < 0 || datanumber[1] > 12 || datanumber[2] < 0) {
    alert('Data Incorreta');
  } else {
    const liDados = document.createElement('li');
    listDados.appendChild(liDados);
    liDados.innerText = 'Data de Inicio : ' + dataInput.value;
  }
};

function submit(event) {
  event.preventDefault();
  nameValidation();
  emailValidation();
  cpfValidation();
  adressValidation();
  cityValidation();
  estadoValidation();
  experienceValidation();
  cargoValidation();
  descricaoValidation();
  houseValidation();
  dataFormat();
}

buttonSubmit.addEventListener('click', submit);


