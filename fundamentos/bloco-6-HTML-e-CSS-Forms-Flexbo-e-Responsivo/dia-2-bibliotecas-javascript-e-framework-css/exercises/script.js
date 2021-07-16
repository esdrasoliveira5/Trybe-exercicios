const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const estadosCompleto = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const selectEstados = document.querySelector('#estados-input');
const buttonSubmit = document.querySelector('#buttonSubmit');
const buttonReset = document.querySelector('#resetButton');

for(let i = 0; i < estados.length; i += 1) {
  const options = document.createElement('option');
  selectEstados.appendChild(options);
  options.innerText = estadosCompleto[i];
  options.value = estados[i];
}

function submit(event) {
  event.preventDefault();
  //validation.init();
  validation.highlight();
}
buttonSubmit.addEventListener('click', submit);


function resete() {
  document.getElementById("client").reset();
}
buttonReset.addEventListener('click', resete)

