const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
    fs.readFile('view/02 any.html', 'utf8', (error, html) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(html);
    });
});

server.listen(3000);