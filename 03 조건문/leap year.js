const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.setPrompt('연도 입력> ');
rl.prompt();
rl.on('line', function(buf){
    let year = parseInt(buf);
    let isLeapYear;
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            isLeapYear = '윤년';
        } else if (year % 400 === 0) {
            isLeapYear = '윤년';
        } else {
            isLeapYear = '윤년이 아님';
        }
    } else {
        isLeapYear = '윤년이 아님';
    }
    console.log(`${year}년은 ${isLeapYear}`);
    rl.close();
});