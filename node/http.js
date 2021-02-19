var http = require('http'); // Import Node.js core module

const port = 3000;

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<h1>Hello world!</h1>');

        res.end();
    }
    else res.end('Invalid Request!');

});

server.listen(port);

console.log(`Node.js web server at port http://localhost:${port} is running..`)
