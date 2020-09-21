const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.setPrompt('시:분 입력> ');
rl.prompt();

rl.on('line', function(buf){
    let time = buf.split(':');
    let hour = parseInt(time[0]);
    let minute = parseInt(time[1]);
    let a_hour;
    let a_minute;
    if (hour <= 23) {
        if (minute <= 59) {
            if (minute < 45) {
            a_hour = hour - 1;
            a_minute = minute + 15;
            } else {
                a_hour = hour;
                a_minute = minute - 45;
            }   
        } else {
            a_hour = "Error!";
            a_minute = "Error!";
        }
    } else {
        a_hour = "Error!";
        a_minute = "Error!";
    }
    console.log(`입력 시간: ${hour}:${minute}, 알람 시간: ${a_hour}:${a_minute > 9 ? a_minute: '0' + a_minute}`);
    rl.close();
});