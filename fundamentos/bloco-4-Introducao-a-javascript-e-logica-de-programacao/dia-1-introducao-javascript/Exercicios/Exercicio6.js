let peca = "Cavalo";

switch (peca) {
    case "Rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    
    case "Rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;

    case "Bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;

    case "Cavalo":
        console.log("O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;

    case "Torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "Peao":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.");
        break;
        
        default: 
        console.log("Erro");
}
 