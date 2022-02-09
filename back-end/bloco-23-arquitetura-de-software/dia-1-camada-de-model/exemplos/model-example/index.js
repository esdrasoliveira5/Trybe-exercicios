const express = require('express');

const bodyParser = require('body-parser'); 

const Author = require('./models/Author');

const Books = require('./models/Book')

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { id } =req.query;
  try {
    const book = await Books.getByAuthorId(id);

    if (book.length === 0) {
      res.status(400).json({message: 'Author nao encontrado!'})
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error)
  }
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Books.getByBookId(id);
    if (book.length === 0) {
      res.status(404).json({message: 'Not Found'});
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
  }

});


app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  if(!await Books.isValidBook(title, authorId)) {
    res.status(400).json({message: 'Dados inválidos'})
  }
  try {
    await Books.createBook( title, authorId);
    res.status(201).json({message: 'Livro criado com sucesso! '})
  } catch(error) {
    console.error(error);
  }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});