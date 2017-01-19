/**
 * Created by vincebloise on 1/17/17.
 */
import * as express from "express";
const app = express();

app.get('/', (req, res) => res.send('Hello from Express'));

app.get('/products', (req, res) => res.send('Got a request for products'));

app.get('/reviews', (req, res) => res.send('Got a request for reviews'));

app.get('/ass-hole', (req, res) => res.send('Fuck you, my fucking ass hole!'));

const server = app.listen(8000, "localhost", () => {

    const {address, port} = server.address();

    console.log('Listening on %s %s', address, port);
});