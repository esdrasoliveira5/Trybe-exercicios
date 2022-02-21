import { type } from "os";

enum weekDays {
  monday =1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}
console.log(weekDays.tuesday);

enum rainbowColors {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  blue = 'azul', 
  indigo = 'indigo', 
  violet = 'violeta'
}

console.log(rainbowColors.red);
console.log(rainbowColors['indigo']);

enum actions {
  salvar = 1,
  imprimir = 2,
  abrir = 3,
  visualizar = 4,
  fechar = 5
}

console.log(actions[5])

enum directions {
  north = 'N',
  east = 'E',
  weast = 'W',
  south = 'S'
}

console.log(directions.east);
console.log(directions['north']);

let names: [string, number] = ['Jane', 100];

type Bird = {
  wings: number,
  feathers: string,
  head: string,
  tail: string
}

function printBird(value: Bird): void {
  console.log(value.feathers);
  console.log(value.head);
  console.log(value.tail);
  console.log(value.wings);
}

printBird({ wings: 2, feathers: 'Azulada', head: 'preto', tail: 'amarela'})

type Soma = {
  x: number,
  y: number,
}

function someNumber( value: Soma): number {
  return value.x + value.y;
}

const abacate = {
  x: 10,
  y: 10
}

console.log(someNumber(abacate));

type Address = {
  numero: number,
  rua: string,
  bairro: string
  cep: number
  cidade: string,
  estado: string,
  pais: string
}

function returnIdentidade(rg: number | string): string {
  return `Seu numero de identidade e: ${rg}`
}

console.log(returnIdentidade('mg-17-729-231'));
console.log(returnIdentidade(17729231));

type NumberOrString = {
  numero: number | string,
  string: number | string,
}

function returnNumberOrString(value: NumberOrString){
  return value;
}

console.log(returnNumberOrString({numero: '10', string: 100}));
console.log(returnNumberOrString({numero: 10, string: '100'}));

interface Cachorro {
  _patas: number;
  _cor: string;
  _raca: string;
  partesDeUmCachorro(nome: string): string;
}


class Cachorro {
  constructor(patas: number, cor: string, raca: string) {
    this._patas = patas;
    this._cor = cor;
    this._raca = raca
  }

  partesDeUmCachorro(nome: string) {
    return `${nome} tem ${this._patas} patas, e cor ${this._cor} e de raca ${this._raca}`
  }
}



const Cachorro1 = new Cachorro(3, 'branco', 'pincher');
const Cachorro2 = new Cachorro(4, 'preto', 'Pastor Alemao');

console.log(Cachorro1.partesDeUmCachorro('Pequenino'));
console.log(Cachorro2.partesDeUmCachorro('Thor'));