// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(false);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const o = (array) => {
//   for(let i = 1; i < array.length; i += 1) {
//     for (let i2 = 0; i2 < i; i2 += 1) {
//       if ( array[i] < array[i2]) {
//         let num = array[i];
//         array[i] = array[i2];
//         array[i2] = num;
//       }
//     }
//   }
//   return array
// }

// console.log(`Os numeros ${o(oddsAndEvens)} se encontram ordenados de forma crescente!`);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const o = (array) => {
  let lowestToHighest = array.sort((a, b) => a - b);
  return lowestToHighest
}

console.log(`Os numeros ${o(oddsAndEvens)} se encontram ordenados de forma crescente!`);
