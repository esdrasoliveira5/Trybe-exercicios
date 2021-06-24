let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [20,26,30];

//Exercicio 1
//for (let index = 0; index < numbers.length; index += 1) {
//    console.log(numbers[index]);
//}

//Exercicio 2
//let soma = 0
//for (let index = 0; index < numbers.length; index += 1) {
//    soma += numbers[index];
//}
//console.log(soma);

//Exercicio 3
//let soma = 0;
//let mediaA = 0;
//for (let index = 0; index <numbers.length; index +=1) {
//    soma += numbers[index];
//    mediaA =  soma / numbers.length;
//}
//console.log(mediaA);

//Exercicio 4
//let soma = 0;
//let mediaA = 0;
//for (let index = 0; index <numbers.length; index +=1) {
//    soma += numbers[index];
//    mediaA =  soma / numbers.length;
//}
//if (mediaA > 20){
//    console.log("Valor maior que 20");
//} else {
//    console.log("Valor menor");
//}

//Exercicio 5
for (let index = 0; index <numbers.length; index +=1) {
    


//Exercicio 6
let impar= [];
let par = [];
for (let index = 0; index <numbers.length; index +=1) {
    if (numbers[index] % 2 != 0) {
        impar.push(numbers[index]);
    } else {
        par.push(numbers[index]);
    }
}
if (impar.length > 0){
    console.log(impar.length);
} else {
    console.log("Nenhum valor impar encontrado");
}




