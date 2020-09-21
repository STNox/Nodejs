let number = 5;

let isEven = (5 % 2 === 0) ? true : false;
console.log(isEven);

let x = 5, y = 20;

let isDivisor = (y % x === 0) ? true : false;
console.log(isDivisor);

let test; // test는 undefined 상태(false)
test = test ? test : '초기화 1'; // test가 false 값이므로 초기화 1 값이 할당됨
test = test ? test : '초기화 2'; // test에 값이 할당된 상태이므로 할당된 값이 출력
console.log(test);