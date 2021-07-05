
function highernumber(valueA, valueB, valueC) {
    if (valueA > valueB && valueA > valueC) {
        return valueA;
    } else if (valueB > valueA && valueB > valueC) {
        return valueB;
    } else {
        return valueC;
    }
}
console.log(highernumber(100, 5, 587));
