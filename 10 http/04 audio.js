const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
    fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
        response.writeHead(200, {'Content-Type': 'audio/mp3'});
        response.end(audio);
    });
});

server.listen(3000);