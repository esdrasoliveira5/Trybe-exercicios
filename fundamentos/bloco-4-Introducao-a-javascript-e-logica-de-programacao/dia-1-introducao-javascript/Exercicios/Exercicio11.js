let salarioBruto=3000;

 if ( salarioBruto >= 5189.82 ){
     valorInss = 570.88;
 } else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    valorInss = salarioBruto * 0.11;
 } else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
    valorInss = salarioBruto * 0.09;
 } else {
    valorInss = salarioBruto * 0.08;
 }
salario = salarioBruto - valorInss;

if (salario >= 4664.68) {
    aliquotaIr = salario * 27.5 / 100;
    ir = aliquotaIr - 869.36
 } else if (salario >= 3751.06 && salario < 4664.68) {
    aliquotaIr = salario * 0.225;
    ir = aliquotaIr - 636.13;
 } else if (salario >= 2826.66 && salario < 3751.05) {
    aliquotaIr = salario * 0.15;
    ir = aliquotaIr - 354.80;
} else if (salario >= 1903.99 && salario < 2826.65) {
    aliquotaIr = salario * 0.075;
    ir = aliquotaIr -142.80;
// outra forma de fazer mas eu nao consegui entender//
//} else if (salario >= 1903.99 && salario < 2826.65) { 
//    salarioLiquido = salario - (salario * 0.075) - 142.80
} else {
     ir = 0;
 } 

let salarioLiquido = salario - ir; 
 console.log(salarioLiquido);
