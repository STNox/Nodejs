let numbers = {0: 0, 1: 0,2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
for (let i=1; i<=1000; i++){
    let num = String(i);
    for (k=0; k<10; k++) {
        if (Number(num.charAt(num.length - 1)) === k) {
            numbers[k] += 1;
        }
        if (Number(num.length)>1 && Number(num.charAt(num.length - 2)) === k) {
            numbers[k] += 1;
        }
        if (Number(num.length)>2 && Number(num.charAt(num.length - 3)) === k) {
            numbers[k] += 1;
        }
        if (Number(num.length)>3 && Number(num.charAt(num.length - 4)) === k) {
            numbers[k] += 1;
        }
    }
}
console.log(numbers);

/* for (let digit of num) {
    numbers[parseInt(digit)]++;
} */