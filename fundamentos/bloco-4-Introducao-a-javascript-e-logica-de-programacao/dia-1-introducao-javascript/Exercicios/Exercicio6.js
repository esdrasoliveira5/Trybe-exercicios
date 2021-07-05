
function pieceMovement(piece) {
    switch (piece.toLocaleLowerCase()) {
        case "king":
            return ("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
            break;
        
        case "queen":
            return ("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
            break;
    
        case "bishop":
            return ("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
            break;
    
        case "horse":
            return ("O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
            break;
    
        case "tower":
            return ("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
            break;
    
        case "pawn":
            return ("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.");
            break;
            
            default: 
            return ("Erro");
    }

}
 
console.log(pieceMovement("pawn"));

