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
  console.log(nameImput.value);
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


function submit(event) {
  event.preventDefault()
  dataFormat();
  nameValidation();
  emailValidation();
}

const buttonSubmit = document.querySelector('#buttonSubmit');
buttonSubmit.addEventListener('click', submit);


