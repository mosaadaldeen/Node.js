var http = require('http');
var fs = require('fs');

//create a server
let server = http.createServer((req, res) => {
    if (req.url === '/') readFile(res, 'index.html', 'text/html');
    if (req.url === '/script.js') readFile(res, 'script.js', 'text/javascript');
    if (req.url === '/style.css') readFile(res, 'style.css', 'text/css');
});

function readFile(res, file, contentType) {
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

server.listen(3000);