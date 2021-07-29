const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  if(number % 3 === 0 && number % 5 === 0) {
    return number
  }
}

const abc = numbers.find(findDivisibleBy3And5);
console.log(abc)


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const bca = names.find((nome) => nome.length >= 6);
  return bca
}

console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const avm = musicas.find((music) => music.id === id);
  return avm;
}

console.log(findMusic('31031685'))

