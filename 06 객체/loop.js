let persons = [
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 17}
]

/* for (let item of person) { // 객체는 for, of 사용 불가
    console.log(item);
} */

for (let person of persons) {
    console.log(person.name, person.gender, person.age);
}

console.log(persons[0])
console.log(persons[0].name) // key에 대한 value 출력