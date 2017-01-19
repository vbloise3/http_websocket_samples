/**
 * Created by vincebloise on 1/18/17.
 */
import * as express from "express";
import * as path from "path";

const app = express();

app.use('/',             express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number){}
}

const products = [
    new Product(0, "First Product", 24.99),
    new Product(1, "Second Product", 64.99),
    new Product(2, "Third Product", 74.99),
    new Product(3, "dbaa product", 99.99)
];

function getProducts(): Product[] {
    return products;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.html'));
});

app.get('/products', (req, res) => {
    res.json(getProducts());
});

function getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
}

app.get('/products/:id', (req, res) => {
    res.json(getProductById(parseInt(req.params.id)));
});

app.get('/ass-hole', (req, res) => res.send('Fuck you, my fucking ass hole!'));

const server = app.listen(8081, "localhost", () => {
    const {address, port} = server.address();
    console.log('Listening on %s %s', address, port);
});