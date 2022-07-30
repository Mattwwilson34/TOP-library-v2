const createBook = require('./book');

let book;

beforeEach(() => {
  book = createBook(
    'ultimate',
    'matt wilson',
    299,
    '9/22/2003',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sapiente cupiditate unde? Nulla, molestiae possimus?'
  );
});

describe('book factory', () => {
  it('creates book with default values', () => {
    expect(book).toBeInstanceOf(Object);
    expect(book.getTitle().length).toBeGreaterThan(0);
    expect(book.getRead()).toBeFalsy();
  });

  it('toggle book _read to true/false', () => {
    book.setRead();
    expect(book.getRead()).toBeTruthy();
    book.setRead();
    expect(book.getRead()).toBeFalsy();
  });
});
