const createFactory = require('./library');

let library;

beforeEach(() => {
  library = createFactory();
});

const MOCK_BOOK = {
  id: 1,
  title: 'The Fellowship of the Ring',
};

describe('Library Factory Functions', () => {
  //
  // Check lib is instance of array
  it('lib is instance of array', () => {
    expect(library.getLib()).toBeInstanceOf(Array);
  });

  // Check book is added to array
  it('adds book to lib', () => {
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

  it('deletes book from lib', () => {
    library.addBook(MOCK_BOOK);
    expect(library.getLib().length).toBe(1);
    library.deleteBook(1);
    expect(library.getLib().length).toBe(0);
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
