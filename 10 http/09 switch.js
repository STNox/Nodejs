const http = require('http');
const url = require('url');
const view = require('./view/01 first');
const fs = require('fs');

let server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    switch(pathname) {
    case '/':
        let html = view.first();
        response.end(html);
        break;
    case '/image':
        fs.readFile('media/Elvis.png', (error, image) => {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.end(image);
        });
        break;
    case '/audio':
        fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
            response.writeHead(200, {'Content-Type': 'audio/mp3'});
            response.end(audio);
        });
        break;
    case '/favicon.ico':
        fs.readFile('media/steam.png', (error, image) => {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.end(image);
        });
        break;
    default:
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end();
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});