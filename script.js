const libraryFactory = () => {
  //
  // Create empty library array
  const lib = [];

  // Add book object to library array
  const addBook = (bookObject) => {
    lib.push(bookObject);
  };
  //
  return { lib, addBook };
};

module.exports = libraryFactory;
