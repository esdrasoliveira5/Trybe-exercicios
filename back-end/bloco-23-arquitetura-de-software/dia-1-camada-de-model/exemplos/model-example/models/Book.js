const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
      'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
);
  return books.map(serialize).filter((b) => b.authorId === Number(authorId) );
}

const getByBookId = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize).filter((b) => b.id === Number(id) );
}

const isValidBook = async (title, authorId) => {
  if (!title || title.length < 3) {
    return false;
  }
  const [authors] = await connection.execute(
    'SELECT id FROM model_example.authors WHERE id = ?', [authorId]
  );
  if(!authorId || authors.length === 0) {
    return false;
  }
   return true;
}

const createBook = async (title, authorId) => {
  try {
    connection.execute(
      'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',[title, authorId]
    )
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  isValidBook,
  createBook,
}