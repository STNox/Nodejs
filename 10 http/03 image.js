const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
    fs.readFile('media/Elvis.png', (error, image) => {
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.end(image);
    });
});

server.listen(3000);