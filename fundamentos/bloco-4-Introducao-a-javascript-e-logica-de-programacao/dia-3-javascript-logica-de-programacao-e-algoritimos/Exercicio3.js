//Exercicio 3
//Criar a variavel a com o asterisco;
//Criar a variavel b com o espaco;
//Criar a variavel c vazia;
//Criar o loop 
//criar um segundo loop para adicionar espacos
//


//let n = 10;
//let a = "*";
//let b = "";
//for (let i = 0; i < n; i += 1) {
//    b += a;
//    console.log(b);
//}


let n = 5;
let symbol = '*';
let space = ' ';
let imputLine = '';
let imputPosition = n;
for (lineIndex = 0; lineIndex <= n; lineIndex += 1){
    for (columIndex = 0; columIndex < n; columIndex +=1){
        if (columIndex < imputPosition){
            imputLine = imputLine + space;
        } else { 
            imputLine = imputLine + symbol;
        }
    }
    console.log(imputLine);
    imputLine = '';
    imputPosition -= 1;
};


