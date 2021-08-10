// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Caju', 'kwi', 'Amora'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Bacardi', 'Vodka', 'Big Apple'];

const fruitSalad = (fruit, additional) => {
  let dinkFruit = [...fruit, ...additional];
  return dinkFruit
};

console.log(fruitSalad(specialFruit, additionalItens));