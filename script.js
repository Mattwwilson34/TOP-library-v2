const createFactory = () => {
  //
  // Create empty library array
  let _lib = [];

  // Add book object to library array
  const addBook = (bookObject) => {
    _lib.push(bookObject);
  };

  // Empty lib
  const emptyLib = () => {
    _lib.length = 0;
  };

  //
  return {
    // Getters
    getLib() {
      return _lib;
    },
    // Methods
    addBook,
    emptyLib,
  };
};

module.exports = createFactory;
