let num = 26;
let newNum;
let num1;
let num2;
let sum;
let sum1;
let i = 1;
/* for (let i = 0; i < 4; i++) {
    num1 = parseInt(num/10);
    num2 = num%10;
    sum = num1+num2;
    sum1 = sum%10;
    newNum = num2*10+sum1
    num = newNum;
    console.log(num, i+1);
} */
while ( newNum !== num) {
    num1 = parseInt(num/10);
    num2 = num%10;
    sum = num1+num2;
    sum1 = sum%10;
    newNum = num2*10+sum1
    i++;
}
console.log(num, i);