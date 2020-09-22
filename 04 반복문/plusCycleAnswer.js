const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.setPrompt('0이상 99이하 정수 입력> ');
rl.prompt();
rl.on('line', function(buf){
    let orgNum = (buf.length > 1) ? buf : '0' +buf[0];  // 문자열로 받는 것이 편하다.
    let num = orgNum;
    let cycle = 0;
    while (true) {
        let sum = parseInt(num[0]) + parseInt(num[1]);
        let n_num = num[1] + sum % 10;
        cycle++
        console.log(num, n_num, cycle);
        if (orgNum === n_num)
            break;
        if (cycle > 100)
            break;
        num = n_num
    }
    rl.close();
});