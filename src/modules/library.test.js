const createLibrary = require('./library');
const createBook = require('./book');

let library;

beforeEach(() => {
  library = createLibrary();
});

const MOCK_BOOK = createBook(
  'The lord of the rings',
  'J.R.R Tolkien',
  2000,
  '1930',
  'Summary',
  false
);

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
      const bookData = book.getBook();
      for (const key in bookData) {
        if (Object.hasOwn(bookData, key)) {
          const element = bookData[key];
          if (element === MOCK_BOOK.getTitle()) {
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
    const bookId = library.getLib()[0].getId();
    expect(library.getLib().length).toBe(1);
    library.deleteBook(bookId);
    expect(library.getLib().length).toBe(0);
  });

  // Check that lib is empty
  it('empties lib array', () => {
    const library = createLibrary();
    library.addBook(MOCK_BOOK);
    library.emptyLib();

    expect(library.getLib()).toBeInstanceOf(Array);
    expect(library.getLib().length).toBe(0);
  });
});
