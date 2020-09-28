const http = require('http');
const url = require('url');
const view = require('./view/01 first');
const fs = require('fs');

let server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    if (pathname === '/') {
        let html = view.first();
        response.end(html);
    } else if (pathname === '/image') {
        fs.readFile('media/Elvis.png', (error, image) => {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.end(image);
        });
    } else if (pathname === '/audio') {
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
            response.writeHead(200, {'Content-Type': 'audio/mp3'});
            response.end(audio);
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
            response.end();
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});