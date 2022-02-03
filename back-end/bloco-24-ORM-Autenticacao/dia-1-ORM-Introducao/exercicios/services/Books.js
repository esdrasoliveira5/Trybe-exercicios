const { Books } = require('../models');

const getAll = async () => {
  try {
    const allBooks = await Books.findAll();
    return {
      status: 200,
      response: allBooks,
    }
  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      response: { message: "Algo deu Errado"}
    }
  }
};

const getById = async (id) => {
  try {
    const idBooks = await Books.findByPk(id);

    if(!idBooks) return { status: 404, response: { message: "Livro nao encontrado"} };

    return { status: 200, response: idBooks };
  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      response: { message: "Algo deu Errado"}
    }
  }
};

const createBook = async (title, author, pageQuantity) => {
  try {
    if(!title) return { status: 400, response: { message: "O titulo nao pode ser vazio"} };
    
    if(!author) return { status: 400, response: { message: "O autor nao pode ser vazio"} };
    
    if(!pageQuantity) return { status: 400, response: { message: "As paginas nao pode ser vazio"} };

    await Books.create({title, author, pageQuantity});

    return { status: 200, response: { message: "deu certo"} };

  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      response: { message: "Algo deu Errado"}
    }
  }
};

const updateBook = async (id, title, author, pageQuantity) => {
  try {
    if(!title) return { status: 400, response: { message: "O titulo nao pode ser vazio"} };
    
    if(!author) return { status: 400, response: { message: "O autor nao pode ser vazio"} };
    
    if(!pageQuantity) return { status: 400, response: { message: "As paginas nao pode ser vazio"} };

    await Books.update({title, author, pageQuantity}, { where: { id } });

    return { status: 200, response: { message: "deu certo"} };

  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      response: { message: "Algo deu Errado"}
    }
  }
};

const deleteBook = async (id) => {
  try {

    if(!id) return { status: 404, response: { message: "Livro nao encontrado"} };

    await Books.destroy({ where: { id } });

    return { status: 200, response: { message: "deu certo" } };

  } catch (error) {
    console.log(error.message);
    return {
      status: 400,
      response: { message: "Algo deu Errado"}
    }
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}