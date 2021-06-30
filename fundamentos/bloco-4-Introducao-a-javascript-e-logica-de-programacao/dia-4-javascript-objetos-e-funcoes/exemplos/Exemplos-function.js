//Exercicio 1

function adicao (a, b){
    return a + b;
}

function subtracao (a, b) {
    return a - b;
}

function multiplicacao (a, b) {
    return a * b;
}

function divisao (a, b) {
    return a / b;
}

function modulo (a, b) {
    return a % b;
}

//Exercicio 2

function maiorDeDois (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//Exercicio 3 

function maiorDeTres (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

//Exercicio 4

function positivoNegativo (valor) {
    if (valor > 0) {
       return "Positive";
    } else if (valor < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
positivoNegativo(10);

//Exercicio 5

function anguloTriangulo (angulo1, angulo2, angulo3) {     
    let soma = angulo1 + angulo2 + angulo3;
    if (soma === 180){
        return "true";
    } else if ( angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && soma !== 180) {
        return "false";
    } else {
        return "Erro";
    }
}
anguloTriangulo (50, 60, 70);

//Exercicio 6

function movimentoDaPeca (peca) {
    switch (peca.toLocaleLowerCase()) {
        case "rei":
            return "O rei pode mover-se em todas as direções horizontal, vertical e diagonal) somente uma casa de cada vez.";
            break;
        
        case "rainha":
            return "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
            break;
    
        case "bispo":
            return "O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
            break;
    
        case "cavalo":
            return "O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.";
            break;
    
        case "torre":
            return "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
            break;
    
        case "peao":
            return "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.";
            break;
            
            default: 
            return "Erro";
    }
     
}

movimentoDaPeca("caVAlo");

//Exercicio 7

function converterNotaLetra (nota) {
    if (nota >= 90 && nota < 100) {
        nota = "A";
   } else if (nota >= 80 && nota < 100) {
       nota = "B";
   } else if (nota >= 70 && nota < 100) {
       nota = "C";
   } else if (nota >= 60 && nota < 100) {
       nota = "D"
   } else if (nota >= 50 && nota < 100) {
       nota = "E"; 
   } else if (nota < 50) {
       nota = "F";
   } else {
       nota = "Erro"
   }
   
   return console.log(nota);
}
 converterNotaLetra(10);


 //Exercicio 8 

function numeroPar (a, b, c,) {
    if (a % 2 == 0 || b % 2 == 0 ||c % 2 == 0) {
        return "true";
    } else {
        return "false";
    }
}
let temPar = numeroPar(12, 14, 25);
console.log(temPar);

//Exercicio 9 

function numeroImpar (a, b, c,) {
    if (a % 2 != 0 || b % 2 != 0 ||c % 2 != 0) {
        return "true";
    } else {
        return "false";
    }
}
let temImpar = numeroImpar (5, 6, 9);
console.log(temImpar);

//Exercicio 10

function lucroSobrevalor (valorCusto, valorVenda, vendas) {
    const porcentagemImposto = 0.20;
    if (valorCusto == 0 || valorVenda == 0){
       return "Erro";
    } else {
        let imposto = valorCusto * porcentagemImposto;
        let custoTotal = valorCusto + imposto;
        let lucro = valorVenda - custoTotal;
       return lucro * vendas;
    }
}
let lucros = lucroSobrevalor(10, 20, 1000);
console.log(lucros);


//Exercicio 11 

function calcularIr (salarioBruto) {
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
   } else {
        ir = 0;
    } 
   
   let salarioLiquido = salario - ir; 
   return salarioLiquido;
}

let Salario = calcularIr(8000);
console.log(salario);


