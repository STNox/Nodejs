for (let i=2; i<=10000; i++) {
    let divArray = [];
    for (let k=1; k<i; k++) {
        if (i % k === 0) {
            divArray.push(k);
        }
    }
    let sum = 0;
    for (let divisor of divArray) {
        sum += divisor;
    }
    if (i === sum) {
        console.log(i);
        console.log(divArray);
    }
}