let concurso = "lista"
switch (concurso) {
    case "aprovado":
        console.log("Parabens, voce foi aprovado!");
        break;
    
    case "reprovado":
        console.log("Voce e Burro nao passou !");
        break;

    case "lista":
        console.log("voce esta na lista de espera!");
        break;

    default:
        console.log("nao se aplica");
}