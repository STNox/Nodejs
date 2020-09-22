let totalSec = 0;
for (hour=0; hour<24; hour++) {
    for (min=0; min<60; min++) {
        let time = hour + ':' + min;
        if (time.indexOf('3') >= 0){
            totalSec += 60;
        }
    }
}
console.log(totalSec);