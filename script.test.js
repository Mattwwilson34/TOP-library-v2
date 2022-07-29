const createFactory = require('./script');

const MOCK_BOOK = {
  title: 'The Fellowship of the Ring',
};

describe('Library Factory Function', () => {
  //
  // Check lib is instance of array
  it('lib is instance of array', () => {
    const library = createFactory();
    expect(library.getLib()).toBeInstanceOf(Array);
  });

  // Check book is added to array
  it('book object is added to lib', () => {
    const library = createFactory();
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

  // Check that lib is empty
  it('empties lib array', () => {
    const library = createFactory();
    library.addBook(MOCK_BOOK);
    library.emptyLib();

    expect(library.getLib()).toBeInstanceOf(Array);
    expect(library.getLib().length).toBe(0);
  });
});
