const createBook = require('./book');

const generateBooks = (numberOfBooks) => {
  const booksArray = [];
  for (let i = 0; i < numberOfBooks; i++) {
    const book = createBook(
      'The pragmatic programmer',
      'Andy Hunt, Dave Thomas',
      198,
      '1998',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod velit, ad vitae dicta corporis quisquam provident aperiam vero facere odit.'
    );
    booksArray.push(book);
  }
  return booksArray;
};

module.exports = generateBooks;
