const createBook = require('./book');

describe('book factory', () => {
  it('creates book with default values', () => {
    const book = createBook();
    expect(book).toBeInstanceOf(Object);
    expect(book.getTitle().length).toBeGreaterThan(0);
  });
});
