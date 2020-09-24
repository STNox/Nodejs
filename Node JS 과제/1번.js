// 1번
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.setPrompt('양의 정수 입력> ');
rl.prompt();
rl.on('line', function(buf){
    let num = parseInt(buf);
    let int = num;
    for (i=0; i<num; i++) {
        int += i;
    }
    let pow = int * int;
    let pow2;
    let sum = 0;
    for (i=1; i<=num; i++) {
        pow2 = i*i;
        sum += pow2;
    }
    rl.close();
    console.log(`1에서 ${num}까지의 합의 제곱: ${pow}, 제곱의 합: ${sum}`);
});
