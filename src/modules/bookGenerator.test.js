const generateBooks = require('./generate-books');

describe('Book generator', () => {
  it('returns an array of appropriate length', () => {
    const books = generateBooks(5);
    expect(books).toBeInstanceOf(Array);
    expect(books.length).toBe(5);
  });
});
