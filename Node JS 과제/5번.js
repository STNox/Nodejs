let multi;
let multiArray = [];
for (i=100; i<1000; i++){
    for (k=100; k<1000; k++){
        multi = i * k;
        let strMulti = String(multi);
        if (multi >= 100000) {
            if (strMulti[0] === strMulti[5]) {
                if (strMulti[1] === strMulti[4]) {
                    if (strMulti[2]=== strMulti[3]) {
                        multiArray.push(i, k, multi);
                    }
                }
            }
        }
    }
}
console.log(`가장 큰 대칭수: ${multiArray[multiArray.length -1]}, 곱하는 두 수: ${multiArray[multiArray.length -3]}, ${multiArray[multiArray.length -2]}`);