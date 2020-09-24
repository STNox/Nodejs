let numberFromLiteral = 273; // 기본 자료형
let numberFromConstructor = new Number(273); // 객체

console.log(numberFromLiteral, numberFromConstructor);

let number = 273.12345;
console.log(number.toExponential());
console.log(number.toFixed(2));
console.log(number.toPrecision(6)); // 유효자릿수가 6자리

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); // 2의 53제곱 - 1
console.log(Number.MIN_SAFE_INTEGER); // -(2의 53제곱)

console.log(Math.pow(2, 53)-1);