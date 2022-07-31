const createFactory = () => {
  //
  // Create empty library array
  let _lib = [];

  // Add book object to library array
  const addBook = (bookObject) => {
    _lib.push(bookObject);
  };

  // Delete book
  const deleteBook = (bookId) => {
    //
    // Find book index
    const bookIndex = _lib.findIndex((book) => {
      return book.id === bookId;
    });

    // Remove book from library
    _lib.splice(bookIndex, 1);
  };

  // Empty lib
  const emptyLib = () => {
    _lib.length = 0;
  };

  return {
    // Getters
    getLib() {
      return _lib;
    },
    // Methods
    addBook,
    deleteBook,
    emptyLib,
  };
};

module.exports = createFactory;
