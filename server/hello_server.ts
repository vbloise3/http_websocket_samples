/**
 * Created by vincebloise on 1/15/17.
 */
import * as http from 'http';

const server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');
});

const port = 3000;

server.listen(port);
console.log('Listening on http://localhost:' + port);