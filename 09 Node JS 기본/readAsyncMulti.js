// 비동기 방식으로 여러 파일 읽기
const fs = require('fs');

// 순서 보장 안 됨
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
    console.log(bufC);
});

// 함수 설정을 하지 않으면 무작위 순서로 출력: 비동기이기 때문

// 순서 보장 방법
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
        fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});
// 콜백 지옥(들여쓰고 들여쓰고 들여쓰고...)