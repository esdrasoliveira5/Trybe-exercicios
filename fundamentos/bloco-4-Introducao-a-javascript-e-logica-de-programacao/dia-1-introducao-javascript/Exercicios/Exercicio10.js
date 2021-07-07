
function mercProfits(costValue, sellValue) {
    let tax = 0.20;
    let sells = 1000;
    if (costValue == 0 || sellValue == 0) {
        return "Erro";
    } else {
        let taxValue = costValue * tax;
        let costTotal = costValue + taxValue;
        let profit = sellValue - costTotal;
        return profit * sells;
    }
}

console.log(mercProfits(5,10));
