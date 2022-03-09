console.log('TESTE');

class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true
  }
  sayHello() {
    if(this.isSuper === true) {
      console.log('Olá mundo!');
    } else {
      console.log('Bye mundo!');
    }

  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
  sayHello() {
    if(this.isSuper === true) {
      console.log('Olá mundo!');
    } else {
      console.log('Bye mundo!');
    }
  }
}

const new1 = new Superclass();
const new2 = new Subclass();

new1.sayHello();
new2.sayHello()


interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;  
}

class MyClass implements MyInterface {

  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `${myParam + this.myNumber }`
  }

}

const newClass = new MyClass(10);
const newClass2  = new MyClass(500);

console.log(newClass.myFunc(20));
console.log(newClass2.myFunc(50));


interface Logger {
  log(value:string): void;
}

class ConsoleLogger implements Logger {

  log(value: string): void {
    console.log(`Esse e o ${value} da Classe ConsoleLogger`);
  }
}

class ConsoleLogger2 {

  log(value: string): void {
    console.log(`Esse e o ${value} da Classe ConsoleLogger2`);
  }
}

interface Database {
  logger: Logger
  save(key: string, value: string): void;
}

class ExampleDatabase  implements Database {

  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database1.save('chave 2', 'valor 2');
database1.save('chave 3', 'valor 3');