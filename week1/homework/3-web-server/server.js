var http = require('http');
var fs = require('fs');

//create a server
let server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/script.js') {
        fs.readFile('script.js', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/JavaScript', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/style.css') {
        fs.readFile('style.css', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css', 'Content-Length': data.length });
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000);