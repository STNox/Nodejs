let today = new Date(2020, 9, 23); /* console.log(today.getTime()); // 1970년 기준 경과한 ms 단위의 시간 */

let ksatDate = new Date(2020, 12, 3);

let diff = ksatDate.getTime() - today.getTime();
let dDay = diff / (1000 * 60 * 60 * 24);
console.log(`오늘은 수능 D-${dDay}`);
