const libraryFactory = require('./script');

const MOCK_BOOK = {
  title: 'The Fellowship of the Ring',
};

describe('Library Factory Function', () => {
  //
  // Check lib is instance of array
  it('lib is instance of array', () => {
    const library = libraryFactory();
    expect(library.getLib()).toBeInstanceOf(Array);
  });

  // Check book is added to array
  it('book object is added to lib', () => {
    const library = libraryFactory();
    library.addBook(MOCK_BOOK);
    let bookInLibrary = false;

    // Check for book title in library
    library.getLib().forEach((book) => {
      for (const key in book) {
        if (Object.hasOwn(book, key)) {
          const element = book[key];
          if (element === MOCK_BOOK.title) {
            bookInLibrary = true;
          }
        }
      }
    });

    expect(library.getLib().length).toBeGreaterThanOrEqual(1);
    expect(bookInLibrary).toBeTruthy();
  });
});
