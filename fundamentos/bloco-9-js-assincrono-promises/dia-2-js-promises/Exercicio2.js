const fetchPromise  = () => {
  const myPromise = new Promise((resolve, reject) => {
    let array = [];
    for(let i =  1; i <= 10; i += 1) {
     array.push(Math.floor(Math.random() * 50) + 1)
    }
    console.log(array);
  })
}
fetchPromise();