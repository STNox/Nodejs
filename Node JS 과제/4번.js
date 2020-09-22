let numbers = {0: 0, 1: 0,2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
for (let i=1; i<=20; i++){
    let getNum = String(i);
    for (k=0; k<10; k++) {
        if (getNum[-1] === k) {
            numbers[k] += 1;
        }
        if (getNum[-2] === k) {
            numbers[k] += 1;
        }
        if (getNum[-3] === k) {
            numbers[k] += 1;
        }
        if (getNum[-4] === k) {
            numbers[k] += 1;
        }
    }
}
console.log(numbers);