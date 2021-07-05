
function isPair(valueA, valueB, valueC) {
    if (valueA % 2 == 0 || valueB % 2 == 0 ||valueC % 2 == 0) {
        return "true";
    } else {
        return "false";
    }
}

console.log(isPair(3, 6, 8));

