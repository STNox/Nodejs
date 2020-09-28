const http = require('http');
const url = require('url');
const fs = require('fs');

let server = http.createServer((req, res) => {
    let method = req.method;                                          // pathname 뿐만 아니라 method를 활용해 경로 구분
    if (method === 'GET') {                                           // 로그인 form 출력
        fs.readFile('view/03 form.html', 'utf8', (error, html) => {
            res.end(html);
        });
    } else if (method === 'POST') {                                   // 로그인 정보 입력 -> 처리 -> 로그인 완료 화면 출력
        res.end('<h1>Received Form Data</h1>');
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

// 로그인 화면 주소를 localhost:3000/login으로 설정하고 action을 /login으로 똑같이 줘도 get/post 방식 차이로 문제 없다.