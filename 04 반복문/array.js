let array = [52, 271.4, '아침밥', '점심밥', true, false];
console.log(array.length);
console.log(array);

console.log(array[2], array[3]);

// element 추가
array[6] = 'New item';
console.log(array);
array.push('push');
console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i], typeof(array[i]));
}

// Enhanced for loop
for (let item of array) {
    console.log(item, typeof(item));
}