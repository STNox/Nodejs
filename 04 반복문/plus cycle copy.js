const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.setPrompt('0이상 99이하 정수 입력> ');
rl.prompt();
rl.on('line', function(buf){
    let num = parseInt(buf);
    let num1
    let num2
    let sum
    let sum1
    let newNum
    let cycle = 0;
    while (true) {
        num1 = parseInt(num/10);
        num2 = num%10;
        sum = num1+num2;
        sum1 = sum%10;
        newNum = num2*10+sum1
        cycle++
        if (newNum === num) {
            break;
        }
    }
    rl.close();
    console.log(cycle);
});