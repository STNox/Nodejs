// 처리 순서 확정, 행동의 결과로 변수를 출력하는 것을 넘어 함수로 동작까지 가능

function callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}

callFiveTimes(function() {
    console.log('Function call');
});