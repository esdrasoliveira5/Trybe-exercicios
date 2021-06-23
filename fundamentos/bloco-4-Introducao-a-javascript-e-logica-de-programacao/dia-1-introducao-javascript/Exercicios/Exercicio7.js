let nota = 110;
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