



let n = 7;
let symbol = '*';
let space = ' ';
let midOfTriangule = (n + 1) / 2;
let controlLeft = midOfTriangule;
let controlRight = midOfTriangule;

for(lineIndex = 1; lineIndex <= midOfTriangule; lineIndex += 1) {
    let imputLine = '';
    for (columnIndex = 1; columnIndex <= n; columnIndex += 1) {
        if (columnIndex == controlLeft || columnIndex == controlRight || lineIndex == midOfTriangule) {
            imputLine = imputLine + symbol;
        } else {
            imputLine = imputLine + space;
        }
    }
    console.log(imputLine);
    controlLeft -= 1;
    controlRight += 1; 
}