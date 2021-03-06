const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    console.log(pathname, query.id);
    switch(pathname) {
    case '/':
        if (query.id === undefined) {
            fs.readdir('data', function (error, filelist) {
                let list = template.listGen(filelist);
                let content = template.HOME_CONTENTS;
                let control = template.buttonGen();
                let html = view.index('Web 기술', list, content, control);
                res.end(html);
            });
        } else {
            fs.readdir('data', function (error, filelist) {
                let list = template.listGen(filelist);
                let title = query.id;
                let control = template.buttonGen(title);
                let filename = 'data/' + title + '.txt';
                fs.readFile(filename, 'utf8', (error, buffer) => {
                    let html = view.index(title, list, buffer, control);
                    res.end(html);
                });
            });
        } 
        break;
    case '/create':
        fs.readdir('data', function (error, filelist) {       // 입력 폼 제공
            let list = template.listGen(filelist);
            let control = template.buttonGen();
            let content = template.createForm();
            let html = view.index('글 생성', list, content, control);
            res.end(html);
        });
        break;
    case '/create_proc':                                      // 입력 받은 정보 처리
        let body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            let param = qs.parse(body);                       // body는 제목과 내용이 모두 들어가 있음 param.subject와 param.description으로 분리
            // console.log(param.subject, param.description);
            let filepath = 'data/' + param.subject + '.txt';  // param.: template의 name을 찾아 감
            fs.writeFile(filepath, param.description, error => {
                res.writeHead(302, {'Location': `/?id=${param.subject}`});  // redirection
                res.end();
            });
        });
        break;
    default:
        res.writeHead(404);
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});