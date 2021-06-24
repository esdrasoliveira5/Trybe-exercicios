let angulo1 = -30;
let angulo2 = 45;
let angulo3 = 55;
let soma = angulo1 + angulo2 + angulo3;
if (soma === 180){
    console.log("true");
} else if ( angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && soma !== 180) {
    console.log("false");
} else {
    console.log("Erro");
}
