let multi;
let multiArray = [];
let iArray = [];
let kArray = [];
for (i=100; i<1000; i++){
    iArray.push(i);
    for (k=100; k<1000; k++){
        kArray.push(k);
        multi = i * k;
        let strMulti = String(multi);
        if (multi >= 100000) {
            if (strMulti[0] === strMulti[5]) {
                if (strMulti[1] === strMulti[4]) {
                    if (strMulti[2]=== strMulti[3]) {
                        multiArray.push(multi);
                    }
                }
            }
        }
    }
}
console.log(iArray[iArray.length - 1], kArray[kArray.length - 1], multiArray[multiArray.length - 1])