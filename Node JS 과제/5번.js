let multi;
let multiArray = [];
for (i=100; i<1000; i++){
    for (k=i; k<1000; k++){ // k=i: 연산량을 줄여줌.
        multi = i * k;
        let strMulti = String(multi);
        if (multi >= 100000) {
            if (strMulti[0] === strMulti[5]) {
                if (strMulti[1] === strMulti[4]) {
                    if (strMulti[2]=== strMulti[3]) {
                        multiArray.push(i, k, multi); // array의 어떤 값이 최댓값인지 알 수 없음. 아래처럼 조건 부여 필요.
                    }
                }
            }
        }
    }
}
console.log(`가장 큰 대칭수: ${multiArray[multiArray.length -1]}, 곱하는 두 수: ${multiArray[multiArray.length -3]}, ${multiArray[multiArray.length -2]}`);

function isPalindrome(str) {
    let len = str.length;
    for (let i=0; i<parseInt(len/2); i++) {
        if (str[i] !== str[len - 1 - i])
            return false;
    }
    return true;
}

let maxPal = 0;
let maxX, maxY
for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {
        let product = i * k;
        if (isPalindrome(String(product))) {
            if (product > maxPal) {
                maxPal = product;
                maxX = i;
                maxY = k;
            }

        }
    }
}
console.log(maxX, maxY, maxPal);