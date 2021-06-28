

let n = 7;
let symbol = '*';
let space = ' ';
let imputLine = '';
let midOfTriangule = (n + 1) / 2;
let controlLeft = midOfTriangule;
let controlRight = midOfTriangule;

for(lineIndex = 0; lineIndex <= midOfTriangule; lineIndex += 1) {
    for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex > controlLeft && columnIndex < controlRight) {
            imputLine = imputLine + symbol;
        } else {
            imputLine = imputLine + space;
        }
    }
    console.log(imputLine);
    imputLine = '';
    controlLeft -= 1;
    controlRight += 1; 
}
