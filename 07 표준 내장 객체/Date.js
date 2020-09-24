let date = new Date();
console.log(`현재 시간: ${date}`);

let unixDate = new Date(1600000000000);
console.log(`unixDate 시간: ${unixDate}`);

//let stringDate = new Date('Sun Sep 13 2020 21:26:40');
let stringDate = new Date('2020-09-23 14:50');
console.log(`문자열로 만든 시간: ${stringDate}`);

let elementDate = new Date(2020, 9-1, 23, 14, 50, 0, 0);
console.log(`요소로 만든 시간: ${elementDate}`);