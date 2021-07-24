const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (objeto, key, value) => {
  objeto[key] = value;
  return objeto;
}
//Exercicio 1
//console.log(addTurno(lesson2, 'turno', 'manhã'));

//Exercicio 2
const keysObject = (object) => Object.keys(object);

//console.log(keysObject(lesson3));

//Exercicio 3
const lengthObject = (object) => Object.entries(object).length;

//console.log((lengthObject(lesson3)));

//Exercicio 4
const valueObject = (object) => Object.values(object);

//console.log(valueObject(lesson1));

//Exercicio 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//console.log(allLessons);

//Exercicio 6

const studentsNumbers = (object) => {
  let soma = object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;

  return soma;
}

//console.log(studentsNumbers(allLessons));

//Exercicio 7

const getValuebyNumber = (object, number) => {
  let valor = Object.values(object)[number];
  return valor
}

//console.log(getValuebyNumber(lesson1, 1));

//Exercicio 8


const verifyPair = (object, key, value) => {
  let keyValue = Object.entries(object);
  let output = false;

  for (let kv of keyValue) {
    kv[0] === key && kv[1] === value ? output = true : output = false;
  }
  return output;
}


console.log(verifyPair(lesson3, 'turno', 'noite'));
