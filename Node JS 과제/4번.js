let numbers = {0: 0, 1: 0,2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
for (let i=1; i<=20; i++){
    let getNum =i;
    for (let k=0; k<10; k++) {
        if (getNum % 10 === k) {
            numbers[k] += 1;
        }
        if (parseInt(getNum / 10) === k) {
            numbers[k] += 1;
        }
        if (parseInt(getNum / 100) === k) {
            numbers[k] += 1;
        }
        if (parseInt(getNum / 1000) === k) {
            numbers[k] += 1;
        }
    }
}
console.log(numbers);