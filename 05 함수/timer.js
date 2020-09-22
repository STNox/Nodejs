let today = new Date();
console.log(today);

setTimeout(function() {
    console.log('3초 경과');
    today = new Date();
    console.log(today);
}, 3000);

setTimeout(() => {
    clearInterval(si);
}, 5000);

let si = setInterval(() => {
    console.log(new Date())
}, 1000);