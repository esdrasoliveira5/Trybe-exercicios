function positiveNegative(value) {
    if (value > 0) {
        return "positive";
    } else if (value === 0) {
        return "zero";
    } else {
        return "negative";
    }
}
console.log(positiveNegative(-2));

