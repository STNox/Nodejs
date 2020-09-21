const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.setPrompt('정수 입력> ');
rl.prompt();
rl.on('line', function(buf){
    let score = parseInt(buf);
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`성적: ${score}, 학점: ${grade}`);
    rl.close();
});