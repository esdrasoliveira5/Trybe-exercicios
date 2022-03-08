// class Person {
//   name: string;
//   height: number;
//   weight: number;

//   constructor(n: string, h: number, w: number) {
//     console.log(`Creating person ${n}`);
//     this.name = n;
//     this.height = h;
//     this.weight = w;
//   }

//   sleep() {
//     console.log(`${this.name}: zzzzzzz`);
//   }
// }

// const p1 = new Person('Maria', 171, 58);
// const p2 = new Person('João', 175, 66);
// console.log(p1.name, p1.height, p1.weight);
// console.log(p2.name, p2.height, p2.weight);
// p1.sleep();
// p2.sleep();

// Crie uma classe chamada Tv, com os atributos:
// - brand : marca da TV;
// size : tamanho em polegadas;
// resolution : resolução da tela;
// connections : conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo : conexão atual Este atributo não precisa ser inicializado no construtor .
// Dentro da classe Tv, crie o método turnOn , que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string;
  private _connectedTo: string;

  constructor(
    brand: string, 
    size: number, 
    resolution: string, 
    connections: string,
    _connectedTo: string,
    ) {
      this.brand = brand;
      this.size = size;
      this.resolution = resolution;
      this.connections = connections;
      this._connectedTo = _connectedTo;
    }

    get connectedTo() {
      return this._connectedTo;
    }

    set connectedTo(newValue: string) {
        this._connectedTo = newValue;
    }

    turnOn() {
      console.log(`A tv da marca${this.brand} 
        possui ${this.size} 
        polegadas, 
        e resolucao de ${this.resolution}
        e possui as conexoes ${this.connections}
        `)
    }
}

const tv1 = new Tv('Samsumg', 59, '4k', 'HDMI, VGA', 'um pc gamer monstro!!')

tv1.turnOn();

// Altere a visibilidade dos atributos definidos na classe Tv para private .
// Crie um método getter e um setter para o atributo _connectedTo , da classe Tv.
// O setter deverá verificar se o valor definido está entre as conexões disponíveis ( _connections ) e:
// Em caso positivo, definir este valor para o atributo _connectedTo ;
// Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.