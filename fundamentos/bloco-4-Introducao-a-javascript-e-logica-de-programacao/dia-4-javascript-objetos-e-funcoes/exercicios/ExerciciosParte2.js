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
function returnMajorNumber (numbers) {
    let major= numbers[0];
    for (index = 0; index < numbers.length; index += 1) {
        if ( numbers[index] >= major) {
            major = index;
        }
    }
    console.log(major);
}
let numbers = [2, 3, 6, 7, 10, 1];
 returnMajorNumber(numbers);

 //Exercicio 3 

 function returnMinorNumber (numbers) {
     let minor = numbers[0];
     for (index = 0; index < numbers.length; index += 1) {
        if (numbers[index] <= minor) {
            minor = index;
        }
    }
    console.log(minor);
 }
 let numbers = [2, 4, 6, 7, 10, 0, -3];
 returnMinorNumber(numbers);

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
 