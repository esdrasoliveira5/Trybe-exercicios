//Criar Algoritimos 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
//Declarar o Array numbers
//Criar um loop que percorra o array 
// imprimir cada conteudo do array

//Exercicio 1
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Exercicio 2
//Declarar o Array numbers
//Criar um array vazio a onde colocar a soma
// Criar um loop que percorra o array
// Incrementar a variavel com o valor de cada loop
//Imprimir a variavel com a soma

//Exercicio 2
let soma = 0
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);

//Exercicio 3
//Criar uma variavel vazia pra armazenar a soma
//Criar uma variavel pra armazenar a media 
//Criar um loop pra percorrer a variavel
//incrementar a variavel soma com a somatoria dos elementos da variavel numero 
//Dividir a variavel soma pelo numero de elementos da variavel numbers e armazenar na variavel media
// imprimir a variavel media
let soma = 0;
let mediaA = 0;
for (let index = 0; index <numbers.length; index +=1) {
    soma += numbers[index];
    mediaA =  soma / numbers.length;
}
console.log(mediaA);



//Exercicio 4
//Criar uma variavel vazia pra armazenar a soma
//Criar uma variavel pra armazenar a media 
//Criar um loop pra percorrer a variavel
//incrementar a variavel soma com a somatoria dos elementos da variavel numero 
//Dividir a variavel soma pelo numero de elementos da variavel numbers e armazenar na variavel media
//Criar um if pra verificar se a variavel media e maior que 20
// se for maior que 20 imprimir "valor maior que 20"
// se for menor que 20 "imprimir valor menor que 20"

let soma = 0;
let mediaA = 0;
for (let index = 0; index <numbers.length; index +=1) {
    soma += numbers[index];
   mediaA =  soma / numbers.length;
}
if (mediaA > 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

//Exercicio 5
//Criar um array pra armazenar o maior valor com valor de 0
//Criar um for pra percorrer a variavel numbers
//Criar um if pra verificar se cada numero do loop e maior que 0 da variavel maior
// Se for maior sobreescrever o valor da variavel maior
// imprimir o valor da variavel maior 

let maior = 0;
for (let index = 1; index <numbers.length; index +=1) {
    if (numbers[index] >= maior) {
        maior = numbers[index];
    } 
}
console.log(maior);

//Exercicio 6
//Criar um Array pra armazenar os valores impares;
//Criar um for pra percorrer o array numbers;
//Criar um if pra verificar se o numero e impar;
//Se o numero for impar armazenar na variavel
//Criar outro if pra verificar se existe conteudo na variavel com os numeros impars
//se existir imprimir a quantidade de valores;
//se nao existir imprimir "nenhum valor impar encontrado"

let impar= [];
for (let index = 0; index <numbers.length; index +=1) {
    if (numbers[index] % 2 != 0) {
        impar.push(numbers[index]);
    }
}
if (impar.length > 0){
    console.log(impar.length);
} else {
    console.log("Nenhum valor impar encontrado");
}

//Exercicio 7
//Criar uma variavel pra armazenar o menor valor,  essa variavel vai ter o primeiro numero do array como conteudo;
//Criar um for pra percorrer o array;
//Criar um if pra verificar se conteudo da variavel e menor que cada loop do arra;
//Se for menor sobrescrever o conteudo da variavel com o valor do loop;
//imprimir o conteudo da variavel com o menor valor; 

let menor = numbers[0];
for (let index = 1; index <numbers.length; index +=1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}  
console.log(menor);

//Exercicio 8
//Criar um array vazio pra colocar os numeros;
//Criar um for pra percorrer o array;
//colocar cada loop do index no array vazio;
//imprimir o conteudo do array;

let a = [1];
for (let index = 1; index <= 25; index += 1) {
   a.push(a += 1);
}
console.log(a);
 
//Exercicio 9;
//criar um array vazio pra colocar o numeros
//criar um for pra percorrer o array;
//colocar cada loop do index no array vazio;
//criar um for pra percorrer o array vazio;
//imprimir a divisao de cada item por 2 

let a = [];
for (let index = 1; index <= 25; index += 1) {
    a.push(index);
}
for (index1 = 0; index1 < a.length; index1 += 1) {
    console.log(a[index1] / 2);
}

 
