
//Exercicio 1
class Person {

  constructor(private name: string, private birthDate: string) {}

  get Name() {
    return this.name
  }

  set Name(value: string) {
    if(value.length < 3) {
      throw new Error ('Name precisa ter mais que 3 caracteres');
    }
    this.name = value
  }

  get BirthDate() {
    return this.birthDate
  }

  set BirthDate(value: string) {
    const date = Number(value.split('/')[2])
    if (date > 2022) {
      throw new Error ('Ano nao pode ser maior que 2022');
    }

    if(date < 1870 ) {
      throw new Error ('Ano nao pode ser menor que 1870');
    }

    this.birthDate = value
  }
}

const newPerson1 = new Person('Ana', '20/10/2010');
console.log(newPerson1);

newPerson1.BirthDate = '10/05/1880';
newPerson1.Name = 'Lucia';

console.log(newPerson1);

//Exercicio 2

// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e 
//       preencher a matrícula automaticamente
//     - sumNotes: retorna a soma das notas da pessoa estudante
//     - sumAverageNotes: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada 
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos
class Student extends Person{
  constructor(
    public enrollment: string,
    public examsGrades: number,
    public worksGrades: number,
  ) {}

}