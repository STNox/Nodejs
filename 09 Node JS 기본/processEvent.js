// exit 이벤트를 연결
process.on('exit', (code) => {
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:', code);
}); // exit 이벤트는 종료될 때 실행됨

// uncaughtException 이벤트를 연결
process.on('uncaughtException', (error) => {
    console.log('예외가 발생했습니다.');
    console.log('uncaughtException 매개변수:\n', error);
}); // 예외가 발생할 때 실행됨

// 임의의 이벤트를 연결
process.on('message', () => {
    console.log('message event');
});

// 예외를 강제로 발생시킴
error.error.error();

// 동작 순서: error.error.error();로 에러 발생 -> uncaughtException 이벤트 -> 종료되면서 exit 이벤트