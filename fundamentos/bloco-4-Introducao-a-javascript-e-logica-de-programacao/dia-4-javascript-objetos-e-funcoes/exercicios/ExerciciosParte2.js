//Exercicios 1

function verifyPalidromo (palidromo) {
    palidromo = palidromo.toLowerCase();
    let reverse = palidromo.split('').reverse().join('');
    if (palidromo === reverse) {
        return true ;
    } else {
        return false;
    }
}

verifyPalidromo("Arara");

//Exercicio 2
function returnIndiceMajorNumber(numbers) {
    let major= numbers[0];
    for (index = 0; index < numbers.length; index += 1) {
        if ( numbers[index] >= major) {
            major = index;
        }
    }
    console.log(major);
}
let numbers = [2, 3, 6, 7, 10, 1];
 returnIndiceMajorNumber(numbers);

 //Exercicio 3 

 function returnIndiceMinorNumber (numbers) {
     let minor = numbers[0];
     for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] <= minor) {
            minor = index;
        }
    }
    console.log(minor);
 }
 let numbers = [2, 4, 6, 7, 10, 0, -3];
 returnIndiceMinorNumber(numbers);

//Exercicio 4
//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .\
 
let maior = "";
function returnMajorName(lista) {
    for (index = 0; index < lista.length; index +=1) {
        if (lista[index].length >= maior.length ) {
             maior = lista[index];
        }
    }
    console.log(maior);
    
}
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
 returnMajorName(nomes);

 //Exercicio 5
//  Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: ; .
// Valor esperado no retorno da função: 2.

let repeticao = 0; 
function returnMostRepeatedNumber(numbers) {
    for (index = 0; index < numbers.length; index += 1) {
        for (index2 = 0; index2 < numbers.length; index2 += 1 ) {
            if (numbers[index2] == numbers[index]) {
                repeticao += 1
            }
        }
        console.log(repeticao);
        repeticao = 0;
    }
}
let n = [2, 3, 2, 5, 8, 2, 3];
returnMostRepeatedNumber(n);


///Exercicio 6
// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
let numeros = [];
let soma = 0;
function sumNumbers(n) {
    for (index = 0; index <= n; index += 1) {
        numeros.push(index);
        soma += numeros[index];

        
    }
    return (soma);
}

sumNumbers(3);







 