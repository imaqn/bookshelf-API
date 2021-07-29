const books = require('./books');

const getBookByReadStatus = (request, h) => {
  const { reading } = request.query;
  if (reading === '1') {
    const readBook = books.filter((item) => item.reading === true).map((book) => {
      const container = {};
      container.id = book.id;
      container.name = book.name;
      container.publisher = book.publisher;
      return container;
    });
    const response = h.response({
      status: 'success',
      data: {
        books: readBook,
      },
    });
    response.code(200);
    return response;
  }
  const unreadBook = books.filter((item) => item.reading === false).map((book) => {
    const container = {};
    container.id = book.id;
    container.name = book.name;
    container.publisher = book.publisher;
    return container;
  });
  const response = h.response({
    status: 'success',
    data: {
      books: unreadBook,
    },
  });
  response.code(200);
  return response;
};

const getBookByFinishStatus = (request, h) => {
  const { finished } = request.query;
  if (finished === '1') {
    const finishedBook = books.filter((item) => item.finished === true).map((book) => {
      const container = {};
      container.id = book.id;
      container.name = book.name;
      container.publisher = book.publisher;
      return container;
    });
    const response = h.response({
      status: 'success',
      data: {
        books: finishedBook,
      },
    });
    response.code(200);
    return response;
  }
  const unfinishedBook = books.filter((item) => item.finished === false).map((book) => {
    const container = {};
    container.id = book.id;
    container.name = book.name;
    container.publisher = book.publisher;
    return container;
  });
  const response = h.response({
    status: 'success',
    data: {
      books: unfinishedBook,
    },
  });
  response.code(200);
  return response;
};

const getBookNameContainWord = (request, h) => {
  const { name } = request.query;
  const bookNameContainWord = books
    .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
    .map((book) => {
      const container = {};
      container.id = book.id;
      container.name = book.name;
      container.publisher = book.publisher;
      return container;
    });
  const response = h.response({
    status: 'success',
    data: {
      books: bookNameContainWord,
    },
  });
  response.code(200);
  return response;
};

module.exports = { getBookByReadStatus, getBookByFinishStatus, getBookNameContainWord };
