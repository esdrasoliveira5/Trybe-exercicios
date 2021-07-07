
function triangle(angle1, angle2, angle3) {
    let sum = angle1 + angle2 + angle3;
    if (sum === 180){
        return ("true");
    } else if ( angle1 > 0 && angle2 > 0 && angle3 > 0 && sum !== 180) {
        return ("false");
    } else {
        return ("Erro");
    }
}
console.log(triangle(50, 40, -50));
