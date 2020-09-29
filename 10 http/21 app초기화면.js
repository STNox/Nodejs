const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');

http.createServer((req, res) => {
    let _url = req.url;
    let pathname = url.parse(_url, true).pathname;
    switch(pathname) {
    case '/':
        fs.readdir('data', function (error, filelist) {
            let list = '';
            for (let file of filelist) {
                let filename = file.substring(0, file.length - 4)
                list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
            }
            let html = view.index(list);
            res.end(html);
        });
        break;
    case '/?id=CSS':
        fs.readFile('data/CSS.txt', 'utf8', (error, content) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
        break;
    default:
        res.writeHead(404, {'Content Type': 'text/html'});
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});