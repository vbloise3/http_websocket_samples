"use strict";
/**
 * Created by vincebloise on 1/15/17.
 */
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!\n');
});
var port = 8000;
server.listen(port);
console.log('Listening on http://localhost:' + port);
