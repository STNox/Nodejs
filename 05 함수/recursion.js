// 재귀적 호출 (Recursive call)

function facto(n) {
    if (n === 0)
        return 1;
    return n * facto(n-1); // 함수가 자기 자신을 호출
}

console.log(facto(5));

function fibo(n) {
    if (n === 0 || n === 1)
        return 1;
    return fibo(n-1) + fibo(n-2); // n으로 하면 최대 call stack size 초과로 뜸
}

for (let i=0; i<10; i++) {
    console.log(`Fibonacci(${i}) = ${fibo(i)}`)
}