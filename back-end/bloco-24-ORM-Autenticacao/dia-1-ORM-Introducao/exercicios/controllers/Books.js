const Books = require('../services/Books');

const getAll = async (_req, res) => {

  const {status, response} = await Books.getAll();

  res.status(status).json(response);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const {status, response} = await Books.getById(id);

  res.status(status).json(response);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  
  const {status, response} = await Books.createBook(title, author, pageQuantity);

  res.status(status).json(response);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  
  const {status, response} = await Books.updateBook(id, title, author, pageQuantity);

  res.status(status).json(response);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  
  const {status, response} = await Books.deleteBook(id);

  res.status(status).json(response);
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}