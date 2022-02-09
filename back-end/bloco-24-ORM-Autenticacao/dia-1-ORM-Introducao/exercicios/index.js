const express = require('express');
const bodyParser = require("body-parser");

const Books = require('./controllers/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', Books.getAll);

app.get('/book/:id', Books.getById);

app.post('/book', Books.createBook);

app.put('/book/:id', Books.updateBook);

app.delete('/book/:id', Books.deleteBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));