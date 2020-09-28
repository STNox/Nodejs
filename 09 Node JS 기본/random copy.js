const myModule = require('./module'); // 미리 만든 함수를 불러온다

for (let i=0; i<5; i++) {
    console.log(myModule.area(myModule.randInt(1, 5)));
}