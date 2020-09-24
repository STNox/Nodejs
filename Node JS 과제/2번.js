// 2번

let a;
let b;
let c;
for (a=1; a<=1000; a++) {
    for (b=1; b<=1000; b++) {
        c = 1000 - a - b;
        if (a*a + b*b === c*c) {
            if (a < b && b < c) {
                if (a + b > c) {
                    console.log(a, b, c);
                    }
                }
            }
            
        }
    }