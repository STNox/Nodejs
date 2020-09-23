let persons = [
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 17}
];

let externalForm = JSON.stringify(persons); // 외부 프로그램으로 보낼 때
console.log(externalForm); 

let p = JSON.parse(externalForm); // 외부 프로그램에서 받을 때
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}
