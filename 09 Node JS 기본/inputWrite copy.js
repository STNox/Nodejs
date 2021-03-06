// node this.js filename

const fs = require('fs');
const readline = require('readline');

// filename을 받는 방법
if (process.argv.length < 3){                                                   // node this.js 다음에 파일명이 나오지 않으면 프로세스 종료
    console.log('사용법: node this.js filename [option]');                      // [option]은 option이 없어도 무방하다는 뜻
    process.exit();
}
let filename = process.argv[2]                                                  // node([0]) this.js([1]) filename([2])
// option 설정
let option;
if (process.argv.length === 4) {
    if (process.argv[3] === 'append') 
        option = 'a';
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('> ');
rl.prompt();

let input = '';
rl.on('line', function(buf) {                                                   // 'line'은 새로운 줄로 들어섰을 때 실행
    input += buf + '\n';
    rl.prompt();
}).on('close', function() {                                                     //method chaining: rl.on('close'...)로 다시 쓰지 않고 그대로 이어서 입력
    if (option === 'a') {
        fs.writeFile(filename, input, {flag: 'a'}, error => {
            if (error)
                console.log(error);
        });
    } else {
        fs.writeFile(filename, input, error => {
            if (error)
            console.log(error);
        });
    }  
}); // cmd 창에서 ctrl+d를 눌러 작업 완료