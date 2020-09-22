// 익명(Anonymous) 함수

let fn = function() {
    console.log('익명 함수를 변수 fn이 참조');
}

fn(); // 함수 호출
console.log(fn);

// 선언적 함수

function funcName() {
    console.log('함수 이름을 갖는 함수');
}

funcName();
console.log(funcName);

// 화살표 함수

let arrowFunc = () => {
    console.log('화살표 함수');
}

arrowFunc();
console.log(arrowFunc);

let power = x => { // argument 하나일 땐 괄호 없어도 됨.
    return x*x;
}
// let power = x => x*x 이런 형식도 가능(중괄호, return 생략)
console.log(power(10), power);
