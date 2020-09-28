const http = require('http');
const qs = require('querystring');
const fs = require('fs');

http.createServer((req, res) => {
    let method = req.method;                                          
    if (method === 'GET') {                                           
        fs.readFile('view/04 form.html', 'utf8', (error, html) => {
            res.end(html);
        });
    } else if (method === 'POST') {     
        let body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function () {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);
            res.end(`<h1>${JSON.stringify(param)}</h1>`);
        })
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});