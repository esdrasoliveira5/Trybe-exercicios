function rFact(num) {
  if (num === 0) {
    return 1 
  }else {
    return num * rFact( num - 1 ); 
  }
}

function sFact(num)
{
    let rval=1;
    for (let i = 2; i <= num; i += 1)
        rval = rval * i;
    return rval;
}

console.log(rFact(3));




