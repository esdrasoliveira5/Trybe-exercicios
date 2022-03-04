"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weekDays;
(function (weekDays) {
    weekDays[weekDays["monday"] = 1] = "monday";
    weekDays[weekDays["tuesday"] = 2] = "tuesday";
    weekDays[weekDays["wednesday"] = 3] = "wednesday";
    weekDays[weekDays["thursday"] = 4] = "thursday";
    weekDays[weekDays["friday"] = 5] = "friday";
    weekDays[weekDays["saturday"] = 6] = "saturday";
    weekDays[weekDays["sunday"] = 7] = "sunday";
})(weekDays || (weekDays = {}));
console.log(weekDays.tuesday);
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["red"] = "vermelho";
    rainbowColors["orange"] = "laranja";
    rainbowColors["yellow"] = "amarelo";
    rainbowColors["green"] = "verde";
    rainbowColors["blue"] = "azul";
    rainbowColors["indigo"] = "indigo";
    rainbowColors["violet"] = "violeta";
})(rainbowColors || (rainbowColors = {}));
console.log(rainbowColors.red);
console.log(rainbowColors['indigo']);
var actions;
(function (actions) {
    actions[actions["salvar"] = 1] = "salvar";
    actions[actions["imprimir"] = 2] = "imprimir";
    actions[actions["abrir"] = 3] = "abrir";
    actions[actions["visualizar"] = 4] = "visualizar";
    actions[actions["fechar"] = 5] = "fechar";
})(actions || (actions = {}));
console.log(actions[5]);
var directions;
(function (directions) {
    directions["north"] = "N";
    directions["east"] = "E";
    directions["weast"] = "W";
    directions["south"] = "S";
})(directions || (directions = {}));
console.log(directions.east);
console.log(directions['north']);
let names = ['Jane', 100];
function printBird(value) {
    console.log(value.feathers);
    console.log(value.head);
    console.log(value.tail);
    console.log(value.wings);
}
printBird({ wings: 2, feathers: 'Azulada', head: 'preto', tail: 'amarela' });
function someNumber(value) {
    return value.x + value.y;
}
const abacate = {
    x: 10,
    y: 10
};
console.log(someNumber(abacate));
function returnIdentidade(rg) {
    return `Seu numero de identidade e: ${rg}`;
}
console.log(returnIdentidade('mg-17-729-231'));
console.log(returnIdentidade(17729231));
function returnNumberOrString(value) {
    return value;
}
console.log(returnNumberOrString({ numero: '10', string: 100 }));
console.log(returnNumberOrString({ numero: 10, string: '100' }));
class Cachorro {
    constructor(patas, cor, raca) {
        this._patas = patas;
        this._cor = cor;
        this._raca = raca;
    }
    partesDeUmCachorro(nome) {
        return `${nome} tem ${this._patas} patas, e cor ${this._cor} e de raca ${this._raca}`;
    }
}
const Cachorro1 = new Cachorro(3, 'branco', 'pincher');
const Cachorro2 = new Cachorro(4, 'preto', 'Pastor Alemao');
console.log(Cachorro1.partesDeUmCachorro('Pequenino'));
console.log(Cachorro2.partesDeUmCachorro('Thor'));
