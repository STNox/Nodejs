// String Length: 속성이기 때문에 괄호가 붙지 않는다.

let hello = '안녕하세요?';
console.log(hello.length);

// String 내에서 문자열을 찾을 때

console.log(hello.indexOf('하'));
console.log(hello.indexOf('한')); // 존재하지 않는 문자열을 찾으면 -1로 출력 (문자열의 유무 판단 가능)

let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate");
console.log(pos);

console.log(str.search('locate'));

// 문자열의 일부분을 추출

let str2 = "apple, banana, kiwi"
let res = str2.slice(7, 13); // banana
console.log(res);
console.log(str2.slice(-4)); // kiwi

console.log(str2.substr(7, 6)); // substr(시작 인덱스, 개수)

// 문자열을 대체

let newStr = str2.replace(',', ':'); // 맨 처음 것만 대체함
console.log(newStr);
newStr = str2.replace(/,/g, ':'); // 모두 수정. string 중에 슬래쉬로 감싸져 있는 것: 정규표현식
console.log(newStr);

// 공백 제거

let str3 = "          Hello World!         ";
console.log(str3);
console.log(str3.trim());

// 문자 추출
console.log(hello.charAt(2), hello[2]);

// 문자열을 Array로 변경
let txt = "a, b, c, d, e";
console.log(txt.split(','));