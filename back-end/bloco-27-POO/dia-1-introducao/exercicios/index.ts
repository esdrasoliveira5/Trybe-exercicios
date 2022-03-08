// class Person {
//   name: string;
//   private _weight: number;
//   private _age: number;
//   readonly height: number;

//   constructor(name: string, height: number, weight: number, age: number) {
//     this.name = name;
//     this._weight = weight;
//     this._age = age;
//     this.height = height;
//   }

//   getWeight() {
//     return this._weight;
//   }

// // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
//   get age() {
//     return this._age;
//   }

// // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
//   set age(newValue: number) {
//     if (newValue >= 0 && newValue < 200) {
//       this._age = newValue;
//     }
//   }

//   birthday() {
//     this._age += 1;
//   }

// }

// const p1 = new Person('Maria', 171, 58, 19);
// const p2 = new Person('João', 175, 66, 18);

class Student {
  private _name: string;
  private _matricula: string;
  private _provas: number[];
  private _trabalhos: number[];

  constructor(name: string, matricula: string) {
    this._name = name;
    this._matricula = matricula;
    this._provas = [];
    this._trabalhos = [];
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this.name = value
  }

  get matricula(): string {
    return this._matricula
  }

  set matricula(value: string) {
    this._matricula = value
  }

  get notasProva (): number[] {
    return this._provas
  }

  set notasProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._provas = value
  }

  get notasTrabalhos (): number[] {
    return this._trabalhos
  }

  set notasTrabalhos(value: number[]) {
    if ( value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    this._trabalhos = value
  }
  somarNotas(): number {
    return [...this._provas, ...this._trabalhos].reduce((soma, nota) => soma + nota)
  }

  mediaNotas(): number {
    return [...this._provas, ...this._trabalhos].reduce((soma, nota) => soma + nota) / 2
  }
}
const newStudent = new Student('Julia', '123456')

newStudent.notasProva = [10, 9, 8, 7];
newStudent.notasTrabalhos = [9, 8];
console.log(newStudent.somarNotas());
console.log(newStudent.mediaNotas());


class Cliente {
  private _nome: string;
  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string) {
    this._nome = value
  }
}

class Items {
  private _pedido: string;
  private _preco: number;

  constructor(pedido: string, preco: number) {
    this._pedido = pedido;
    this._preco = preco;
  }

  get pedido():string {
    return this._pedido;
  }

  set pedido(value: string) {
    this._pedido = value
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    this.preco = value
  }
}

class Order {
  private _cliente: Cliente;
  private _items: Items[] = [];
  private _pagamento: string;
  private _desconto: number = 0

  constructor(cliente: Cliente, items: Items[], pagamentos: string, desconto: number) {
    this._cliente = cliente;
    this.items = items;
    this._pagamento = pagamentos;
    this.desconto = desconto;
  }


  get client(): Cliente { 
    return this._cliente
  }

  set client(value: Cliente) {
    this._cliente = value;
  }

  get items(): Items[] {
    return this._items;
  }

  set items(value: Items[]) {
    this._items = value;
  }

  get pagamentos(): string {
    return this._pagamento;
  }

  set pagamentos(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    this._desconto = value;
  }

  total(): number {
    return this.items.reduce((total,i) => (total += i.preco), 0)
  }

  totalDesconto(): number {
    return this.total() * (1 - this.desconto);
  }
}

const newCliente = new Cliente('Pedro');

const sandwiche = new Items('Sandwiche Natural', 5.00);
const juice = new Items('Suco de Abacaxí', 5.00);
const dessert = new Items('Gelatina de Uva', 2.50);

const order = new Order(newCliente, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.total());
console.log('Valor com desconto: ', order.totalDesconto());