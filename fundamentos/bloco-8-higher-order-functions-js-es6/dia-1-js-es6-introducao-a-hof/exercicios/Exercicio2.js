
const sorteio = [1, 2, 3, 4, 5];

const sorteioResult = (aposta, callBack) => {
  let numeroSorteado = [];
  let min = Math.ceil(1);
  let max = Math.floor(5);
  for (let i = 1; i <= 5; i += 1) {
    numeroSorteado.push(Math.floor(Math.random() * (max - min) + min));
  };
  let venceuPerdeu = callBack(aposta, numeroSorteado);
  return venceuPerdeu === true? 'Parabens voce Ganhou': 'Tente novamente';
}

const verificarVencedor = (aposta, numeroSorteado) => {
  return aposta.every((value,index) => value === numeroSorteado[index]);
}


const assert = require('assert'); 
assert.strictEqual(sorteioResult(sorteio, verificarVencedor), true);