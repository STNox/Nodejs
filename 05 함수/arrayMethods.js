// Array 생성
let cars = ["Saab", "Volvo", "BMW"];
let persons = new Array('John,', 'Mary');
console.log(cars, persons);

console.log(cars.length, persons.length);
cars.sort(); // 알파벳 순으로 정렬
console.log(cars);

// 맨 마지막 element
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);

// array의 요소를 반복문으로 삽입
let html = '';
html += '<ul>\n';
for (let fruit of fruits) {
    html += '\t<li>' + fruit + '</li>\n';
}
html += '</ul>\n';
console.log(html);

// element 추가
fruits[fruits.length] = 'Cherry';
console.log(fruits.join('-')); // string으로 변환(-로 연결)

let popItem = fruits.pop(); // 맨 끝 element 제거
console.log(popItem, fruits);

let shiftItem = fruits.shift(); // 맨 앞 element 제거
console.log(shiftItem, fruits);

fruits.unshift('Lemon'); // 맨 앞에 element 추가
console.log(fruits);

delete fruits[0]; // element를 undefined로 
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
let spliceItem = fruits.splice(2, 1);
console.log(spliceItem, fruits);

console.log(cars.concat(fruits)); // arrray 합치기

fruits = ["Banana", "Orange", "Apple", "Mango"];
let citrus = fruits.slice(1, 3); // fruits[1, 3] 슬라이스
console.log(citrus);

console.log(fruits.toString());

fruits.forEach(function(value, index) {
    console.log(index, value)
});
