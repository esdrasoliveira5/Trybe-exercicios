// //Parte 1

// let bolo = {
//   sabor: 'Chocolate',
//   cobertura: 'Morango'
// }

// const addBolo = (objeto, chave, valor) => {
//   objeto[chave] = valor;

//   return objeto; 
// }


// console.log(addBolo(bolo,"recheio", "brigadeiro"));

// console.log(Object.keys(bolo));

// for (let chave in bolo) {
//   console.log( chave + ' ' + bolo[chave] );
// }


//Parte 2

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arraySkills = Object.keys(student);
//   for (let chave in arraySkills) {
//     console.log(`${arraySkills[chave]}, Nivel: ${student[arraySkills[chave]]}`);
//   }
// }

// const listSkillss = (student) => {
//   for (let chave in student) {
//     console.log(`${chave}, Nivel: ${student[chave]}`);
//   }
// }

// listSkills(student2);


//Parte 3

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

//Parte 4

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

//Parte 5

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
