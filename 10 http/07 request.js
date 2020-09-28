const http = require('http');
const url = require('url');

let server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);
    let html;
    if (pathname === '/')
        html = '/';
    else if (pathname === '/file')
        html = '/file';
    else
        html = pathname;
    response.end(`<h1>${html}</h1>`);
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});