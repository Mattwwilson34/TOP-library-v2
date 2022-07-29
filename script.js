const libraryFactory = () => {
  //
  // Create empty library array
  let _lib = [];

  // Add book object to library array
  const addBook = (bookObject) => {
    _lib.push(bookObject);
  };

  //
  return {
    // Getters
    getLib() {
      return _lib;
    },
    // Methods
    addBook,
  };
};

module.exports = libraryFactory;
