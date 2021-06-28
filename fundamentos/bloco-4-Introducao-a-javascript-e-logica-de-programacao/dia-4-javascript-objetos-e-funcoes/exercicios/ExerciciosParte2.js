//Exercicios 1

function verifyPalidromo (palidromo) {
    let reverse = palidromo.split('').reverse().join('');
    if (palidromo === reverse) {
        return true;
    } else {
        return false;
    }
}

verifyPalidromo("arara");

//Exercicio 2




