let array = [1, 2, 3, 4, 5];

for (let i in array) {
    console.log(i, '-', array[i]);
}

for (let element of array) { // for item in list: -> 파이썬 방식
    console.log(element);
}