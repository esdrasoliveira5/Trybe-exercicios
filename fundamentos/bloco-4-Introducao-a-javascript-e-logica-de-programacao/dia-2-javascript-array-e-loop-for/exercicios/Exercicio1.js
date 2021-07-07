
function exercise1(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
        console.log(numbers[index]);
    }
}

function exercise2(numbers) {
    let soma = 0
    for (let index = 0; index < numbers.length; index += 1) {
        soma += numbers[index];
    }
    console.log(soma);
}

function exercise3(numbers) {
    let soma = 0;
    let mediaA = 0;
    for (let index = 0; index <numbers.length; index +=1) {
        soma += numbers[index];
        mediaA =  soma / numbers.length;
    }
    console.log(mediaA);
}

function exercise4(numbers) {
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
}

function exercise5(numbers) {
    let maior = 0;
    for (let index = 1; index <numbers.length; index +=1) {
        if (numbers[index] >= maior) {
            maior = numbers[index];
        } 
    }
    console.log(maior);
}

function exercise6(numbers) {
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
}    

function exercise7(numbers) {
    let menor = numbers[0];
    for (let index = 1; index <numbers.length; index +=1) {
        if (numbers[index] < menor) {
            menor = numbers[index];
        }
    }  
    console.log(menor);
}

function exercise8() {
    let a = [];
    for (let index = 1; index <= 25; index += 1) {
        a.push(index);
    }
    console.log(a);
}
 
function exercise9() {
    let a = [];
    for (let index = 1; index <= 25; index += 1) {
        a.push(index);
    }
    for (index1 = 0; index1 < a.length; index1 += 1) {
        console.log(a[index1] / 2);
    }
}

//exercicios 1 a 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
exercise7(numbers);
//exercicios 8 e 9
exercise9();

 
