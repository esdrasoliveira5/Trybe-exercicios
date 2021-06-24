let valorCusto = 7;
let valorVenda = 22;
let porcentagemImposto = 20;
let vendas = 1000;

if (valorCusto == 0 || valorVenda == 0){
    console.log("Erro");
} else {
    let imposto = valorCusto * porcentagemImposto / 100;
    let custoTotal = valorCusto + imposto;
    let lucro = valorVenda - custoTotal;
    console.log(lucro * vendas);
}
