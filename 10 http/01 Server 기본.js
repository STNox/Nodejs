const http = require('http');
const view = require('./view/01 first');

let server = http.createServer(function(request, response) {
    let html = view.first();
    response.writeHead(200,                   // Status Code, OK
        {'Content-Type': 'text/html'});       // 생략 가능
    response.end(html);
});

server.listen(3000);